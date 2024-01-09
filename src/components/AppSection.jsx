import React from "react";

const AppSection = () => {
  return (
    <>
      {/* history area start */}
      <section className="history__area-5 pt-5" style={{ background: 'black' }}>
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="digibold-section-wrapper-5"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <h2 className="section-subtitle-5 heading-animation">
                  APLICATIVO
                </h2>
                <h3 className="section-title-5 heading-animation">
                  Online, completo, intuitivo e acessível
                </h3>
              </div>
              <div className="history__content-5">
                <p className="text-white justify__text mb-4">Seja para uma consulta de rotina ou uma situação de emergência, estamos ao seu lado para garantir que seu amigo receba o melhor tratamento possível.</p>
                <p className="text-white justify__text">Com apenas alguns cliques no app USO, você pode facilmente contratar, gerenciar o seguro do seu pet, agendar consultas e acessar serviços, proporcionando a tranquilidade que você e seu pet merecem.</p>
              </div>

              <div className="d-flex flex-column align-items-start justify-content-start gap-5 py-5">
                <div className="d-flex align-items-start gap-4">
                  <div className="service__thumb-5">
                    <img src="assets/imgs/home-5/s3.png" alt="service-icon" />
                  </div>
                  <div className="service__content-5">
                    <h3 className="service__item-title">Facilidade e Flexibilidade no Pagamento</h3>
                    <p>Tudo que você precisa de maneira ágil e otimizada na palma da sua mão.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-4">
                  <div className="service__thumb-5">
                    <img src="assets/imgs/home-5/s3.png" alt="service-icon" />
                  </div>
                  <div className="service__content-5">
                    <h3 className="service__item-title">Pague mensal via cartão de crédito sem bloquear seu Limite!</h3>
                    <p>Meio fácil de pagamento para melhor acessibilidade de seu plano.</p>
                  </div>
                </div>
              </div>

              <div className="newsletter__form-wrapper-5">
                <a href="/">
                  <img width={250} height={88} src="https://play.google.com/intl/pt-BR/badges/static/images/badges/pt-br_badge_web_generic.png" alt="" />
                </a>
                <a href="/">
                  <img width={250} src="https://www.gov.br/pt-br/imagens-de-servicos/apple.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="history__thumb-5"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <img
                  src="assets/imgs/pet__mobile_img.jpg"
                  alt=""
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

export default AppSection;
