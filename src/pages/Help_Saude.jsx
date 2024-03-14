import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderThree from "../components/HeaderThree";
import FooterThree from "../components/FooterThree";
import FaqOne from "../components/FaqOne";

const questions = [
    {
      id: 18,
      question: 'Como funciona o serviço de médico na tela?',
      answer: 'O serviço de médico na tela permite que você realize consultas médicas online, através de vídeo, a qualquer hora e em qualquer lugar, com prescrição médica digital quando necessário.'
    },
    {
      id: 19,
      question: 'O Médico na Tela substitui um plano de saúde tradicional?',
      answer: 'Este serviço é uma alternativa ao plano de saúde tradicional, focando em atendimento médico online e emergencial. Para necessidades específicas de cobertura, recomendamos analisar detalhadamente os serviços inclusos.'
    },
    {
      id: 20,
      question: 'Os médicos podem encaminhar para exames?',
      answer: 'Sim, os médicos podem recomendar e encaminhar para exames quando necessário, de acordo com a avaliação durante a consulta.'
    },
    {
      id: 21,
      question: 'Há um limite no número de consultas online com o Serviço Médico na Tela?',
      answer: 'O número de consultas permitidas pode variar de acordo com o plano contratado. Verifique as condições do seu plano para informações detalhadas sobre limites de consultas.'
    },
    {
      id: 22,
      question: 'O Médico na Tela é o mesmo que um plano de saúde?',
      answer: 'Não, o Médico na Tela não é um plano de saúde. Ele oferece orientação médica e pode recomendar exames ou consultas com especialistas que não estão cobertos por este serviço.'
    },
    {
      id: 23,
      question: 'Preciso agendar minha consulta com antecedência?',
      answer: 'Não é necessário agendar com antecedência. Você pode ligar para nosso centro de suporte a qualquer momento para encontrar o melhor horário para sua consulta.'
    },
    {
      id: 24,
      question: 'Posso adicionar membros da família ao meu serviço Médico na Tela?',
      answer: 'Sim, você pode registrar até 4 membros da família, desde que sejam seus filhos ou cônjuge.'
    },
    {
      id: 25,
      question: 'Posso agendar uma consulta de acompanhamento com o mesmo médico?',
      answer: 'O serviço Médico na Tela opera em uma base de emergência semelhante a um pronto-socorro, então consultas de acompanhamento com o mesmo médico não estão disponíveis.'
    },
    {
      id: 26,
      question: 'A prescrição digital é válida?',
      answer: 'Sim, você receberá uma prescrição digital válida que pode ser usada para comprar medicamentos usando o código QR fornecido e o código de prescrição digital.'
    },
    {
      id: 27,
      question: 'Posso ser atendido por mais de um problema em uma única consulta?',
      answer: 'Sim, desde que os sintomas estejam dentro do escopo do serviço.'
    },
    {
      id: 28,
      question: 'Há uma duração definida para cada consulta?',
      answer: 'Não, a duração depende das necessidades de cada paciente.'
    },
    {
      id: 29,
      question: 'Quanto tempo levo para receber minha prescrição?',
      answer: 'Dentro de uma hora após a consulta.'
    },
    {
      id: 30,
      question: 'A prescrição será enviada por e-mail para mim?',
      answer: 'Sim, a prescrição será enviada para você por e-mail e SMS.'
    },
    {
      id: 31,
      question: 'Os detalhes da consulta são gravados?',
      answer: 'Apenas as informações médicas geradas durante a consulta são registradas, não o vídeo ou áudio.'
    },
    {
      id: 32,
      question: 'O que está coberto pelo seguro de acidentes pessoais?',
      answer: 'Cobertura para morte acidental e invalidez permanente, total ou parcial, decorrente de acidentes.'
    },
    {
      id: 33,
      question: 'Existem riscos que não estão cobertos pelo seguro?',
      answer: 'Sim, incluem-se atos de guerra, uso de material nuclear, doenças preexistentes não declaradas, entre outros.'
    },
    {
      id: 34,
      question: 'Como é feito o pagamento de prêmios?',
      answer: 'O pagamento pode ser mensal ou único, conforme estabelecido na proposta de contratação.'
    },
    {
      id: 35,
      question: 'Existe carência para as coberturas do seguro?',
      answer: 'Não há carência para as coberturas de morte acidental e invalidez permanente, exceto em casos de suicídio nos primeiros dois anos.'
    },
    {
      id: 36,
      question: 'Como são determinados os beneficiários em caso de morte acidental?',
      answer: 'O segurado pode indicar livremente seus beneficiários, e alterações podem ser feitas a qualquer momento.'
    },
    {
      id: 37,
      question: 'O que acontece se um prêmio não for pago?',
      answer: 'Há um prazo de tolerância de 60 dias, após o qual o seguro pode ser cancelado se o prêmio não for pago.'
    }
  ];

const HelpSaude = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderThree />
        <main className="digibold-five">
          <FaqOne questions={questions} />
        </main>
        <FooterThree />
      </Suspense>
    </>
  );
};

export default HelpSaude;
