import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import ScrollToTop from "react-scroll-to-top";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import HomeFive from "./pages/HomeFive";
import Viagens from "./pages/Viagens";
import Pet from "./pages/Pet";
import Funeral from "./pages/Funeral";
import Saude from "./pages/Saude";
import Help from "./pages/Help";
import LateralSocials from "./components/LateralSocials";
import { ToastContainer } from 'react-toastify';

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
    <BrowserRouter basename={'/novo/'}>
      <ToastContainer />
      <RouteScrollToTop />
      <LateralSocials />
      <Routes>
        <Route exact path="/" element={<HomeFive />} />
        <Route exact path="/viagens" element={<Viagens />} />
        {/* <Route exact path="/pet" element={<Pet />} /> */}
        <Route exact path="/funeral" element={<Funeral />} />
        <Route exact path="/saude" element={<Saude />} />
        <Route exact path="/ajuda" element={<Help />} />
      </Routes>
      <ScrollToTop smooth color="#22F55D" />
    </BrowserRouter>
  );
}

export default App;
