import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Candidate } from "../types/candidate.types";

const useAxiosCandidate = (url: string, id?: string) => {
  const [data, setData] = useState<Candidate>();
  const [post, setPost] = useState(null);
  const [patch, setPatch] = useState(null);
  const [errorAxios, setError] = useState<any>(null);

  const httpConfig = (itemData: any) => {
    setPost(itemData);
  };

  const patchConfig = (itemData: any) => {
    setPatch(itemData);

  };

  useEffect(() => {
    if (url) {
      const apiUrl = id ? `${url}/${id}` : url;
      axios
        .get(apiUrl)
        .then((response: AxiosResponse<Candidate>) => {
          setData(response.data);
        })
        .catch((error: any) => {
          console.error("Erro na solicitação GET:", error);
          if (error.response) {
            console.error("Detalhes da resposta:", error.response.data);
          }
        });
    }
  }, [url, id]);

  useEffect(() => {
    const postData = async () => {
      if (post) {
        try {
          await axios.post(url, post);
          const result = await axios.get(url);
          setData(result.data);
        } catch (error: any) {
          console.error("Erro na solicitação POST: ", error);
          setError(error.response?.data?.message || "Erro desconhecido");
        }
      }
    };
    postData();
  }, [url, post]);

  useEffect(() => {
    const patchData = async () => {
      if (patch) {
        try {
          await axios.patch(url, patch, {
            headers: {
              "Content-Type": "application/json",
            },
          });

          const result = await axios.get(url);

          setData(result.data);
        } catch (error: any) {
          console.error("Erro na solicitação PATCH: ", error);
          setError(error.response?.data?.message || "Erro desconhecido");
        }
      }
    };

    patchData();
  }, [url, patch]);

  return { httpConfig, patchConfig, data, errorAxios };
};

export { useAxiosCandidate };
