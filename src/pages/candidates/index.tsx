import * as C from "./styled";
import { useAxiosCandidate } from "../../hooks/requestAxios";
import { useEffect, useState } from "react";
import { CardCandidates } from "../../components/CardCandidates";
import { ListCandidates } from "../../components/listCandidates";
import Excel from "../../image/excel.svg";
import List_candidates from "../../image/list_candidates.svg";
import Bloco from "../../image/block.svg";
import { ModalExcel } from "../../components/modalExcel";

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

const Candidate = () => {
  const { data } = useAxiosCandidate(import.meta.env.VITE_API_URL);
  const [modal, setModal] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<"bloco" | "list">(
    "bloco"
  );


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [currentData, setCurrentData] = useState<Candidate[] | null>(null);

  useEffect(() => {
    if (data) {
      const sortedData = data.sort(
        (a: { id: string }, b: { id: string }) =>
          parseInt(a.id) - parseInt(b.id)
      );

      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const updatedCurrentData = sortedData.slice(
        indexOfFirstItem,
        Math.min(indexOfLastItem, sortedData.length)
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

  const handleIconClick = (component: "list" | "bloco") => {
    setSelectedComponent(component);
  };

  return (
    <>
      <C.Container>
        <C.ContainerExcel onClick={() => toggleModal()}>
          <img src={Excel} alt=" icone de excel" />
        </C.ContainerExcel>

        <C.ContainerList
          onClick={() => handleIconClick("list")}
          className={selectedComponent === "list" ? "list" : ""}
        >
          <img src={List_candidates} alt=" icone de lista" />
        </C.ContainerList>

        <C.ContainerBloco
          onClick={() => handleIconClick("bloco")}
          className={selectedComponent === "bloco" ? "bloco" : ""}
        >
          <img src={Bloco} alt="icone de bloco" />
        </C.ContainerBloco>

        {selectedComponent === "bloco" && (
          <CardCandidates
            currentData={currentData}
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            toggleModal={toggleModal}
          />
        )}

        {selectedComponent === "list" && (
          <ListCandidates />
        )}
        {modal && (
          <ModalExcel onClose={toggleModal} dataToExport={currentData} />
        )}
      </C.Container>
    </>
  );
};

export { Candidate };
