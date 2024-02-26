import { useState } from "react";
import InputField from "../inputField";
import InputSelect from "../inputSelect";
import * as C from "./style";
import { Cursos } from "../../types/cursos.types";

interface IModalProps {
  toggleModal: () => void;
}

const ModalCurso = ({ toggleModal }: IModalProps) => {
  const [cursosList, setCursosList] = useState<Cursos[]>([]);
  const [cursos, setCursos] = useState<Cursos>({
    curso: "",
    nivel: "",
  });
  console.log(setCursosList)

  const handleInputChange = (fieldName: string, value: string) => {
    setCursos({ ...cursos, [fieldName]: value });
  };

  return (
    <C.ModalBG>
      <C.ContentModal>
        <C.ContainerModal>
          <C.ContentTitle>
            <h1>Adicionar Curso</h1>
            <button onClick={toggleModal}>X</button>
          </C.ContentTitle>

          <C.ContentInputs>
            <InputField
              label="Curso"
              placeholder="Adicione aqui seu curso"
              value={cursos.curso}
              onChange={(e) => handleInputChange("curso", e.target.value)}
            />
            <InputSelect
              label="Nível"
              className="cursos"
              value={cursos.nivel}
              onChange={(e) => handleInputChange("nivel", e.target.value)}
              options={["", "Básico", "Intermediario", "Avançado"]}
            />
          </C.ContentInputs>
          <C.ContentButtons>
            {cursosList.length > 0 && <button> Salvar</button>}
            <button>Adicionar Cursos</button>
          </C.ContentButtons>
        </C.ContainerModal>
      </C.ContentModal>
    </C.ModalBG>
  );
};

export { ModalCurso };
