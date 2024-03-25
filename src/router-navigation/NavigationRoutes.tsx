import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "../components/Main";
import Home from "../components/pages/Home";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
};

export default NavigationRoutes;
