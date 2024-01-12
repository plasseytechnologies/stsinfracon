import React from "react";

const OurClients = ({ award }) => {
  return (
    <div>
      <section className="section section-xl bg-gray-100 text-md-left">
        <div className="container">
          <div className="row row-60 justify-content-center flex-lg-row-reverse">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="offset-left-xl-70">
                <h3 className="oh-desktop">
                  <span className="d-inline-block wow slideInLeft">
                    Our clients
                  </span>
                </h3>
                <div className="slick-quote">
                  {/* Slick Carousel*/}
                  <div
                    className="slick-slider carousel-parent"
                    data-autoplay="true"
                    data-swipe="true"
                    data-items={1}
                    data-child="#child-carousel-2"
                    data-for="#child-carousel-2"
                    data-slide-effect="true"
                  >
                    <div className="item">
                      {/* Quote Modern*/}
                      <article className="quote-modern">
                        <h5 className="quote-modern-text">
                          <span className="q">
                            Civil Group has provided professional engineering
                            services to AlphaIndustry for years. They have
                            always been our dedicated partner.
                          </span>
                        </h5>
                        <h5 className="quote-modern-author">Stephen Adams,</h5>
                        <p className="quote-modern-status">
                          “AlphaIndustry”, CEO
                        </p>
                      </article>
                    </div>
                    <div className="item">
                      {/* Quote Modern*/}
                      <article className="quote-modern">
                        <h5 className="quote-modern-text">
                          <span className="q">
                            We have worked with Civil Group for many years. The
                            quality of work has always been excellent and they
                            are promptly responsive and reliable.
                          </span>
                        </h5>
                        <h5 className="quote-modern-author">Sam Peterson,</h5>
                        <p className="quote-modern-status">
                          “West Coal Plant”, CFO
                        </p>
                      </article>
                    </div>
                    <div className="item">
                      {/* Quote Modern*/}
                      <article className="quote-modern">
                        <h5 className="quote-modern-text">
                          <span className="q">
                            Civil Group has been an important part of our
                            success. We have had the opportunity to work closely
                            with them on multiple projects.
                          </span>
                        </h5>
                        <h5 className="quote-modern-author">Jane McMillan,</h5>
                        <p className="quote-modern-status">
                          “South East Plant”, Lead HR Manager
                        </p>
                      </article>
                    </div>
                    <div className="item">
                      {/* Quote Modern*/}
                      <article className="quote-modern">
                        <h5 className="quote-modern-text">
                          <span className="q">
                            This team provides a great level of service on all
                            of our projects. They are an industry leader in the
                            use of BIM technologies for structural design.
                          </span>
                        </h5>
                        <h5 className="quote-modern-author">Will Jones,</h5>
                        <p className="quote-modern-status">
                          “STC Management”, Sales Manager
                        </p>
                      </article>
                    </div>
                  </div>
                  <div
                    className="slick-slider child-carousel"
                    id="child-carousel-2"
                    data-arrows="true"
                    data-for=".carousel-parent"
                    data-items={4}
                    data-sm-items={4}
                    data-md-items={4}
                    data-lg-items={4}
                    data-xl-items={4}
                    data-slide-to-scroll={1}
                  >
                    <div className="item">
                      <img
                        className="img-circle"
                        src="/assets/images/team-5-83x83.jpg"
                        alt
                        width={83}
                        height={83}
                      />
                    </div>
                    <div className="item">
                      <img
                        className="img-circle"
                        src="/assets/images/team-6-83x83.jpg"
                        alt
                        width={83}
                        height={83}
                      />
                    </div>
                    <div className="item">
                      <img
                        className="img-circle"
                        src="/assets/images/team-7-83x83.jpg"
                        alt
                        width={83}
                        height={83}
                      />
                    </div>
                    <div className="item">
                      <img
                        className="img-circle"
                        src="/assets/images/team-8-83x83.jpg"
                        alt
                        width={83}
                        height={83}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-7">
              {/* Clients Classic*/}
              <div className="clients-classic-wrap">
                <div className="row no-gutters">
                  <div className="col-sm-6 wow fadeInLeft">
                    <div className="clients-classic">
                      <a className="clients-classic-figure" href="#">
                        <img
                          src="/assets/images/clients-1-200x90.png"
                          alt
                          width={200}
                          height={90}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeInRight">
                    <div className="clients-classic">
                      <a className="clients-classic-figure" href="#">
                        <img
                          src="/assets/images/clients-2-200x90.png"
                          alt
                          width={200}
                          height={90}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="col-sm-6 wow fadeInLeft">
                    <div className="clients-classic">
                      <a className="clients-classic-figure" href="#">
                        <img
                          src="/assets/images/clients-3-200x90.png"
                          alt
                          width={200}
                          height={90}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeInRight">
                    <div className="clients-classic">
                      <a className="clients-classic-figure" href="#">
                        <img
                          src="/assets/images/clients-4-200x90.png"
                          alt
                          width={200}
                          height={90}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="col-sm-6 wow fadeInLeft">
                    <div className="clients-classic">
                      <a className="clients-classic-figure" href="#">
                        <img
                          src="/assets/images/clients-5-200x90.png"
                          alt
                          width={200}
                          height={90}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeInRight">
                    <div className="clients-classic">
                      <a className="clients-classic-figure" href="#">
                        <img
                          src="/assets/images/clients-6-200x90.png"
                          alt
                          width={200}
                          height={90}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {award ? (
        <section
          className="section parallax-container"
          data-parallax-img="./assets/images/bg-counter-3.jpg"
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
