"use client";
import NewsLetter from "@/components/newsLetter/NewsLetter";
import OurClients from "@/components/ourClients/OurClients";
import { AllScriptLoad } from "@/constant/scriptFiles";
import React, { useEffect } from "react";
import TeamData from "../../constant/TeamData.json";
import Link from "next/link";
import Header from "@/components/header/Header";
const AboutUs = () => {
  useEffect(() => {
    AllScriptLoad();
  }, []);
  const Title = "About Us | STS Infracon";
  const Description =
    "STS Infracon Private Limited is a reputed Engineering, Procurement, Construction (EPC) company based in Gurgaon, India.";
  const Url = "https://stsinfracon.com/about/";
  const Keywords = "";
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          content="	https://stsinfracon.com//assets/images/STS-logo.png"
        />
        <meta property="og:url" content={Url} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={Url} />
        <meta
          name="twitter:card"
          content="https://stsinfracon.com//assets/images/STS-logo.png"
        />
        <meta name="twitter:title" content={Title} />
        <meta name="twitter:description" content={Description} />
        <meta
          name="twitter:image"
          content="https://stsinfracon.com//assets/images/STS-logo.png"
        />
      </head>
      <div>
        <Header />
        <section className="bg-gray-7">
          <div className="breadcrumbs-custom box-transform-wrap context-dark">
            <div className="container pt-10 sm:pt-0">
              <h3 className="breadcrumbs-custom-title">About Us</h3>
              <div className="breadcrumbs-custom-decor" />
            </div>
            <div
              className="box-transform"
              style={{
                backgroundImage: "url(/assets/images/bg-typography.jpg)",
              }}
            />
          </div>
          <div className="container">
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link href="/">Home</Link>
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
                <h5 className="text-spacing-200">Civil Engineering Experts</h5>
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
                    data-wow-delay=".3s"
                  >
                    <a href="#tabs-4-4" data-toggle="tab">
                      Company Background
                    </a>
                  </li>
                  <li
                    className="list-category-item wow fadeInRight"
                    role="presentation"
                    data-wow-delay=".3s"
                  >
                    <a href="#tabs-5-5" data-toggle="tab">
                      What We Do
                    </a>
                  </li>
                  <li
                    className="list-category-item wow fadeInRight"
                    role="presentation"
                    data-wow-delay=".1s"
                  >
                    <a href="#tabs-4-2" data-toggle="tab">
                      Our Mission & Vision
                    </a>
                  </li>
                </ul>
                <Link
                  className="button button-lg button-primary button-winona"
                  href="/contact"
                >
                  Contact us
                </Link>
              </div>
              <div className="col-lg-8 col-xl-9">
                {/* Tab panes*/}
                <div className="tab-content tab-content-1">
                  <div className="tab-pane fade show active" id="tabs-4-1">
                    <h4>Overview</h4>
                    <p className="text-justify">
                      STS Infracon Private Limited is a reputed Engineering,
                      Procurement, Construction (EPC) company incorporated in
                      2018. With a team of young, energetic professionals driven
                      by a passion for engineering and construction, STS
                      Infracon has shaken industry norms by providing innovative
                      solutions to highly complex projects and meeting tight
                      deadlines with awe-inspiring efficiency.
                    </p>

                    <p className="text-justify">
                      Consistently outperforming industry benchmarks, STS
                      Infracon has a clean, green, and safe work culture
                      inspiring dedication for effecting change in the
                      infrastructural landscape of India.
                    </p>

                    <h5 className="mb-3 mt-5">Where We Excel: </h5>
                    <div class="flex flex-col justify-start p-4 sm:w-full w-full">
                      {/* <ul class="list-disc"> */}
                      <li className="mb-2">Road and Highway Projects</li>
                      <li className="mb-2">Railway and Metro Projects</li>
                      <li className="mb-2">Airport Projects</li>

                      <li className="mb-2">
                        Transmission Line, Sub-station and Distribution Works
                      </li>

                      {/* </ul> */}
                    </div>

                    <img
                      src="/assets/images/about-1-835x418.jpg"
                      alt
                      width={835}
                      height={418}
                    />
                  </div>
                  <div className="tab-pane fade" id="tabs-4-2">
                    <h4>
                      OUR <span className="text-[#ef7c14]">Vision</span>
                    </h4>
                    <p className="text-justify">
                      Sustainability, efficiency, and timely delivery of
                      projects is our vision at STS Infracon. Fueled by a
                      passion to develop magnificent structures, our team aims
                      to transform the structural landscape of India.
                    </p>
                    <h4 className="mt-10">
                      Our <span className="text-[#ef7c14]"> Mission</span>
                    </h4>

                    <p className="text-justify">
                      Our mission is to achieve excellence through adhering to
                      international standards of quality and delivering
                      world-class performance.
                    </p>
                    <p className="text-justify">
                      We at STS Infracon, equipped with the knowledge and
                      ability to plan, supervise, and implement with high
                      efficiency, aim to complete projects as per any and all
                      clients’ needs.
                    </p>

                    <img
                      src="/assets/images/about-2-835x418.jpg"
                      alt
                      width={835}
                      height={418}
                    />
                  </div>
                  <div className="tab-pane fade" id="tabs-4-3">
                    <img
                      src="/assets/images/about-3-835x418.jpg"
                      alt
                      width={835}
                      height={418}
                    />
                  </div>
                  <div className="tab-pane fade" id="tabs-4-4">
                    <h4>Company Background</h4>
                    <p className="text-justify">
                      <b> STS INFRACON PRIVATE LIMITED(STSIPL)</b>, earlier
                      known as Stroytech Service India Pvt. Ltd., is a reputable
                      Engineering, Procurement, and Construction (EPC)
                      Management Company, incorporated on 4th April 2018, in
                      India. STSIPL has a registered office in Gurugram,
                      Haryana. We believe in quality engineering and timely
                      construction. Accompanied by a wealth of experience in
                      infrastructure projects, we aim to become the first choice
                      of clients, vendors, and those who seek to associate with
                      us. We believe in a dedicated client-centric approach and
                      a continuous quest for excellence. Comprised of a team of
                      civil engineering elites determined to construct lasting
                      edifices, the team at STS Infracon aims to upgrade the
                      structural landscape of India through accomplishing
                      impactful projects in the commercial and infrastructural
                      spheres of the nation.
                    </p>
                    <p className="text-justify">
                      STS INFRACON PRIVATE LIMITED is a part of{" "}
                      <span className="text-[#ef7c14]">
                        <b> SUN OVERSEAS GROUP.</b>
                      </span>{" "}
                      Incorporated in 1996, in India, Sun Overseas is associated
                      with reputed Indian infrastructure companies, assisting
                      them in locating suitable, qualified overseas partners as
                      collaborators to execute projects in India.
                    </p>
                    <p className="pb-4 text-black ">
                      <b>Our Group of Companies: </b>
                    </p>
                    <div className="flex flex-col justify-start">
                      <ul className="list-disc">
                        <li>
                          <b>Sun Overseas</b>
                        </li>
                        <li>STS Infracon Private Limited</li>
                        <li>Garni Foods</li>
                        <li>Euro Sun India Private Limited</li>
                        <li>Eurosun Healthcare</li>
                        <li>Plassey Technologies</li>
                        <li>Bella Mente Edu Solutions Private Limited</li>
                        <li>Adhyayanam Academy</li>
                        <li>Prasun Developers</li>
                      </ul>
                    </div>

                    <img
                      src="/assets/images/about-4-835x418.jpg"
                      alt
                      width={835}
                      height={418}
                    />
                  </div>
                  <div className="tab-pane fade" id="tabs-5-5">
                    <h4>What We Do</h4>
                    <p className="text-justify">
                      Led by a team of elites in the field of infrastructure and
                      construction, we at STS Infracon have built highways,
                      metropolitan railway networks, airport terminals,
                      multistory buildings, and standard railway networks, among
                      other infrastructure projects. The completion of our
                      projects has resulted in the transformation of cityscapes
                      and landscapes with structures of immense opulence.
                    </p>
                    <p className="text-justify">
                      The capabilities of our team at STS Infracon span the
                      entire spectrum of civil engineering. Thus, our services
                      extend to all core sector industries and infrastructure
                      projects. The foundation of our success is dedication and
                      timely service to our clients, inculcating a culture of
                      high spirit amongst our vendors and associates.
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
        {/* <section className="section section-lg bg-gray-100">
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
      </section> */}
        {/* Our History*/}
        <section className="section section-lg bg-gray-100 text-left section-relative ">
          <div className="container">
            <div className="row row-60 justify-content-center justify-content-xxl-between">
              <div className="col-lg-6 col-xxl-5 position-static">
                <h3>Our history</h3>
                <div className="tabs-custom" id="tabs-5">
                  <div className="tab-content tab-content-1">
                    <div className="tab-pane fade active show" id="tabs-5-1">
                      <h5 className="font-weight-normal text-transform-none text-spacing-75">
                        Celebrating Over 25 Years of Effecting Change
                      </h5>
                      <p>
                        Under the aegis of Sun Overseas, STS Infracon has become
                        a symbol of engineering success in India.
                      </p>
                    </div>
                  </div>
                  <div className="list-history-wrap">
                    <ul className="nav list-history">
                      <li className="list-history-item" role="presentation">
                        <a href="#tabs-5-1" data-toggle="tab">
                          <div className="list-history-circle" />
                          1996
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
                          2018
                        </a>
                      </li>
                      <li className="list-history-item" role="presentation">
                        <a
                          className="active"
                          href="#tabs-5-4"
                          data-toggle="tab"
                        >
                          <div className="list-history-circle" />
                          2024
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
        {/* Our Team*/}
        <section className="section section-lg section-bottom-md-70 bg-default">
          <div className="container">
            <h3 className="oh flex justify-center">
              <span
                className="d-inline-block wow slideInUp "
                data-wow-delay="0s"
              >
                Our team
              </span>
            </h3>
            <div className=" justify-start mt-5 ">
              {TeamData.map((team) => (
                <div className="row row-lg row-40 bg-[#edecec] p-10">
                  <div
                    className={`col-sm-12 col-lg-3 wow  ${team.className}`}
                    data-wow-delay=".2s"
                    data-wow-duration="1s"
                    role="button"
                  >
                    <article className="team-modern">
                      <div className="team-modern-figure">
                        <img src={team.image} alt width={270} height={236} />
                      </div>
                      <div className="team-modern-caption">
                        <h6 className="team-modern-name">
                          <p>{team.name}</p>
                        </h6>
                        <div className="team-modern-status">
                          {team.position}
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className=" col-sm-12  col-lg-9">
                    <ul className="list-inline font-semibold  text-justify text-[#323d60]">
                      <li>{team.paragraph}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our clients*/}
        {/* <OurClients awards={false} /> */}
        {/* Subscribe to Our Newsletter*/}
        {/* <NewsLetter /> */}
      </div>
    </>
  );
};

export default AboutUs;
