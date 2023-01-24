import { useEffect, useState } from "react";
import axios from "axios";

export const UseFetch = (url) => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setDatas(res.data);
        setIsLoading(false);
      })
      .catch((err) => setIsError(err.message));
  }, [url]);
  return { datas, isLoading, isError };
};

export const UseFetchByPage = (url) => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setDatas(res.data);
        setIsLoading(false);
      })
      .catch((err) => setIsError(err.message));
  }, [url]);
  return { datas, isLoading, isError };
};
