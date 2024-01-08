import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
const AboutOne = () => {
  return (
    <>
      {/* About area start */}
      <section className="about__area pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
              <div className="about__imgs" data-aos="fade-up">
                <div className="image-1">
                  <img src="assets/imgs/about/1.png" alt="digibold" />
                  <Link
                    className="play popup-link"
                    to="https://www.youtube.com/watch?v=FYpsf0ACkmI"
                  >
                    <i className="fa-solid fa-play" />
                  </Link>
                </div>
                <div className="image-2">
                  <img src="assets/imgs/about/2.png" alt="digibold" />
                </div>
                <div className="bell">
                  <span>
                    <i className="fa-regular fa-bell" />
                  </span>
                </div>
                <div className="projects">
                  <img src="assets/imgs/icon/medal.png" alt="Medal Icon" />
                  <div>
                    <span className="counter_fast">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <span className="d-inline-flex">
                              <CountUp delay={0} start={0} end={230} />{" "}
                              <span>+</span>
                            </span>
                          )
                        }
                      </TrackVisibility>
                    </span>
                    Project Complete
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
              <div
                className="about__content"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <h2 className="sec-subtitle heading-animation">
                  ABOUT US <span>About Us</span>
                </h2>
                <h3 className="sec-title">
                  Innovative solutions for a digital world
                </h3>
                <p>
                  Which is the same as saying through shrinking from toil and
                  pain. These cases are many perfectly simple and easy to
                  distinguish. In a free hour this when our power of choice is
                  untrammelled and when nothing prevents
                </p>
                <ul>
                  <li>How to improve your busines for Helping us </li>
                  <li>making this the first true generator on the Internet</li>
                  <li>Creative this the first true generator on the designe</li>
                </ul>
                <Link className="db-btn-arrow" to="/about">
                  Read More <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/imgs/shape/6.png"
          alt="Zigzag Shape"
          className="shape"
        />
      </section>
      {/* About area end */}
    </>
  );
};

export default AboutOne;
