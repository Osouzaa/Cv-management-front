import InputField from "../inputField";
import InputSelect from "../inputSelect";
import { useState, useEffect } from "react";
import * as C from "./style";
import { Formations } from "../../types/formations.types";
import { useParams } from "react-router-dom";
import axios from "axios";

interface IModalProps {
  toggleModal: () => void;
}

const ModalEscolaridade = ({ toggleModal }: IModalProps) => {
  const { id } = useParams();
  const [formationsList, setFormationsList] = useState<Formations[]>([]);
  const [formations, setFormations] = useState<Formations>({
    escolaridade: "",
    status: "",
    instituicao: "",
    inicio: "",
    termino_previsao: "",
    curso: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}${id}`
        );
        const { data } = response;
        if (data && data.formacoes) {
          setFormationsList(data.formacoes);
        }
        console.log(data);
      } catch (error) {
        console.error("Erro ao carregar formações:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (fieldName: string, value: string) => {
    setFormations({ ...formations, [fieldName]: value });
  };

  const handleCadastro = () => {
    const updatedFormationsList = [...formationsList, formations];
    setFormationsList(updatedFormationsList);
    console.log("Dados do formulário:", updatedFormationsList);
    setFormations({
      escolaridade: "",
      status: "",
      instituicao: "",
      inicio: "",
      termino_previsao: "",
      curso: "",
    });
  };

  const handlePatchFormations = async () => {
    try {
      const formationsToUpdate = formationsList.map((formation) => ({
        ...formation,
        inicio: formation.inicio.substring(0, 4),
        termino_previsao: formation.termino_previsao.substring(0, 4),
      }));

      await axios.patch(`${import.meta.env.VITE_API_URL}${id}`, {
        formacoes: formationsToUpdate,
      });
      console.log("Formações atualizadas com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar formações:", error);
    }
  };
  return (
    <C.ModalBG>
      <C.ContentModal>
        <C.ContentTitle>
          <h1>Adicionar Escolaridade</h1>
          <button onClick={toggleModal}> X</button>
        </C.ContentTitle>

        <C.ContentInputs>
          <InputSelect
            label="Selecione a escolaridade"
            className="escolaridade"
            options={[
              "",
              "Ensino Técnico",
              "Ensino Superior",
              "Especialização",
              "Mestrado",
              "Doutorado",
            ]}
            onChange={(e) => handleInputChange("escolaridade", e.target.value)}
            value={formations.escolaridade}
          />
          <InputField
            label="Instituição"
            className="escolaridade"
            onChange={(e) => handleInputChange("instituicao", e.target.value)}
            value={formations.instituicao}
          />
          <InputField
            label="Curso"
            className="escolaridade"
            onChange={(e) => handleInputChange("curso", e.target.value)}
            value={formations.curso}
          />
          <C.ContentDate>
            <InputField
              label="Início"
              className="escolaridade"
              type="date"
              onChange={(e) => handleInputChange("inicio", e.target.value)}
              value={formations.inicio}
            />
            <InputField
              label="Término/Previsão"
              className="escolaridade"
              type="date"
              onChange={(e) =>
                handleInputChange("termino_previsao", e.target.value)
              }
              value={formations.termino_previsao}
            />
          </C.ContentDate>
          <InputSelect
            label="Status"
            className="escolaridade"
            onChange={(e) => handleInputChange("status", e.target.value)}
            value={formations.status}
            options={["", "Concluída", "Em Andamento", "Trancada"]}
          />
        </C.ContentInputs>
        <C.ContentButtons>
          {formationsList.length > 0 && (
            <button onClick={handlePatchFormations}>Salvar</button>
          )}
          <button onClick={handleCadastro}>Adicionar Formação</button>
        </C.ContentButtons>
      </C.ContentModal>
    </C.ModalBG>
  );
};

export { ModalEscolaridade };
