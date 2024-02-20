import { useLocation } from "react-router-dom";
import { Header } from "./components/header";
import "./index.css";

const App = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  return (
    <div className="Content">
      {token && !(location.pathname === "/") && <Header />}
    </div>
  );
};

export { App };
