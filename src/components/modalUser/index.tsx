import { useState } from "react";
import InputField from "../inputField";
import InputSelect from "../inputSelect";
import * as C from "./style";
import axios from "axios";

interface IModalProps {
  onclose?: () => void;
}

const ModalUser = ({ onclose }: IModalProps) => {
  const [name, setNome] = useState("");
  const [registration, setRegistration] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [role, setRole] = useState("");
  const [erroSenha, setErroSenha] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [info, setInfo] = useState("");

  const cleanForm = () => {
    setNome("");
    setRegistration("");
    setPassword("");
    setConfirmaSenha("");
    setRole("");
    setEmail("");
  };

  const handleSave = async () => {
    try {
      const equipeMapping: Record<string, string> = {
        Recrutamento: "recruitment",
        Técnico: "technique",
        Administrador: "admin",
      };

      if (!name || !registration || !password || !confirmaSenha || !role) {
        setInfo("Por favor, preencha todos os campos.");
        return;
      }

      if (password !== confirmaSenha) {
        setErroSenha(true);
        return;
      } else {
        setErroSenha(false);
      }

      const equipeSalvaNoBanco = equipeMapping[role];

      const data = {
        name,
        registration,
        email,
        password,
        role: equipeSalvaNoBanco,
      };

      await axios.post(import.meta.env.VITE_API_REGISTER_URL, data);

      cleanForm();
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 2000);
    } catch (error) {
      console.error("Erro ao salvar:", error);
      setShowErrorMessage(true);
      setTimeout(() => setShowErrorMessage(false), 2000);
    }
  };

  return (
    <C.ModalBG>
      <C.ContainerModal>
        <C.ContentTitle>
          <h2>Registro novo usuário</h2>
          {erroSenha && (
            <p style={{ color: "red" }}>As senhas não coincidem.</p>
          )}
          {showSuccessMessage && (
            <p style={{ color: "green" }}>Cadastro concluído com sucesso!</p>
          )}
          {showErrorMessage && (
            <p style={{ color: "red" }}>
              Erro ao salvar. Por favor, tente novamente.
            </p>
          )}
          {info && <p style={{ color: "red" }}> {info}</p>}
          <button onClick={onclose}>X</button>
        </C.ContentTitle>
        <C.ContentsInputs>
          <InputField
            label="Nome do usuário"
            value={name}
            onChange={(e) => setNome(e.target.value)}
          />
          <InputField
            label="Matrícula"
            value={registration}
            onChange={(e) => setRegistration(e.target.value)}
          />
          <InputField
            label="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField
            label="Confirme sua senha"
            type="password"
            value={confirmaSenha}
            onChange={(e) => setConfirmaSenha(e.target.value)}
          />

          <InputSelect
            options={[" ", "Recrutamento", "Técnico", "Administrador"]}
            label="Equipe"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="register"
          />
        </C.ContentsInputs>
        <C.StyledButton onClick={() => handleSave()}>Cadastrar</C.StyledButton>
      </C.ContainerModal>
    </C.ModalBG>
  );
};

export { ModalUser };
