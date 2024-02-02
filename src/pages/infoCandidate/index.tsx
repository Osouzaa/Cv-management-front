import { useParams } from "react-router-dom";
import * as C from "./style";
import { useAxiosCandidate } from "../../hooks/requestAxios";
import { useState, useEffect, ChangeEvent } from "react";
import InputField from "../../components/inputField";
import { initialState } from "../../utils/initialState";
import { DadosInfo } from "../../components/dadosInfo";
import { format } from "date-fns";
import Loading from "../../components/loading";
import { formatCPF, formatPhoneNumber } from "../../utils/regex";
import { Fields, renderInfoDetails } from "../../utils/camposEdit";
import { Candidate } from "../../types/candidate.types";
import axios from "axios";

const InfoCandidate = () => {
  const { id } = useParams();
  const url = `${import.meta.env.VITE_API_URL}${id}`;
  const { data, patchConfig, errorAxios } = useAxiosCandidate(url);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [editedData, setEditedData] = useState<Candidate>(initialState);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (data) {
      setEditedData((prevData) => ({
        ...prevData,
        ...data,
      }));
    }
  }, [data]);

  const toggleEditForm = () => {
    setShowProjectForm(!showProjectForm);
  };

  const handleInputChange = (field: keyof Candidate, value: string): void => {
    setEditedData({
      ...editedData,
      [field]: value,
    });
  };

  const handleChangeUltimoSalario = (e: { target: { value: string } }) => {
    const salarioSemFormato = e.target.value.replace(/[^\d]/g, "");
    const salarioNumerico = Number(salarioSemFormato);
    const salarioFormatado = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(salarioNumerico / 100);

    setEditedData((prevData) => ({
      ...prevData,
      ultimo_salario: salarioFormatado,
    }));
  };

  const handleChangeTargetCLT = (e: { target: { value: string } }) => {
    const salarioSemFormato = e.target.value.replace(/[^\d]/g, "");
    const salarioNumerico = Number(salarioSemFormato);
    const salarioFormatado = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(salarioNumerico / 100);

    setEditedData((prevData) => ({
      ...prevData,
      target_clt: salarioFormatado,
    }));
  };

  const handleChangeTelefone = (e: { target: { value: string } }) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setEditedData({ ...editedData, telefone: formattedPhoneNumber });
  };

  const handleChangeCPF = (e: { target: { value: string } }) => {
    const formattedCPF = formatCPF(e.target.value);
    setEditedData({ ...editedData, cpf: formattedCPF });
  };

  const handleSave = async () => {
    try {
      editedData.updatedAt = new Date();
      patchConfig(editedData);
      setMessage("Candidato editado com sucesso!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      toggleEditForm();
    } catch (error) {
    }
  };
  
  const handleCV = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/v1/candidate/${id}/download-cv`, {
        responseType: "blob", 
      });
      const blob = new Blob([response.data]);
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `${data?.profissional} - ${data?.codigoCandidate}.pdf`
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Erro durante o download do currículo:", error);
    }
  };


  return (
    <C.Container>
      <C.ContentTitle>
        {!message ? (
          <C.Title className={!message ? "InfoCandidate" : ""}>
            Informações Candidato
          </C.Title>
        ) : (
          <C.Title>{message}</C.Title>
        )}
        <button onClick={showProjectForm ? handleSave : toggleEditForm}>
          {showProjectForm ? "Salvar Dados" : "Editar Dados"}
        </button>
        <button onClick={handleCV} className="CV">Baixar Curriculo</button>
      </C.ContentTitle>
          
      <C.ContainerGeneral>
        {data?.profissional ? (
          <div>
            {!showProjectForm ? (
              <div>
                <C.Content>
                  {renderInfoDetails.map((detail) => (
                    <DadosInfo
                      key={detail.key}
                      name={detail.name}
                      info={
                        detail.format
                          ? format(new Date(data[detail.key]), detail.format)
                          : data[detail.key]
                      }
                    />
                  ))}
                </C.Content>
              </div>
            ) : (
              <C.Content>
                <>
                  {Fields.map((field) => (
                    <InputField 
                      key={field.field}
                      label={field.label}
                      value={editedData[field.field]}
                      onChange={(
                        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
                      ) => {
                        if (field.label === "Telefone") {
                          handleChangeTelefone(e);
                        } else if (field.label === "CPF") {
                          handleChangeCPF(e);
                        } else if (field.label === "Último Salário") {
                          handleChangeUltimoSalario(e);
                        } else if (field.label === "Target CLT") {
                          handleChangeTargetCLT(e);
                        } else {
                          handleInputChange(field.field, e.target.value);
                        }
                      }}
                      disabled={field.label === "CPF"}
                      className="InfoCandidate"
                    />
                  ))}
                </>
              </C.Content>
              
            )}
          </div>
        ) : (
          <Loading />
        )}
      </C.ContainerGeneral>
    </C.Container>
  );
};

export { InfoCandidate };
