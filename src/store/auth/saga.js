import {call, put, takeLatest} from 'redux-saga/effects';
import AuthActions, {AuthTypes} from './action';
import * as API from './service';

export function* login(action) {
  const data = yield call(API.login, '0971109618');
  console.log('data', data);
}

const mapAuthSagas = [takeLatest(AuthTypes.LOGIN, login)];

export default mapAuthSagas;
