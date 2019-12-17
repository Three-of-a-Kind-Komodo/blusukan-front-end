import React, { Component } from "react";
import axios from "axios";

import { Thumbnail, Row, Col, Image } from "react-bootstrap";
import Slider from "react-slick";
import Rater from "react-rater";

import "./TourPlaceItems.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
class TourPlaceItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
      isLoaded: false,
      error: ""
    };
  }
  componentDidMount() {
    axios
      .get(`https://blusukan.herokuapp.com/contents`)
      .then(result => {
        console.log(result);

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
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
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
        {/* <Row className="show-grid text-center row-eq-height">
          {contents &&
            contents.map((data, index) => (
              <Col xs={12} sm={4} className="place" key={index}>
                <Thumbnail className="crop">
                  <Image src={data.imageurl} fluid />

                  <h3>{data.title}</h3> */}
        {/* <Rater total={} rating={} interactive={} onRate={} onRating={} /> */}
        {/* <Rater total={5} rating={data.rating} interactive={false} />
                </Thumbnail>
              </Col>
            ))}
        </Row> */}

        <Row className="place">
          <Slider {...settings}>
            {contents &&
              contents.map((data, index) => (
                <Col xs={12} sm={4} className="place" key={index}>
                  <Thumbnail className="crop">
                    <Image src={data.imageurl} fluid />

                    <h3>{data.title}</h3>
                    {/* <Rater total={} rating={} interactive={} onRate={} onRating={} /> */}
                    <Rater total={5} rating={data.rating} interactive={false} />
                  </Thumbnail>
                </Col>
              ))}
          </Slider>
        </Row>
      </div>
    );
  }
}
export default TourPlaceItems;
