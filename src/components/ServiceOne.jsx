import React from "react";
import { Link } from "react-router-dom";

const ServiceOne = () => {
  return (
    <>
      {/* Service area start */}
      <section className="service__area pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-xl-7 col-md-7">
              <div className="service__title-wrap" data-aos="fade-up">
                <h2 className="sec-subtitle">
                  best service <span>best service</span>
                </h2>
                <h3 className="sec-title">
                  Innovative solutions for <br /> a digital world
                </h3>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-xl-5 col-md-5">
              <div
                className="service__text"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <p>
                  Which is the same as saying through shrinking from toil and
                  pain in These cases are many perfectly simple and easy to
                  distinguish thiIn a free hour this when
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-4">
              <div className="service__item" data-aos="fade-up">
                <div className="icon">
                  <img src="assets/imgs/icon/s3.png" alt="Service Icon" />
                </div>
                <div className="service__content">
                  <Link to="/service-details">
                    <div className="service__title">Pixel Perfect Design</div>
                  </Link>
                  <p>
                    Health and medical is a encompasses a wide range of topics
                    related to health
                  </p>
                  <Link className="db-btn-arrow" to="/service-details">
                    Read More <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-4">
              <div
                className="service__item"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="icon">
                  <img src="assets/imgs/icon/s1.png" alt="Service Icon" />
                </div>
                <div className="service__content">
                  <Link to="/service-details">
                    <div className="service__title">
                      Creative Edge Solutions
                    </div>
                  </Link>
                  <p>
                    Health and medical is a encompasses a wide range of topics
                    related to health
                  </p>
                  <Link className="db-btn-arrow" to="/service-details">
                    Read More <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-xl-4 col-md-4">
              <div
                className="service__item"
                data-aos="fade-up"
                data-aos-delay={1000}
              >
                <div className="icon">
                  <img src="assets/imgs/icon/s2.png" alt="Service Icon" />
                </div>
                <div className="service__content">
                  <Link to="/service-details">
                    <div className="service__title">The Pixel Producers</div>
                  </Link>
                  <p>
                    Health and medical is a encompasses a wide range of topics
                    related to health
                  </p>
                  <Link className="db-btn-arrow" to="/service-details">
                    Read More <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service area end */}
    </>
  );
};

export default ServiceOne;
