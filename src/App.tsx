import { useLocation } from "react-router-dom";
import { Header } from "./components/header";

const App = () => {
  const location = useLocation();
  return (
    <div className="Content">
      {location.pathname !== "/login" && <Header />}
    </div>
  );
};

export { App };
