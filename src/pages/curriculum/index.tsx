import Logo from "../../image/logoTecnocar2.png";
import Telefone from "../../image/telefone.png";
import Email from "../../image/email.png";
import { useParams } from "react-router-dom";
import { useAxiosCandidate } from "../../hooks/requestAxios";
import * as C from "./style";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { MouseEvent, useEffect, useState } from "react";
import icon_add from "../../image/icon_add.svg";
import { ModalEscolaridade } from "../../components/modalEscolaridade";
import { ModalExperiencia } from "../../components/modalExperience";
import { ModalSoftware } from "../../components/modalSoftwares";

const Curriculum = () => {
  const { id } = useParams();
  const url = `${import.meta.env.VITE_API_URL}${id}`;
  const { data, refetch } = useAxiosCandidate(url);
  const [escolaridade, setEscolaridade] = useState(false);
  const [experiencia, setExperiencia] = useState(false);
  const [software, setSoftware] = useState(false);
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

  const toggleModal = () => {
    setEscolaridade(!escolaridade);
    refetch();
  };

  const toggleModalExperiencia = () => {
    setExperiencia(!experiencia);
    refetch();
  };

  const toggleModalSoftware = () => {
    setSoftware(!software);
    refetch();
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
          {data && (
            <>
              <C.CardInfo>
                <span>
                  {data?.codigoCandidate} - {data.idade} anos - {data.genero} -{" "}
                  {data.cidade}/{data.uf}
                </span>
              </C.CardInfo>
              <C.ContentInfo>
                <C.ContentLogo>
                  <C.Profissional>{data?.codigoCandidate}</C.Profissional>
                  <img src={Logo} alt="" />
                </C.ContentLogo>
                <C.ContainerTwo>
                  <C.ContainerDados>
                    <C.ContentEmail>
                      <img src={Telefone} alt="icone de telefone" />
                      <span>(31) 99262-2572</span>
                    </C.ContentEmail>
                    <C.ContentEmail>
                      <img src={Email} alt="icone de e-mail" />
                      <span className="Email">
                        recrutamento@tecnocarengenharia.com.br
                      </span>
                    </C.ContentEmail>
                  </C.ContainerDados>
                </C.ContainerTwo>
              </C.ContentInfo>
              {data.resumoProfissional && (
                <C.Resumo>
                  <p>{data.resumoProfissional}</p>
                </C.Resumo>
              )}
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
              </C.ContainerThree>
              <C.LinhaComBolinhas>
                <C.BolinhaEsquerda />
                <C.Linha />
                <C.BolinhaDireita />
              </C.LinhaComBolinhas>
              <C.ContainerFive>
                <C.ContentForTitle>
                  <C.SubTitle> Experiência Profissional </C.SubTitle>
                  <button onClick={() => toggleModalExperiencia()}>
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
              <C.ContainerFor>
                <C.ContentForTitle>
                  <C.SubTitle>Formação Acadêmica</C.SubTitle>
                  <button onClick={() => toggleModal()}>
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
              <C.ContainerSix>
                <div>
                  <C.ContentForTitle>
                    <C.SubTitle> Softwares</C.SubTitle>
                    <button onClick={() => toggleModalSoftware()}>
                      {!hideImage && <img src={icon_add} alt="" />}
                    </button>
                  </C.ContentForTitle>
                  <C.ContentSix>
                    {data?.software.map(
                      (
                        item: { software: string; nivel: string },
                        index: number
                      ) => (
                        <div key={index}>
                          <li>
                            {item.software} - <span>{item.nivel}</span>
                          </li>
                        </div>
                      )
                    )}
                  </C.ContentSix>
                </div>
                <div>
                  <C.SubTitle> Idiomas</C.SubTitle>
                </div>
              </C.ContainerSix>
              <C.LinhaComBolinhas>
                <C.BolinhaEsquerda />
                <C.Linha />
                <C.BolinhaDireita />
              </C.LinhaComBolinhas>
              <C.ContainerSeven>
                <div>
                  <C.SubTitle> Cursos e Informática</C.SubTitle>
                </div>
                <div>
                  <C.SubTitle> Atividades Extra-curriculares</C.SubTitle>
                </div>
              </C.ContainerSeven>
            </>
          )}
        </C.LeftPanel>
      </C.Container>
      {escolaridade && <ModalEscolaridade toggleModal={toggleModal} />}
      {experiencia && (
        <ModalExperiencia toggleModalExperiencia={toggleModalExperiencia} />
      )}
      {software && <ModalSoftware toggleModalSoftware={toggleModalSoftware} />}
    </>
  );
};

export default Curriculum;
