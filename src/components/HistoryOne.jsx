import React from "react";

const HistoryOne = () => {
  return (
    <>
      {/* history area start */}
      <section className="pb-0 history__area-5 pt-5" style={{ background: 'black' }}>
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-7">
              <div
                className="digibold-section-wrapper-5"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <h3 className="section-title-5 heading-animation">
                  Online, completo,<br />intuitivo e acessível
                </h3>
              </div>
              {/* <div className="history__content-5">
                <p className="text-white justify__text mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt magni id blanditiis eaque cumque dolore recusandae fugiat porro perspiciatis cupiditate, dolores non sunt nostrum delectus illum ipsa vero odit.</p>
                <p className="text-white justify__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt magni id blanditiis eaque cumque dolore recusandae fugiat porro perspiciatis cupiditate, dolores non sunt nostrum delectus illum ipsa vero odit.</p>
              </div>

              <div className="d-flex flex-column align-items-start justify-content-start gap-5 py-5">
                <div className="d-flex align-items-start gap-4">
                  <div className="service__thumb-5">
                    <img src="assets/imgs/home-5/s3.png" alt="service-icon" />
                  </div>
                  <div className="service__content-5">
                    <h3 className="service__item-title">Completo</h3>
                    <p>Com tudo que você precisa.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-4">
                  <div className="service__thumb-5">
                    <img src="assets/imgs/home-5/s3.png" alt="service-icon" />
                  </div>
                  <div className="service__content-5">
                    <h3 className="service__item-title">Acessível</h3>
                    <p>Compatível com todos os sistemas operacionais.</p>
                  </div>
                </div>
              </div> */}

              <div className="newsletter__form-wrapper-5">
                <a href="/">
                  <img width={250} src="https://play.google.com/intl/pt-BR/badges/static/images/badges/pt-br_badge_web_generic.png" alt="" />
                </a>
                <a href="/">
                  <img width={250} src="https://www.gov.br/pt-br/imagens-de-servicos/apple.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <img
              className="rounded"
                  src="assets/imgs/app_woman.jpg"
                  alt=""
                  data-lag="0.3"
                />
            </div>
          </div>
        </div>
      </section>
      {/* history area end */}
    </>
  );
};

export default HistoryOne;
