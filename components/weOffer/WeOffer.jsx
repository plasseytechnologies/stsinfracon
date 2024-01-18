import React from "react";
import WeOffers from "../../constant/WeOffers.json";

const WeOffer = () => {
  return (
    <div>
      <section className="section section-lg bg-default">
        <div className="container">
          <h3 className="oh-desktop">
            <span className="d-inline-block wow slideInDown">
              What we offer
            </span>
          </h3>
          <div
            className="owl-carousel owl-style-3 dots-style-2"
            data-items={1}
            data-sm-items={2}
            data-lg-items={3}
            data-margin={30}
            data-autoplay="true"
            data-dots="true"
            data-animation-in="fadeIn"
            data-animation-out="fadeOut"
          >
            {WeOffers.map((services, i) => (
              <>
                {/* Services Creative*/}
                <article className="services-creative">
                  <a
                    className="services-creative-figure"
                    href="single-service.html"
                  >
                    <img
                      src={services.offerImage}
                      alt
                      style={{ height: "250px", width: "370px" }}
                    />
                  </a>
                  <div className="services-creative-caption">
                    <h5 className="services-creative-title">
                      <a href="single-service.html">{services.offerName}</a>
                    </h5>
                    <p className="services-creative-text">
                      {services.offerPara.slice(0, 45)}
                    </p>
                    <span className="services-creative-counter box-ordered-item">
                      {i + 1}
                    </span>
                  </div>
                </article>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeOffer;
