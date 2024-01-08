import React from "react";

const WhoWeAreOne = () => {
  return (
    <>
      {/* Who we are area start */}
      <section className="who__area pt-170 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-6">
              <div className="who__left">
                <div className="sec-title-wrap" data-aos="fade-up">
                  <h2 className="sec-subtitle">
                    who we are <span>who we are</span>
                  </h2>
                  <h3 className="sec-title">
                    Transforming ideas <br /> into reality
                  </h3>
                </div>
                <div className="who__features">
                  <div
                    className="who__feature"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <div className="number">
                      <span>01</span>
                    </div>
                    <div className="who__content">
                      <h4 className="title">Creative Craze</h4>
                      <p>
                        Health and medical is a encompasses a wide range of
                        topics related to health
                      </p>
                    </div>
                  </div>
                  <div
                    className="who__feature"
                    data-aos="fade-up"
                    data-aos-delay={600}
                  >
                    <div className="number">
                      <span>02</span>
                    </div>
                    <div className="who__content">
                      <h4 className="title">Art on Mine</h4>
                      <p>
                        Health and medical is a encompasses a wide range of
                        topics related to health
                      </p>
                    </div>
                  </div>
                  <div
                    className="who__feature"
                    data-aos="fade-up"
                    data-aos-delay={900}
                  >
                    <div className="number">
                      <span>03</span>
                    </div>
                    <div className="who__content">
                      <h4 className="title">Agencey Power</h4>
                      <p>
                        Health and medical is a encompasses a wide range of
                        topics related to health
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-6">
              <div
                className="who__right"
                // data-aos="fade-left"
                // data-aos-delay={1000}
              >
                <div className="main-img">
                  <img src="assets/imgs/who/1.png" alt="Imageed" />
                </div>
                <div className="who__project">
                  <div className="project-completed">
                    <img src="assets/imgs/who/hand.png" alt="Hand " />
                    <h3 className="total counter_fast">2k+</h3>
                    <p>Project Completed</p>
                  </div>
                </div>
                <img
                  src="assets/imgs/shape/7.png"
                  alt="Shape"
                  className="shape"
                />
                <img
                  src="assets/imgs/shape/8.png"
                  alt="Shape"
                  className="shape-2"
                />
                <img
                  src="assets/imgs/shape/9.png"
                  alt="Shape"
                  className="shape-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Who we are area end */}
    </>
  );
};

export default WhoWeAreOne;
