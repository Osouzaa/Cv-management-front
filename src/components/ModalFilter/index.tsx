import { useState } from "react";
import RangeSlider from "../inputRange";
import * as C from "./style";
import InputRadio from "../inputRadio";
import InputSelect from "../inputSelect";
import { camposSelect } from "../../utils/campoForms";
import { ChangeEvent } from "../../types/types";
import { ChangeEvent as CE } from "react";
import { ContentCheckLabel } from "../inputCheck";

interface ModalFilterProps {
  toggleFilter?: () => void;
  onFilterApply?: (filtro: any) => void;
  removeQueryAndFetchData?: () => void;
}

const ModalFilter = ({ removeQueryAndFetchData, onFilterApply, toggleFilter }: ModalFilterProps) => {
  const [minIdade, setMinIdade] = useState(0);
  const [maxIdade, setMaxIdade] = useState(70);
  const [minPretensaoSalarial, setMinPretensaoSalarial] = useState(0);
  const [maxPretensaoSalarial, setMaxPretensaoSalarial] = useState(20000);
  const [minPretensaoPJ, setMinPretensaoPJ] = useState(0);
  const [maxPretensaoPJ, setMaxPretensaoPJ] = useState(200);
  const [conhecimento_ingles, setConhecimentoIngles] = useState<string[]>([]);
  const [tipo_desejado_linkedin, setTipo_desejado_linkedin] = useState("");
  const [nivel_funcao, setNivelFuncao] = useState("");
  const [modalidade_atual, setModalidadeAtual] = useState("");
  const [formacao, setFormacao] = useState("");
  const [
    vaga_100_presencial_porto_real_rj,
    setVaga_100_presencial_porto_real_rj,
  ] = useState("N/A");
  const [vaga_100_presencial_goiana_pe, setVaga_100_presencial_goiana_pe] =
    useState("N/A");
  const [vaga_100_presencial_betim_mg, setVaga_100_presencial_betim_mg] =
    useState("N/A");
  const [vaga_internacional, setVagaInternacional] = useState("N/A");
  const [experiencia_ramo_automotivo, setExperiencia_ramo_automotivo] =
    useState("N/A");
  const [esta_empregado, setEstaEmpregado] = useState("N/A");
  const [interesse_imediato, setInteresseImediato] = useState("N/A");
  const [home_office, setHomeOffice] = useState("N/A");
  const [vaga_100_presencial_sao_paulo, setVaga_100_presencial_sao_paulo] =
    useState("N/A");
  const [uf, setUf] = useState<string[]>([]);

  const handleRangeChangeIdade = (value: any) => {
    setMinIdade(value[0]);
    setMaxIdade(value[1]);
  };

  const handleRangeChangePretensaoCLT = (value: any) => {
    setMinPretensaoSalarial(value[0]);
    setMaxPretensaoSalarial(value[1]);
  };

  const handleRangeChangePretensaoPJ = (value: any) => {
    setMinPretensaoPJ(value[0]);
    setMaxPretensaoPJ(value[1]);
  };

  
  const handleFilter = () => {
    const filtro = {
      minIdade,
      maxIdade,
      minPretensaoSalarial,
      maxPretensaoSalarial,
      minPretensaoPJ,
      maxPretensaoPJ,
      conhecimento_ingles,
      tipo_desejado_linkedin,
      nivel_funcao,
      modalidade_atual,
      formacao,
      vaga_100_presencial_porto_real_rj,
      vaga_100_presencial_goiana_pe,
      vaga_100_presencial_betim_mg,
      uf,
      experiencia_ramo_automotivo,
      vaga_internacional,
      esta_empregado,
      interesse_imediato,
      home_office,
    };

    if (onFilterApply) {
      onFilterApply(filtro);
    }
    if (toggleFilter) {
      toggleFilter();
    }

    console.log(filtro);
  };

  const formacaoOptions =
    camposSelect.find((campo) => campo.field === "formacao")?.options || [];
  const modalidadeOptions =
    camposSelect.find((campo) => campo.field === "modalidade_atual")?.options ||
    [];
  const nivelOptions =
    camposSelect.find((campo) => campo.field === "nivel_funcao")?.options || [];

  const handleConhecimentoInglesChange = (value: string) => {
    setConhecimentoIngles((prevConhecimentoIngles) => {
      if (prevConhecimentoIngles.includes(value)) {
        return prevConhecimentoIngles.filter((item) => item !== value);
      } else {
        return [...prevConhecimentoIngles, value];
      }
    });
  };

  const handleLocalidadeChange = (value: string) => {
    setUf((prevLocalidade) => {
      if (prevLocalidade.includes(value)) {
        return prevLocalidade.filter((item) => item !== value);
      } else {
        return [...prevLocalidade, value];
      }
    });
  };

  const handleVagaLinkedinChange = (e: ChangeEvent) => {
    setTipo_desejado_linkedin(e.target.value);
  };

  const handleNivelFuncaoChange = (e: ChangeEvent) => {
    setNivelFuncao(e.target.value);
  };

  const handleModalidadeAtualChange = (e: ChangeEvent) => {
    setModalidadeAtual(e.target.value);
  };

  const handleFormacaoChange = (e: ChangeEvent) => {
    setFormacao(e.target.value);
  };

  const handleVagaPresencialPortoRealChange = (e: CE<HTMLInputElement>) => {
    setVaga_100_presencial_porto_real_rj(e.target.value);
  };

  const handleVagaPresencialGoianaChange = (e: CE<HTMLInputElement>) => {
    setVaga_100_presencial_goiana_pe(e.target.value);
  };

  const handleVagaPresencialBetimChange = (e: CE<HTMLInputElement>) => {
    setVaga_100_presencial_betim_mg(e.target.value);
  };

  const handleExperienciaRamoAutomotivoChange = (e: CE<HTMLInputElement>) => {
    setExperiencia_ramo_automotivo(e.target.value);
  };

  const handleEstaEmpregadoChange = (e: CE<HTMLInputElement>) => {
    setEstaEmpregado(e.target.value);
  };

  const handleVagaInternacionalChange = (e: CE<HTMLInputElement>) => {
    setVagaInternacional(e.target.value);
  };

  const handleInteresseImediatoChange = (e: CE<HTMLInputElement>) => {
    setInteresseImediato(e.target.value);
  };
  const handleHomeOffice = (e: CE<HTMLInputElement>) => {
    setHomeOffice(e.target.value);
  };

  const handleVagaSaoPaulo = (e: CE<HTMLInputElement>) => {
    setVaga_100_presencial_sao_paulo(e.target.value);
  };

  return (
    <C.Container>
      <C.Content>
        <C.CardRecrutamento>Recrutamento</C.CardRecrutamento>
        <C.ContentRange>
          <RangeSlider
            label="Idade"
            value={[minIdade, maxIdade]}
            onChange={handleRangeChangeIdade}
            max={70}
            title=" anos "
          />
          <RangeSlider
            label="Pretensão Salarial CLT"
            value={[minPretensaoSalarial, maxPretensaoSalarial]}
            onChange={handleRangeChangePretensaoCLT}
            max={20000}
            real="R$"
          />
          <RangeSlider
            label="Pretensão PJ"
            value={[minPretensaoPJ, maxPretensaoPJ]}
            onChange={handleRangeChangePretensaoPJ}
            max={200}
            real="R$"
          />
        </C.ContentRange>
        <C.ContentCheck>
          <ContentCheckLabel
            title="Conhecimento Inglês"
            options={[
              { label: "Fluente", value: "Fluente" },
              { label: "Avançado", value: "Avançado" },
              { label: "Intermediário", value: "Intermediário" },
              { label: "Básico", value: "Básico" },
              { label: "N/A", value: "N/A" },
            ]}
            onChange={handleConhecimentoInglesChange}
          />
          <ContentCheckLabel
            title="Localidade"
            options={[
              { label: "São Paulo - SP", value: "SP" },
              { label: "Minas Gerais - MG", value: "MG" },
              { label: "Rio de Janeiro - RJ", value: "RJ" },
              { label: "Goiana - PE", value: "PE" },
              { label: "Outros", value: "" },
            ]}
            onChange={handleLocalidadeChange}
          />
        </C.ContentCheck>
        <C.ContentSelect>
          <C.ContentSelectInput>
            <InputSelect
              label="Nível da Função"
              className="filter"
              options={nivelOptions}
              onChange={handleNivelFuncaoChange}
              value={nivel_funcao}
            />
            <InputSelect
              label="Modalidade Atual"
              className="filter"
              options={modalidadeOptions}
              onChange={handleModalidadeAtualChange}
              value={modalidade_atual}
            />
          </C.ContentSelectInput>
          <div>
            <InputSelect
              label="Formação"
              className="filter"
              options={formacaoOptions}
              onChange={handleFormacaoChange}
              value={formacao}
            />
            <InputSelect
              label="Vaga Linkedin"
              className="filter"
              onChange={handleVagaLinkedinChange}
              value={tipo_desejado_linkedin}
            />
          </div>
        </C.ContentSelect>

        <C.ContentOptions>
          <div>
            <InputRadio
              label="Vaga Presencial Porto Real/RJ"
              options={["Sim", "Não", "N/A"]}
              onChange={handleVagaPresencialPortoRealChange}
              value={vaga_100_presencial_porto_real_rj}
            />
            <InputRadio
              label="Vaga Presencial Goiana / PE"
              options={["Sim", "Não", "N/A"]}
              onChange={handleVagaPresencialGoianaChange}
              value={vaga_100_presencial_goiana_pe}
            />
            <InputRadio
              label="Vaga Presencial Betim / MG"
              options={["Sim", "Não", "N/A"]}
              onChange={handleVagaPresencialBetimChange}
              value={vaga_100_presencial_betim_mg}
            />
          </div>
          <div>
            <InputRadio
              label="Vaga Presencial São Paulo / SP"
              options={["Sim", "Não", "N/A"]}
              onChange={handleVagaSaoPaulo}
              value={vaga_100_presencial_sao_paulo}
            />

            <InputRadio
              label="Vaga Internacional"
              options={["Sim", "Não", "N/A"]}
              onChange={handleVagaInternacionalChange}
              value={vaga_internacional}
            />
            <InputRadio
              label="Home Office"
              options={["Sim", "Não", "N/A"]}
              onChange={handleHomeOffice}
              value={home_office}
            />
          </div>
          <div>
            <InputRadio
              label="Experiencia Ramo Automotivo"
              options={["Sim", "Não", "N/A"]}
              onChange={handleExperienciaRamoAutomotivoChange}
              value={experiencia_ramo_automotivo}
            />
            <InputRadio
              label="Esta Empregado"
              options={["Sim", "Não", "N/A"]}
              onChange={handleEstaEmpregadoChange}
              value={esta_empregado}
            />
            <InputRadio
              label="Interesse Imediato"
              options={["Sim", "Não", "N/A"]}
              onChange={handleInteresseImediatoChange}
              value={interesse_imediato}
            />
          </div>
        </C.ContentOptions>
        <C.ContentButtons>
          <button onClick={handleFilter}> Filtrar</button>
          <button onClick={removeQueryAndFetchData}> Limpar Filtros</button>
        </C.ContentButtons>
      </C.Content>
    </C.Container>
  );
};

export { ModalFilter };
