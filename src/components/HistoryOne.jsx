import React from "react";

const HistoryOne = () => {
  return (
    <>
      {/* history area start */}
      <section className="history__area-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="digibold-section-wrapper-5"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <h2 className="section-subtitle-5 heading-animation">
                  CONFIANÇA
                </h2>
                <h3 className="section-title-5 heading-animation">
                  Online, completo, intuitivo e acessível
                </h3>
              </div>
              <div className="history__content-5">
                  <p className="text-white justify__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt magni id blanditiis eaque cumque dolore recusandae fugiat porro perspiciatis cupiditate, dolores non sunt nostrum delectus illum ipsa vero odit.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="history__thumb-5"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <img
                  src="https://img.freepik.com/free-photo/woman-wearing-medical-mask-while-having-video-call-her-smartphone_23-2148770446.jpg?w=1480&t=st=1704481895~exp=1704482495~hmac=6a179a9a9c830f128eb7d77028deac2f0f1b0f88e59dc240371bc815e6cc379d"
                  alt="history "
                  data-lag="0.3"
                />
                <div className="history__box-wrapper">
                  <div className="history__box-5">
                    <h2 className="title">Clientes</h2>
                    <h3 className="title-2">2000+</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* history area end */}
    </>
  );
};

export default HistoryOne;
