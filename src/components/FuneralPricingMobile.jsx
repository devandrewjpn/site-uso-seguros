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
      description: <>Cobertura para morte por acidente de trânsito<br />- Inclui cremação<br />- Carência: 60 dias a partir da contratação<br /><br />- *Consulte valores de adesão</>
    },
    {
      id: 2,
      title: 'Plano PAX 2',
      value: '29,90',
      plan: 2,
      redirect: '/',
      description: <>Cobertura para qualquer causa morte,<br />- Inclui cremação<br />- Amplie para sua família por apenas R$11,50 por vida<br />- Carência: 60 dias a partir da contratação<br /><br />- *Consulte valores de adesão</>
    }
  ]

const FuneralPricingMobile = () => {
    const { openModal, updatePlan } = useModal();

    const handleButtonClick = (selected_plan) => {
        updatePlan(selected_plan);
        openModal();
      };

    return (
        <>
            <section className="pricingmb pricing__mobile-5 pt-5">
                <div className="container">
                    <div className="pricing__mobile-items-5">
                        {items.map(item => {
                            return (
                                <div key={item.id} className="pricing__mobile-item-5">
                                    <div className="pricing__mobile-header-5 ">
                                        <div>
                                            <h2 className="title">{item.title}</h2>
                                            <h3 className="title-2">
                                                <small style={{ fontSize: '14px' }}>a partir de</small><br />
                                                <span>R$ {item.value}</span>/ por vida
                                            </h3>
                                            <p className="">{item.description}</p>
                                            {/* <span className="badge text-dark" style={{ backgroundColor: '#d8ff36' }}>SEM CARÊNCIA</span> */}
                                        </div>
                                        <div className="pricing__mobile-btn-wrapper">
                                            <button className="pricing__mobile-btn" type="button" onClick={() => handleButtonClick(item.plan)}>
                                                <i className="fa-solid fa-arrow-right" />
                                            </button>
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

export default FuneralPricingMobile;
