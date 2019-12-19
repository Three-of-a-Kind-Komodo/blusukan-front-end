import React, { Component } from "react";
import { Grid, Image } from "react-bootstrap";
import "./culinary.css";
import Culinaryitems from "./Culinaryitems";

export default class Culinary extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <Image src="/assets/img/culinary.jpeg" />
          <h2 className="heading">Culinary</h2>
          <h5 className="sub-heading">
            With us you’ll find a perfect food heaven with extraordinary taste
            that you can't forget forever.
          </h5>
        </div>
        <Grid>
          <Culinaryitems />
        </Grid>
      </div>
    );
  }
}
