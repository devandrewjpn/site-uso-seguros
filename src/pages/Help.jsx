import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import HeaderThree from "../components/HeaderThree";
import FooterThree from "../components/FooterThree";
import FaqOne from "../components/FaqOne";

const Help = () => {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <HeaderThree />
        <main className="digibold-five">
          <FaqOne />
        </main>
        <FooterThree />
      </Suspense>
    </>
  );
};

export default Help;
