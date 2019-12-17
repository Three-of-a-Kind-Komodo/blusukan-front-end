import React, { Component } from "react";
import Slider from "react-slick";

import "./SlickCarousel.css";

export default class SlickCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="carousel-item">
            <div className="image-filter" />
            <img
              src="http://yesofcorsa.com/wp-content/uploads/2019/04/Jakarta-Wallpaper.jpg"
              alt="First Slide"
              className="carousel-image"
            />

            <h1 className="carousel-title">
              Kunjungi Monumen Nasional dan sekitarnya
            </h1>
            <div className="carousel-captions">
              <p>Jakarta Pusat</p>
              <p>DKI Jakarta</p>
            </div>
          </div>

          <div className="carousel-item">
            <div className="image-filter" />
            <img
              src="https://paradisotraveling.com/wp-content/uploads/2017/02/paket-pulau-tidung-one-day-tour.jpg"
              alt="Second Slide"
              className="carousel-image"
            />
            <h1 className="carousel-title">Eksplorasi Pulau Tidung</h1>
            <div className="carousel-captions">
              <p>Kepulauan Seribu</p>
              <p>DKI Jakarta</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="image-filter" />
            <img
              src="https://cdn1.goibibo.com/t_tg_fs/jakarta-taman-mini-indonesia-indah-162230438467-orijgp.jpg"
              alt="Third Slide"
              className="carousel-image"
            />
            <h1 className="carousel-title">
              Wisata edukasi Taman Mini Indonesia Indah
            </h1>
            <div className="carousel-captions">
              <p>Jakarta Pusat</p>
              <p>DKI Jakarta</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
