import React, { Component } from "react";
import { Grid, Image } from "react-bootstrap";
import "./landmarks.css";
import Landmarkitems from "./Landmarkitems";

export default class Landmarks extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <Image src="/assets/img/landmarks.jpg" className="cover" />
          <h2 className="heading">Landmarks</h2>
          <h5 className="sub-heading">
            With us you’ll find a perfect destination among hundreds available.
          </h5>
        </div>
        <Grid>
          <Landmarkitems />
        </Grid>
      </div>
    );
  }
}
