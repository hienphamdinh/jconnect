import { call, put, takeLatest } from "redux-saga/effects";
import AuthActions, { AuthTypes } from "./action";

export function* login(action) {
  console.log("Đã vô tới reducer", action);
  const { phone, password } = action;
  yield put(AuthActions.loginSuccess(phone));
}

const mapAuthSagas = [takeLatest(AuthTypes.LOGIN, login)];

export default mapAuthSagas;
