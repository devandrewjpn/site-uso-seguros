import React from "react";

const NewsletterTwo = () => {
  return (
    <>
      {/* news letter area start */}
      <section className="newsletter__area-5 py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="newsletter__title-5 heading-animation">
                Baixe nosso app e tenha
                os melhores planos
                na palma da sua mão!
              </h2>
            </div>
            <div className="col-lg-6">
              <div className="newsletter__form-wrapper-5">
                <a href="">
                  <img width={250} src="https://play.google.com/intl/pt-BR/badges/static/images/badges/pt-br_badge_web_generic.png" alt="" />
                </a>
                <a href="">
                  <img width={250} src="https://www.gov.br/pt-br/imagens-de-servicos/apple.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* news letter area end */}
    </>
  );
};

export default NewsletterTwo;
