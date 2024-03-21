import React from "react";

const AppSection = () => {
  return (
    <>
      {/* history area start */}
      <section className="history__area-5 py-5" style={{ background: 'black' }}>
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="astaton-section-wrapper-5"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <h3 className="section-title-5 heading-animation">
                Mais de <span className="text__destaq">702 Clínicas</span> credenciadas em todo Brasil
                </h3>
              </div>
              <div className="history__content-5">
                <p className="text-white justify__text mb-4">Seja para uma consulta de rotina ou uma situação de emergência, estamos ao seu lado para garantir que seu amigo receba o melhor tratamento possível.</p>
                <p className="text-white justify__text">Com apenas alguns cliques no app USO, você pode facilmente contratar, gerenciar o seguro do seu pet, agendar consultas e acessar serviços, proporcionando a tranquilidade que você e seu pet merecem.</p>
              </div>

              <div className="newsletter__form-wrapper-5 mt-4">
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
                className="rounded"
                  src="https://img.freepik.com/fotos-gratis/cao-sendo-acariciado-por-mulher_23-2148567022.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705276800&semt=ais"
                  alt=""
                  data-lag="0.3"
                />
                {/* <div className="history__box-wrapper">
                  <div className="history__box-5">
                    <h2 className="title">Clientes</h2>
                    <h3 className="title-2">2000+</h3>
                  </div>
                </div> */}
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
