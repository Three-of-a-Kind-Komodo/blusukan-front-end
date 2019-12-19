import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import { Grid, Image, Row, Col, Button } from "react-bootstrap";
import Rater from "react-rater";
import "./culinary.css";
import Iframe from "react-iframe";

class CulinaryDetil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
      isLoaded: false,
      error: "",
      show: false
    };
    this.tooltipRef = React.createRef();
  }

  componentDidMount() {
    axios
      .get(
        `https://blusukan.herokuapp.com/contents/${this.props.match.params.id}`
      )
      .then(result => {
        this.setState({
          isLoaded: true,
          contents: result.data.result
        });
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error: error.message
        });
      });
  }

  render() {
    console.log(this.state.contents);
    const { contents, error, isLoaded } = this.state;
    if (error) {
      return <div>{error}</div>;
    }
    if (!isLoaded) {
      return <div>Loading.....</div>;
    }
    return (
      <div>
        <div className="content-wrapper">
          <Image src="/assets/img/culinary.jpeg" />
          <h2 className="heading">Culinary Detail</h2>
          <h5 className="sub-heading">
            With us you’ll find a perfect food heaven with extraordinary taste
            that you can't forget forever.
          </h5>
        </div>
        <Grid>
          <Button
            bsStyle="light"
            style={{ textDecoration: "none", marginBottom: 20 }}
          >
            <Link to={`/culinary`} style={{ textDecoration: "none" }}>
              {"< "} Back to Culinary
            </Link>
          </Button>

          <Row>
            <Col md={12} lg={12} style={{ marginBottom: 20 }}>
              <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.061313803941!2d106.84123585088932!3d-6.122450461719329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1e3d05306511%3A0x820b6f7432af7bcd!2sBandar%20Djakarta!5e0!3m2!1sen!2sid!4v1576728012670!5m2!1sen!2sid"
                width="600"
                height="450"
                frameborder="0"
                allowfullscreen=""
                className="map-frame"
              ></Iframe>
            </Col>
            <Col md={12} lg={4}>
              <Image
                src={contents.imageurl}
                alt={contents.title}
                fluid
                className="img-responsive"
              />
            </Col>
            <Col md={12} lg={8}>
              <h3 style={{ padding: 0, marginBottom: 0 }}>{contents.title}</h3>
              <Rater total={5} rating={contents.rating} interactive={false} />
              <p style={{ marginTop: 20, textAlign: "justify" }}>
                {contents.content}
              </p>
            </Col>
          </Row>

          <h4 style={{ marginTop: 20 }}>Reviews</h4>
        </Grid>
      </div>
    );
  }
}

export default withRouter(CulinaryDetil);
