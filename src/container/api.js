import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const URL = "https://api.themoviedb.org/3/";
const GENRE = `${URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;

const Api = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const FetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(GENRE);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    FetchData();
  }, []);

  return <>{loading ? "로딩중" : "완료"}</>;
};

export default Api;
