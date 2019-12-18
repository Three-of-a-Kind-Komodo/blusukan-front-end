import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Grid, Image, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import "./AddContent.css";

class AddContent extends Component {
  constructor(props) {
    super(props);
    this.state = { contents: [] };
  }
  componentDidMount() {
    axios
      .get("https://blusukan.herokuapp.com/contents")
      .then(response => {
        this.setState({ contents: response.data.result });
        console.log(response.data.result);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }

  // console.log(parseJwt('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'))

  componentWillUnmount() {
    this._isMounted = false;
  }

  getRowData = data => {
    console.log(data);
  };

  render() {
    const { contents } = this.state;
    const userData = this.parseJwt(localStorage.getItem("token"));
    console.log(userData);

    return (
      <div>
        <div className="content-wrapper">
          <Image src="/assets/img/landmarks.jpg" />
          <h2 className="heading">Add Content</h2>
          <h5 className="sub-heading">
            With us you’ll find a perfect destination among hundreds available.
          </h5>
        </div>
        <Grid>
          <h3>List Data ( Username: {userData.user.name})</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Type</th>
                <th>Title</th>
                <th>Content</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              {contents &&
                contents.map((data, index) => (
                  <tr key={index}>
                    <td width={70}>
                      <Image src={data.imageurl} height={64} width={64} />
                    </td>
                    <td width={80} align={"center"}>
                      {/* <i class={() => this.getFaClass(data.type)}></i> */}
                      <i
                        class={
                          data.type === "Landmark"
                            ? "fas fa-map-marked-alt"
                            : data.type === "Culinary"
                            ? "fas fa-mortar-pestle"
                            : "fas fa-bed"
                        }
                      ></i>{" "}
                      {data.type}
                    </td>
                    <td width={150}>{data.title}</td>
                    <td>{data.content.slice(0, 300) + " ..."}</td>
                    <td width={150}>
                      <Button
                        bsStyle="primary"
                        style={{ backgroundColor: "orange" }}
                        onClick={() => this.getRowData(data)}
                      >
                        Edit
                      </Button>
                      <Button
                        bsStyle="primary"
                        style={{ backgroundColor: "red", marginLeft: 10 }}
                        onClick={() => this.getRowData(data)}
                      >
                        Hapus
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Grid>
      </div>
    );
  }
}
export default AddContent;
