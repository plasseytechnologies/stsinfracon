"use client";
import React, { useEffect } from "react";

const CompanyCTA = () => {
  return (
    <div>
      <section
        className="section parallax-container"
        data-parallax-img="./assets/images/bg-cta.jpg"
      >
        <div className="parallax-content section-lg context-dark text-md-left">
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-sm-7 col-md-6 col-lg-5">
                <div className="cta-classic">
                  <h4 className="cta-classic-title wow fadeInLeft">
                    Creating efficient infrastructure since 1994
                  </h4>
                  <p
                    className="cta-classic-text wow fadeInRight"
                    data-wow-delay=".1s"
                  >
                    We provide efficient civil engineering solutions.
                  </p>
                  <a
                    className="button button-lg button-primary button-winona wow fadeInUp"
                    href="services.html"
                    data-wow-delay=".2s"
                  >
                    Our services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyCTA;
