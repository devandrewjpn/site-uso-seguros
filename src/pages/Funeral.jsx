import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderThree from "../components/HeaderThree";
import FooterThree from "../components/FooterThree";
import HeroFuneral from "../components/HeroFuneral";
import FuneralPricing from "../components/FuneralPricing";
import FuneralWhy from "../components/FuneralWhy";
import Why from "../components/Why";
import { FuneralWhyQuestions } from "../data/funeral_why_questions";
import FuneralPromoPhrase from "../components/FuneralPromoPhrase";

const Funeral = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderThree />
        <main className="digibold-five">
          <HeroFuneral />
          <FuneralPricing />
          <FuneralWhy />
          <Why subtitle='Desvendando Mitos Funerários' title='Verdades que Você Deveria Conhecer' questions={FuneralWhyQuestions} />
          <FuneralPromoPhrase />
        </main>
        <FooterThree />
      </Suspense>
    </>
  );
};

export default Funeral;
