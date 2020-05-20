import { combineReducers } from "redux";
import TrendingReducer from "./reducerTrending";
const rootReducers = combineReducers({
  trending: TrendingReducer,
});

export default rootReducers;
