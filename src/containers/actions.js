import HomeTypes from "./types";

//actions datas
export const getData = (token) => ({
  type: HomeTypes.GET_DATA,
  payload: token,
});

export const getDataSucess = (response) => ({
  type: HomeTypes.getDataSucess,
  payload: response,
});
// actions loader
export const setLoading = () => ({
  type: HomeTypes.SET_LOADING,
});
export const resetLoading = () => ({
  type: HomeTypes.RESET_LOADING,
});
