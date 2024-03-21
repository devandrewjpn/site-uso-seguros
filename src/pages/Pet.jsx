import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderThree from "../components/HeaderThree";
import HeroPet from "../components/HeroPet";
import FooterThree from "../components/FooterThree";
import PetTable from "../components/PetTable";
import AppSection from "../components/AppSection";
import WorkProcessTwo from "../components/WorkProcessTwo";
import Why from "../components/Why";
import { PetWhyQuestions } from "../data/pet_why_questions";
import PetPromoPhrase from "../components/PetPromoPhrase";

const Pet = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderThree />
        <main className="astaton-five">
          <HeroPet />
          <PetTable />
          <AppSection />
          <Why title='Mitos e Realidades: Por que você deve contratar um Seguro Pet com a USO?' questions={PetWhyQuestions} />
          <WorkProcessTwo />
          <PetPromoPhrase />
        </main>
        <FooterThree />
      </Suspense>
    </>
  );
};

export default Pet;
