import React from "react";
import * as C from "./style";
import Loading from "../loading";

interface Candidate {
  id: string;
  profissional: string;
  idade: string;
  email: string;
  telefone: string;
  cidade: string;
  uf: string;
  esta_empregado: string;
  pretensao_salarial: string; // Alterado para number para formatar como dinheiro
  tipo_desejado_linkedin: string;
  nivel_funcao: string;
}

interface ListCandidatesProps {
  currentData: Candidate[] | null;
  totalPages: number;
  currentPage: number;
  handlePageChange: (newPage: number) => void;
}

const ListCandidates: React.FC<ListCandidatesProps> = ({
  currentData,
  totalPages,
  currentPage,
  handlePageChange,
}) => {
  const formatMoney = (amount: string) => {
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount)) return "";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(numericAmount);
  };

  return (
    <C.TableContainer>
      {currentData && currentData.length > 0 ? (
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
              {currentData.map((candidate: Candidate) => (
                <tr key={candidate.id}>
                  <C.TableData>{candidate.profissional}</C.TableData>
                  <C.TableData className="idade">{candidate.idade}</C.TableData>
                  <C.TableData className="email">{candidate.email}</C.TableData>
                  <C.TableData>{candidate.telefone}</C.TableData>
                  <C.TableData>{candidate.uf}</C.TableData>
                  <C.TableData>
                    {formatMoney(candidate.pretensao_salarial)}
                  </C.TableData>
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
