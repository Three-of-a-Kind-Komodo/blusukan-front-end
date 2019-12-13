import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Thumbnail, Grid, Col, Image, Button, Row } from "react-bootstrap";
import "../Styles/home.css";

export default class TourPlace extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="place">
            <Thumbnail src="assets/img/places/Monumen Selamat Datang.png" alt="242x200">
              <h3>Monumen Selamat Datang</h3>
              <p>
                Madrid, Barcelona • 9 days Start your Eastern Europe trip from
                Berlin – one of the most attractive European cities. Head out to
                Warsaw – the capital of Poland, where you’ll be able to take a
                guided tour through the city’s places of interests and museums.{" "}
              </p>
              <p>
                <Button bsStyle="primary">More</Button>
              </p>
            </Thumbnail>
          </Col>

          <Col xs={12} sm={4} className="place">
            <Thumbnail src="assets/img/places/Theater Schouwburg Weltevreden.png" alt="242x200">
              <h3>Theater Schouwburg Weltevreden</h3>
              <p>
                England, Scotland, Wales • 13 days Start your Eastern Europe
                trip from Berlin – one of the most attractive European cities.
                Head out to Warsaw – the capital of Poland, where you’ll be able
                to take a guided tour through the city’s places of interests and
                museums.{" "}
              </p>
              <p>
                <Button bsStyle="primary">More</Button>
              </p>
            </Thumbnail>
          </Col>

          <Col xs={12} sm={4} className="place">
            <Thumbnail src="assets/img/places/Monumen Nasional.png" alt="242x200">
              <h3>Monumen Nasional</h3>
              <p>
                Istanbul, Antalya, Ephesus • 8 days Start your Eastern Europe
                trip from Berlin – one of the most attractive European cities.
                Head out to Warsaw – the capital of Poland, where you’ll be able
                to take a guided tour through the city’s places of interests and
                museums.{" "}
              </p>
              <p>
                <Button bsStyle="primary">More</Button>
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    );
  }
}
