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
    </div>
  );
};

export default OurClients;
