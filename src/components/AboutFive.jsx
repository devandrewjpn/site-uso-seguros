import React from "react";

const AboutFive = () => {
  return (
    <>
      {/* About area start */}
      <section className="about__area-4 pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-xl-5 col-md-5">
              <div
                className="about__imgs-4"
                data-aos="fade-right"
                data-aos-delay={300}
              >
                <img
                  className="img-2"
                  src="assets/imgs/about__bg_circle.png"
                  alt="digibold"
                />
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-xl-7 col-md-7 pt-100">
              <div className="about__content-4">
                <h3 className="sec-title heading-animation text-white">
                  Problemas na Viagem?<br />Envie um WhatsApp e resolvemos na Hora!
                </h3>
                <ul className="my-3">
                  <li>
                    <a href="https://api.whatsapp.com/send/?phone=551132302118" className="text__link text-white d-flex align-items-center" target="_blank" rel="noreferrer">
                      <i class="fs-2 fa-brands fa-square-whatsapp me-3 text-green"></i>Brasil +55 (11) 32302118
                    </a>
                  </li>
                  <li>
                    <a href="https://api.whatsapp.com/send/?phone=34910606975" className="text__link text-white d-flex align-items-center" target="_blank" rel="noreferrer">
                      <i class="fs-2 fa-brands fa-square-whatsapp me-3 text-green my-2"></i>Europa +34 (91) 0606975
                    </a>
                  </li>
                  <li>
                    <a href="https://api.whatsapp.com/send/?phone=17862091976" className="text__link text-white d-flex align-items-center" target="_blank" rel="noreferrer">
                      <i class="fs-2 fa-brands fa-square-whatsapp me-3 text-green"></i>EUA +1 (786) 2091976
                    </a>
                  </li>
                </ul>
                <div className="p-animation">
                  <p className="h5">* Atendimento em Português, Todos os Dias do Ano!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About area end */}
    </>
  );
};

export default AboutFive;
