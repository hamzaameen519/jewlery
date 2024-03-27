import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "../components/Main";
import Contact from "../components/pages/Contact/Contact";
import Price from "../components/pages/Price/Price";
import About from "../components/pages/About/About";
import Settings from "../components/pages/Settings/Settings";
import Home from "../components/pages/Home/Home";
import Card from "../components/pages";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {/* <Route path="/" element={<Card />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/price" element={<Price />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default NavigationRoutes;
