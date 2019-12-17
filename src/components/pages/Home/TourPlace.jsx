import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import "./home.css";

import TourPlaceItems from "./TourPlaceItems";
export default class TourPlace extends Component {
  render() {
    return (
      <Grid>
        <TourPlaceItems />
      </Grid>
    );
  }
}
