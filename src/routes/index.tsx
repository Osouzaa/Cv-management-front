import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Candidate } from "../pages/candidates";
import { App } from "../App";
import Curriculum from "../pages/curriculum";
import { Register } from "../pages/register";
import { NotFound } from "../pages/notFound";
import { InfoCandidate } from "../pages/infoCandidate";
import { Login } from "../pages/login";
import { PrivateRoute } from "./privateRoute";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route
          path="/candidates"
          element={
            <PrivateRoute  allowedRoles={["admin", "recruitment"]}>
              <Candidate />
            </PrivateRoute>
          }
        />
        <Route
          path="/curriculum/:id"
          element={
            <PrivateRoute>
              <Curriculum />
            </PrivateRoute>
          }
        />
        <Route
          path="/register/:id"
          element={
            <PrivateRoute >
              <InfoCandidate />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
