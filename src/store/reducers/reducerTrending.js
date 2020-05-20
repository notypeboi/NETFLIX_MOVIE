import { FETCHING_TREND } from "../actions";

export default function (state = [], action) {
  switch (action.type) {
    case FETCHING_TREND:
      return action.data;
    default:
      return state;
  }
}
