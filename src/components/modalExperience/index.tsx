import React, { useState, ChangeEvent } from "react";
import InputField from "../inputField";
import * as C from "./style";

interface Experiencia {
  empresa: string;
  cargo: string;
  trabalhoAtual: boolean;
  inicio: string;
  termino: string;
  atividadesProfissional: string;
}

const ModalExperiencia: React.FC = () => {
  const [experiencias, setExperiencias] = useState<Experiencia>({
    empresa: "",
    cargo: "",
    trabalhoAtual: false,
    inicio: "",
    termino: "",
    atividadesProfissional: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setExperiencias((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  return (
    <C.ModalBG>
      <C.ContentModal>
        <C.ContentTitle>
          <h1>Experiencias Profissional</h1>
          <button> X</button>
        </C.ContentTitle>
        <C.ContainerModal>
          <InputField
            label="Empresa"
            name="empresa"
            value={experiencias.empresa}
            onChange={handleChange}
            className="escolaridade"
          />
          <InputField
            label="Cargo"
            name="cargo"
            value={experiencias.cargo}
            onChange={handleChange}
            className="escolaridade"
          />
          <C.ContentInputCheck>
            <span>Trabalho Atual?</span>
            <div>
              <input
                type="checkbox"
                id="trabalhoAtual"
                name="trabalhoAtual"
                checked={experiencias.trabalhoAtual}
                onChange={handleChange}
              />
              <label htmlFor="trabalhoAtual">Sim</label>
            </div>
          </C.ContentInputCheck>
          <InputField
            label="Início"
            type="date"
            name="inicio"
            value={experiencias.inicio}
            onChange={handleChange}
            className="escolaridade"
          />
          {!experiencias.trabalhoAtual && (
            <InputField
              label="Término"
              type="date"
              name="termino"
              value={experiencias.termino}
              onChange={handleChange}
              className="escolaridade"
            />
          )}
          <InputField
            label="Atividades Profissional"
            name="atividadesProfissional"
            value={experiencias.atividadesProfissional}
            onChange={handleChange}
            className="escolaridade atividades-profissional"
          />

          <C.ContentButtons>
            <button>Salvar</button>
            <button>Adicionar Experiência</button>
          </C.ContentButtons>
        </C.ContainerModal>
      </C.ContentModal>
    </C.ModalBG>
  );
};

export { ModalExperiencia };
