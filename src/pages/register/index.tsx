import * as C from "./style";
import { useState, ChangeEvent } from "react";
import InputField from "../../components/inputField";
import { fields } from "../../utils/camposForm";
import { Candidate } from "../../types/candidate.types";
import Borracha from "../../image/borracha.png";
import Menos from "../../image/menos.png";
import { LimparCampos } from "../../utils/cleanForm";
import { formatCPF, formatPhoneNumber } from "../../utils/regex";
import { handleKeyDown } from "../../functions/handleKeyDown.fucntions";
import { camposRadio } from "../../utils/campoRadio";
import InputRadio from "../../components/inputRadio";
import ModalErroCamposVazios from "../../components/modal";
import axios from "axios";
import { validarDados } from "../../functions/validation.functions";

const Register: React.FC = () => {
  const [newCandidate, setNewCandidate] = useState<Candidate>({
    idade: "",
    profissional: "",
    observacao: "",
    cpf: "",
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
  const [showVagaOptions, setShowVagaOptions] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [errorPost, setErrorPost] = useState(null);
  const [message, setMessage] = useState("");
  const [upload, setUpload] = useState<File | undefined>(undefined);

  const handleChangeTelefone = (e: { target: { value: string } }) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setNewCandidate({ ...newCandidate, telefone: formattedPhoneNumber });
  };

  const handleChangeCPF = (e: { target: { value: string } }) => {
    const formattedCPF = formatCPF(e.target.value);
    setNewCandidate({ ...newCandidate, cpf: formattedCPF });
  };

  const handleChangeUltimoSalario = (e: { target: { value: string } }) => {
    const salarioSemFormato = e.target.value.replace(/[^\d]/g, "");
    const salarioNumerico = Number(salarioSemFormato);
    const salarioFormatado = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(salarioNumerico / 100);
    setNewCandidate({ ...newCandidate, ultimo_salario: salarioFormatado });
  };

  const handleInputChange = (field: keyof Candidate, value: string): void => {
    setNewCandidate({
      ...newCandidate,
      [field]: value,
    });
  };

  const handleLimparCampos = () => {
    setNewCandidate(LimparCampos());
  };

  const handleToggleVagaOptions = () => {
    setShowVagaOptions(!showVagaOptions);
  };

  const handleCheckFields = () => {
    const camposValidos = validarDados(newCandidate);

    if (!camposValidos) {
      setMessage("Por favor, preencha todos os campos antes de enviar.");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }

    handleCadastro();
  };

  const handleCadastro = async () => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(newCandidate));

      if (upload) {
        formData.append("curriculo", upload);
      }

      const newDataWithUpload = {
        ...newCandidate,
        curriculo: upload,
      };
      const response = await axios.post(
        "http://localhost:3000/v1/candidate",
        newDataWithUpload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccessMessage("Cadastro realizado com sucesso!");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
      handleLimparCampos();
      setShowVagaOptions(false);
    } catch (error: any) {
      setErrorPost(error.response.data.message);
      setTimeout(() => {
        setErrorPost(null);
      }, 3000);
      setShowVagaOptions(false);
    }
  };

  return (
    <C.Container>
      <C.Form onSubmit={(e) => e.preventDefault()} onKeyDown={handleKeyDown}>
        <C.ContentTitle>
          <C.Search>
            <C.Title>Cadastro de Candidato</C.Title>
            <img src={Menos} alt="" onClick={handleToggleVagaOptions} />
          </C.Search>
          <C.ContentMessage>
            {message && <p className="Err"> {message}</p>}
            {errorPost && <p className="Err">Erro ao cadastrar: {errorPost}</p>}
            <p className="Sucess">{successMessage}</p>
          </C.ContentMessage>
          <img src={Borracha} alt="" onClick={() => handleLimparCampos()} />
        </C.ContentTitle>
        <C.Content>
          {!showVagaOptions && (
            <>
              {fields.map((fieldInfo) => (
                <InputField
                  key={fieldInfo.field}
                  label={fieldInfo.label}
                  value={newCandidate[fieldInfo.field]}
                  type={fieldInfo.type}
                  onChange={(
                    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
                  ) => {
                    if (fieldInfo.label === "Telefone") {
                      handleChangeTelefone(e);
                    } else if (fieldInfo.label === "CPF") {
                      handleChangeCPF(e);
                    } else if (fieldInfo.label === "Último Salário") {
                      handleChangeUltimoSalario(e);
                    } else {
                      handleInputChange(fieldInfo.field, e.target.value);
                    }
                  }}
                />
              ))}
              <C.FileInputContainer>
                <label htmlFor="upload-curriculo">Anexe seu currículo</label>
                <input
                  type="file"
                  id="upload-curriculo"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files && files.length > 0) {
                      setUpload(files[0]);
                    }
                  }}
                  accept=".pdf"
                />
                <label
                  className="custom-file-upload"
                  htmlFor="upload-curriculo"
                >
                  Escolher Arquivo
                </label>
              </C.FileInputContainer>
            </>
          )}
        </C.Content>
        <C.Search className={showVagaOptions === true ? "TitleTwo" : ""}>
          <C.Title>Especificações da vaga</C.Title>
          <img src={Menos} alt="" onClick={handleToggleVagaOptions} />
        </C.Search>
        <C.Content>
          {showVagaOptions && (
            <>
              {camposRadio.map((radiosButton) => (
                <InputRadio
                  key={radiosButton.field}
                  label={radiosButton.label}
                  value={newCandidate[radiosButton.field]}
                  options={
                    radiosButton.label === "Conhecimento em inglês"
                      ? ["Básico", "Intermediário", "Avançado"]
                      : radiosButton.type === "radio"
                      ? ["Sim", "Não"]
                      : undefined
                  }
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(
                      radiosButton.field as keyof Candidate,
                      e.target.value
                    )
                  }
                />
              ))}
            </>
          )}
        </C.Content>
        <C.ContentButton
          className={showVagaOptions === true ? "contentTwo" : ""}
        >
          <C.SubmitButton onClick={() => handleCheckFields()}>
            Cadastrar
          </C.SubmitButton>
        </C.ContentButton>
      </C.Form>

      {showModal && (
        <ModalErroCamposVazios
          onClose={() => setShowModal(false)}
          newCadidate={newCandidate}
        />
      )}
    </C.Container>
  );
};

export { Register };
