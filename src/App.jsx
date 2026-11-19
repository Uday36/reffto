
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import LabDetailsPage from "./pages/LabDetailsPage";
import LabSetupPage from "./pages/LabSetupPage";
import CareerPage from "./pages/Career";
import GalleryPage from "./pages/GalleryPage";
import About from "./pages/About";

import RefftoFooterAnimation from "./components/layout/RefftoFooterAnimation";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/labs/:labId" element={<LabDetailsPage />} />
          <Route path="/lab-setup" element={<LabSetupPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* <RefftoFooterAnimation /> */}
      <Footer />
    </BrowserRouter>
  );
}
