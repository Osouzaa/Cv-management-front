import { useParams } from "react-router-dom";
import * as C from "./style";
import { useAxiosCandidate } from "../../hooks/requestAxios";
import { useState, useEffect } from "react";
import InputField from "../../components/inputField";
import { initialState } from "../../utils/initialState";
import { DadosInfo } from "../../components/dadosInfo";
import { format } from "date-fns";
import Loading from "../../components/loading";

const InfoCandidate = () => {
  const { id } = useParams();
  const url = `${import.meta.env.VITE_API_URL}${id}`;
  const { data } = useAxiosCandidate(url);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [editedData, setEditedData] = useState(initialState);

  console.log(editedData);
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

  const handleSave = () => {
    // Implemente aqui a lógica para salvar os dados editados
    // Pode utilizar uma requisição axios ou outra abordagem dependendo da sua implementação
    // Exemplo: axios.put(url, { profissional: editedProfissional, idade: editedIdade });
    // Lembre-se de lidar com erros e atualizar o estado conforme necessário
    // Após salvar, você pode definir setShowProjectForm(false) para ocultar o formulário
  };

  return (
    <C.Container>
      <C.ContentTitle>
        <C.Title>Informações Candidato</C.Title>
        <button onClick={toggleEditForm}>
          {!showProjectForm ? "Editar Dados" : "Salvar Dados"}
        </button>
      </C.ContentTitle>

      <C.ContainerGeneral>
        {data?.profissional ? (
          <div>
            {!showProjectForm ? (
              <div>
                <C.Content>
                  <DadosInfo name="Profissional" info={data.profissional} />
                  <DadosInfo name="CPF" info={data.cpf} />
                  <DadosInfo name="E-mail" info={data.email} />
                  <DadosInfo name="Idade" info={data.idade} />
                  <DadosInfo name="Telefone" info={data.Telefone} />
                  <DadosInfo name="Status" info={data.status} />
                  <DadosInfo name="Última Empresa" info={data.ultima_empresa} />
                  <DadosInfo name="Último Salário" info={data.ultimo_salario} />
                  <DadosInfo name="Target CLT" info={data.target_clt} />
                  <DadosInfo name="Vaga 100% Presencial Porto Real/ RJ" info={data.vaga_100_presencial_porto_real_rj}/>
                  <DadosInfo name="Vaga 100% Presencial Goiana/ PE" info={data.vaga_100_presencial_goiana_pe}/>
                  <DadosInfo name="Vaga 100% Presencial Betim/ MG" info={data.vaga_100_presencial_betim_mg}/>
                  <DadosInfo name="Home Office" info={data.home_office} />
                  <DadosInfo name="Vaga Híbrida Betim" info={data.vaga_hibrida_betim} />
                  <DadosInfo name="Conhecimento em inglês" info={data.conhecimento_ingles}/>
                  
                  <DadosInfo
                    name="Registrado em"
                    info={
                      data.createdAt
                        ? format(
                            new Date(data.createdAt),
                            "dd/MM/yyyy HH:mm:ss"
                          )
                        : "Não disponível"
                    }
                  />
                  <DadosInfo
                    name="Ultima Atualização"
                    info={
                      data.updatedAt
                        ? format(
                            new Date(data.updatedAt),
                            "dd/MM/yyyy HH:mm:ss"
                          )
                        : "Não disponível"
                    }
                  />
                </C.Content>
              </div>
            ) : (
              <C.Content>
                <InputField
                  label="Profissional"
                  value={editedData.profissional}
                  onChange={(e) =>
                    setEditedData({
                      ...editedData,
                      profissional: e.target.value,
                    })
                  }
                  className="InfoCandidate"
                />
                <InputField
                  label="CPF"
                  value={editedData.cpf}
                  onChange={(e) =>
                    setEditedData({ ...editedData, cpf: e.target.value })
                  }
                  className="InfoCandidate"
                />
                <InputField
                  label="E-mail"
                  value={editedData.email}
                  onChange={(e) =>
                    setEditedData({ ...editedData, email: e.target.value })
                  }
                  className="InfoCandidate"
                />
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
