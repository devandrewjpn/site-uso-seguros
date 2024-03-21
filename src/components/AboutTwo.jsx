import React from "react";
import { Link } from "react-router-dom";

const AboutTwo = () => {
  return (
    <>
      {/* About area start */}
      <section className="about__area-6 pt-50 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6">
              <div className="about__imgs-6">
                <div className="image-1">
                  <img className="rounded" src="assets/imgs/telemedicina1.png" alt="astaton" />
                </div>
                <div className="image-2">
                  <img className="rounded" width={400} src="assets/imgs/telemedicina2.png" alt="astaton" />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-xl-6 col-md-6 pt-5">
              <div className="about__content-6">
                <h3 className="sec-title underline-2 text-white">
                  Conexão com a Excelência
                </h3>
                <h4 className="text-white mb-4 justify__text">
                  USO Viagens traz telemedicina do
                  Albert Einstein para você, 24h por dia
                </h4>
                <p className="justify__text text-white fw__300">
                  Com a USO Seguros, seu plano de viagem agora inclui atendimento virtual 24h do
                  renomado Hospital Israelita Albert Einstein. A saúde de qualidade está a apenas um
                  clique de distância – onde quer que você esteja.

                </p>
                <Link className="db-btn-arrow text-white" to="https://usoseguros.primesecure.com.br/" target="_blank">
                  Cotar agora <i className="fa-solid fa-arrow-right" />
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

export default AboutTwo;
