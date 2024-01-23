import { useLocation } from "react-router-dom";
import { Header } from "./components/header";
import "./index.css"; 

const App = () => {
  const location = useLocation();
  return (
    <div className="Content">
      {!(location.pathname === "/" || location.pathname === "/admin") && (
        <Header />
      )}
    </div>
  );
};

export { App };
