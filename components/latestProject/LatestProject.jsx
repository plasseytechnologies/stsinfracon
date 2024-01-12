import React from "react";

const LatestProject = () => {
  return (
    <div>
      <section className="section section-inset-8 bg-image-5 context-dark text-center">
        <div className="container">
          <h3 className="oh-desktop">
            <span className="d-inline-block wow slideInDown">
              Featured projects
            </span>
          </h3>
          <div className="owl-style-4">
            <div
              className="owl-carousel dots-style-2"
              data-items={1}
              data-md-items={2}
              data-margin={30}
              data-md-margin={0}
              data-nav="true"
              data-dots="true"
              data-smart-speed={400}
              data-autoplay="true"
            >
              {/* Project Classic*/}
              <article className="project-classic">
                <a className="project-classic-figure" href="project-page.html">
                  <img
                    src="/assets/images/project-7-570x370.jpg"
                    alt
                    width={570}
                    height={370}
                  />
                </a>
                <div className="project-classic-caption">
                  <h5 className="project-classic-title">
                    <a href="project-page.html">
                      Wilson &amp; Taylor Concert Hall and Entertainment Center
                      (2021)
                    </a>
                  </h5>
                  <div className="project-classic-location">
                    <span className="icon mdi mdi-map-marker" />
                    <span>florida</span>
                  </div>
                  <p className="project-classic-text">
                    Civil Group provided engineering design and planning for
                    this project completed in early 2021.
                  </p>
                </div>
              </article>
              {/* Project Classic*/}
              <article className="project-classic">
                <a className="project-classic-figure" href="project-page.html">
                  <img
                    src="/assets/images/project-8-570x370.jpg"
                    alt
                    width={570}
                    height={370}
                  />
                </a>
                <div className="project-classic-caption">
                  <h5 className="project-classic-title">
                    <a href="project-page.html">
                      West Oakland Bridge: Project Design and Initial Planning
                      (2021)
                    </a>
                  </h5>
                  <div className="project-classic-location">
                    <span className="icon mdi mdi-map-marker" />
                    <span>California</span>
                  </div>
                  <p className="project-classic-text">
                    Our team of engineers cooperated with Dynamics construction
                    company on this ambitious project.
                  </p>
                </div>
              </article>
              {/* Project Classic*/}
              <article className="project-classic">
                <a className="project-classic-figure" href="project-page.html">
                  <img
                    src="/assets/images/project-7-570x370.jpg"
                    alt
                    width={570}
                    height={370}
                  />
                </a>
                <div className="project-classic-caption">
                  <h5 className="project-classic-title">
                    <a href="project-page.html">
                      Wilson &amp; Taylor Concert Hall and Entertainment Center
                      (2021)
                    </a>
                  </h5>
                  <div className="project-classic-location">
                    <span className="icon mdi mdi-map-marker" />
                    <span>florida</span>
                  </div>
                  <p className="project-classic-text">
                    Civil Group provided engineering design and planning for
                    this project completed in early 2021.
                  </p>
                </div>
              </article>
              {/* Project Classic*/}
              <article className="project-classic">
                <a className="project-classic-figure" href="project-page.html">
                  <img
                    src="/assets/images/project-8-570x370.jpg"
                    alt
                    width={570}
                    height={370}
                  />
                </a>
                <div className="project-classic-caption">
                  <h5 className="project-classic-title">
                    <a href="project-page.html">
                      West Oakland Bridge: Project Design and Initial Planning
                      (2021)
                    </a>
                  </h5>
                  <div className="project-classic-location">
                    <span className="icon mdi mdi-map-marker" />
                    <span>California</span>
                  </div>
                  <p className="project-classic-text">
                    Our team of engineers cooperated with Dynamics construction
                    company on this ambitious project.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestProject;
