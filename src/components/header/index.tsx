import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../image/logoTecnocar2.png";
import Play from "../../image/play.svg";
import PlayBlack from "../../image/play_black.svg";
import User from "../../image/user.svg";
import UserBlack from "../../image/user_black.svg";
import Banco from "../../image/banco_de_dados.svg";
import BancoBlack from "../../image/banco_de_dados_black.svg";
import admin from "../../image/admin.svg";
import admin_black from "../../image/admin_black.svg";
import icon_black from "../../image/icon_black.svg";
import icon_white from "../../image/icon_white.svg";
import DropDown from "../../image/menu_dropDown.svg";

import * as C from "./style";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const isTutorial = location.pathname === "/tutorial";
  const isRegister = location.pathname === "/register";
  const isBank = location.pathname === "/candidates";
  const isRated = location.pathname === "/Lista";
  const isAdmin = location.pathname === "/admin";

  const [drop, setDrop] = useState(false);

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
  return (
    <>
      <C.Drop onClick={() => setDrop(!drop)}>
        <img src={DropDown} alt="" />
      </C.Drop>
      {drop && (
        <C.ListHeader>
          <p> Tutorial </p>
          <p>Cadastro de Candidatos</p>
          <p> Banco de Candidatos</p>
          <p>Não Avaliados</p>
          {userRole === "admin" && <p>Adminstrador</p>}
          <C.SairText>Sair</C.SairText>
        </C.ListHeader>
      )}
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

        <C.Content
          className={isRated ? "active" : "other"}
          onClick={() => handleButtonClick("/Lista")}
        >
          <img src={isRated ? icon_white : icon_black} alt="Icone de Usuario" />
          <p className={isRated ? "active" : "other"}>Não avaliados</p>
        </C.Content>
        {userRole === "admin" && (
          <C.Content
            className={isAdmin ? "active" : "other"}
            onClick={() => handleButtonClick("/admin")}
          >
            <img src={isAdmin ? admin : admin_black} alt="Icone de admin" />
            <p className={isAdmin ? "active" : "other"}>
              Área de Administrador
            </p>
          </C.Content>
        )}

        <C.SairText onClick={() => handleButtonClick("/")}>Sair</C.SairText>
      </C.Container>
    </>
  );
};

export { Header };
