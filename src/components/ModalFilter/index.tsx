import { useState } from "react";
import RangeSlider from "../inputRange";
import * as C from "./style";
import InputRadio from "../inputRadio";
import InputSelect from "../inputSelect";
import {
  camposDisponibilidadeForm,
  camposSelect,
} from "../../utils/campoForms";
import { ChangeEvent } from "../../types/types";
import { ChangeEvent as CE } from "react";

interface ModalFilterProps {
  toggleFilter?: () => void;
  onFilterApply?: (filtro: any) => void;
}

const ModalFilter = ({ toggleFilter, onFilterApply }: ModalFilterProps) => {
  const [minIdade, setMinIdade] = useState(0);
  const [maxIdade, setMaxIdade] = useState(70);
  const [minPretensaoSalarial, setMinPretensaoSalarial] = useState(0);
  const [maxPretensaoSalarial, setMaxPretensaoSalarial] = useState(10000);
  const [minPretensaoPJ, setMinPretensaoPJ] = useState(0);
  const [maxPretensaoPJ, setMaxPretensaoPJ] = useState(1000);
  const [conhecimento_ingles, setConhecimentoIngles] = useState("");
  const [tipo_desejado_linkedin, setTipo_desejado_linkedin] = useState("");
  const [nivel_funcao, setNivelFuncao] = useState("");
  const [modalidade_atual, setModalidadeAtual] = useState("");
  const [formacao, setFormacao] = useState("");
  const [
    vaga_100_presencial_porto_real_rj,
    setVaga_100_presencial_porto_real_rj,
  ] = useState("Não");
  const [vaga_100_presencial_goiana_pe, setVaga_100_presencial_goiana_pe] =
    useState("Não");
  const [vaga_100_presencial_betim_mg, setVaga_100_presencial_betim_mg] =
    useState("Não");
  const [vaga_internacional, setVagaInternacional] = useState("Não");
  const [vaga_hibrida_betim, setVagaHibridaBetim] = useState("Não");
  const [experiencia_ramo_automotivo, setExperiencia_ramo_automotivo] =
    useState("Não");
  const [esta_empregado, setEstaEmpregado] = useState("Não");

  const [interesse_imediato, setInteresseImediato] = useState("Não");
  const [filtro, setFiltro] = useState<any>({});

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
      vaga_hibrida_betim,
      experiencia_ramo_automotivo,
      vaga_internacional,
      esta_empregado,
      interesse_imediato,
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
  const inglesOptions =
    camposDisponibilidadeForm.find(
      (campo) => campo.field === "conhecimento_ingles"
    )?.options || [];

  const handleConhecimentoInglesChange = (e: ChangeEvent) => {
    setConhecimentoIngles(e.target.value);
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

  const handleVagaHibridaBetimChange = (e: CE<HTMLInputElement>) => {
    setVagaHibridaBetim(e.target.value);
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
            max={10000}
            real="R$"
          />
          <RangeSlider
            label="Pretensão PJ"
            value={[minPretensaoPJ, maxPretensaoPJ]}
            onChange={handleRangeChangePretensaoPJ}
            max={1000}
            real="R$"
          />
        </C.ContentRange>

        <C.ContentSelect>
          <div>
            <InputSelect
              label="Conhecimento Inglês"
              className="filter"
              options={inglesOptions}
              onChange={handleConhecimentoInglesChange}
              value={conhecimento_ingles}
            />
            <InputSelect
              label="Localidade"
              className="filter"
              // onChange={handleLocalidadeChange}
              // value={localidade}
            />
            <InputSelect
              label="Vaga Linkedin"
              className="filter"
              onChange={handleVagaLinkedinChange}
              value={tipo_desejado_linkedin}
            />
          </div>
          <div>
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
            <InputSelect
              label="Formação"
              className="filter"
              options={formacaoOptions}
              onChange={handleFormacaoChange}
              value={formacao}
            />
          </div>
        </C.ContentSelect>

        <C.ContentOptions>
          <div>
            <InputRadio
              label="Vaga Presencial Porto Real/RJ"
              options={["Sim", "Não"]}
              onChange={handleVagaPresencialPortoRealChange}
              value={vaga_100_presencial_porto_real_rj}
            />
            <InputRadio
              label="Vaga Presencial Goiana / PE"
              options={["Sim", "Não"]}
              onChange={handleVagaPresencialGoianaChange}
              value={vaga_100_presencial_goiana_pe}
            />
            <InputRadio
              label="Vaga Presencial Betim / MG"
              options={["Sim", "Não"]}
              onChange={handleVagaPresencialBetimChange}
              value={vaga_100_presencial_betim_mg}
            />
            <InputRadio
              label="Vaga Híbrida Betim / MG"
              options={["Sim", "Não"]}
              onChange={handleVagaHibridaBetimChange}
              value={vaga_hibrida_betim}
            />
          </div>
          <div>
            <InputRadio
              label="Experiencia Ramo Automotivo"
              options={["Sim", "Não"]}
              onChange={handleExperienciaRamoAutomotivoChange}
              value={experiencia_ramo_automotivo}
            />
            <InputRadio
              label="Esta Empregado"
              options={["Sim", "Não"]}
              onChange={handleEstaEmpregadoChange}
              value={esta_empregado}
            />
            <InputRadio
              label="Vaga Internacional"
              options={["Sim", "Não"]}
              onChange={handleVagaInternacionalChange}
              value={vaga_internacional}
            />
            <InputRadio
              label="Interesse Imediato"
              options={["Sim", "Não"]}
              onChange={handleInteresseImediatoChange}
              value={interesse_imediato}
            />
          </div>
        </C.ContentOptions>
        <C.ContentButtons>
          <button onClick={handleFilter}> Resetar Filtros</button>
          <button onClick={handleFilter}> Filtrar</button>
        </C.ContentButtons>
      </C.Content>
    </C.Container>
  );
};

export { ModalFilter };
