import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderThree from "../components/HeaderThree";
import FooterThree from "../components/FooterThree";
import FaqOne from "../components/FaqOne";

const questions = [
    {
      id: 1,
      question: 'O plano de assistência funerária METROPAX vai me ressarcir os custos do funeral?',
      answer: 'Não. Na verdade, sabemos que esse momento é muito difícil e de muita dor, ficando muito complicado tomar as providências necessárias e por isso os planos METROPAX providenciarão tudo que for preciso para a realização de um funeral digno e memorável para o seu familiar, cobrindo os custos descritos no contrato.'
    },
    {
      id: 2,
      question: 'Meu trabalho é arriscado, estarei coberto pelo meu plano de assistência funerária METROPAX?',
      answer: 'Sim, todas as profissões estão amparadas.'
    },
    {
      id: 3,
      question: 'Como contratar um plano funerário METROPAX sem ter que pensar em morrer?',
      answer: 'É uma contratação como outra qualquer. Basta ter seus documentos pessoais em mãos e as informações dos seus dependentes (caso tenha algum).\nSabemos que ninguém contrata um seguro para o veículo pensando em bater com o carro ou em ser roubado, mas isso é uma possibilidade e o contratante só deseja segurança.'
    },
    {
      id: 4,
      question: 'Não tenho tempo para ir a uma agência para contratar, como eu faço?',
      answer: 'Simples, você pode ligar para nossa central de atendimento ou chamar no WhatsApp que conseguirá concluir a contratação de forma segura e rápida. Basta nos enviar os dados dos beneficiários que enviaremos o contrato e forma de pagamento escolhida.'
    },
    {
      id: 5,
      question: 'O plano de assistência funerária METROPAX é muito caro?',
      answer: 'Não, pelo contrário. Os planos METROPAX custam a partir de R$29,90 por mês.'
    },
    {
      id: 6,
      question: 'Qual a carência do plano de assistência funerária METROPAX?',
      answer: 'A carência é de 60 dias iniciando a partir do pagamento da primeira mensalidade do contrato.'
    },
    {
      id: 7,
      question: 'Existe limite de idade para contratar os planos de assistência funerária METROPAX?',
      answer: 'Temos planos para todas as idades, inclusive para idosos. Consulte nossos consultores e descubra qual o plano que melhor se adequa às suas necessidades.'
    },
    {
      id: 8,
      question: 'Posso escolher o cemitério?',
      answer: 'Os planos de assistência funerária METROPAX, possuem cobertura em todos os cemitérios públicos municipais do Brasil. A realização do serviço dependerá da disponibilidade do cemitério escolhido pela família. Temos também serviços adicionais para a cobertura em cemitérios particulares, devendo ser consultada as condições contratuais para essa contratação.'
    },
    {
      id: 9,
      question: 'Se eu estiver fora do país como aciono o plano de assistência METROPAX?',
      answer: 'É bem simples, basta ligar para o telefone 553130574010.'
    },
    {
      id: 10,
      question: 'Para usar o serviço eu preciso pagar alguma coisa?',
      answer: 'Não é necessário realizar nenhum pagamento ou caução, o plano de assistência METROPAX garante o serviço funeral sem custo para os familiares.'
    },
    {
      id: 11,
      question: 'Se a minha família decidir por cremação e não existir crematório em minha cidade, como é feito?',
      answer: 'Realizamos a cremação na cidade mais próxima que em um de nossos parceiros e enviamos as cinzas caso a família queira.'
    },
    {
      id: 12,
      question: 'Porque preciso contratar um plano funerário METROPAX?',
      answer: 'Para deixar a sua família segura e garantir um funeral digno sem ter que se endividar ou se humilhar pedindo ajuda à familiares e amigos.'
    },
    {
      id: 13,
      question: 'Qual plano funerário METROPAX devo escolher?',
      answer: 'Nossos consultores estão disponíveis para atender e simular o melhor plano METROPAX, de acordo com o seu perfil, já que todos possuem abrangência nacional.'
    },
    {
      id: 14,
      question: 'Posso colocar toda a minha família no plano METROPAX?',
      answer: 'Sim, temos os planos ideais para todos os diversos grupos familiares.'
    },
    {
      id: 15,
      question: 'Qual o melhor plano funerário?',
      answer: 'Certamente, o plano de assistência funerária METROPAX.'
    },
    {
      id: 16,
      question: 'Como declarar Plano Funerário no imposto de renda?',
      answer: 'Não se declara plano funeral no imposto de renda (IRPF), pois o mesmo não é dedutível de acordo com as regras atuais do IRPF.'
    },
    {
      id: 17,
      question: 'O que o plano funerário METROPAX cobre?',
      answer: 'A realização do funeral e a prestação dos serviços funerários, assim considerados como a preparação e transporte do beneficiário falecido, fornecimento da urna, montagem de velório, véu, ornamentação interna, uma coroa de flores naturais ou permanentes e taxas de cemitérios públicos municipais, conforme cláusulas contratuais.'
    }
  ];

const HelpFuneral = () => {
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

export default HelpFuneral;
