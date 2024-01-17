import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Candidate } from "../pages/candidates";
import { App } from "../App";
import Curriculum from "../pages/curriculum";
import { Register } from "../pages/register";
import { NotFound } from "../pages/notFound";
import { InfoCandidate } from "../pages/infoCandidate";



const RoutesApp = () => {
  return (
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/candidates" element={<Candidate />} />
        <Route path="/curriculum/:id" element={<Curriculum />} />
        <Route path="/register/:id" element={<InfoCandidate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
