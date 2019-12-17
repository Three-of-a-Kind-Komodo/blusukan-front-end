import React, { Component } from "react";
import axios from "axios";

import { Thumbnail, Row, Col, Image } from "react-bootstrap";
import Rater from "react-rater";

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
        <Row className="show-grid text-center row-eq-height">
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
        </Row>
      </div>
    );
  }
}
export default TourPlaceItems;
