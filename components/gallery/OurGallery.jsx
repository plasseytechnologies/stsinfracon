import React from "react";

const OurGallery = ({ data, name }) => {
  return (
    <div>
      <section className="section  bg-default text-center">
        <div className="container">
          <h3 className="oh-desktop">
            <span className="d-inline-block wow slideInUp">{name}</span>
          </h3>
        </div>
        <div className="container-fluid container-inset-0">
          <div
            className="row row-30 row-desktop-8 gutters-8 hoverdir"
            data-lightgallery="group"
          >
            {data?.map((item) => (
              <>
                <div className="col-sm-6 col-lg-4 col-xxl-3 mb-3">
                  <div className="oh-desktop">
                    {/* Thumbnail Modern*/}
                    <article
                      className="thumbnail thumbnail-modern wow slideInUp hoverdir-item"
                      data-hoverdir-target=".thumbnail-modern-caption"
                    >
                      <a
                        className="thumbnail-modern-figure"
                        href={item?.offerImage}
                        data-lightgallery="item"
                      >
                        <img
                          src={item?.offerImage}
                          alt
                          style={{ width: "474px", height: "270px" }}
                        />
                      </a>
                      <div className="thumbnail-modern-caption">
                        <h5 className="thumbnail-modern-title">
                          <p>{item?.offerName}</p>
                        </h5>
                      </div>
                    </article>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurGallery;
