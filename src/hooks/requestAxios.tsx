import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Candidate } from "../types/candidate.types";

const useAxiosCandidate = (url: string, id?: string) => {
  const [data, setData] = useState<Candidate>();
  const [post, setPost] = useState(null);
  const [error, setError] = useState<any>(null);

  const httpConfig = (itemData: any) => {
    setPost(itemData);
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
          console.error("Erro na solicitação:", error);
          if (error.response) {
            console.error("Detalhes da resposta:", error.response.data);
          }
        });
    }
  }, [url]);

  useEffect(() => {
    const postData = async () => {
      if (post) {
        try {
          await axios.post(url, post);
          const result = await axios.get(url);
          setData(result.data);
        } catch (error: any) {
          console.error("Erro na solicitação POST: ", error );
          setError(error.response.data.message);
        }
      }
    };
    postData();
  }, [url, post]);

  return { httpConfig, data, error };
};

export { useAxiosCandidate };
