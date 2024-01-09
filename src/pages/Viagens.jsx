import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderThree from "../components/HeaderThree";
import HeroViagens from "../components/HeroViagens";
import FooterThree from "../components/FooterThree";
import TeamFour from "../components/TeamFour";
import AboutTwo from "../components/AboutTwo";
import ServiceFive from "../components/ServiceFive";
import AboutFive from "../components/AboutFive";
import Why from "../components/Why";
import {TravelWhyQuestions} from "../data/travel_why_questions";

const Viagens = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderThree />
        <main className="digibold-five">
          <HeroViagens />
          <TeamFour />
          <AboutTwo />
          <ServiceFive />
          <AboutFive />
          <Why subtitle='Diferencial' title='eu sei por que uso' questions={TravelWhyQuestions} />
        </main>
        <FooterThree />
      </Suspense>
    </>
  );
};

export default Viagens;
