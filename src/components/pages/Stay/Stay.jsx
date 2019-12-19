import React, { Component } from "react";
import { Grid, Image } from "react-bootstrap";
import "./stay.css";
import Stayitems from "./Stayitems";

export default class Stay extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <Image src="/assets/img/stay.jpg" />
          <h2 className="heading">Stay</h2>
          <h5 className="sub-heading">
            With us you’ll find a perfect heaven for you to stay.
          </h5>
        </div>
        <Grid>
          <Stayitems />
        </Grid>
      </div>
    );
  }
}
