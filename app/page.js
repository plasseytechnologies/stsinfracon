"use client";
import AboutCompany from "@/components/aboutCompany/AboutCompany";
import CompanyCTA from "@/components/companyCTA/CompanyCTA";
import OurGallery from "@/components/gallery/OurGallery";
import HeroBanner from "@/components/hero/HeroBanner";
import LatestNews from "@/components/latestNews/LatestNews";
import LatestProject from "@/components/latestProject/LatestProject";
import NewsLetter from "@/components/newsLetter/NewsLetter";
import OurClients from "@/components/ourClients/OurClients";
import WeOffer from "@/components/weOffer/WeOffer";
import { AllScriptLoad } from "@/constant/scriptFiles";
import Script from "next/script";
import { useEffect, useState } from "react";
import TeamData from "../constant/TeamData.json";
import OurWork from "../constant/OurWork";
import Link from "next/link";
import Loader from "@/components/loader/Loader";
import Header from "@/components/header/Header";
import Gallery from "../constant/Gallery.json";
const Home = () => {
  const [loader, setLoader] = useState(true);
  const loadScripts = async () => {
    try {
      const result = await AllScriptLoad();
      const domContentLoadedTime = performance.now();

      setLoader(false);
    } catch (error) {
      console.error("Error loading scripts:", error);
    }
  };
  useEffect(() => {
    loadScripts();
  }, []);
  const Title =
    "STS Infracon Pvt Ltd - Engineering & Construction Company India";
  const Description =
    ":   STS is the leading engineering and construction company in India. We have shaken industry norms by providing innovative solutions to highly complex projects and meeting tight deadlines with awe-inspiring efficiency.";
  const Url = "https://stsinfracon.com/";
  const Keywords = "";
  return (
    <div>
      {loader ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />

            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>{Title}</title>
            <meta name="description" content={Description} />
            {/* <link rel="icon" href="/icon.ico" sizes="any" /> */}
            <meta
              name="Keywords"
              content=" STS Infracon Pvt Ltd
          "
            />
            <meta property="og:title" content={Title} />
            <meta property="og:description" content={Description} />
            <meta
              property="og:image"
              content="	https://stsinfracon.com/assets/images/STS-logo.png"
            />
            <meta property="og:url" content={Url} />
            <meta property="og:type" content="website" />
            <link rel="canonical" href={Url} />
            <meta
              name="twitter:card"
              content="https://stsinfracon.com/assets/images/STS-logo.png"
            />
            <meta name="twitter:title" content={Title} />
            <meta name="twitter:description" content={Description} />
            <meta
              name="twitter:image"
              content="https://stsinfracon.com/assets/images/STS-logo.png"
            />
          </head>
          <Header />
          <HeroBanner />
          {/* What we offer*/}
          <div className="bg-default py-5 ">
            <div className=" flex justify-center mb-4 px-5">
              <h5 className="">The Best Civil Engineering Company in India</h5>
            </div>
            <div className=" flex justify-center px-10">
              <p>
                STS Infracon is committed to excellence in the field of{" "}
                <b>civil engineering and construction</b>. As a reputed EPC
                company, we provide a wide range of{" "}
                <b>infrastructure construction </b>
                services, from road and highway construction to railway,
                substations, and LCNG gas station construction. With an
                astounding track record of several dozen contracts with
                government bodies and well-known private organisations, STS
                Infracon is the <b>best civil engineering company in India.</b>
              </p>
            </div>
          </div>
          <WeOffer />
          {/* Section CTA*/}*
          <CompanyCTA />
          {/* Mining machinery*/}
          <OurClients award={true} />
          {/* Latest Project*/}
          <LatestProject />
          {/* Section*/}
          {/* Section*/}
          <section className="section section-xl bg-default text-md-left">
            <div className="container">
              <div className="row row-30">
                <div className="col-md-5 col-lg-4 col-xl-3">
                  <div className="box-team">
                    <h3 className="oh-desktop">
                      <span className="d-inline-block wow slideInUp">
                        Our Leaders
                      </span>
                    </h3>
                    <h6
                      className="title-style-1 wow fadeInLeft"
                      data-wow-delay=".1s"
                    >
                      The best in their field
                    </h6>
                    <p className="wow fadeInRight" data-wow-delay=".2s">
                      Ever since its inception, STS Infracon has been led by
                      some of the best veterans the civil engineering industry
                      has to offer.
                    </p>
                    <div className="group-sm oh-desktop">
                      <div className="button-style-1 wow slideInLeft">
                        <span className="icon mdi mdi-email-outline" />
                        <span className="button-style-1-text">
                          <Link href="/contact">Contact us</Link>
                        </span>
                      </div>
                      <div className="wow slideInRight">
                        <div className="owl-custom-nav" id="owl-custom-nav-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-lg-8 col-xl-9">
                  <div
                    className="owl-carousel owl-style-5"
                    data-items={1}
                    data-sm-items={2}
                    data-lg-items={3}
                    data-margin={30}
                    data-autoplay="false"
                    data-animation-in="fadeIn"
                    data-animation-out="fadeOut"
                    data-navigation-class="#owl-custom-nav-1"
                  >
                    {TeamData.map((team) => {
                      return (
                        <>
                          {/* Team Modern*/}
                          <article className="team-modern">
                            <div className="team-modern-figure">
                              <img
                                style={{
                                  width: `${team.width}px`,
                                  height: `${team.height}px`,
                                }}
                                src={team.image}
                                alt
                              />
                            </div>
                            <div className="team-modern-caption">
                              <h6 className="team-modern-name">
                                <p>{team.name}</p>
                              </h6>
                              <div className="team-modern-status">
                                {team.position}
                              </div>
                              {/* <ul className="list-inline team-modern-social-list">
                                <li>
                                  <a
                                    className="icon mdi mdi-facebook"
                                    href="#"
                                  />
                                </li>
                                <li>
                                  <a
                                    className="icon mdi mdi-twitter"
                                    href="#"
                                  />
                                </li>
                                <li>
                                  <a
                                    className="icon mdi mdi-instagram"
                                    href="#"
                                  />
                                </li>
                                <li>
                                  <a
                                    className="icon mdi mdi-google-plus"
                                    href="#"
                                  />
                                </li>
                              </ul> */}
                            </div>
                          </article>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <OurGallery data={Gallery} name={"Gallery"} />
          <section
            className="section parallax-container my-5"
            data-parallax-img="/assets/images/bg-counter-3.jpg"
          >
            <div className="parallax-content section-inset-9 context-dark">
              <div className="container">
                <div className="row row-30 justify-content-center justify-content-xl-between align-items-lg-end">
                  <div className="col-sm-6 col-md-3">
                    <div className="counter-classic">
                      <h3 className="counter-classic-number">
                        <span className="counter">50</span>
                      </h3>
                      <h6 className="counter-classic-title">projects</h6>
                      <div className="counter-classic-decor" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="counter-classic">
                      <h3 className="counter-classic-number">
                        <span className="counter">7</span>
                      </h3>
                      <h6 className="counter-classic-title">Services</h6>
                      <div className="counter-classic-decor" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="counter-classic">
                      <h3 className="counter-classic-number">
                        <span className="counter">200</span>
                      </h3>
                      <h6 className="counter-classic-title">Employees</h6>
                      <div className="counter-classic-decor" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="counter-classic">
                      <h3 className="counter-classic-number">
                        <span className="counter">12</span>
                      </h3>
                      <h6 className="counter-classic-title">new clients</h6>
                      <div className="counter-classic-decor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Suscribe to our newsletter*/}
          {/* <NewsLetter /> */}
        </>
      )}

      {/* <!-- Latest news--> */}
      {/* <LatestNews /> */}
    </div>
  );
};

export default Home;
