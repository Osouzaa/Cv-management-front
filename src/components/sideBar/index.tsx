import * as C from "./style";
import { Navigate, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const handleToken = () => {
    localStorage.removeItem("token");
    return <Navigate to="/register" />;
  };

 

  return (
    <C.Container>
      <C.SideBar>
        <C.ContentName>
          <C.Name>Gabriel Souza Alves</C.Name>
          <C.Email>Gabrielsouzaalves750@gmail.com</C.Email>
        </C.ContentName>

        <C.StyledList>
          <C.StyledListItem>Banco de Funcionários</C.StyledListItem>
          <C.StyledListItem>Relatórios</C.StyledListItem>
          <C.StyledListItem>Configurações</C.StyledListItem>
          <C.StyledListItem>Gerenciamento de Projetos</C.StyledListItem>
          <C.StyledListItem>Calendário</C.StyledListItem>
          <C.StyledListItem onClick={handleToken}>Sair</C.StyledListItem>
          <C.StyledListItem onClick={() => navigate('/register')}>Voltar</C.StyledListItem>
        </C.StyledList>
      </C.SideBar>
    </C.Container>
  );
};

export { SideBar };
