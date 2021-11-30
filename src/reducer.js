import { combineReducers } from "redux";
// import des reducers
import GetMovieReducer from "./containers/movieReducer";

export default function createReducer() {
  return combineReducers({
    getMovie: GetMovieReducer,
  });
}
