import NewsLetter from "@/components/newsLetter/NewsLetter";
import OurClients from "@/components/ourClients/OurClients";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section className="bg-gray-7">
        <div className="breadcrumbs-custom box-transform-wrap context-dark">
          <div className="container">
            <h3 className="breadcrumbs-custom-title">About Us</h3>
            <div className="breadcrumbs-custom-decor" />
          </div>
          <div
            className="box-transform"
            style={{ backgroundImage: "url(/assets/images/bg-typography.jpg)" }}
          />
        </div>
        <div className="container">
          <ul className="breadcrumbs-custom-path">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about-us.html">About us</a>
            </li>
            <li className="active">About Us</li>
          </ul>
        </div>
      </section>
      {/* About*/}
      <section className="section section-lg bg-default">
        <div className="container">
          <div
            className="tabs-custom row row-50 justify-content-center flex-lg-row-reverse text-center text-md-left"
            id="tabs-4"
          >
            <div className="col-lg-4 col-xl-3">
              <h5 className="text-spacing-200">25+ years of experience</h5>
              <ul className="nav list-category list-category-down-md-inline-block">
                <li
                  className="list-category-item wow fadeInRight"
                  role="presentation"
                  data-wow-delay="0s"
                >
                  <a className="active" href="#tabs-4-1" data-toggle="tab">
                    About us
                  </a>
                </li>
                <li
                  className="list-category-item wow fadeInRight"
                  role="presentation"
                  data-wow-delay=".1s"
                >
                  <a href="#tabs-4-2" data-toggle="tab">
                    Our Mission
                  </a>
                </li>
                <li
                  className="list-category-item wow fadeInRight"
                  role="presentation"
                  data-wow-delay=".2s"
                >
                  <a href="#tabs-4-3" data-toggle="tab">
                    Our Goals
                  </a>
                </li>
                <li
                  className="list-category-item wow fadeInRight"
                  role="presentation"
                  data-wow-delay=".3s"
                >
                  <a href="#tabs-4-4" data-toggle="tab">
                    Company values
                  </a>
                </li>
              </ul>
              <a
                className="button button-lg button-primary button-winona"
                href="contacts.html"
              >
                Contact us
              </a>
            </div>
            <div className="col-lg-8 col-xl-9">
              {/* Tab panes*/}
              <div className="tab-content tab-content-1">
                <div className="tab-pane fade show active" id="tabs-4-1">
                  <h4>A few words about us</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Mattis molestie a iaculis at erat pellentesque
                    adipiscing.{" "}
                  </p>
                  <p>
                    Est ullamcorper eget nulla facilisi etiam dignissim diam
                    quis enim. Nisl condimentum id venenatis a condimentum vitae
                    sapien pellentesque habitant. Arcu non odio euismod lacinia
                    at quis risus sed vulputate. Pharetra sit amet aliquam id
                    diam maecenas ultricies mi. Ut tellus elementum sagittis
                    vitae et leo. Sagittis id consectetur purus ut faucibus.{" "}
                  </p>
                  <img
                    src="/assets/images/about-1-835x418.jpg"
                    alt
                    width={835}
                    height={418}
                  />
                </div>
                <div className="tab-pane fade" id="tabs-4-2">
                  <h4>Providing quality services</h4>
                  <p>
                    Tristique et egestas quis ipsum. Sagittis vitae et leo duis
                    ut diam quam nulla porttitor. Sit amet nulla facilisi morbi
                    tempus. Nunc congue nisi vitae suscipit tellus mauris a.{" "}
                  </p>
                  <p>
                    Mi ipsum faucibus vitae aliquet nec. Dolor magna eget est
                    lorem ipsum dolor sit amet. Velit sed ullamcorper morbi
                    tincidunt. Euismod lacinia at quis risus sed vulputate odio.
                    Leo vel orci porta non. In nibh mauris cursus mattis. Vitae
                    et leo duis ut diam. Lorem ipsum dolor sit amet consectetur
                    adipiscing elit ut. Dignissim diam quis enim lobortis
                    scelerisque fermentum dui.
                  </p>
                  <img
                    src="/assets/images/about-2-835x418.jpg"
                    alt
                    width={835}
                    height={418}
                  />
                </div>
                <div className="tab-pane fade" id="tabs-4-3">
                  <h4>creating Better Infrastructure</h4>
                  <p>
                    Iaculis at erat pellentesque adipiscing commodo elit at
                    imperdiet dui. Integer enim neque volutpat ac tincidunt.
                    Diam volutpat commodo sed egestas egestas fringilla
                    phasellus faucibus scelerisque.
                  </p>
                  <p>
                    Vitae turpis massa sed elementum tempus egestas sed. Ipsum
                    dolor sit amet consectetur adipiscing elit ut aliquam. Nisl
                    vel pretium lectus quam id leo in vitae. Duis convallis
                    convallis tellus id interdum. Suspendisse interdum
                    consectetur libero id faucibus nisl tincidunt.
                  </p>
                  <img
                    src="/assets/images/about-3-835x418.jpg"
                    alt
                    width={835}
                    height={418}
                  />
                </div>
                <div className="tab-pane fade" id="tabs-4-4">
                  <h4>Integrity, quality, and reliability</h4>
                  <p>
                    Eu facilisis sed odio morbi quis. Justo nec ultrices dui
                    sapien. Viverra justo nec ultrices dui sapien eget mi proin
                    sed. Mattis aliquam faucibus purus in. Libero enim sed
                    faucibus turpis in eu mi bibendum.
                  </p>
                  <p>
                    Tellus in metus vulputate eu scelerisque felis imperdiet.
                    Sapien nec sagittis aliquam malesuada bibendum arcu vitae
                    elementum. Donec ac odio tempor orci dapibus ultrices. At
                    elementum eu facilisis sed odio morbi quis. Porta non
                    pulvinar neque laoreet suspendisse interdum consectetur.
                    Sagittis eu volutpat odio facilisis.{" "}
                  </p>
                  <img
                    src="/assets/images/about-4-835x418.jpg"
                    alt
                    width={835}
                    height={418}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Icon Classic*/}
      <section className="section section-lg bg-gray-100">
        <div className="container">
          <div className="row row-md row-50">
            <div className="col-sm-6 col-xl-4 wow fadeInUp" data-wow-delay="0s">
              <article className="box-icon-classic">
                <div className="unit unit-spacing-lg flex-column text-center flex-md-row text-md-left">
                  <div className="unit-left">
                    <div className="box-icon-classic-icon linearicons-hammer-wrench" />
                  </div>
                  <div className="unit-body">
                    <h5 className="box-icon-classic-title">
                      <a href="single-service.html">Modern Technology</a>
                    </h5>
                    <p className="box-icon-classic-text">
                      Our team uses the latest technologies to design
                      high-quality civil objects.
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div
              className="col-sm-6 col-xl-4 wow fadeInUp"
              data-wow-delay=".1s"
            >
              <article className="box-icon-classic">
                <div className="unit unit-spacing-lg flex-column text-center flex-md-row text-md-left">
                  <div className="unit-left">
                    <div className="box-icon-classic-icon linearicons-apartment" />
                  </div>
                  <div className="unit-body">
                    <h5 className="box-icon-classic-title">
                      <a href="single-service.html">Powerful Equipment</a>
                    </h5>
                    <p className="box-icon-classic-text">
                      We use modern &amp; powerful equipment to create efficient
                      and reliable infrastructure.
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div
              className="col-sm-6 col-xl-4 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <article className="box-icon-classic">
                <div className="unit unit-spacing-lg flex-column text-center flex-md-row text-md-left">
                  <div className="unit-left">
                    <div className="box-icon-classic-icon linearicons-pencil-ruler" />
                  </div>
                  <div className="unit-body">
                    <h5 className="box-icon-classic-title">
                      <a href="single-service.html">Quality Materials</a>
                    </h5>
                    <p className="box-icon-classic-text">
                      High-quality materials are the absolute guarantee of
                      building dependable facilities.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/* Our Team*/}
      <section className="section section-lg section-bottom-md-70 bg-default">
        <div className="container">
          <h3 className="oh">
            <span className="d-inline-block wow slideInUp" data-wow-delay="0s">
              Our team
            </span>
          </h3>
          <div className="row row-lg row-40 justify-content-center">
            <div
              className="col-sm-6 col-lg-3 wow fadeInLeft"
              data-wow-delay=".2s"
              data-wow-duration="1s"
            >
              <article className="team-modern">
                <a className="team-modern-figure" href="#">
                  <img
                    src="/assets/images/team-1-270x236.jpg"
                    alt
                    width={270}
                    height={236}
                  />
                </a>
                <div className="team-modern-caption">
                  <h6 className="team-modern-name">
                    <a href="#">Jane McMillan</a>
                  </h6>
                  <div className="team-modern-status">Vice President</div>
                  <ul className="list-inline team-modern-social-list">
                    <li>
                      <a className="icon mdi mdi-facebook" href="#" />
                    </li>
                    <li>
                      <a className="icon mdi mdi-twitter" href="#" />
                    </li>
                    <li>
                      <a className="icon mdi mdi-instagram" href="#" />
                    </li>
                    <li>
                      <a className="icon mdi mdi-google-plus" href="#" />
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            <div
              className="col-sm-6 col-lg-3 wow fadeInLeft"
              data-wow-delay="0s"
              data-wow-duration="1s"
            >
              <article className="team-modern">
                <a className="team-modern-figure" href="#">
                  <img
                    src="/assets/images/team-2-270x236.jpg"
                    alt
                    width={270}
                    height={236}
                  />
                </a>
                <div className="team-modern-caption">
                  <h6 className="team-modern-name">
                    <a href="#">Frank McMillan</a>
                  </h6>
                  <div className="team-modern-status">
                    CEO, Managing Director
                  </div>
                  <ul className="list-inline team-modern-social-list">
                    <li>
                      <a className="icon mdi mdi-facebook" href="#" />
                    </li>
                    <li>
                      <a className="icon mdi mdi-twitter" href="#" />
                    </li>
                    <li>
                      <a className="icon mdi mdi-instagram" href="#" />
                    </li>
                    <li>
                      <a className="icon mdi mdi-google-plus" href="#" />
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            <div
              className="col-sm-6 col-lg-3 wow fadeInRight"
              data-wow-delay=".1s"
              data-wow-duration="1s"
            >
              <article className="team-modern">
                <a className="team-modern-figure" href="#">
                  <img
                    src="/assets/images/team-3-270x236.jpg"
                    alt
                    width={270}
                    height={236}
                  />
                </a>
                <div className="team-modern-caption">
                  <h6 className="team-modern-name">
                    <a href="#">Ben Wilson</a>
                  </h6>
                  <div className="team-modern-status">Estimating Manager</div>
                  <ul className="list-inline team-modern-social-list">
                    <li>
                      <a className="icon mdi mdi-facebook" href="#" />
                    </li>
                    <li>
                      <a className="icon mdi mdi-twitter" href="#" />
                    </li>
                    <li>
                      <a className="icon mdi mdi-instagram" href="#" />
                    </li>
                    <li>
                      <a className="icon mdi mdi-google-plus" href="#" />
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            <div
              className="col-sm-6 col-lg-3 wow fadeInRight"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <article className="team-modern">
                <a className="team-modern-figure" href="#">
                  <img
                    src="/assets/images/team-4-270x236.jpg"
                    alt
                    width={270}
                    height={236}
                  />
                </a>
                <div className="team-modern-caption">
                  <h6 className="team-modern-name">
                    <a href="#">John Smith</a>
                  </h6>
                  <div className="team-modern-status">Construction Manager</div>
                  <ul className="list-inline team-modern-social-list">
                    <li>
                      <a className="icon mdi mdi-facebook" href="#" />
                    </li>
                    <li>
                      <a className="icon mdi mdi-twitter" href="#" />
                    </li>
                    <li>
                      <a className="icon mdi mdi-instagram" href="#" />
                    </li>
                    <li>
                      <a className="icon mdi mdi-google-plus" href="#" />
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/* Our History*/}
      <section className="section section-lg bg-gray-100 text-left section-relative">
        <div className="container">
          <div className="row row-60 justify-content-center justify-content-xxl-between">
            <div className="col-lg-6 col-xxl-5 position-static">
              <h3>Our history</h3>
              <div className="tabs-custom" id="tabs-5">
                <div className="tab-content tab-content-1">
                  <div className="tab-pane fade" id="tabs-5-1">
                    <h5 className="font-weight-normal text-transform-none text-spacing-75">
                      Establishment of Civil Group &amp; first successful
                      projects
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Suspendisse interdum consectetur
                    </p>
                  </div>
                  <div className="tab-pane fade" id="tabs-5-2">
                    <h5 className="font-weight-normal text-transform-none text-spacing-75">
                      Partnering with national construction companies
                    </h5>
                    <p>
                      Scelerisque mauris pellentesque pulvinar pellentesque
                      habitant morbi. Blandit cursus risus at ultrices mi tempus
                      imperdiet. A cras semper auctor neque vitae.{" "}
                    </p>
                  </div>
                  <div className="tab-pane fade" id="tabs-5-3">
                    <h5 className="font-weight-normal text-transform-none text-spacing-75">
                      First governmental projects and engineering solutions
                      awards
                    </h5>
                    <p>
                      Eu scelerisque felis imperdiet proin fermentum leo vel
                      orci. Vulputate enim nulla aliquet porttitor lacus luctus
                      accumsan tortor posuere.{" "}
                    </p>
                  </div>
                  <div className="tab-pane fade show active" id="tabs-5-4">
                    <h5 className="font-weight-normal text-transform-none text-spacing-75">
                      Celebrating 25 years of Civil Group’s success
                    </h5>
                    <p>
                      Cursus eget nunc scelerisque viverra mauris in aliquam sem
                      fringilla. Viverra nibh cras pulvinar mattis nunc sed.
                      Amet consectetur adipiscing{" "}
                    </p>
                  </div>
                </div>
                <div className="list-history-wrap">
                  <ul className="nav list-history">
                    <li className="list-history-item" role="presentation">
                      <a href="#tabs-5-1" data-toggle="tab">
                        <div className="list-history-circle" />
                        1994
                      </a>
                    </li>
                    <li className="list-history-item" role="presentation">
                      <a href="#tabs-5-2" data-toggle="tab">
                        <div className="list-history-circle" />
                        2002
                      </a>
                    </li>
                    <li className="list-history-item" role="presentation">
                      <a href="#tabs-5-3" data-toggle="tab">
                        <div className="list-history-circle" />
                        2010
                      </a>
                    </li>
                    <li className="list-history-item" role="presentation">
                      <a className="active" href="#tabs-5-4" data-toggle="tab">
                        <div className="list-history-circle" />
                        2021
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-lg-6 position-static index-1">
              <div className="bg-image-right-1 bg-image-right-lg">
                <img
                  src="/assets/images/about-5-1110x710.jpg"
                  alt
                  width={1110}
                  height={710}
                />
                <div className="link-play-modern">
                  <a
                    className="icon mdi mdi-play"
                    data-lightbox="iframe"
                    href="https://www.youtube.com/watch?v=1UWpbtUupQQ"
                  />
                  <div className="link-play-modern-title">
                    How we<span>Work</span>
                  </div>
                  <div className="link-play-modern-decor" />
                </div>
                <div
                  className="box-transform"
                  style={{
                    backgroundImage: "url(images/about-5-1110x710.jpg)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our clients*/}
      <OurClients awards={false} />
      {/* Subscribe to Our Newsletter*/}
      <NewsLetter />
    </div>
  );
};

export default AboutUs;
