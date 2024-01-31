import { useNavigate } from "react-router-dom";

import Logo from "../../image/logoTecnocar .png";
import * as C from "./style";
import Loading from "../loading";
import IconNo from '../../image/no_avaliable.svg'

interface Candidate {
  id: string;
  profissional: string;
  idade: string;
  email: string;
  telefone: string;
  cidade: string;
}

interface CardCandidatesProps {
  currentData?: Candidate[] | null;
  totalPages?: number;
  currentPage?: number;
  handlePageChange?: (newPage: number) => void;
  toggleModal?: () => void;
  availiado?:boolean;
}

const CardCandidates = ({
  currentData,
  totalPages,
  currentPage,
  handlePageChange,
  availiado
}: CardCandidatesProps) => {
  const navigate = useNavigate();

  return (
    <>
      <C.ContainerGrid>
        {currentData ? (
          currentData.map((candidate: Candidate, index: number) => (
            <C.Content key={`${candidate.id}_${index}`}>
              <C.LogoImage src={Logo} alt="" />
              {availiado &&  <C.Image src={IconNo}/>}
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

      <C.Pagination>
        {totalPages &&
          Array.from({ length: totalPages }).map((_, index) => (
            <C.PageButton
              key={index}
              onClick={() => handlePageChange && handlePageChange(index + 1)}
              $active={currentPage === index + 1}
            >
              {index + 1}
            </C.PageButton>
          ))}
      </C.Pagination>
    </>
  );
};

export { CardCandidates };
