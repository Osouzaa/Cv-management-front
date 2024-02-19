import * as C from "./style";

interface IModalProps {
  togleModal: () => void;
}

const ModalExperiencia = ({ togleModal }: IModalProps) => {
  return (
    <C.ModalBG>
      <C.ContentModal>
        <C.ContentTitle>
          <h1>Adicionar Escolaridade</h1>
          <button onClick={() => togleModal()}> X</button>
        </C.ContentTitle>
        <C.ContentInputs>
          <div>
            <C.ContentLabel>
              Selecione a escolaridade
              <input type="text" />
            </C.ContentLabel>
          </div>
          <div>
            <C.ContentLabel>
              Status
              <input type="text" />
            </C.ContentLabel>
          </div>
        </C.ContentInputs>
        <C.ContentInputs>
          <div>
            <C.ContentLabel>
              Instituição
              <input type="text" />
            </C.ContentLabel>
          </div>
          <div>
            <C.ContentLabel>
              Curso
              <input type="text" />
            </C.ContentLabel>
          </div>
        </C.ContentInputs>

        <C.ContentInputs>
          <div>
            <C.ContentLabel>
              Incio
              <input type="date" className="content-button" />
            </C.ContentLabel>
          </div>
          <div>
            <C.ContentLabel>
              Término/ Previsão
              <input type="date" className="content-button" />
            </C.ContentLabel>
          </div>
          <button> Cadastrar</button>
        </C.ContentInputs>
      </C.ContentModal>
    </C.ModalBG>
  );
};

export { ModalExperiencia };
