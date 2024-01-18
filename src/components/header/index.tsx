import * as C from "./style";
import Logo from "../../image/logoTecnocar .png";
import ExcelLogo from "../../image/excel.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ModalExcel } from "../modalExcel";


const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const isCandidate = location.pathname === "/candidates";
  const [isBlock, setIsBlock] = useState(false);

  const toggleBlockModal = () => {
    setIsBlock(!isBlock);
  };

  return (
    <C.Content>
      <C.Container>
        <div>
          <img src={Logo} alt="" />
        </div>

        <C.ContentButton>
          {isCandidate && (
            <img src={ExcelLogo} alt="Logo Excel" onClick={toggleBlockModal} />
          )}
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

      {isBlock && <ModalExcel isOpen={isBlock} onClose={toggleBlockModal} />}

       
    </C.Content>
  );
};

export { Header };
