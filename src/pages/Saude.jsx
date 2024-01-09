import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderThree from "../components/HeaderThree";
import FooterThree from "../components/FooterThree";
import HeroSaude from "../components/HeroSaude";
import SaudePricing from "../components/SaudePricing";
import SaudePromoOne from "../components/SaudePromoOne";
import SaudePromoTwo from "../components/SaudePromoTwo";

const Saude = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderThree />
        <main className="digibold-five">
          <HeroSaude />
          <SaudePricing />
          <SaudePromoOne />
          <SaudePromoTwo />
        </main>
        <FooterThree />
      </Suspense>
    </>
  );
};

export default Saude;
