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

  const fetchData = async () => {
    try {
      const result = await axios.get(url);
      setData(result.data);
    } catch (error : any) {
      console.error("Error fetching data: ", error);
      setError(error.response?.data?.message || "Unknown error");
    }
  };

  useEffect(() => {
    if (url) {
      const apiUrl = id ? `${url}/${id}` : url;
      fetchData();
    }
  }, [url, id]);

  useEffect(() => {
    const postData = async () => {
      if (post) {
        try {
          await axios.post(url, post);
          fetchData();
        } catch (error: any) {
          console.error("Error posting data: ", error);
          setError(error.response?.data?.message || "Unknown error");
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
          fetchData();
        } catch (error : any) {
          console.error("Error patching data: ", error);
          setError(error.response?.data?.message || "Unknown error");
        }
      }
    };

    patchData();
  }, [url, patch]);

  const refetch = () => {
    fetchData();
  };

  return { httpConfig, patchConfig, data, errorAxios, refetch };
};

export { useAxiosCandidate };
