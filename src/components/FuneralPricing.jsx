import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: 'Plano básico',
    value: '7,50',
    redirect: '/',
    description: "Cobertura para acidente de trânsito, Inclui cremação"
  },
  {
    id: 2,
    title: 'Plano completo',
    value: '8,50',
    redirect: '/',
    description: "Cobertura para qualquer causa morte, Inclui cremação"
  }
]

const FuneralPricing = () => {
  return (
    <>
      {/* pricing area start */}
      <section className="pricing__area-5 pt-5">
        <div className="container">
          <div className="pricing__items-5 pb-5">
            {items.map(item => {
              return (
                <div key={item.id} className="pricing__item-5">
                  <div className="pricing__header-5 ">
                    <h2 className="title">{item.title}</h2>
                    <h3 className="title-2">
                      <span>R$ {item.value}</span>/ por vida
                    </h3>
                    <p className="justify__text">{item.description}</p>
                    <span className="badge text-dark" style={{backgroundColor: '#d8ff36'}}>SEM CARÊNCIA</span>
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
          <div className="mt-5 text-white">Adicione Cremação PET por apenas R$14,90 em sua mensalidade, por pet!</div>
        </div>
      </section>
      {/* pricing area end */}
    </>
  );
};

export default FuneralPricing;
