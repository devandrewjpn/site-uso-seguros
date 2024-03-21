import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import ScrollToTop from "react-scroll-to-top";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import HomeFive from "./pages/HomeFive";
import Viagens from "./pages/Viagens";
import Funeral from "./pages/Funeral";
import Saude from "./pages/Saude";
import LateralSocials from "./components/LateralSocials";
import { ToastContainer } from 'react-toastify';
import HelpViagem from "./pages/Help_Viagem";
import HelpFuneral from "./pages/Help_Funeral";
import HelpSaude from "./pages/Help_Saude";
import { WhatsApp } from "./components/Whatsapp";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer />
      <RouteScrollToTop />
      <LateralSocials />
      <WhatsApp />
      <Routes>
        <Route exact path="/" element={<HomeFive />} />
        <Route exact path="/viagens" element={<Viagens />} />
        {/* <Route exact path="/pet" element={<Pet />} /> */}
        <Route exact path="/funeral" element={<Funeral />} />
        <Route exact path="/saude" element={<Saude />} />
        <Route exact path="/ajuda-viagem" element={<HelpViagem />} />
        <Route exact path="/ajuda-funeral" element={<HelpFuneral />} />
        <Route exact path="/ajuda-saude" element={<HelpSaude />} />
      </Routes>
      <ScrollToTop smooth color="#22F55D" />
    </BrowserRouter>
  );
}

export default App;
