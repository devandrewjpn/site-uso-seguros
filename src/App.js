import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import HomeOne from "./pages/HomeOne";
import ScrollToTop from "react-scroll-to-top";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import About from "./pages/About";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import HomeFour from "./pages/HomeFour";
import HomeFive from "./pages/HomeFive";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ContactPage from "./pages/ContactPage";
import Viagens from "./pages/Viagens";
import Pet from "./pages/Pet";

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
      <RouteScrollToTop />
      <Routes>
        <Route exact path="/" element={<HomeFive />} />
        <Route exact path="/viagens" element={<Viagens />} />
        <Route exact path="/pet" element={<Pet />} />
        
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