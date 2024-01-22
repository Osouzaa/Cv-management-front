import  { useState, useEffect } from 'react';
import * as C from "./style";
import Logo from "../../image/logoTecnocar .png";
import ExcelLogo from "../../image/excel.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { ModalExcel } from "../modalExcel";
import { TemplateInfo } from '../templateInfo';


const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/register";
  const isCandidate = location.pathname === "/candidates";
  const [isBlock, setIsBlock] = useState(false);
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = JSON.parse(atob(token.split(".")[1]));
      const fullName = user.userName;
      const initials = fullName
        .split(" ")
        .map((name : string) => name[0].toUpperCase())
        .join("");
      setUserName(initials);
      
      const userRole =  token ? JSON.parse(atob(localStorage.getItem("token")!.split(".")[1])).userRole : null;
      setUserRole(userRole);
    }
  }, []);

  const toggleBlockModal = () => {
    setIsBlock(!isBlock);
  };

  const openInfoModal = () => {
    setInfoModalOpen(!isInfoModalOpen);
  };

  const closeInfoModal = () => {
    setInfoModalOpen(false);
  };

  if (!localStorage.getItem("token")) {
    return (
      <C.Content>
        <C.Container>
          <div>
            <img src={Logo} alt="" />
          </div>
        </C.Container>
        <C.Linhaa />
      </C.Content>
    );
  }

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
          <button
            className={isHome ? "red" : ""}
            onClick={() => navigate("/register")}
          >
            Cadastro de Candidatos
          </button>
          <button
            className={isCandidate ? "red" : ""}
            onClick={() => navigate("/candidates")}
          >
            Banco de Candidatos
          </button>
          {userName && <C.ContentName onClick={openInfoModal}>{userName}</C.ContentName>}
        </C.ContentButton>
      </C.Container>
      <C.Linhaa />

      {isBlock && <ModalExcel isOpen={isBlock} onClose={toggleBlockModal} />}
      {isInfoModalOpen && (
        <TemplateInfo  role={userRole} />
      )}
    </C.Content>
  );
};

export { Header };
