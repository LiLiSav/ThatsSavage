import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { Navbar } from "components/App/Navbar";
import { Footer } from "components/App/Footer";
import Home from "pages/Home";
import Graphic from "pages/Graphic";
import Contact from "pages/Contact";
import About from "pages/About";
import Terms from "pages/Terms";
import Prints from "pages/Prints";
import { NotFound } from "components/NotFound";

export const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <ParallaxProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prints" element={<Prints />} />
          <Route path="/graphic-design" element={<Graphic />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </ParallaxProvider>
      <Footer />
    </BrowserRouter>
  );
};
