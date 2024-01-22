import { useLocation } from "react-router-dom";
import { Header } from "./components/header";

const App = () => {
  const location = useLocation();
  return (
    <div className="Content">
      {location.pathname !== "/" && <Header />}
    </div>
  );
};

export { App };
