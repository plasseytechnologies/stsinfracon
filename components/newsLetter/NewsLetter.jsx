import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <section
        className="section parallax-container "
        data-parallax-img="./assets/images/bg-forms-1.jpg"
      >
        <div className="parallax-content section-md context-dark text-md-left">
          <div className="container">
            <div className="row row-30 justify-content-center align-items-center">
              <div className="col-lg-4 col-xl-3">
                <h5 className="oh-desktop">
                  <span className="d-inline-block wow slideInUp">
                    Newsletter
                  </span>
                </h5>
                <p className="oh-desktop">
                  <span className="d-inline-block wow slideInDown">
                    Sign up to our newsletter to receive the latest news.
                  </span>
                </p>
              </div>
              <div className="col-lg-8 col-xl-9">
                {/* RD Mailform*/}
                <div className="block-center">
                  <form
                    className="rd-form rd-mailform rd-form-inline oh-desktop rd-form-inline-lg"
                    data-form-output="form-output-global"
                    data-form-type="subscribe"
                    method="post"
                    action="bat/rd-mailform.php"
                  >
                    <div className="form-wrap wow slideInUp">
                      <input
                        className="form-input"
                        id="subscribe-form-0-email"
                        type="email"
                        name="email"
                        data-constraints="@Email @Required"
                      />
                      <label
                        className="form-label"
                        htmlFor="subscribe-form-0-email"
                      >
                        Your E-mail*
                      </label>
                    </div>
                    <div className="form-button wow slideInRight">
                      <button
                        className="button button-winona button-lg button-primary"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
