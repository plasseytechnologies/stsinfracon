import Link from "next/link";
import React from "react";

const HeroBanner = () => {
  return (
    <div>
      <section
        className="section swiper-container swiper-slider swiper-slider-2"
        data-swiper='{"autoplay":{"delay":5000},"effect":"fade","loop":"true","simulateTouch":"false","pagination":{"el":".swiper-pagination","clickable":true}}'
      >
        <div className="swiper-wrapper text-sm-left ">
          <div
            className="swiper-slide context-dark"
            data-slide-bg="/assets/images/Road.jpg"
          >
            <div className="swiper-slide-caption section-md">
              <div className="container">
                <div className="row">
                  <div className="col-sm-8 col-md-7 col-lg-6 offset-lg-1 offset-xxl-0  mt-10">
                    <h3 className="oh swiper-title">
                      <span
                        className="d-inline-block"
                        data-caption-animate="slideInUp"
                        data-caption-delay={0}
                      >
                        STS INFRACON PRIVATE LIMITED
                      </span>
                    </h3>
                    <h5
                      className="swiper-subtitle"
                      data-caption-animate="fadeInLeft"
                      data-caption-delay={300}
                    >
                      Quality and Timely Delivery of Projects is the essence of
                      success for any infrastructure industry and we are totally
                      embedded to the same.
                    </h5>
                    <Link
                      className="button button-lg button-primary button-winona button-shadow-2"
                      href="/about"
                      data-caption-animate="fadeInUp"
                      data-caption-delay={300}
                    >
                      View more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide context-dark"
            data-slide-bg="/assets/images/Railway.jpg"
          >
            <div className="swiper-slide-caption section-md">
              <div className="container">
                <div className="row">
                  <div className="col-sm-9 col-md-8 col-xl-6 offset-lg-1 offset-xxl-0">
                    <h3 className="oh swiper-title">
                      <span
                        className="d-inline-block"
                        data-caption-animate="slideInDown"
                        data-caption-delay={0}
                      >
                        STS INFRACON PRIVATE LIMITED
                      </span>
                    </h3>
                    <h5
                      className="swiper-subtitle"
                      data-caption-animate="fadeInRight"
                      data-caption-delay={300}
                    >
                      Quality and Timely Delivery of Projects is the essence of
                      success for any infrastructure industry and we are totally
                      embedded to the same.
                    </h5>
                    <div className="button-wrap oh">
                      <Link
                        className="button button-lg button-primary button-winona button-shadow-2"
                        href="/about"
                        data-caption-animate="slideInUp"
                        data-caption-delay={0}
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide context-dark"
            data-slide-bg="/assets/images/Building.jpg"
          >
            <div className="swiper-slide-caption section-md">
              <div className="container">
                <div className="row">
                  <div className="col-sm-8 col-md-7 col-xl-6 offset-lg-1 offset-xxl-0">
                    <h3 className="oh swiper-title">
                      <span
                        className="d-inline-block"
                        data-caption-animate="slideInLeft"
                        data-caption-delay={100}
                      >
                        STS INFRACON PRIVATE LIMITED
                      </span>
                    </h3>
                    <h5
                      className="swiper-subtitle"
                      data-caption-animate="fadeInUp"
                      data-caption-delay={0}
                    >
                      Quality and Timely Delivery of Projects is the essence of
                      success for any infrastructure industry and we are totally
                      embedded to the same.
                    </h5>
                    <div className="button-wrap oh">
                      <Link
                        className="button button-lg button-primary button-winona button-shadow-2"
                        href="/about"
                        data-caption-animate="slideInLeft"
                        data-caption-delay={100}
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Swiper Pagination*/}
        <div className="swiper-pagination" data-bullet-custom="true" />
        {/* Swiper Navigation*/}
        <div className="swiper-button-prev">
          <div className="preview">
            <div className="preview__img" />
          </div>
          <div className="swiper-button-arrow" />
        </div>
        <div className="swiper-button-next">
          <div className="swiper-button-arrow" />
          <div className="preview">
            <div className="preview__img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;
