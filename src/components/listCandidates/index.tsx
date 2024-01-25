import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAxiosCandidate } from "../../hooks/requestAxios";
import { Candidate } from "../../types/candidate.types";
import * as C from "./style";

const ListCandidates = () => {
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

  return (
    <C.TableContainer>
      {currentData && currentData.length > 0 ? (
        <C.StyledTable>
          <thead>
            <tr>
              <C.TableHeader>ID</C.TableHeader>
              <C.TableHeader>Profissional</C.TableHeader>
              <C.TableHeader>Idade</C.TableHeader>
              <C.TableHeader>Email</C.TableHeader>
              <C.TableHeader>Telefone</C.TableHeader>
              <C.TableHeader>Cidade</C.TableHeader>
              <C.TableHeader>Ver mais</C.TableHeader>
            </tr>
          </thead>
          <tbody>
            {currentData.map((candidate) => (
              <tr key={candidate.id}>
                <C.TableData>{candidate.id}</C.TableData>
                <C.TableData>{candidate.profissional}</C.TableData>
                <C.TableData>{candidate.idade}</C.TableData>
                <C.TableData>{candidate.email}</C.TableData>
                <C.TableData>{candidate.telefone}</C.TableData>
                <C.TableData>{candidate.cidade}</C.TableData>
                <C.TableData className="info">Info</C.TableData>
              </tr>
            ))}
          </tbody>
        </C.StyledTable>
      ) : (
        <p>No candidates to display.</p>
      )}

      {/* Pagination controls go here */}
    </C.TableContainer>
  );
};

export { ListCandidates };
