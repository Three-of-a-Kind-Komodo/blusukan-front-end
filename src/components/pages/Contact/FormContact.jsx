import React, { Component } from "react";
import { Button, FormControl, FormGroup, Form } from "react-bootstrap";
import nodemailer from "nodemailer";
import axios from "axios";
import "./formcontact.css";

const URI = process.env.REACT_APP_BACKEND_URI;

// const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "3ofakindkomodo@gmail.com",
    pass: "3ofakind"
  }
});

let mailoptions = {
  from: "3ofakindkomodo@gmail.com",
  to: "farisibrahmi@gmail.com",
  subject: "Thank you for contacting us",
  text:
    "we will reach you soon, in the meantime come visit us at www.blusukan.netlify.com"
};

export default class FormContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
  }

  handleChange = event => {
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post(URI + "/contacts", this.state)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Form className="form-element" onSubmit={this.handleSubmit}>
        <FormControl
          id="formControlsText"
          type="text"
          label="Your Name"
          name="name"
          value={this.state.name}
          placeholder="Your Name"
          onChange={this.handleChange}
        />
        <FormControl
          id="formControlsEmail"
          name="email"
          value={this.state.email}
          type="email"
          label="Email address"
          placeholder="Email"
          onChange={this.handleChange}
        />

        <FormGroup controlId="formControlsTextarea">
          <FormControl
            name="message"
            componentClass="textarea"
            value={this.state.message}
            placeholder="Message"
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button bsStyle="primary" type="submit">
          Send Message
        </Button>
      </Form>
    );
  }
}
