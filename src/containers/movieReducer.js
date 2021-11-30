import HomeTypes from "./types";

const INITIAL_STATE = {
  isLoading: false,
  data: [],
};

export default function GetMovieReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HomeTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case HomeTypes.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case HomeTypes.RESET_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    default:
      break;
  }
}
