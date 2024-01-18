import React from "react";
import { Link } from "react-router-dom";

const items = [
    {
        id: 1,
        title: 'USO SAÚDE I - Proteção Essencial',
        value: 30,
        redirect: '/saude',
        description: "O básico não precisa ser básico",
        label: "Médico na Tela para até 4 membros da família",
        covers: [
            {
                id: 1,
                text: 'Morte Acidental - R$100.000'
            },
            {
                id: 2,
                text: 'Invalidez Permanente Total por Acidente - R$100.000'
            },
        ],
        assistances: [
            {
                id: 1,
                text: 'Desconto Farmácia'
            },
            {
                id: 2,
                text: 'Assistência Funeral Individual - Até R$5.000'
            },
            {
                id: 3,
                text: 'Assistência Pessoal'
            },
        ]
    },
    {
        id: 2,
        title: 'USO SAÚDE II - Proteção Ampliada',
        value: 50,
        redirect: '/saude',
        description: "O dobro de cobertura",
        label: "Médico na Tela para até 4 membros da família",
        covers: [
            {
                id: 1,
                text: 'Morte Acidental - R$200.000'
            },
            {
                id: 2,
                text: 'Invalidez Permanente Total por Acidente - R$200.000'
            },
        ],
        assistances: [
            {
                id: 1,
                text: 'Desconto Farmácia'
            },
            {
                id: 2,
                text: 'Assistência Funeral Individual - Até R$5.000'
            },
            {
                id: 3,
                text: 'Assistência Pessoal'
            },
        ]
    },
    {
        id: 3,
        title: 'USO SAÚDE III - Proteção Completa',
        value: 70,
        redirect: '/saude',
        description: "Mais cobertura, mais benefícios e a sorte do seu lado",
        label: "Médico na Tela para até 4 membros da família",
        covers: [
            {
                id: 1,
                text: 'Morte Acidental - R$200.000'
            },
            {
                id: 2,
                text: 'Invalidez Permanente Total por Acidente - R$200.000'
            },
        ],
        assistances: [
            {
                id: 1,
                text: 'Desconto Farmácia'
            },
            {
                id: 2,
                text: 'Assistência Funeral Individual - Até R$5.000'
            },
            {
                id: 3,
                text: 'Assistência Pessoal'
            },
            {
                id: 4,
                text: 'Assistência Funeral  Familiar Até R$7.000'
            },
            {
                id: 5,
                text: 'Vítima de Crime'
            }
        ],
        sort: [
            {
                id: 1,
                text: 'Sorteiro Mensal R$200.000 (Isento de Impostos)'
            }
        ]
    },
]

const SaudePricing = () => {
    return (
        <>
            {/* pricing area start */}
            <section className="pricing__area-5 pt-5">
                <div className="container">
                    <div className="grid_3 pricing__items-5">
                        {items.map(item => {
                            return (
                                <div key={item.id} className="pricing__item-5 text-white">
                                    <div className="pricing__header-5 ">
                                        <h2 className="title">{item.title}</h2>
                                        <h3 className="title-2">
                                            <small>Apenas</small><br />
                                            <span>R$ {item.value}</span>/mês
                                        </h3>
                                        <strong className="justify__text">{item.description}</strong>
                                        <p className="justify__text">- {item.label}</p>
                                        <div className="mb-4">
                                            <strong>Coberturas:</strong>
                                            <ul>{item.covers.map(cover => {
                                                return (
                                                    <li key={cover.id}>{cover.text}</li>
                                                )
                                            })}</ul>
                                        </div>
                                        <div className="mb-4">
                                            <strong>Assistências:</strong>
                                            <ul>{item.assistances.map(assistance => {
                                                return (
                                                    <li key={assistance.id}>{assistance.text}</li>
                                                )
                                            })}</ul>
                                        </div>
                                        {item.sort && (
                                            <div className="mb-4">
                                                <strong>Sorteio:</strong>
                                                <ul>{item.sort.map(s => {
                                                    return (
                                                        <li key={s.id}>{s.text}</li>
                                                    )
                                                })}</ul>
                                            </div>
                                        )}
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

export default SaudePricing;
