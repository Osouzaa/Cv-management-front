import { useLocation } from "react-router-dom";
import { Header } from "./components/header";
import "./index.css";
import axios from "axios";

const App = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  setTimeout(
    () => (axios.post(`${import.meta.env.VITE_API_URL}ping`), console.log("aaaa" + Date())),
    150000
  );

  return (
    <div className="Content">
      {token && !(location.pathname === "/") && <Header />}
    </div>
  );
};

export { App };
