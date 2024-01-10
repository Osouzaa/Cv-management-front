import * as C from "./styled";
import { useNavigate } from "react-router-dom";
import { useAxiosCandidate } from "../../hooks/requestAxios";
import Logo from "../../image/logoTecnocar .png";

interface Candidate {
  id: string;
  profissional: string;
  idade: string;
  email: string;
  telefone: string;
  cidade: string;
}

const Candidate = () => {
  const { data } = useAxiosCandidate("http://localhost:3000/v1/candidate");
  console.log(data);

  const navigate = useNavigate();

  return (
    <C.Container>
      <C.ContainerGrid>
        {data &&
          data.map((candidate: Candidate) => (
            <C.Content key={candidate.id}>
              <C.LogoImage src={Logo} alt="" />
              <C.Title>{candidate.profissional}</C.Title>
              <C.ContentInfo>
                <p>
                  <span>Idade:</span> {candidate.idade} anos
                </p>
                <p>
                  <div>Email:</div> {candidate.email}
                </p>
                <p>
                  <span>Telefone: </span>
                  {candidate.telefone}
                </p>
                <p>
                  <span>Cidade: </span>
                  {candidate.cidade}
                </p>
              </C.ContentInfo>
              <C.Button
                onClick={() => navigate(`/curriculum/${candidate.id}`)}
                style={{ marginLeft: "2em" }}
              >
                Ver Mais
              </C.Button>
            </C.Content>
          ))}
      </C.ContainerGrid>
    </C.Container>
  );
};

export { Candidate };
