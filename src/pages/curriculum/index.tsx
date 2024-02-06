import Logo from "../../image/logoTecnocar2.png";
import Telefone from "../../image/telefone.png";
import Email from "../../image/email.png";
import Endereço from "../../image/endereco.png";
import { useParams } from "react-router-dom";
import { useAxiosCandidate } from "../../hooks/requestAxios";
import * as C from "./style";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { MouseEvent, useEffect } from "react";

const Curriculum = () => {
  const { id } = useParams();
  const url = `${import.meta.env.VITE_API_URL}${id}`;
  const { data } = useAxiosCandidate(url);

  useEffect(() => {
    // Defina a largura e a altura do contêiner para corresponder à folha A4
    const container = document.querySelector(
      ".container-to-pdf"
    ) as HTMLElement;
    if (container) {
      container.style.width = "260mm"; // largura A4
      container.style.height = "297mm"; // altura A4
    }
  }, []);

  const saveAsPDF = () => {
    const container = document.querySelector(
      ".container-to-pdf"
    ) as HTMLElement;

    if (container) {
      html2canvas(container, { scale: 2 }).then((canvas) => {
        // Experimente aumentar o scale
        const imgData = canvas.toDataURL("image/png", 0.8); // Experimente PNG e qualidade diferente
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 210; // largura A4
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        // Adicione a primeira página
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= imgHeight;

        // Verifique se há altura restante para outra página
        if (heightLeft > 0) {
          // Adicione mais páginas se houver altura restante
          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= imgHeight;
          }
        }

        pdf.save("curriculum.pdf");
      });
    }
  };

  return (
    <>
      <C.ButtonTeste onClick={(_e: MouseEvent<HTMLButtonElement>) => saveAsPDF()}>
        Salvar como PDF
      </C.ButtonTeste>
      ;
      <C.Container className="container-to-pdf">
        <C.LeftPanel>
          <C.ImageLogo src={Logo} alt="" />
          {data && (
            <>
              <C.ContentInfo>
                <div>
                  <C.Profissional>{data.profissional}</C.Profissional>
                  <C.Formacao>{data.formacao}</C.Formacao>
                </div>
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
                      {data.cidade} - {data.uf}
                    </span>
                  </C.ContentEmail>
                </C.ContainerTwo>
              </C.ContentInfo>
              <C.LinhaComBolinhas>
                <C.BolinhaEsquerda />
                <C.Linha />
                <C.BolinhaDireita />
              </C.LinhaComBolinhas>
              <C.ContainerThree>
                <C.SubTitle> Disponibilidade</C.SubTitle>
                <C.Vagas>
                  <C.VagasItem>
                    <div>
                      <span>Vaga 100% Presencial Betim/MG:</span>
                      {data.vaga_100_presencial_betim_mg}
                    </div>
                    <div>
                      <span>Vaga 100% Presencial Goiana/PE:</span>
                      {data.vaga_100_presencial_goiana_pe}
                    </div>
                    <div>
                      <span>Vaga Hibrida Betim:</span>
                      {data.vaga_hibrida_betim}
                    </div>
                    <div>
                      <span>Home Office</span>
                      {data.home_office}
                    </div>
                  </C.VagasItem>
                  <C.VagasItem className="item_right">
                    <div>
                      <span>Vaga 100% Presencial Porto Real/RJ:</span>
                      {data.vaga_100_presencial_porto_real_rj}
                    </div>
                    <div>
                      <span>Vaga 100% Presencial São Paulo/SP</span>
                      {data.vaga_100_presencial_sao_paulo}
                    </div>
                    <div>
                      <span>Vaga Internacional:</span>
                      {data.vaga_internacional}
                    </div>
                  </C.VagasItem>
                </C.Vagas>
                <C.LinhaComBolinhas>
                  <C.BolinhaEsquerda />
                  <C.Linha />
                  <C.BolinhaDireita />
                </C.LinhaComBolinhas>
              </C.ContainerThree>
              <C.ContainerFor>
                <C.SubTitle>Formação Acadêmica</C.SubTitle>
              </C.ContainerFor>
              <C.LinhaComBolinhas>
                <C.BolinhaEsquerda />
                <C.Linha />
                <C.BolinhaDireita />
              </C.LinhaComBolinhas>
              <C.ContainerFive>
                <C.SubTitle> Experiência Profissional </C.SubTitle>
              </C.ContainerFive>
              <C.LinhaComBolinhas>
                <C.BolinhaEsquerda />
                <C.Linha />
                <C.BolinhaDireita />
              </C.LinhaComBolinhas>
              <C.ContainerSix>
                <div>
                  <C.SubTitle> Softwares</C.SubTitle>
                </div>
                <div>
                  <C.SubTitle> Idiomas</C.SubTitle>
                </div>
              </C.ContainerSix>
            </>
          )}
        </C.LeftPanel>
        <C.RightPanel />
      </C.Container>
    </>
  );
};

export default Curriculum;
