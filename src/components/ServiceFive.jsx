import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: 'VIAJE COM TRANQUILIDADE',
    description: 'Com a USO e nossos parceiros, você está pronto para explorar o mundo, sabendo que cada passo da sua jornada está protegido.',
    icon: 'assets/imgs/viaje.png',
  },
  {
    id: 2,
    title: 'ESCOLHA PERSONALIZADA',
    description: 'Escolha sem complicação o plano de seguro que se encaixa na sua próxima aventura.',
    icon: 'assets/imgs/escolha.png',
  },
  {
    id: 3,
    title: 'COMPRA SIMPLES E SEGURA',
    description: 'Em poucos passos, seu seguro está pronto. Sem letras miúdas.',
    icon: 'assets/imgs/compra_simples.png',
  }
]

const ServiceFive = () => {
  return (
    <>
      {/* service area start */}
      <section className="service__area-5 py-5 my-5" style={{background: '#404040'}}>
        <div className="container my-5">
          <div className="service__items-5">
            {items.map(item => {
              return (
                <div
                  className="service__item-5"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  key={item.id}
                >
                  <div className="service__thumb-5">
                    <img width={100} src={item.icon} alt="service-icon" />
                  </div>
                  <div className="service__content-5">
                    <Link to="#">
                      <h3 className="service__item-title">{item.title}</h3>
                    </Link>
                    <p>{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* service area end */}
    </>
  );
};

export default ServiceFive;
