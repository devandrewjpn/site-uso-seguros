import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: 'USO Viagem',
    value: 45,
    redirect: '/viagens',
    description: "Conheça todas as opções"
  },
  {
    id: 2,
    title: 'USO PET',
    value: 10,
    redirect: '/pet',
    description: "Conheça todas as opções"
  },
  {
    id: 3,
    title: 'USO Funerária',
    value: 13,
    redirect: '/funeral',
    description: "Conheça todas as opções"
  },
  {
    id: 4,
    title: 'USO Saúde',
    value: 30,
    redirect: '/saude',
    description: "Conheça todas as opções"
  },
]

const PricingOne = () => {
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
                      <small style={{fontSize: '14px'}}>a partir de</small><br />
                      <span>R$ {item.value}</span>/mês
                    </h3>
                    <p className="justify__text">{item.description}</p>
                    <strong className="text-white">Saiba mais</strong>
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

export default PricingOne;
