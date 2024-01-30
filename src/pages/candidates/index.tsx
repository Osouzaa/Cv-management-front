import * as C from "./styled";
import { useAxiosCandidate } from "../../hooks/requestAxios";
import { useEffect, useState } from "react";
import { CardCandidates } from "../../components/CardCandidates";
import { ListCandidates } from "../../components/listCandidates";
import Excel from "../../image/excel.svg";
import List_candidates from "../../image/list_candidates.svg";
import Bloco from "../../image/block.svg";
import { ModalExcel } from "../../components/modalExcel";
import Filter from "../../image/icon_filter.svg";
import RemoveFilter from "../../image/remove_filter.svg";
import { ModalFilter } from "../../components/ModalFilter";
import axios from "axios";

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
  const [filter, setFilter] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<"bloco" | "list">(
    "bloco"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = selectedComponent === 'bloco' ? 6 : 12;
  const [currentData, setCurrentData] = useState<Candidate[] | null>(null);
  const [isFiltered, setIsFiltered] = useState(false);

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

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

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

  const toggleFilter = () => {
    setFilter(!filter);
  };

  const handleFilterApply = async (filters: any) => {
    console.log("Filtros:", filters); // Verifica se os filtros estão sendo recebidos corretamente

    const queryString = buildQueryString(filters);
    console.log("QueryString:", queryString); // Verifica a string de consulta antes da requisição

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}?${queryString}`
      );
      setCurrentData(response.data);
      setIsFiltered(true);
    } catch (error) {
      console.error("Erro ao obter dados filtrados:", error);
    }
  };
  const removeQueryAndFetchData = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL);
      setCurrentData(response.data);
      setFilter(false); // Limpa os filtros
      setIsFiltered(false);
    } catch (error) {
      console.error("Erro ao obter dados sem filtro:", error);
    }
  };


  const buildQueryString = (filters: any) => {
    return Object.keys(filters)
      .map((key) => {
        if (filters[key] !== "" && filters[key] !== "Não") {
          return (
            encodeURIComponent(key) + "=" + encodeURIComponent(filters[key])
          );
        } else {
          return null; 
        }
      })
      .filter((param) => param !== null) 
      .join("&");
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

        <C.ContainerFilter
          onClick={() =>
            isFiltered ? removeQueryAndFetchData() : toggleFilter()
          }
        >
          <img src={isFiltered ? RemoveFilter : Filter} alt="icone do Filtro" />
        </C.ContainerFilter>

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
          <ListCandidates
            currentData={currentData}
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        )}
        {modal && (
          <ModalExcel onClose={toggleModal} dataToExport={currentData} />
        )}
        {filter && (
          <ModalFilter
            toggleFilter={toggleFilter}
            onFilterApply={handleFilterApply}
            removeQueryAndFetchData={removeQueryAndFetchData}
          />
        )}
      </C.Container>
    </>
  );
};

export { Candidate };
