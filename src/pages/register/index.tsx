import * as C from "./style";
import { useState, ChangeEvent } from "react";
import InputField from "../../components/inputField";
import { fields } from "../../utils/camposForm";
import { Candidate } from "../../types/candidate.types";
import Borracha from "../../image/borracha.png";
import { LimparCampos } from "../../utils/cleanForm";
import axios from "axios";
import { formatPhoneNumber } from "../../utils/regex";
import { useAxiosCandidate } from "../../hooks/requestAxios";
import { handleKeyDown } from "../../functions/handleKeyDown.fucntions";
// import { validarDados } from "../../functions/validation.functions";

const Register: React.FC = () => {
  const [newCandidate, setNewCandidate] = useState<Candidate>({
    idade: "",
    profissional: "",
    cpf: "",
    obs:"",
    status: "",
    telefone: "",
    cidade: "",
    email: "",
    vaga_100_presencial_porto_real_rj: "",
    vaga_100_presencial_goiana_pe: "",
    vaga_100_presencial_betim_mg: "",
    vaga_hibrida_betim: "",
    home_office: "",
    ultima_empresa: "",
    ultimo_salario: "",
    target_clt: "",
    conhecimento_ingles: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChangeTelefone = (e: { target: { value: string } }) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setNewCandidate({ ...newCandidate, telefone: formattedPhoneNumber });
  };

  const handleInputChange = (field: keyof Candidate, value: string): void => {
    setNewCandidate({
      ...newCandidate,
      [field]: value,
    });
  };

  const { httpConfig } = useAxiosCandidate(
    "http://localhost:3000/v1/candidate"
  );

  const handleCadastro = async () => {
    httpConfig(newCandidate);
    handleLimparCampos();
    setSuccessMessage("Cadastro realizado com sucesso!");
    setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);
  };

  const handleLimparCampos = () => {
    setNewCandidate(LimparCampos());
  };

  return (
    <C.Container>
      <C.Form onSubmit={(e) => e.preventDefault()} onKeyDown={handleKeyDown}>
        <C.ContentTitle>
          <C.Title>Cadastro de Candidato</C.Title>

          <p>{successMessage}</p>
          <img src={Borracha} alt="" onClick={() => handleLimparCampos()} />
        </C.ContentTitle>
        <C.Content>
          {fields.map((fieldInfo) => (
            <InputField
              key={fieldInfo.field}
              label={fieldInfo.label}
              value={newCandidate[fieldInfo.field]}
              type={fieldInfo.type}
              options={
                fieldInfo.type === "radio"
                  ? ["Sim", "Não"]
                  : fieldInfo.type === "select"
                  ? ["", "Básico", "Intermediário", "Avançado"]
                  : undefined
              }
              onChange={(
                e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
              ) =>
                fieldInfo.label === "Telefone"
                  ? handleChangeTelefone(e)
                  : handleInputChange(fieldInfo.field, e.target.value)
              }
            />
          ))}
        </C.Content>
        <C.ContentButton>
          <C.SubmitButton onClick={() => handleCadastro()}>
            Cadastrar
          </C.SubmitButton>
        </C.ContentButton>
      </C.Form>
    </C.Container>
  );
};

export { Register };
