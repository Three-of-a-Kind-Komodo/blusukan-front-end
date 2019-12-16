import React, { Component } from "react";
import { Button, FormControl, FormGroup, Form } from "react-bootstrap";

import "./formcontact.css";

export default class FormContact extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <Form className="form-element">
        <FormControl
          id="formControlsText"
          type="text"
          label="Your Name"
          placeholder="Your Name"
        />
        <FormControl
          id="formControlsEmail"
          type="email"
          label="Email address"
          placeholder="Email"
        />

        <FormGroup controlId="formControlsTextarea">
          <FormControl componentClass="textarea" placeholder="Message" />
        </FormGroup>
        <Button bsStyle="primary" type="submit">
          Send Message
        </Button>
      </Form>
    );
  }
}
