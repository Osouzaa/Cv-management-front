import { useState } from "react";
import InputField from "../inputField";
import * as C from "./style";

interface IModalProps {
  toggleModal: () => void;
}

const ModalAtividade = ({ toggleModal }: IModalProps) => {
  const [atividadesList, setAtividadesList] = useState<string[]>([]);
  const [atividades, setAtividades] = useState<string>("");

  const adicionarAtividade = () => {
    if (atividades.trim() !== "") {
      setAtividadesList([...atividadesList, atividades]);
      setAtividades("");
    }
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
              label="Atividades extra-curriculares"
              placeholder="Adicione aqui sua atividade"
              value={atividades}
              onChange={(e) => e.target.value}
            />
          </C.ContentInputs>
          <C.ContentButtons>
            {atividadesList.length > 0 && <button>Salvar</button>}
            <button onClick={adicionarAtividade}>Adicionar Atividades</button>
          </C.ContentButtons>
        </C.ContainerModal>
      </C.ContentModal>
    </C.ModalBG>
  );
};

export { ModalAtividade };
