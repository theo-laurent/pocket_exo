import { all } from "redux-saga/effects";
import loginSaga from "Containers/Identification/saga";
export default function* rootSaga() {
  yield all([loginSaga()]);
}
