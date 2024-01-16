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
    <BrowserRouter basename={'/novo'}>
      <RouteScrollToTop />
      <Routes>
        <Route exact path="/" element={<HomeFive />} />
        <Route exact path="/viagens" element={<Viagens />} />
        <Route exact path="/pet" element={<Pet />} />
        <Route exact path="/funeral" element={<Funeral />} />
        <Route exact path="/saude" element={<Saude />} />
        <Route exact path="/ajuda" element={<Help />} />
        
        {/* <Route exact path="/index-2" element={<HomeTwo />} />
        <Route exact path="/index-3" element={<HomeThree />} />
        <Route exact path="/index-4" element={<HomeFour />} />
        <Route exact path="/index-5" element={<HomeFive />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/blog-details" element={<BlogDetailsPage />} />
        <Route exact path="/project" element={<ProjectPage />} />
        <Route exact path="/project-details" element={<ProjectDetailsPage />} />
        <Route exact path="/service-details" element={<ServiceDetailsPage />} />
        <Route exact path="/contact" element={<ContactPage />} /> */}
      </Routes>
      <ScrollToTop smooth color="#22F55D" />
    </BrowserRouter>
  );
}

export default App;
