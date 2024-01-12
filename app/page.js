import AboutCompany from "@/components/aboutCompany/AboutCompany";
import CompanyCTA from "@/components/companyCTA/CompanyCTA";
import OurGallery from "@/components/gallery/OurGallery";
import HeroBanner from "@/components/hero/HeroBanner";
import LatestNews from "@/components/latestNews/LatestNews";
import LatestProject from "@/components/latestProject/LatestProject";
import NewsLetter from "@/components/newsLetter/NewsLetter";
import OurClients from "@/components/ourClients/OurClients";
import WeOffer from "@/components/weOffer/WeOffer";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      {/* About Company*/}
      {/* <AboutCompany /> */}
      {/* What we offer*/}
      <WeOffer />
      {/* Section CTA*/}*
      <CompanyCTA />
      {/* Mining machinery*/}
      <OurGallery />
      {/* Latest Project*/}
      <LatestProject />
      {/* Section*/}
      <OurClients />
      {/* Section*/}
      <section className="section section-xl bg-default text-md-left">
        <div className="container">
          <div className="row row-30">
            <div className="col-md-5 col-lg-4 col-xl-3">
              <div className="box-team">
                <h3 className="oh-desktop">
                  <span className="d-inline-block wow slideInUp">Our team</span>
                </h3>
                <h6
                  className="title-style-1 wow fadeInLeft"
                  data-wow-delay=".1s"
                >
                  Professional Civil engineering
                </h6>
                <p className="wow fadeInRight" data-wow-delay=".2s">
                  We are a team of dedicated and professional engineers and
                  project managers ready to help.
                </p>
                <div className="group-sm oh-desktop">
                  <div className="button-style-1 wow slideInLeft">
                    <span className="icon mdi mdi-email-outline" />
                    <span className="button-style-1-text">
                      <a href="contacts.html">Contact us</a>
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
                {/* Team Modern*/}
                <article className="team-modern">
                  <a className="team-modern-figure" href="#">
                    <img
                      src="/assets/images/team-18-270x236.jpg"
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
                {/* Team Modern*/}
                <article className="team-modern">
                  <a className="team-modern-figure" href="#">
                    <img
                      src="/assets/images/team-19-270x236.jpg"
                      alt
                      width={270}
                      height={236}
                    />
                  </a>
                  <div className="team-modern-caption">
                    <h6 className="team-modern-name">
                      <a href="#">John Smith</a>
                    </h6>
                    <div className="team-modern-status">
                      Construction Manager
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
                {/* Team Modern*/}
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
                {/* Team Modern*/}
                <article className="team-modern">
                  <a className="team-modern-figure" href="#">
                    <img
                      src="/assets/images/team-20-270x236.jpg"
                      alt
                      width={270}
                      height={236}
                    />
                  </a>
                  <div className="team-modern-caption">
                    <h6 className="team-modern-name">
                      <a href="#">Ben Fitzgerald</a>
                    </h6>
                    <div className="team-modern-status">Quantity Surveyor</div>
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
                {/* Team Modern*/}
                <article className="team-modern">
                  <a className="team-modern-figure" href="#">
                    <img
                      src="/assets/images/team-21-270x236.jpg"
                      alt
                      width={270}
                      height={236}
                    />
                  </a>
                  <div className="team-modern-caption">
                    <h6 className="team-modern-name">
                      <a href="#">John Tuff</a>
                    </h6>
                    <div className="team-modern-status">
                      Health &amp; Safety Manager
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
            </div>
          </div>
        </div>
      </section>
      {/* Suscribe to our newsletter*/}
      <NewsLetter />
      {/* <!-- Latest news--> */}
      <LatestNews />
    </div>
  );
};

export default Home;
