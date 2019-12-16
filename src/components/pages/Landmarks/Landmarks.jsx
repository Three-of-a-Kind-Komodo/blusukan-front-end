import React, { Component } from "react";
import { Thumbnail, Grid, Col, Image, Button, Row } from "react-bootstrap";
import "./landmarks.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <Image src="/assets/img/landmarks.jpg" />
          <h2 className="heading">City landmarks</h2>
          <h5 className="sub-heading">
            With us you’ll find a perfect destination among hundreds available.
          </h5>
        </div>
        <Grid>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="place">
              <Thumbnail src="assets/img/places/spain.jpg" alt="242x200">
                <h3>Spain</h3>
                <p>
                  Madrid, Barcelona • 9 days Start your Eastern Europe trip from
                  Berlin – one of the most attractive European cities. Head out
                  to Warsaw – the capital of Poland, where you’ll be able to
                  take a guided tour through the city’s places of interests and
                  museums.{" "}
                </p>
                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </Thumbnail>
            </Col>

            <Col xs={12} sm={3} className="place">
              <Thumbnail src="assets/img/places/england.jpg" alt="242x200">
                <h3>United Kingdom</h3>
                <p>
                  England, Scotland, Wales • 13 days Start your Eastern Europe
                  trip from Berlin – one of the most attractive European cities.
                  Head out to Warsaw – the capital of Poland, where you’ll be
                  able to take a guided tour through the city’s places of
                  interests and museums.{" "}
                </p>
                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </Thumbnail>
            </Col>

            <Col xs={12} sm={3} className="place">
              <Thumbnail src="assets/img/places/turkey.jpg" alt="242x200">
                <h3>Turkey</h3>
                <p>
                  Istanbul, Antalya, Ephesus • 8 days Start your Eastern Europe
                  trip from Berlin – one of the most attractive European cities.
                  Head out to Warsaw – the capital of Poland, where you’ll be
                  able to take a guided tour through the city’s places of
                  interests and museums.{" "}
                </p>
                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </Thumbnail>
            </Col>

            <Col xs={12} sm={3} className="place">
              <Thumbnail src="assets/img/places/croatia.jpg" alt="242x200">
                <h3>Croatia</h3>
                <p>
                  Croatia, Zagreb, Dubrovnik • 11 days Start your Eastern Europe
                  trip from Berlin – one of the most attractive European cities.
                  Head out to Warsaw – the capital of Poland, where you’ll be
                  able to take a guided tour through the city’s places of
                  interests and museums.{" "}
                </p>
                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </Thumbnail>
            </Col>

            <Col xs={12} sm={3} className="place">
              <Thumbnail src="assets/img/places/jordan.jpg" alt="242x200">
                <h3>Jordan</h3>
                <p>
                  Jordan, Petra • 7 days Start your Eastern Europe trip from
                  Berlin – one of the most attractive European cities. Head out
                  to Warsaw – the capital of Poland, where you’ll be able to
                  take a guided tour through the city’s places of interests and
                  museums.{" "}
                </p>
                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </Thumbnail>
            </Col>

            <Col xs={12} sm={3} className="place">
              <Thumbnail src="assets/img/places/morocco.jpg" alt="242x200">
                <h3>Morocco</h3>
                <p>
                  Morocco, Rabat • 12 days Start your Eastern Europe trip from
                  Berlin – one of the most attractive European cities. Head out
                  to Warsaw – the capital of Poland, where you’ll be able to
                  take a guided tour through the city’s places of interests and
                  museums.{" "}
                </p>
                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </Thumbnail>
            </Col>

            <Col xs={12} sm={3} className="place">
              <Thumbnail src="assets/img/places/greece.jpg" alt="242x200">
                <h3>Greece</h3>
                <p>
                  Greece, Athens, Santorini • 10 days Start your Eastern Europe
                  trip from Berlin – one of the most attractive European cities.
                  Head out to Warsaw – the capital of Poland, where you’ll be
                  able to take a guided tour through the city’s places of
                  interests and museums.{" "}
                </p>
                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </Thumbnail>
            </Col>

            <Col xs={12} sm={3} className="place">
              <Thumbnail src="assets/img/places/montenegro.jpg" alt="242x200">
                <h3>Montenegro</h3>
                <p>
                  Montenegro, Bay of Kotor • 14 days Start your Eastern Europe
                  trip from Berlin – one of the most attractive European cities.
                  Head out to Warsaw – the capital of Poland, where you’ll be
                  able to take a guided tour through the city’s places of
                  interests and museums.{" "}
                </p>
                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
