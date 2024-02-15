import { useLocation } from "react-router-dom";
import { Header } from "./components/header";
import "./index.css";
import axios from "axios";

const App = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  // Função para fazer a chamada à API
  const pingAPI = () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}ping`)
      .then((response) => {
        console.log("Ping bem-sucedido!", response.data);
      })
      .catch((error) => {
        console.error("Erro ao fazer ping à API:", error);
      });
  };

  // Chamada inicial à API
  pingAPI();

  // Chamar a função pingAPI a cada minuto
  setInterval(() => {
    pingAPI();
  }, 300000); // 60000 milissegundos = 1 minuto

  return (
    <div className="Content">
      {token && !(location.pathname === "/") && <Header />}
    </div>
  );
};

export { App };
