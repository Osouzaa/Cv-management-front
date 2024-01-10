import * as C from "./style";
import Logo from "../../image/logoTecnocar .png";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const isCandidate = location.pathname === "/candidates"

  return (
    <C.Content>
      <C.Container>
        <div>
          <img src={Logo} alt="" />
        </div>

        <C.ContentButton>
          <button className={isHome ? "red" : ""} onClick={() => navigate("/")}>
            Cadastro de Candidatos
          </button>
          <button
            className={isCandidate ? "red" : ""}
            onClick={() => navigate("/candidates")}
          >
            Banco de Candidatos
          </button>
        </C.ContentButton>
      </C.Container>
      <C.Linhaa />
    </C.Content>
  );
};

export { Header };
