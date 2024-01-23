import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../image/logoTecnocar2.png";
import Play from "../../image/play.svg";
import PlayBlack from "../../image/play_black.svg";
import User from "../../image/user.svg";
import UserBlack from "../../image/user_black.svg";
import Banco from "../../image/banco_de_dados.svg";
import BancoBlack from "../../image/banco_de_dados_black.svg";
import Habilidade from "../../image/habilidade_tecnica.svg";
import HabilidadeBlack from "../../image/habilidade_tecnica_black.svg";
import admin from "../../image/admin.svg";
import admin_black from "../../image/admin_black.svg";

import * as C from "./style";

const Header = () => {
  const location = useLocation();
  const isTutorial = location.pathname === "/tutorial";
  const isRegister = location.pathname === "/register";
  const isBank = location.pathname === "/candidates";
  const isTech = location.pathname === "/tech";
  const isAdmin = location.pathname === "/admin";

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const userRole = token
    ? JSON.parse(atob(token!.split(".")[1])).userRole
    : null;

  const handleButtonClick = (path: string) => {
    navigate(path);
    if (path === "/") {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  if (!token) {
    return (
      <C.Container>
        <C.ImageLogo src={Logo} alt="Logo da empresa Tecnocar engenharia" />
        <C.Content
          className="active"
          onClick={() => handleButtonClick("/register")}
        >
          <img src={User} alt="Icone de Usuario" />
          <p className="active">Cadastro de candidatos</p>
        </C.Content>
        <C.Content onClick={() => handleButtonClick("/")}>
          <img src={User} alt="Icone de Usuario" />
          <p>Fazer Login</p>
        </C.Content>
      </C.Container>
    );
  }

  return (
    <C.Container>
      <C.ImageLogo src={Logo} alt="Logo da empresa Tecnocar engenharia" />
      <C.Content
        className={isTutorial ? "active" : "other"}
        onClick={() => handleButtonClick("/tutorial")}
      >
        <img src={isTutorial ? Play : PlayBlack} alt="Icone de play" />
        <p className={isTutorial ? "active" : "other"}>Tutorial</p>
      </C.Content>
      <C.Content
        className={isRegister ? "active" : "other"}
        onClick={() => handleButtonClick("/register")}
      >
        <img src={isRegister ? User : UserBlack} alt="Icone de Usuario" />
        <p className={isRegister ? "active" : "other"}>
          Cadastro de candidatos
        </p>
      </C.Content>
      <C.Content
        className={isBank ? "active" : "other"}
        onClick={() => handleButtonClick("/candidates")}
      >
        <img src={isBank ? Banco : BancoBlack} alt="Icone de Usuario" />
        <p className={isBank ? "active" : "other"}>Banco de candidatos</p>
      </C.Content>
      <C.Content className={isTech ? "active" : "other"}>
        <img
          src={isTech ? Habilidade : HabilidadeBlack}
          alt="Icone de Usuario"
        />
        <p className={isTech ? "active" : "other"}>Habilidades Técnicas</p>
      </C.Content>
      {userRole === "admin" && (
        <C.Content className={isAdmin ? "active" : "other"} onClick={() => handleButtonClick('/admin')}>
          <img src={isAdmin ? admin : admin_black} alt="Icone de admin" />
          <p className={isAdmin ? "active" : "other"}>Área de Administrador</p>
        </C.Content>
      )}

      <C.SairText onClick={() => handleButtonClick("/")}>Sair</C.SairText>
    </C.Container>
  );
};

export { Header };
