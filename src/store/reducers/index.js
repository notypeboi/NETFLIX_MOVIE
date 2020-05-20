import { combineReducers } from "redux";
import TrendingReducer from "./reducerTrending";
import MusicMovieReducer from "./reducerMusicMovie";

const rootReducers = combineReducers({
  trending: TrendingReducer,
  music: MusicMovieReducer,
});

export default rootReducers;
