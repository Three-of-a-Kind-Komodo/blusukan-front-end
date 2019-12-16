import React, { Component } from "react";
import { Grid, Col, Image, Row } from "react-bootstrap";
import FormContact from "./FormContact";

import "./contact.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <Image src="/assets/img/contact.jpg" />
          <h2 className="heading">Contact Us</h2>
        </div>
        <Grid>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4}>
              <h3>Contact Our Agency</h3>
              <p>
                At City Tours we want to make sure that your trip is everything
                you could possibly dream of. Whether you want inspiration and
                guidance in planning your next city tour or need help with an
                existing booking, our travel experts are here to help. Send us
                an email or give our team a call to book your flights, plan your
                tour or get help with any problems you encounter along the way.
                Or if you’re in Jakarta, you can visit us to speak face to face.
                Our assistance doesn’t end when you take off either. Our Global
                Tour Help team are on hand to assist with any issues you may
                have.
              </p>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
              <h3>Our contacts </h3>
              <ul className=" contact-list fa-ul">
                <li>
                  <i class="fas fa-map-marker-alt"></i> Jl. Kemang Barat No.8,
                  RT.9/RW.1, Bangka, Kec. Mampang Prpt., Kota Jakarta Selatan,
                  Daerah Khusus Ibukota Jakarta 12730
                </li>
                <li>
                  <i class="fas fa-phone"></i> +62 821-8699-4599
                </li>
                <li>
                  <i class="fas fa-mobile-alt"></i> +62 821-2010-9172
                </li>
                <li>
                  <i class="far fa-envelope"></i> info@citytours.com
                </li>
              </ul>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
              <h3>Any Questions?</h3>
              <FormContact />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
