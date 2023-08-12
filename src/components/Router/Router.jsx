import React from "react";
import { Home } from "../../pages/Home";
import { Conhecimentos } from "../../pages/TechStack";
import { MyProjects } from "../../pages/Projects";
import { Contact } from "../../pages/Contact";
import { Routes, Route, useLocation } from "react-router-dom";

const Router = () => {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conhecimentos" element={<Conhecimentos />} />
      <Route path="/projects" element={<MyProjects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
