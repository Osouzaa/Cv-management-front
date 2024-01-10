import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Candidate } from "../pages/candidates";
import { App } from "../App";
import Curriculum from "../pages/curriculum";
import { Register } from "../pages/register";
import { NotFound } from "../pages/notFound";
import { Header } from "../components/header";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/candidates" element={<Candidate />} />
        <Route path="/curriculum/:id" element={<Curriculum />} />
        <Route path="/header" element={<Header />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
