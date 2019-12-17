import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Col, Image, Button, Row } from "react-bootstrap";

import HomePageCarousel from "./HomepageCarousel";
import SlickCarousel from "./SlickCarousel";
import TourPlace from "./TourPlace";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <div className="header">
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
        </div> */}

        {/* <HomePageCarousel /> */}
        <SlickCarousel />

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
                src="/assets/img/testimony/Haji_senin_bin_kamis.jpg"
                circle
                className="profile-pic"
              />
              <h3>Haji Senin bin Kamis</h3>
              <p>
                “Baru tahu saya kalo di pulau seribu nama pulaunya tidak diurut
                sesuai nomornya, dan masih banyak yang baru saya tahu dari
                website ini”{" "}
              </p>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
              <Image
                src="/assets/img/testimony/Ria_ricis.jpg"
                circle
                className="profile-pic"
              />
              <h3>Ria Ricis</h3>
              <p>
                “Di Blusukan.com saya bisa lebih percaya dengan ulasan para
                local guide yang budiman, saya berharap dengan website ini lebih
                banyak orang yang akan mudah berlibur tanpa khawatir”
              </p>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
              <Image
                src="/assets/img/testimony/Thomas_alva_edison.jpg"
                circle
                className="profile-pic"
              />
              <h3>Bang Tommy</h3>
              <p>“Saya akan kembali ke website ini lagi!” </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
