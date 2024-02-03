"use client";
import React from "react";
import Clients from "../../constant/Clients.json";

import Slider from "react-slick";

const OurClients = ({ award }) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <section className="section section-xl bg-gray-100 text-md-left">
        <div className="">
          <div className="col-md-12 col-lg-12 col-xl-12 mb-5">
            <div className="offset-left-xl-70 flex justify-center">
              <h3 className="oh-desktop">
                <span className="d-inline-block wow slideInLeft">
                  Our clients
                </span>
              </h3>
            </div>
          </div>

          <Slider {...settings} style={{ backgroundColor: "white" }}>
            {Clients.map((item) => (
              <a class="clients-classic-figure p-3" href="#">
                <img
                  src={item?.logo}
                  style={{
                    maxWidth: "180px",
                    aspectRatio: "3/2",
                    objectFit: "contain",
                    mixBlendMode: "color-burn",
                  }}
                />
              </a>
            ))}
          </Slider>
        </div>
      </section>
      {award ? (
        <section
          className="section parallax-container"
          data-parallax-img="/assets/images/bg-counter-3.jpg"
        >
          <div className="parallax-content section-inset-9 context-dark">
            <div className="container">
              <div className="row row-30 justify-content-center justify-content-xl-between align-items-lg-end">
                <div className="col-sm-6 col-md-3">
                  <div className="counter-classic">
                    <h3 className="counter-classic-number">
                      <span className="counter">640</span>
                    </h3>
                    <h6 className="counter-classic-title">projects</h6>
                    <div className="counter-classic-decor" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="counter-classic">
                    <h3 className="counter-classic-number">
                      <span className="counter">15</span>
                    </h3>
                    <h6 className="counter-classic-title">awards won</h6>
                    <div className="counter-classic-decor" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="counter-classic">
                    <h3 className="counter-classic-number">
                      <span className="counter">24</span>
                    </h3>
                    <h6 className="counter-classic-title">partners</h6>
                    <div className="counter-classic-decor" />
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="counter-classic">
                    <h3 className="counter-classic-number">
                      <span className="counter">15</span>
                    </h3>
                    <h6 className="counter-classic-title">new clients</h6>
                    <div className="counter-classic-decor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
};

export default OurClients;
