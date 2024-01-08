import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderThree from "../components/HeaderThree";
import HeroFive from "../components/HeroFive";
import HistoryOne from "../components/HistoryOne";
import NewsletterTwo from "../components/NewsletterTwo";
import PricingOne from "../components/PricingOne";
import TestimonialTwo from "../components/TestimonialTwo";
import FooterThree from "../components/FooterThree";

const HomeFive = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderThree />
        <main className="digibold-five">
          <HeroFive />
          <PricingOne />
          <HistoryOne />
          <NewsletterTwo />
          <TestimonialTwo />
        </main>
        <FooterThree />
      </Suspense>
    </>
  );
};

export default HomeFive;
