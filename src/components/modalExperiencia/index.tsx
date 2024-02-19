import { ContentCheckLabel } from "../inputCheck";
import InputField from "../inputField";
import InputRadio from "../inputRadio";
import * as C from "./style";

interface IModalProps {
  togleModal: () => void;
}

const ModalExperiencia = () => {
  return (
    <C.ModalBG>
      <C.ContentModal>
        <C.ContentTitle>
          <h1>Experiencia Profissional</h1>
          <button>X</button>
        </C.ContentTitle>
        <C.ContentInputs>
          <InputField label="Empresa"/>
          <InputField label="Cargo"/>
          {/* <ContentCheckLabel title="Esta empres" options={['sim', 'não']}/> */}
        </C.ContentInputs>
      </C.ContentModal>
    </C.ModalBG>
  );
};

export { ModalExperiencia };
