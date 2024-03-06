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
import FuneralPricingMobile from "../components/FuneralPricingMobile";
import FuneralServices from "../components/FuneralServices";
import { ModalProvider } from "../components/FuneralModalContext";
import FuneralModal from "../components/FuneralModal";

const Funeral = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderThree />
        <ModalProvider>
          <main className="digibold-five">
            <HeroFuneral />
            <FuneralPricing />
            <FuneralPricingMobile />
            <FuneralServices />
            <FuneralWhy />
            <Why title='Desvendando Mitos Funerários: Verdades que Você Deveria Conhecer' questions={FuneralWhyQuestions} />
            <FuneralPromoPhrase />
            <FuneralModal />
          </main>
        </ModalProvider>
        <FooterThree />
      </Suspense>
    </>
  );
};

export default Funeral;
