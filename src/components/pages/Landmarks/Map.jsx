import React, { Component } from "react";
import ReactModal from "react-modal";
import Iframe from "react-iframe";

class Map extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Direction</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal}>Close Map</button>

          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666466960832!2d106.82495875088968!3d-6.175387062212266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1576572010094!5m2!1sen!2sid"
            width="100%"
            height="100%"
            frameborder="0"
            allowfullscreen=""
          ></Iframe>
        </ReactModal>
      </div>
    );
  }
}
export default Map;
