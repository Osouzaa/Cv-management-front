
import { useParams } from "react-router-dom";
import { useAxiosCandidate } from "../../hooks/requestAxios";
import * as C from "./style";

const Curriculum = () => {
  const { id } = useParams();
  const url = `http://localhost:3000/v1/candidate/${id}`;
  const { data } = useAxiosCandidate(url);

  console.log(data)

  return (
    <C.Container>
      <h2>Curriculum</h2>
      <h1>{id}</h1>

      {data && (
        <div>
          <p>{data.profissional}</p>
          <p>{data.idade} anos</p>
          <p>{data.email}</p>
          <p>{data.telefone}</p>
          <h1>{data.conhecimento_ingles}</h1>
        </div>
      )}
    </C.Container>
  );
};

export default Curriculum;
