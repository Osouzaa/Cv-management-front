import { useEffect, useState } from "react";
import { SideBar } from "../../components/sideBar";
import axios from "axios";
import * as C from "./style";

const TelaAdmin = () => {
  const [data, setData] = useState([]); // Defina um tipo apropriado para o estado

  const token = localStorage.getItem("token"); // Substitua pelo seu token de autenticação

  useEffect(() => {
    const fetchData = async () => {
      const url = `${import.meta.env.VITE_API_GET_ALL_URL}/`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
  
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    };

    fetchData();
  }, [token]);
  return (
    <C.Container>
      <SideBar />
      <C.StyledTable>
        <thead>
          <tr>
            <C.StyledTableHeader>ID</C.StyledTableHeader>
            <C.StyledTableHeader>Nome</C.StyledTableHeader>
            <C.StyledTableHeader>Email</C.StyledTableHeader>
            <C.StyledTableHeader>Função</C.StyledTableHeader>
            <C.StyledTableHeader>Editar</C.StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {data &&
            Array.isArray(data) &&
            data.map((item) => (
              <tr key={item.id}>
                <C.StyledTableData>{item.id}</C.StyledTableData>
                <C.StyledTableData>{item.name}</C.StyledTableData>
                <C.StyledTableData>{item.email}</C.StyledTableData>
                <C.StyledTableData>{item.role}</C.StyledTableData>
              </tr>
            ))}
        </tbody>
      </C.StyledTable>
    </C.Container>
  );
};

export { TelaAdmin };
