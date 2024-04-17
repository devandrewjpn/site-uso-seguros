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
  // {
  //   id: 2,
  //   title: 'USO PET',
  //   value: 10,
  //   redirect: '/pet',
  //   description: "Conheça todas as opções"
  // },
  {
    id: 3,
    title: 'USO Funeral',
    value: '19,90',
    redirect: '/funeral',
    description: "Conheça todas as opções"
  },
  {
    id: 4,
    title: 'USO Saúde',
    value: "39,97",
    redirect: '/saude',
    description: "Conheça todas as opções"
  },
]

const PricingMobile = () => {
  return (
    <>
      {/* pricing area start */}
      <section className="pricing__mobile-5 pt-5">
        <div className="container">
          <div className="pricing__mobile-items-5">
            {items.map(item => {
              return (
                <div key={item.id} className="pricing__mobile-item-5">
                  <div className="pricing__mobile-header-5 ">
                    <div>
                    <h2 className="title">{item.title}</h2>
                    <h3 className="title-2">
                      <small style={{fontSize: '14px'}}>a partir de</small><br />
                      <span>R$ {item.value}</span>/mês
                    </h3>
                    <strong className="text-white">Saiba mais</strong>
                    </div>
                    <div className="pricing__mobile-btn-wrapper">
                    <Link className="pricing__mobile-btn" to={item.redirect}>
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
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

export default PricingMobile;
