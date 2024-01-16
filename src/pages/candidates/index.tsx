import * as C from "./styled";
import { useNavigate } from "react-router-dom";
import { useAxiosCandidate } from "../../hooks/requestAxios";
import Logo from "../../image/logoTecnocar .png";
import { useState } from "react";
import Loading from "../../components/loading";

interface Candidate {
  id: string;
  profissional: string;
  idade: string;
  email: string;
  telefone: string;
  cidade: string;
  createdAt: Date;
}

const Candidate = () => {
  const { data } = useAxiosCandidate("http://localhost:3000/v1/candidate");

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData =
    data &&
    data.slice(indexOfFirstItem, Math.min(indexOfLastItem, data.length));

  const totalPages = Math.ceil((data?.length || 0) / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <C.Container>
        <C.ContainerGrid>
          {currentData ? (
            currentData.map((candidate: Candidate) => (
              <C.Content key={candidate.id}>
                <C.LogoImage src={Logo} alt="" />
                <C.Title>{candidate.profissional}</C.Title>
                <C.ContentInfo>
                  <C.InfoCandidate>
                    <span>Idade:</span> {candidate.idade} anos
                  </C.InfoCandidate>
                  <C.InfoCandidate>
                    <p>Email:</p> {candidate.email}
                  </C.InfoCandidate>
                  <C.InfoCandidate>
                    <span>Telefone: </span>
                    {candidate.telefone}
                  </C.InfoCandidate>
                  <C.InfoCandidate>
                    <span>Cidade: </span>
                    {candidate.cidade}
                  </C.InfoCandidate>
                </C.ContentInfo>
                <C.Button
                  onClick={() => navigate(`/register/${candidate.id}`)}
                  style={{ marginLeft: "2em" }}
                >
                  Ver Mais
                </C.Button>
              </C.Content>
            ))
          ) : (
            <Loading />
          )}
        </C.ContainerGrid>
      </C.Container>
      <C.Pagination>
        {Array.from({ length: totalPages }).map((_, index) => (
          <C.PageButton
            key={index}
            onClick={() => handlePageChange(index + 1)}
            active={currentPage === index + 1} // Correção aqui
          >
            {index + 1}
          </C.PageButton>
        ))}
      </C.Pagination>
    </>
  );
};

export { Candidate };
