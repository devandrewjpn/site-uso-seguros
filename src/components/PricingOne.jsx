import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: 'Seguro Viagem',
    value: 45,
    redirect: '/viagens',
    description: "A gente quer que você curta seu carro. Mas se rolar qualquer problema, é só chamar o Seguro Uso Seguros."
  },
  {
    id: 2,
    title: 'Assistência PET',
    value: 10,
    redirect: '/',
    description: "O Seguro Residencial Uso é pra você aproveitar ao máximo seu cantinho com a família e os amigos."
  },
  {
    id: 3,
    title: 'Assistência funerária',
    value: 13,
    redirect: '/',
    description: "Um Seguro de Vida pra ficar numa boa e garantir o futuro de quem é importante pra você e para sua família."
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

export default PricingOne;
