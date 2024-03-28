import { Route, Routes } from "react-router-dom";
import { Main } from "../components/Main";
import Contact from "../components/pages/Contact/Contact";
import Price from "../components/pages/Price/Price";
import About from "../components/pages/About/About";
import Settings from "../components/pages/Settings/Settings";
import Home from "../components/pages/Home/Home";
import FeatureProducts from "../components/pages/FeatureProducts/FeatureProducts";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/feature-product" element={<FeatureProducts />} />
      <Route path="/main" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/price" element={<Price />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/settings" element={<Settings />} /> 
    </Routes>
  );
};

export default NavigationRoutes;
