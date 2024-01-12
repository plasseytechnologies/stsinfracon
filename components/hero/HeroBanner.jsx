"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const HeroBanner = () => {
  var settings = {
    // accessibility: true,
    // autoplaySpeed: 2000,
    // autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <section className="section swiper-container swiper-slider swiper-slider-2">
            <div className="swiper-wrapper text-sm-left">
              <div
                className="swiper-slide context-dark swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
                style={{
                  width: 1263,
                  transitionDuration: "0ms",
                  opacity: 1,
                  transform: "translate3d(0px, 0px, 0px)",
                  backgroundImage: 'url("/assets/images/slide-3-1920x753.jpg")',
                }}
              >
                <div className="swiper-slide-caption section-md animate-fade-up">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-8 col-md-7 col-xl-6 offset-lg-1 offset-xxl-0">
                        <h3 className="oh swiper-title">
                          <span className="d-inline-block animate-wiggle">
                            Welcome to civilgroup
                          </span>
                        </h3>
                        <h5 className="swiper-subtitle ">
                          Leading civil engineering company
                        </h5>
                        <div className="button-wrap oh">
                          <a
                            className="button button-lg button-primary button-winona button-shadow-2 "
                            href="#"
                          >
                            View more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default HeroBanner;
