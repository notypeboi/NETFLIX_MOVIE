import axios from "axios";

const API_KEY = process.env.API_KEY;
const BASE_URL = `https://api.themoviedb.org/3`;
//action type 정의
export const FETCHING_TREND = "FETCHING_TREND";
export const FETCHING_NETFLIX_ORIGINAL = "FETCHING_NETFLIX_ORIGINAL";
export const FETCH_TOP_RATED = "FETCH_TOP_RATED";
export const FETCH_ACTION_MOVIES = "FETCH_ACTION_MOVIES";
export const FETCH_MUSIC_MOVIES = "FETCH_MUSIC_MOVIES";
export const FETCH_ROMANCE_MOVIES = "FETCH_ROMANCE_MOVIES";

export const fetchingTrend = (data) => {
  return {
    type: FETCHING_TREND,
    data,
  };
};

export const fetchTrending = () => {
  return (dispatch) => {
    return axios
      .get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        dispatch(fetchingTrend(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const fetchingMusicData = (data) => {
  return {
    type: FETCH_MUSIC_MOVIES,
    data,
  };
};

export const fetchMusicMovie = async (dispatch) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10402`
    );
    dispatch(fetchingMusicData(response.data));
  } catch (e) {
    console.log(e);
  }
};
