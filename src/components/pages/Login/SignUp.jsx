import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./signup.css";

function SignUp(props) {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = event => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("https://blusukan.herokuapp.com/users/register", newUser)
      .then(result => {
        setResult(result.data.message);

        props.history.push("/login");
      })
      .catch(error => setError(error.response.data.message));
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        {error && <div>{error}</div>}
        <h3>Sign Up</h3>
        <form className="form-login" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="name"
              onChange={handleChange}
              value={newUser.name}
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
              value={newUser.email}
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
              value={newUser.password}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <Link to="/login">sign in?</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default withRouter(SignUp);
