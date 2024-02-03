import React from "react";
import HowCan from "../../constant/HowCan.json";
const LatestProject = () => {
  return (
    <div>
      <section className="section section-inset-8 bg-image-5 context-dark text-center">
        <div className="container">
          <h3 className="oh-desktop">
            <span className="d-inline-block wow slideInDown">
              Our Expertise
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
              {HowCan?.map((item) => (
                <>
                  <article className="project-classic">
                    <div className="project-classic-figure">
                      <img src={item?.image} alt width={570} height={370} />
                    </div>
                    <div className="project-classic-caption">
                      <h5 className="project-classic-title">
                        <p>{item?.name}</p>
                      </h5>
                      {/* <div className="project-classic-location">
                    <span className="icon mdi mdi-map-marker" />
                    <span>florida</span>
                  </div> */}
                      {/* <p className="project-classic-text">
                    Civil Group provided engineering design and planning for
                    this project completed in early 2021.
                  </p> */}
                    </div>
                  </article>
                </>
              ))}

              {/* Project Classic*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestProject;
