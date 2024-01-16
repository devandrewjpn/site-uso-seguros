import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderThree from "../components/HeaderThree";
import HeroFive from "../components/HeroFive";
import HistoryOne from "../components/HistoryOne";
import NewsletterTwo from "../components/NewsletterTwo";
import PricingOne from "../components/PricingOne";
import TestimonialTwo from "../components/TestimonialTwo";
import FooterThree from "../components/FooterThree";
import ServiceThree from "../components/ServiceThree";
import LateralSocials from "../components/LateralSocials";
import PricingMobile from "../components/PricingMobile";

const HomeFive = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <LateralSocials />
        <HeaderThree />
        <main className="digibold-five">
          <HeroFive />
          <PricingOne />
          <PricingMobile />
          <HistoryOne />
          {/* <NewsletterTwo /> */}
          <ServiceThree />
          <TestimonialTwo />
        </main>
        <FooterThree />
      </Suspense>
    </>
  );
};

export default HomeFive;
