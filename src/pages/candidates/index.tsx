import * as C from "./styled";
import { useNavigate } from "react-router-dom";
import { useAxiosCandidate } from "../../hooks/requestAxios";
import Logo from "../../image/logoTecnocar .png";
import { useEffect, useState } from "react";
import Loading from "../../components/loading";
import { ModalExcel } from "../../components/modalExcel";

interface Candidate {
  id: string;
  profissional: string;
  idade: string;
  email: string;
  telefone: string;
  cidade: string;
}

const Candidate = () => {
  const { data } = useAxiosCandidate(import.meta.env.VITE_API_URL);
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [currentData, setCurrentData] = useState<Candidate[] | null>(null);

  useEffect(() => {
    if (data) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const updatedCurrentData = data.slice(
        indexOfFirstItem,
        Math.min(indexOfLastItem, data.length)
      );
      setCurrentData(updatedCurrentData);
    }
  }, [data, currentPage, itemsPerPage]);

  const totalPages = Math.ceil((data?.length || 0) / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <C.Container>
        {/* <ExportToExcelButton data={currentData} fileName="dados_candidatos.xlsx" /> */}

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
            $active={currentPage === index + 1}
          >
            {index + 1}
          </C.PageButton>
        ))}
      </C.Pagination>

      <button onClick={toggleModal}> Abrir Excel </button>
      {modal && <ModalExcel classname="Date" dataToExport={currentData} onClose={toggleModal} />}
    </>
  );
};

export { Candidate };
