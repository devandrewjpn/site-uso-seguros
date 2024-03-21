import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderThree from "../components/HeaderThree";
import FooterThree from "../components/FooterThree";
import FaqOne from "../components/FaqOne";

const questions = [
  
    {
      id: 38,
      question: 'O seguro viagem da USO cobre quais tipos de emergência?',
      answer: 'Cobrimos despesas médicas e hospitalares, incluindo atendimento simples a procedimentos complexos, em qualquer lugar do mundo.'
    },
    {
      id: 39,
      question: 'O que está incluído no seguro para danos e extravio de bagagens?',
      answer: 'Oferecemos cobertura para atrasos, extravios e danos, complementando a compensação das companhias aéreas.'
    },
    {
      id: 40,
      question: 'O seguro viagem oferece assistência em caso de atraso de voos?',
      answer: 'Sim, auxiliamos com custos adicionais causados por atrasos superiores a 12 horas.'
    },
    {
      id: 41,
      question: 'É obrigatório ter seguro viagem para entrar em alguns países?',
      answer: 'Sim, diversos países exigem seguro viagem com cobertura mínima específica para permitir a entrada de turistas.'
    },
    {
      id: 42,
      question: 'Como funciona a emissão da apólice digital do seguro viagem?',
      answer: 'Nossa plataforma digital permite a emissão imediata da apólice, garantindo agilidade e menos burocracia.'
    },
    {
      id: 43,
      question: 'Posso contratar o seguro viagem mesmo sem comprar as passagens com cartão de crédito?',
      answer: 'Sim, não exigimos que as passagens sejam compradas com cartão de crédito para contratar nosso seguro.'
    }
  ];

const HelpViagem = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderThree />
        <main className="astaton-five">
          <FaqOne questions={questions} />
        </main>
        <FooterThree />
      </Suspense>
    </>
  );
};

export default HelpViagem;
