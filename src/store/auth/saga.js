import {call, put, takeLatest} from 'redux-saga/effects';
import AuthActions, {AuthTypes} from './action';
import * as API from './service';

export function* login(action) {
  try {
    const data = yield call(API.login, '0971109618');
    console.log('data', data);
  } catch (error) {}
}

export function* checkEmail(action) {
  try {
    const {email, callback} = action;
    const data = yield call(API.checkEmail, email);
    callback && callback(data);
  } catch (error) {}
}

export function* verifyEmail(action) {
  try {
    const {email, callback} = action;
    const data = yield call(API.verifyEmail, email);
    callback && callback(data);
  } catch (error) {}
}

const mapAuthSagas = [
  takeLatest(AuthTypes.LOGIN, login),
  takeLatest(AuthTypes.CHECK_EMAIL, checkEmail),
  takeLatest(AuthTypes.VERIFY_EMAIL, verifyEmail),
];
export default mapAuthSagas;
