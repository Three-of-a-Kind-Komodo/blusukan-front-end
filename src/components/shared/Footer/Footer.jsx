import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image, Grid, Row, Col } from "react-bootstrap";
import "./footer.css";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <Grid>
            <Row className="show-grid  ">
              <Col xs={12} sm={12} className="icons ">
                <div className="social-icons">
                  <Image
                    src="/assets/img/logo_facebook.png"
                    className="social-icon"
                  />
                  <Image
                    src="/assets/img/logo_twitter.png"
                    className="social-icon"
                  />
                  <Image
                    src="/assets/img/logo_github.png"
                    className="social-icon"
                  />
                  <Image
                    src="/assets/img/logo_linkedin.png"
                    className="social-icon"
                  />
                </div>
              </Col>
            </Row>
            <Row className="show-grid text-center">
              <Col xs={12} sm={4} className="icons">
                <Image
                  src="/assets/img/logo_place.png"
                  className="social-icon"
                />
                <div className="info-footer">
                  <h4> ADDRESS</h4>
                  <p> The Social House Hostel, Building 5th fl</p>
                  <p>Jakarta Selatan, DKI Jakarta 12730</p>
                </div>
              </Col>
              <Col xs={12} sm={4} className="icons">
                <Image
                  src="/assets/img/logo_email.png"
                  className="social-icon"
                />
                <div className="info-footer">
                  <h4> EMAIL</h4>
                  <p> info@citytours.com</p>
                  <p>support@citytours.com</p>
                </div>
              </Col>

              <Col xs={12} sm={4} className="icons">
                <Image
                  src="/assets/img/logo_phone.png"
                  className="social-icon"
                />
                <div className="info-footer">
                  <h4> PHONE</h4>
                  <p>+62 821-8699-4599</p>
                  <p>+62 821-2010-9172</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </footer>
      </div>
    );
  }
}
