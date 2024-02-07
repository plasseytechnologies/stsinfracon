"use client";
import Header from "@/components/header/Header";
import { AllScriptLoad } from "@/constant/scriptFiles";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { sendContactForm } from "@/utils/ContactApi";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handerChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const submitHandler = async () => {
    console.log(form);
    const { name, email, phoneNumber, message } = form;

    const res = await sendContactForm({
      name,
      email,
      phoneNumber,
      message,
      subject: "Contact Form ",
    });
    console.log(res);
    if (res.success) {
      setForm({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    }
  };
  useEffect(() => {
    AllScriptLoad();
  }, []);
  const Title = "Contact Us : STS Infracon Private Limited";
  const Description =
    ":   Contact with STS Infracon effortlessly through call or mails. Reach out for inquiries, collaboration, or project discussions, and let's build a future of innovation together";
  const Url = "https://stsinfracon.com/contact  ";
  const Keywords = "";
  return (
    <div>
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
      <div>
        <section className="bg-gray-7">
          <div className="breadcrumbs-custom box-transform-wrap context-dark">
            <div className="container pt-10 sm:pt-0">
              <h3 className="breadcrumbs-custom-title">Contact Us</h3>
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
              {/* <li>
                <a href="#">Pages</a>
              </li> */}
              <li className="active">Contact</li>
            </ul>
          </div>
        </section>
        {/* Contacts*/}
        <section className="section section-lg bg-default text-md-left">
          <div className="container">
            <div className="row row-60 justify-content-center">
              <div className="col-lg-8">
                <h4 className="text-spacing-25 text-transform-none">
                  Get in Touch!
                </h4>
                <form className="rd-form rd-mailform" onSubmit={submitHandler}>
                  <div className="row row-20 gutters-20">
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <input
                          className="form-input"
                          id="contact-your-name-5"
                          type="text"
                          name="name"
                          onChange={handerChange}
                          data-constraints="@Required"
                        />
                        <label
                          className="form-label"
                          htmlFor="contact-your-name-5"
                        >
                          Your Name*
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <input
                          className="form-input"
                          id="contact-email-5"
                          type="email"
                          name="email"
                          onChange={handerChange}
                          data-constraints="@Email @Required"
                        />
                        <label className="form-label" htmlFor="contact-email-5">
                          E-mail*
                        </label>
                      </div>
                    </div>
                    {/* <div className="col-md-6">
                      <div className="form-wrap">
                       
                        <select
                          className="form-input"
                          data-minimum-results-for-search="Infinity"
                          data-constraints="@Required"
                        >
                          <option value={1}>Select a Service</option>
                          <option value={2}>Value Engineering</option>
                          <option value={3}>HVAC Design</option>
                          <option value={4}>Geospatial Design</option>
                        </select>
                      </div>
                    </div> */}
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <input
                          className="form-input"
                          id="contact-phone-5"
                          type="text"
                          name="phoneNumber"
                          onChange={handerChange}
                          data-constraints="@Numeric"
                        />
                        <label className="form-label" htmlFor="contact-phone-5">
                          Phone Number*
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-wrap">
                        <label
                          className="form-label"
                          htmlFor="contact-message-5"
                        >
                          Message
                        </label>
                        <textarea
                          className="form-input textarea-lg"
                          id="contact-message-5"
                          name="message"
                          onChange={handerChange}
                          data-constraints="@Required"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="button button-secondary button-winona"
                    type="submit"
                  >
                    Contact us
                  </button>
                </form>
              </div>
              <div className="col-lg-4">
                <div className="aside-contacts">
                  <div className="row row-30">
                    <div className="col-sm-6 col-lg-12 aside-contacts-item">
                      <p className="aside-contacts-title">Social Media</p>
                      <ul className="list-inline contacts-social-list list-inline-sm">
                        <li>
                          <a
                            className="icon mdi mdi-linkedin"
                            target="blank"
                            href="https://www.linkedin.com/company/stsinfraconpvtltd/"
                          />
                        </li>
                        <li>
                          <a className="icon mdi mdi-instagram" href="#" />
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-lg-12 aside-contacts-item">
                      <p className="aside-contacts-title">Phone</p>
                      <div className="unit unit-spacing-xs justify-content-center justify-content-md-start">
                        <div className="unit-left">
                          <span className="icon mdi mdi-phone" />
                        </div>
                        <div className="unit-body">
                          <p className="phone">+91-124-4653435</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-12 aside-contacts-item">
                      <p className="aside-contacts-title">E-mail</p>
                      <div className="unit unit-spacing-xs justify-content-center justify-content-md-start">
                        <div className="unit-left">
                          <span className="icon mdi mdi-email-outline" />
                        </div>
                        <div className="unit-body">
                          <p className="mail">hr@stsinfracon.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-12 aside-contacts-item">
                      <p className="aside-contacts-title">Address</p>
                      <div className="unit unit-spacing-xs justify-content-center justify-content-md-start">
                        <div className="unit-left">
                          <span className="icon mdi mdi-map-marker" />
                        </div>
                        <div className="unit-body">
                          <p className="address">
                            307, 3rd Floor, Eros City Square, Rosewood City,{" "}
                            <br className="d-md-none" />
                            Sector 49-50, Gurugram, Haryana-122018
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
