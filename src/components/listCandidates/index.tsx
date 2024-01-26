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
  pretensao_salarial: string;
  tipo_desejado_linkedin: string;
  nivel_funcao: string;
}

interface TableCandidatesProps {
  currentData: Candidate[] | null
  totalPages: number;
  currentPage: number;
  handlePageChange: (newPage: number) => void;
  toggleModal: () => void;
}

const ListCandidates = ({
  currentData,
}: TableCandidatesProps) => {
  return (
    <C.TableContainer>
      {currentData && currentData.length > 0 ? (
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
            {currentData.map((candidate) => (
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
      ) : (
        <Loading />
      )}
    </C.TableContainer>
  );
};

export { ListCandidates };
