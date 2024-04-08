import React from "react";
import { Link } from "react-router-dom";
import { useModal } from "./FuneralModalContext";

const items = [
  {
    id: 1,
    title: 'Plano PAX 1',
    value: '19,90',
    plan: 1,
    redirect: '/',
    description: <>Cobertura para morte por acidente de trânsito<br />- Inclui cremação<br />- Carência: 60 dias a partir da contratação<br />- *Consulte valores de adesão</>
  },
  {
    id: 2,
    title: 'Plano PAX 2',
    value: '29,90',
    plan: 2,
    redirect: '/',
    description: <>Cobertura para qualquer causa morte,<br />- Inclui cremação<br />- Amplie para sua família por apenas R$11,50 por vida<br />- Carência: 60 dias a partir da contratação<br />- *Consulte valores de adesão</>
  }
]

const FuneralPricing = () => {
  const { openModal, updatePlan } = useModal();

  const handleButtonClick = (selected_plan) => {
    updatePlan(selected_plan);
    openModal();
  };

  return (
    <>
      {/* pricing area start */}
      <section className="pricing funeral_pricing pricing__area-5 py-5">
        <div className="container">
          <div className="d-flex gap-2 justify-content-center pb-5">
            {items.map(item => {
              return (
                <div key={item.id} className="pricing__item-5">
                  <div className="pricing__header-5 ">
                    <h2 className="title">{item.title}</h2>
                    <h3 className="title-2">
                      <span>R$ {item.value}</span>/ por vida
                    </h3>
                    <p className="">{item.description}</p>
                    {/* <span className="badge text-dark" style={{backgroundColor: '#d8ff36'}}>SEM CARÊNCIA</span> */}
                  </div>
                  <div className="pricing__btn-wrapper">
                    <button className="pricing__btn" type="button" onClick={() => handleButtonClick(item.plan)}>
                      <i className="fa-solid fa-arrow-right" />
                    </button>
                  </div>
                  
                </div>
              )
            })}

          </div>
          {/* <div className="mt-5 destaq__gray__text mx-auto">Adicione Cremação PET por apenas R$14,90 em sua mensalidade, por pet!</div> */}
          {/* <div className="mt-5 destaq__gray__text mx-auto">Carência 60 dias a partir da contratação </div> */}
        </div>
      </section>
      {/* pricing area end */}
    </>
  );
};

export default FuneralPricing;
