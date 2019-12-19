import React, { Component } from "react";
import { Grid, Col, Image, Row } from "react-bootstrap";

import SlickCarousel from "./SlickCarousel";
import TourPlace from "./TourPlace";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <SlickCarousel />

        <Grid className="mb-standard">
          <div className="banner text-center">
            <h1>The best city tours you can choose</h1>
            <p>
              <em>
                We are committed to offering city tours info of the highest
                quality, combining our energy and enthusiasm with years of
                experience.
              </em>
            </p>
          </div>
          <h2>
            <i class="fas fa-map-marked-alt"></i> Landmark
          </h2>
          <hr />
          <TourPlace contentType={"Landmark"} />

          <h2>
            <i class="fas fa-mortar-pestle"></i> Culinary
          </h2>
          <hr />
          <TourPlace contentType={"Culinary"} />

          <h2>
            <i class="fas fa-bed"></i> Stay
          </h2>
          <hr />
          <TourPlace contentType={"Stay"} />
        </Grid>
        <Grid fluid className="testimonial-wrapper">
          <Row className="show-grid text-center ">
            <div className="testimonial">
              <h1 className="text-center"> What They Say</h1>
              <h5 className="text-center">
                Our testimonials are the best proof of our high level of service
              </h5>
            </div>
          </Row>
          <Grid className="show-grid text-center ">
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
          </Grid>
        </Grid>
      </div>
    );
  }
}
