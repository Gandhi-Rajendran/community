import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userSliceActions } from "../store";

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
  const { page, pages } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    if (pages[page]) {
      return;
    }
    axios
      .get(url)
      .then((res) => {
        dispatch(userSliceActions.setPageData({ page, data: res.data }));
        setIsLoading(false);
      })
      .catch((err) => setIsError(err.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return { isLoading, isError };
};
