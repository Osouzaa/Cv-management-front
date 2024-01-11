import * as C from "./style";

interface ModalErroCamposVaziosProps {
  onClose: () => void;
  newCadidate: {};
}

const ModalErroCamposVazios: React.FC<ModalErroCamposVaziosProps> = ({
  onClose,
  newCadidate,
}) => {
  return (
    <C.ModalOverlay>
      <C.ModalContent>
        <C.Container>
          <h2> ATENÇÃO</h2>
          <h3>Alguns campos estão vazios!!!</h3>
          <h4>Deseja cadastrar assim?</h4>
        </C.Container>
        <C.ContentButton>
          <C.SubmitButton onClick={onClose}>Cancelar</C.SubmitButton>
          <C.SubmitButton>Cadastrar</C.SubmitButton>
        </C.ContentButton>
      </C.ModalContent>
    </C.ModalOverlay>
  );
};

export default ModalErroCamposVazios;
