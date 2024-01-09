import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: 'Plano básico',
    value: 0,
    redirect: '/',
    description: "Inclui todos os serviços essenciais para um funeral digno"
  },
  {
    id: 2,
    title: 'Plano completo',
    value: 0,
    redirect: '/',
    description: "Oferece serviços adicionais, como cerimônias personalizadas"
  },
  {
    id: 3,
    title: 'Plano premium',
    value: 0,
    redirect: '/',
    description: "A cobertura mais abrangente, incluindo opções de cremação e serviços exclusivos"
  },
]

const FuneralPricing = () => {
  return (
    <>
      {/* pricing area start */}
      <section className="pricing__area-5 pt-5">
        <div className="container">
          <div className="pricing__items-5">
            {items.map(item => {
              return (
                <div key={item.id} className="pricing__item-5">
                  <div className="pricing__header-5 ">
                    <h2 className="title">{item.title}</h2>
                    <h3 className="title-2">
                      <span>R$ {item.value}</span>/mês
                    </h3>
                    <p className="justify__text">{item.description}</p>
                  </div>
                  <div className="pricing__btn-wrapper">
                    <Link className="pricing__btn" to={item.redirect}>
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </section>
      {/* pricing area end */}
    </>
  );
};

export default FuneralPricing;
