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
    }
]

const FuneralPricingMobile = () => {
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
                                                <small style={{ fontSize: '14px' }}>à partir de</small><br />
                                                <span>R$ {item.value}</span>/ por vida
                                            </h3>
                                            <span className="badge text-dark" style={{ backgroundColor: '#d8ff36' }}>SEM CARÊNCIA</span>
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

export default FuneralPricingMobile;
