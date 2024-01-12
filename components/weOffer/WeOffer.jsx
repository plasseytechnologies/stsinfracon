import React from "react";

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
            {/* Services Creative*/}
            <article className="services-creative">
              <a
                className="services-creative-figure"
                href="single-service.html"
              >
                <img
                  src="/assets/images/services-1-370x230.jpg"
                  alt
                  width={370}
                  height={230}
                />
              </a>
              <div className="services-creative-caption">
                <h5 className="services-creative-title">
                  <a href="single-service.html">Value Engineering</a>
                </h5>
                <p className="services-creative-text">
                  Value engineering is used to solve problems and eliminate any
                  unwanted costs.
                </p>
                <span className="services-creative-counter box-ordered-item">
                  01
                </span>
              </div>
            </article>
            {/* Services Creative*/}
            <article className="services-creative">
              <a
                className="services-creative-figure"
                href="single-service.html"
              >
                <img
                  src="/assets/images/services-2-370x230.jpg"
                  alt
                  width={370}
                  height={230}
                />
              </a>
              <div className="services-creative-caption">
                <h5 className="services-creative-title">
                  <a href="single-service.html">HVAC Design</a>
                </h5>
                <p className="services-creative-text">
                  We provide planning, designing, and drafting for HVAC
                  requirements.
                </p>
                <span className="services-creative-counter box-ordered-item">
                  02
                </span>
              </div>
            </article>
            {/* Services Creative*/}
            <article className="services-creative">
              <a
                className="services-creative-figure"
                href="single-service.html"
              >
                <img
                  src="/assets/images/services-3-370x230.jpg"
                  alt
                  width={370}
                  height={230}
                />
              </a>
              <div className="services-creative-caption">
                <h5 className="services-creative-title">
                  <a href="single-service.html">Geospatial Solutions</a>
                </h5>
                <p className="services-creative-text">
                  We use geospatial data technology to provide the best
                  geospatial map services.
                </p>
                <span className="services-creative-counter box-ordered-item">
                  03
                </span>
              </div>
            </article>
            {/* Services Creative*/}
            <article className="services-creative">
              <a
                className="services-creative-figure"
                href="single-service.html"
              >
                <img
                  src="/assets/images/services-7-370x230.jpg"
                  alt
                  width={370}
                  height={230}
                />
              </a>
              <div className="services-creative-caption">
                <h5 className="services-creative-title">
                  <a href="single-service.html">Consulting</a>
                </h5>
                <p className="services-creative-text">
                  Our experts are always ready to consult you on any civil
                  engineering matter.
                </p>
                <span className="services-creative-counter box-ordered-item">
                  04
                </span>
              </div>
            </article>
            {/* Services Creative*/}
            <article className="services-creative">
              <a
                className="services-creative-figure"
                href="single-service.html"
              >
                <img
                  src="/assets/images/services-19-370x230.jpg"
                  alt
                  width={370}
                  height={230}
                />
              </a>
              <div className="services-creative-caption">
                <h5 className="services-creative-title">
                  <a href="single-service.html">Erosion Control</a>
                </h5>
                <p className="services-creative-text">
                  Our team develops strategies to implement permanent and
                  temporary erosion control.
                </p>
                <span className="services-creative-counter box-ordered-item">
                  05
                </span>
              </div>
            </article>
            {/* Services Creative*/}
            <article className="services-creative">
              <a
                className="services-creative-figure"
                href="single-service.html"
              >
                <img
                  src="/assets/images/services-20-370x230.jpg"
                  alt
                  width={370}
                  height={230}
                />
              </a>
              <div className="services-creative-caption">
                <h5 className="services-creative-title">
                  <a href="single-service.html">Quality Control</a>
                </h5>
                <p className="services-creative-text">
                  We control the quality of all our projects, especially the
                  most complex ones.
                </p>
                <span className="services-creative-counter box-ordered-item">
                  06
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeOffer;
