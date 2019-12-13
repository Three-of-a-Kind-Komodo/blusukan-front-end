import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Col, Image, Button, Row } from "react-bootstrap";
import TourPlace from "./TourPlace";
import "../Styles/home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Grid>
            <Jumbotron>
              <h2>Enjoy Your Dream City Tours</h2>
              <h3>
                Travel to the any corner of the cities, without going around in
                circles.
              </h3>
              <Link to="/landmarks">
                <Button bsStyle="primary">More</Button>
              </Link>
            </Jumbotron>
          </Grid>
        </div>
        <Grid>
          <div className="banner text-center">
            <h2>The best city tours you can choose</h2>
            <p>
              We are committed to offering city tours info of the highest
              quality, combining our energy and enthusiasm with years of
              experience.
            </p>
          </div>

          <TourPlace />

          <Row className="show-grid text-center">
            <div className="testimonial">
              <h1 className="text-center"> What They Say</h1>
              <h5 className="text-center">
                Our testimonials are the best proof of our high level of service
              </h5>
            </div>

            <Col xs={12} sm={4} className="person-wrapper">
              <Image
                src="/assets/img/testimony/p1.jpg"
                circle
                className="profile-pic"
              />
              <h3>Mari Johnson</h3>
              <p>
                “viverra nam libero justo laoreet sit amet cursus sit amet
                dictum sit amet justo donec enim diam vulputate ut pharetra sit
                amet aliquam id diam maecenas ultricies mi eget mauris.”{" "}
              </p>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
              <Image
                src="/assets/img/testimony/p2.jpg"
                circle
                className="profile-pic"
              />
              <h3>James Anderson</h3>
              <p>
                “viverra nam libero justo laoreet sit amet cursus sit amet
                dictum sit amet justo donec enim diam vulputate ut pharetra sit
                amet aliquam id diam maecenas ultricies mi eget mauris.”
              </p>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
              <Image
                src="/assets/img/testimony/p3.jpg"
                circle
                className="profile-pic"
              />
              <h3>Becka Steward</h3>
              <p>
                “viverra nam libero justo laoreet sit amet cursus sit amet
                dictum sit amet justo donec enim diam vulputate ut pharetra sit
                amet aliquam id diam maecenas ultricies mi eget mauris.”{" "}
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
