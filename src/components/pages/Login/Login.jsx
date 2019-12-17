import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./login.css";

function Login(props) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`https://blusukan.herokuapp.com/users/login`, user)
      .then(result => {
        localStorage.setItem("token", result.data.token);
        props.history.push("/");
      })
      .catch(error => {
        if (error.response.data) {
          setError(error.response.data);
        } else {
          setError(error.message);
        }
      });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
              value={user.email}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              onChange={handleChange}
              value={user.password}
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            Don't have an account <Link to="/sign-up">Please Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Login);
