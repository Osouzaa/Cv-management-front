import React, { useState, useEffect } from "react";
import { HeaderAdmin } from "../../components/headerAdmin";
import { InputSearch } from "../../components/inputSearch";
import * as C from "./style";
import axios from "axios";


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
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

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

  const handleUserClick = (user: UserData) => {
    setSelectedUser(user);
    console.log("Detalhes do Usuário:", user);
  };

  return (
    <>
      <HeaderAdmin />
      <InputSearch />
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
          {userData.map((user) => (
            <tr key={user.id} onClick={() => handleUserClick(user)}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.registration}</td>
              <td>{user.role}</td>
              <td>{user.isActive ? "Ativo" : "Inativo"}</td>
              <td>{user.createdAt}</td>
            </tr>
          ))}
        </C.TableBody>
      </C.Table>
    </>
  );
};

export { TelaAdmin };
