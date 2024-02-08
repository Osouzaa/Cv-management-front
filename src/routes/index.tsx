import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Candidate } from "../pages/candidates";
import { App } from "../App";
import Curriculum from "../pages/curriculum";
import { Register } from "../pages/register";
import { NotFound } from "../pages/notFound";
import { Login } from "../pages/login";
import { PrivateRoute } from "./privateRoute";
import { TelaAdmin } from "../pages/admin";

import { PageStarts } from "../pages/pageStarts";
import { ModalFilter } from "../components/ModalFilter";
import { CandidatesEvaluated } from "../pages/candidatesEvaluated";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route
          path="/candidates"
          element={
            <PrivateRoute allowedRoles={["admin", "recruitment"]}>
              <Candidate />
            </PrivateRoute>
          }
        />
        <Route
          path="/curriculum/:id"
          element={
            <PrivateRoute allowedRoles={["admin", "recruitment", "technique"]}>
              <Curriculum />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        <Route
          path="/admin"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <TelaAdmin />
            </PrivateRoute>
          }
        />
        <Route
          path="/tutorial"
          element={
            <PrivateRoute  allowedRoles={["admin", "recruitment", "technique"]}>
              <PageStarts />
            </PrivateRoute>
          }
        />
        <Route path="/Lista" element={<CandidatesEvaluated />} />
        <Route path="/aa" element={<ModalFilter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
