import React from "react";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    text: 'Download',
    description: 'Baixe app USO ou clique na opção contratar Assistência USO PET.'
  },
  {
    id: 2,
    text: 'Planos',
    description: 'Escolha seu plano que mais tem a ver com você.'
  },
  {
    id: 3,
    text: 'Instruções',
    description: 'Após contratação você receberá um e-mail/SMS com todas as informações e instruções para acessar os serviços.'
  },
  {
    id: 4,
    text: 'Tudo pronto, só começar a usar!',
    description: 'Agora você tem acesso ao seus dados, planos, dados do seu pet e tudo que precisa!'
  },
]

const WorkProcessTwo = () => {
  return (
    <>
      {/* Work Process area start */}
      <section className="process__area-3 pt-0 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="process__title-wrap-3" data-aos="fade-up">
                <h2 className="sec-title text-white text-start">
                  CONTRATE COM A FACILIDADE<br />QUE SÓ A USO TE OFERECE
                </h2>
              </div>
              <div className="process__list-3">
                {steps.map(step => {
                  return (
                    <div
                      className="process__item-3"
                      data-aos="fade-up"
                      data-aos-delay={200}
                      key={step.id}
                    >
                      <div className="serial text-green">{`0${step.id}`}</div>
                      <div className="process__content-3">
                        <h3 className="process__title-3 text-white">{step.text}</h3>
                        <p className="w-100">{step.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Process area end */}
    </>
  );
};

export default WorkProcessTwo;
