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
import {
  camposDisponibilidadeForm,
  camposRadioLocalizacao,
  camposSelect,
} from "../../utils/campoForms";
import axios from "axios";
import { validarDados } from "../../functions/validation.functions";
import InputSelect from "../../components/inputSelect";
import SelectUF from "../../components/select";

const Register: React.FC = () => {
  const [newCandidate, setNewCandidate] = useState<Candidate>({
    profissional: "",
    data_de_nascimento: "",
    cpf: "",
    cidade: "",
    uf: "",
    telefone: "",
    email: "",
    esta_empregado: "",
    empresa_atual: "",
    experiencia_ramo_automotivo: "",
    modalidade_atual: "",
    tipo_desejado_linkedin: "",
    nivel_funcao: "",
    formacao: "",
    interesse_imediato: "",
    entrevista_online: "",
    teste_tecnico: "",
    conhecimento_ingles: "",
    pretensao_salarial: "",
    pretensao_pj: "",
    cnpj: "",
    tipo_cnpj: "",
    vaga_100_presencial_porto_real_rj: "",
    vaga_100_presencial_goiana_pe: "",
    vaga_100_presencial_betim_mg: "",
    vaga_internacional: "",
    vaga_hibrida_betim: "",
    home_office: "",
    observacao: "",
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorPost, setErrorPost] = useState(null);
  const [message, setMessage] = useState("");
  const [upload, setUpload] = useState<File | undefined>(undefined);
  const [view, setView] = useState(0);

  const handleChangeTelefone = (e: { target: { value: string } }) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setNewCandidate({ ...newCandidate, telefone: formattedPhoneNumber });
  };

  const handleChangeCPF = (e: { target: { value: string } }) => {
    const formattedCPF = formatCPF(e.target.value);
    setNewCandidate({ ...newCandidate, cpf: formattedCPF });
  };

  const handleChangeSalary = (e: { target: { value: string } }) => {
    const salarioSemFormato = e.target.value.replace(/[^\d]/g, "");
    const salarioNumerico = Number(salarioSemFormato);
    const salarioFormatado = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(salarioNumerico / 100);

    setNewCandidate({ ...newCandidate, pretensao_salarial: salarioFormatado });
  };

  const handleChangeSalaryPJ = (e: { target: { value: string } }) => {
    const salarioSemFormato = e.target.value.replace(/[^\d]/g, "");
    const salarioNumerico = Number(salarioSemFormato);
    const salarioFormatado = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(salarioNumerico / 100);

    setNewCandidate({ ...newCandidate, pretensao_pj: salarioFormatado });
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

  const handleCheckFields = () => {
    const camposValidos = validarDados(newCandidate);

    if (typeof camposValidos === "string") {
      setMessage(camposValidos);
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }

    if (camposValidos.length > 0) {
      const camposVaziosString = camposValidos.join(", ");
      setMessage(`Os seguintes campos estão vazios: ${camposVaziosString}`);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } else {
      handleCadastro();
    }
  };


  const handleCadastro = async () => {
    try {

      const token = (!!localStorage.getItem("token"))
      const formData = new FormData();

      formData.append("data", JSON.stringify(newCandidate));

      if (upload) {
        formData.append("curriculo", upload);
      }

      const newDataWithUpload = {
        ...newCandidate,
        foi_avaliado_recrutamento: token,
        curriculo: upload,
      };
      await axios.post(import.meta.env.VITE_API_URL, newDataWithUpload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccessMessage("Cadastro realizado com sucesso!");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
      handleLimparCampos();
      setView(0);
    } catch (error: any) {
      console.log("error ", error);

      setErrorPost(error.response.data.message);
      setTimeout(() => {
        setErrorPost(null);
      }, 3000);
      setView(0);
    }
  };

  return (
    <C.Container>
      <C.Form onSubmit={(e) => e.preventDefault()} onKeyDown={handleKeyDown}>
        <C.ContentTitle>
          <C.Search>
            <C.Title>Informações Candidato</C.Title>
            <img src={Menos} alt="" onClick={() => setView(0)} />
          </C.Search>
          <C.ContentMessage>
            {message && <p className="Err"> {message}</p>}
            {errorPost && <p className="Err">Erro ao cadastrar: {errorPost}</p>}
            <p className="Sucess">{successMessage}</p>
          </C.ContentMessage>
          <img src={Borracha} alt="" onClick={() => handleLimparCampos()} />
        </C.ContentTitle>
        <C.Content>
          {view === 0 && (
            <>
              {fields.map((fieldInfo) => (
                <InputField
                  key={fieldInfo.field}
                  label={fieldInfo.label}
                  value={newCandidate[fieldInfo.field]}
                  type={fieldInfo.type}
                  className={fieldInfo.class}
                  placeholder={fieldInfo.placeholder}
                  onChange={(
                    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
                  ) => {
                    if (fieldInfo.label === "Contato") {
                      handleChangeTelefone(e);
                    } else if (fieldInfo.label === "CPF") {
                      handleChangeCPF(e);
                    } else {
                      handleInputChange(fieldInfo.field, e.target.value);
                    }
                  }}
                />
              ))}
              <C.AddressFields>
                <InputField
                  label="Cidade"
                  value={newCandidate.cidade}
                  onChange={(e) =>
                    setNewCandidate({ ...newCandidate, cidade: e.target.value })
                  }
                  placeholder="Cidade"
                />
                <SelectUF
                  label="UF"
                  selectedUF={newCandidate.uf}
                  onChange={(value) => handleInputChange("uf", value)}
                  className="UF"
                />
              </C.AddressFields>
            </>
          )}
        </C.Content>
        <C.Search>
          <C.Title>Situação Profissisional Atual</C.Title>
          <img src={Menos} alt="" onClick={() => setView(1)} />
        </C.Search>
        <C.Content className="situacao">
          {view === 1 && (
            <>
              {camposSelect.map((campo, index) => (
                <div key={index}>
                  {campo.type === "select" && (
                    <>
                      <InputSelect
                        label={campo.label}
                        options={campo.options}
                        onChange={(
                          e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
                        ) => handleInputChange(campo.field, e.target.value)}
                        value={newCandidate[campo.field]}
                      />
                    </>
                  )}
                </div>
              ))}
            </>
          )}
          {newCandidate.esta_empregado === "Sim" && view === 1 && (
            <InputField
              label="Nome da empresa atual"
              value={newCandidate.empresa_atual}
              onChange={(e) =>
                handleInputChange("empresa_atual", e.target.value)
              }
              className="situacao"
            />
          )}
        </C.Content>
        <C.Search>
          <C.Title>Disponibilidade e Pretensão</C.Title>
          <img src={Menos} alt="" onClick={() => setView(2)} />
        </C.Search>
        {view === 2 && (
          <C.Content className="disponibilidade">
            {camposDisponibilidadeForm.map((campo, index) => (
              <div key={index}>
                {campo.type === "select" && (
                  <>
                    <InputSelect
                      label={campo.label}
                      options={campo.options}
                      onChange={(
                        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
                      ) => handleInputChange(campo.field, e.target.value)}
                      value={newCandidate[campo.field]}
                    />
                  </>
                )}
              </div>
            ))}
            {view === 2 && (
              <>
                <InputField
                  label="Pretensão salarial no regime CLT "
                  value={newCandidate.pretensao_salarial}
                  onChange={(e) => handleChangeSalary(e)}
                  className="pretensao"
                />
                <InputField
                  label="Pretensão PJ, valor hora"
                  value={newCandidate.pretensao_pj}
                  onChange={(e) => handleChangeSalaryPJ(e)}
                  className="pretensao"
                />
              </>
            )}
          </C.Content>
        )}

        <C.Search className="localizacao">
          <C.Title>Localização e Anexos</C.Title>
          <img src={Menos} alt="" onClick={() => setView(3)} />
        </C.Search>
        {view === 3 && (
          <C.Content className="localizacao">
            <>
              {camposRadioLocalizacao.map((campo, index) => (
                <div key={index}>
                  {campo.type === "select" && (
                    <>
                      <InputSelect
                        label={campo.label}
                        options={campo.options}
                        onChange={(
                          e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
                        ) => handleInputChange(campo.field, e.target.value)}
                        value={newCandidate[campo.field]}
                      />
                    </>
                  )}
                </div>
              ))}
              {view === 3 && (
                <>
                  <C.FileInputContainer>
                    <label htmlFor="upload-curriculo">
                      Anexe seu currículo
                    </label>
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
                  <InputField
                    label="Observação"
                    className="inputObs"
                    value={newCandidate.observacao}
                    onChange={(e) =>
                      handleInputChange("observacao", e.target.value)
                    }
                  />
                </>
              )}
            </>
          </C.Content>
        )}

        <C.ContentButton className="ContentButton">
          <C.SubmitButton onClick={() => handleCheckFields()}>
            Cadastrar
          </C.SubmitButton>
        </C.ContentButton>
      </C.Form>
    </C.Container>
  );
};

export { Register };
