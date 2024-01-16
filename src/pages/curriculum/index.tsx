import Logo from "../../image/logoTecnocar2.png";
import Telefone from "../../image/telefone.png";
import Email from "../../image/email.png";
import Endereço from "../../image/endereco.png";
import { useParams } from "react-router-dom";
import { useAxiosCandidate } from "../../hooks/requestAxios";
import * as C from "./style";

const Curriculum = () => {
  const { id } = useParams();
  const url = `http://localhost:3000/v1/candidate/${id}`;
  const { data } = useAxiosCandidate(url);

  return (
    <C.Container>
      <C.LeftPanel>
        <C.ImageLogo src={Logo} alt="" />
        {data && (
          <>
            <C.ContentInfo>
              <C.Profissional>{data.profissional}</C.Profissional>
              <C.ContainerTwo>
                <C.ContainerDados>
                  <C.ContentEmail>
                    <img src={Telefone} alt="" />
                    <span>{data.telefone}</span>
                  </C.ContentEmail>
                  <C.ContentEmail>
                    <img src={Email} alt="" />
                    <span className="Email">{data.email}</span>
                  </C.ContentEmail>
                </C.ContainerDados>
                <C.ContentEmail className="endereço">
                  <img src={Endereço} alt="" />
                  <span className="endereço">
                    Avenida Augusto Buzati filho 94, Bom Retiro, Betim - MG
                  </span>
                </C.ContentEmail>
              </C.ContainerTwo>
            </C.ContentInfo>
            <C.LinhaComBolinhas>
              <C.BolinhaEsquerda />
              <C.Linha />
              <C.BolinhaDireita />
            </C.LinhaComBolinhas>
          </>
        )}
      </C.LeftPanel>
      <C.RightPanel />
    </C.Container>
  );
};

export default Curriculum;
