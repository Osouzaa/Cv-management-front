import React, { useState, useEffect } from "react";
import { HeaderAdmin } from "../../components/headerAdmin";
import { InputSearch } from "../../components/inputSearch";
import * as C from "./style";
import axios from "axios";
import { ModalUser } from "../../components/modalUser";
import { format } from "date-fns";

interface UserData {
  id: number;
  name: string;
  email: string;
  registration: string;
  role: string;
  isActive: boolean;
  createdAt: string;
}

const TelaAdmin = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [newUser, setNewUser] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);

  const roleMapping: Record<string, string> = {
    technique: "Técnico",
    admin: "Administrador",
    recruitment: "Recrutamento",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("Token não encontrado no localStorage.");
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(
          `${import.meta.env.VITE_API_GET_ALL_URL}`,
          config
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Erro ao obter os dados:", error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = userData.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const toggleModal = () => {
    setNewUser(!newUser);
  };

  return (
    <>
      <HeaderAdmin />
      <InputSearch />
      <C.RegisterUser onClick={toggleModal}>Cadastrar usuario</C.RegisterUser>
      <C.Table>
        <thead>
          <C.CabecalhoTable>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Matricula</th>
            <th>Setor</th>
            <th>Status</th>
            <th>Criado em</th>
          </C.CabecalhoTable>
        </thead>
        <C.TableBody>
          {currentUsers.map((user) => (
            <tr
              key={user.id}
              onClick={() => console.log("Detalhes do Usuário:", user)}
            >
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.registration}</td>
              <td>{roleMapping[user.role]}</td>
              <td>{user.isActive ? "Ativo" : "Inativo"}</td>
              <td>{format(new Date(user.createdAt), "dd/MM/yyyy")}</td>
            </tr>
          ))}
        </C.TableBody>
      </C.Table>
      <C.Pagination>
        {[...Array(Math.ceil(userData.length / usersPerPage)).keys()].map(
          (number, index) => (
            <C.PaginationItem
              key={number}
              onClick={() => paginate(number + 1)}
              $active={currentPage === index + 1}
            >
              {number + 1}
            </C.PaginationItem>
          )
        )}
      </C.Pagination>
      {newUser && <ModalUser onclose={toggleModal} />}
    </>
  );
};

export { TelaAdmin };
