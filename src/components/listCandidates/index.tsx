import React, { useState } from "react";
import * as C from "./style";
import Loading from "../loading";
import { useAxiosCandidate } from "../../hooks/requestAxios";

interface Candidate {
  id: string;
  profissional: string;
  idade: string;
  email: string;
  telefone: string;
  cidade: string;
  uf: string;
  esta_empregado: string;
  pretensao_salarial: string;
  tipo_desejado_linkedin: string;
  nivel_funcao: string;
}

const ITEMS_PER_PAGE = 12;

const ListCandidates: React.FC = () => {
  const { data } = useAxiosCandidate(import.meta.env.VITE_API_URL);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const dataArray = Array.isArray(data) ? data : [data];
  const sortedData = data
    ? [...dataArray].sort((a, b) => parseInt(a.id) - parseInt(b.id))
    : null;

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = sortedData
  ? sortedData.slice(indexOfFirstItem, indexOfLastItem)
  : null;

  const totalPages = Math.ceil((sortedData?.length || 0) / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <C.TableContainer>
      {sortedData && sortedData.length > 0 ? (
        <>
          <C.StyledTable>
            <thead>
              <tr>
                <C.TableHeaderSpecial>Profissional</C.TableHeaderSpecial>
                <C.TableHeaderSpecial>Idade</C.TableHeaderSpecial>
                <C.TableHeaderSpecial>Email</C.TableHeaderSpecial>
                <C.TableHeaderSpecial>Telefone</C.TableHeaderSpecial>
                <C.TableHeaderSpecial>UF</C.TableHeaderSpecial>
                <C.TableHeaderSpecial>Pretensão Salarial</C.TableHeaderSpecial>
                <C.TableHeaderSpecial>Vaga Cadastrada</C.TableHeaderSpecial>
                <C.TableHeaderSpecial>Nivel</C.TableHeaderSpecial>
                <C.TableHeaderSpecial>Informações</C.TableHeaderSpecial>
              </tr>
            </thead>
            <C.TableBody>
              {currentItems?.map((candidate: Candidate) => (
                <tr key={candidate.id}>
                  <C.TableData>{candidate.profissional}</C.TableData>
                  <C.TableData className="idade">{candidate.idade}</C.TableData>
                  <C.TableData className="email">{candidate.email}</C.TableData>
                  <C.TableData>{candidate.telefone}</C.TableData>
                  <C.TableData>{candidate.uf}</C.TableData>
                  <C.TableData>{candidate.pretensao_salarial}</C.TableData>
                  <C.TableData>{candidate.tipo_desejado_linkedin}</C.TableData>
                  <C.TableData>{candidate.nivel_funcao}</C.TableData>
                  <C.TableData className="info">Ver mais</C.TableData>
                </tr>
              ))}
            </C.TableBody>
          </C.StyledTable>
          <C.Pagination>
            {Array.from({ length: totalPages }).map((_, index) => (
              <C.PageButton
                key={index}
                onClick={() => handlePageChange(index + 1)}
                $active={currentPage === index + 1}
              >
                {index + 1}
              </C.PageButton>
            ))}
          </C.Pagination>
        </>
      ) : (
        <Loading />
      )}
    </C.TableContainer>
  );
};

export { ListCandidates };
