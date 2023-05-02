import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";
import Footer from "../components/Footer";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default Router;
