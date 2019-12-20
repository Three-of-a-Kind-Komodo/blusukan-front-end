import React, { useState, useContext } from "react";
import { Row, Col, Button, Modal } from "react-bootstrap";
import ReactFilestack from "filestack-react";
import axios from "axios";
import Rater from "react-rater";

import { URI } from "../../helpers/path";
import { UserContext } from "../../UserContext";

function MydModalWithGrid(props) {
  const [content, setContent] = useState({
    type: "Landmark",
    title: "",
    content: "",
    imageurl: "",
    mapurl: "",
    mapembed: "",
    rating: 5,
    isactive: true
  });
  const [user] = useContext(UserContext);
  const [error, setError] = useState("");

  const handleChange = event => {
    setContent({ ...content, [event.target.name]: event.target.value });
  };

  const handleImage = imageurl => {
    setContent({ ...content, imageurl });
  };

  const addContent = event => {
    event.preventDefault();
    console.log(content);

    axios
      .post(URI + "/contents/" + user.user._id, content)
      .then(result => {
        console.log(result);
      })
      .then(props.onHide)
      .catch(error => {
        if (error) {
          if (error.response) {
            setError(error.response.data.message);
          } else {
            setError(error.message);
          }
        }
      });
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        {error && <div>{error}</div>}
        <Modal.Title id="contained-modal-title-vcenter">
          Add Content
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Row className="show-grid">
            <Col xs={12}>
              <form onSubmit={addContent}>
                <div class="form-group">
                  <label for="inputContentType">Content Type</label>
                  <select
                    class="form-control"
                    name="type"
                    onChange={handleChange}
                    value={content.type}
                  >
                    <option value="Landmark">Landmark</option>
                    <option value="Culinary">Culinary</option>
                    <option value="Stay">Stay</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="rating">
                    Rating{" - "}
                    <Rater
                      total={5}
                      rating={content.rating}
                      interactive={false}
                    />
                  </label>
                  <select
                    class="form-control"
                    name="rating"
                    onChange={handleChange}
                    value={content.rating}
                  >
                    <option value={5}>5</option>
                    <option value={4}>4</option>
                    <option value={3}>3</option>
                    <option value={2}>2</option>
                    <option value={1}>1</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="inputTitle">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputTitle"
                    placeholder="Title"
                    name="title"
                    onChange={handleChange}
                    value={content.title}
                  />
                </div>
                <div class="form-group">
                  <label for="inputContent">Content</label>
                  <textarea
                    class="form-control"
                    rows="10"
                    placeholder="Enter Content"
                    name="content"
                    onChange={handleChange}
                    value={content.content}
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="inputImageUrl">Image Url</label>
                  {content.imageurl ? (
                    <img
                      src={content.imageurl}
                      alt="content"
                      width="100"
                      height="100"
                    />
                  ) : (
                    <ReactFilestack
                      apikey={process.env.REACT_APP_FILESTACK_API_KEY}
                      onSuccess={res => handleImage(res.filesUploaded[0].url)}
                    />
                  )}
                </div>
                <div class="form-group">
                  <label for="inputMap">Map Direction Url</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputMapUrl"
                    placeholder="Map Direction Url"
                    name="mapurl"
                    onChange={handleChange}
                    value={content.mapurl}
                  />
                </div>
                <div class="form-group">
                  <label for="inputMapEmbed">Map Embed Url</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputMapEmbed"
                    placeholder="Map Embed Url"
                    name="mapembed"
                    onChange={handleChange}
                    value={content.mapembed}
                  />
                </div>
                <button type="submit" class="btn btn-default">
                  Submit
                </button>
              </form>
            </Col>
          </Row>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MydModalWithGrid;
