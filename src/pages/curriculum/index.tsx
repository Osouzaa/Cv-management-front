import Logo from "../../image/logoTecnocar2.png";
import Telefone from "../../image/telefone.png";
import Email from "../../image/email.png";
import Endereço from "../../image/endereco.png";
import { useParams } from "react-router-dom";
import { useAxiosCandidate } from "../../hooks/requestAxios";
import * as C from "./style";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { MouseEvent, useEffect, useState } from "react";
import icon_add from "../../image/icon_add.svg";
import { ModalEscolaridade } from "../../components/modalEscolaridade";

const Curriculum = () => {
  const { id } = useParams();
  const url = `${import.meta.env.VITE_API_URL}${id}`;
  const { data } = useAxiosCandidate(url);
  const [experiencia, setExperiencia] = useState(false);
  const [hideImage, setHideImage] = useState(false);

  useEffect(() => {
    const container = document.querySelector(
      ".container-to-pdf"
    ) as HTMLElement;
    if (container) {
      container.style.width = "260mm";
    }
  }, []);

  const saveAsPDF = () => {
    const container = document.querySelector(
      ".container-to-pdf"
    ) as HTMLElement;

    if (container) {
      html2canvas(container, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png", 0.8);
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= imgHeight;

        if (heightLeft > 0) {
          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= imgHeight;
          }
        }

        pdf.save(
          `Tecnocar - ${data?.profissional} - ${data?.codigoCandidate}.pdf`
        );
      });
      setHideImage(false);
    }
  };

  const togleModal = () => {
    setExperiencia(!experiencia);
  };

  return (
    <>
      <C.ButtonTeste
        onClick={(_e: MouseEvent<HTMLButtonElement>) => {
          setHideImage(true);
          setTimeout(() => {
            saveAsPDF();
          }, 1000);
        }}
      >
        Salvar como PDF
      </C.ButtonTeste>
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
                      <img src={Telefone} alt="icone de telefone" />
                      <span>(31) 99262-2572</span>
                    </C.ContentEmail>
                    <C.ContentEmail>
                      <img src={Email} alt="icone de e-mail" />
                      <span className="Email">recrutamento@tecnocarengenharia.com.br</span>
                    </C.ContentEmail>
                  </C.ContainerDados>
                  <C.ContentEmail className="endereço">
                    <img src={Endereço} alt="" />
                    <span className="endereço">
                      {data.cidade}/{data.uf}
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
                <C.SubTitle>Disponibilidade</C.SubTitle>
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
                <C.ContentForTitle>
                  <C.SubTitle>Formação Acadêmica</C.SubTitle>
                  <button onClick={() => togleModal()}>
                    {!hideImage && <img src={icon_add} alt="" />}
                  </button>
                </C.ContentForTitle>
                {data?.formacoes.map((item: any, index: string) => (
                  <C.ContentFor key={index}>
                    <C.Institution>
                      <li>
                        {item.instituicao}, {item.curso}.
                      </li>
                    </C.Institution>
                    <C.Status>
                      <C.InfoInstituion></C.InfoInstituion>
                    </C.Status>
                    <C.Prevision>
                      <div>
                        <span>Inicio:</span> {item.inicio} -
                        <span>Conclusão:</span> {item.termino_previsao}
                      </div>
                    </C.Prevision>
                  </C.ContentFor>
                ))}
              </C.ContainerFor>
              <C.LinhaComBolinhas>
                <C.BolinhaEsquerda />
                <C.Linha />
                <C.BolinhaDireita />
              </C.LinhaComBolinhas>
              <C.ContainerFive>
                <C.ContentForTitle>
                  <C.SubTitle> Experiência Profissional </C.SubTitle>
                  <button onClick={() => togleModal()}>
                    {!hideImage && <img src={icon_add} alt="" />}
                  </button>
                </C.ContentForTitle>
                {data?.experiencias.map((item: any, index: string) => (
                  <C.ContentFive key={index}>
                    <C.Period>
                      <div>
                        <li className="title-info">{item.empresa}</li>
                      </div>
                    </C.Period>
                    <C.Period className="cargos_empresa">
                      <span>{item.cargo},</span>
                      {item.periodo_inicial} -
                      {item.esta_atualmente === true ? (
                        <span>Atual</span>
                      ) : (
                        item.periodo_final
                      )}
                    </C.Period>
                    <C.Period className="Atividades cargos_empresa">
                      <p>{item.atividades}</p>
                    </C.Period>
                  </C.ContentFive>
                ))}
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
      {experiencia && <ModalEscolaridade togleModal={togleModal} />}
    </>
  );
};

export default Curriculum;
