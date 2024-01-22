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
    setTimeout(() => {
      loadScripts();
    }, 2000);
  }, []);

  return (
    <div>
      {loader ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <HeroBanner />
          {/* What we offer*/}
          <WeOffer />
          {/* Section CTA*/}*
          <CompanyCTA />
          {/* Mining machinery*/}
          <OurGallery data={OurWork} name={"Our Work"} />
          {/* Latest Project*/}
          <LatestProject />
          {/* Section*/}
          <OurClients award={true} />
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
                      Ever since its inception, STS Infracon has lead by some of
                      the best veterans the civil engineering industry has to
                      offer.
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
                              <ul className="list-inline team-modern-social-list">
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
                              </ul>
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
