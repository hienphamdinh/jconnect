import {call, put, takeLatest} from 'redux-saga/effects';
import AuthActions, {AuthTypes} from './action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from 'constants/Storage';
import get from 'lodash/get';
import * as API from './service';

export function* createUser(action) {
  const {user, onSuccess, onFailed} = action;
  try {
    const response = yield call(API.createUser, user);
    if (response.status) {
      AsyncStorage.setItem(Storage.ACCESS_TOKEN, get(response, 'token'));
      yield put(AuthActions.createUserSuccess(get(response, 'user')));
      onSuccess() && onSuccess(response);
    } else {
      onFailed && onFailed(response);
    }
  } catch (error) {
    onFailed && onFailed(error);
  }
}

const mapAuthSagas = [takeLatest(AuthTypes.CREATE_USER, createUser)];
export default mapAuthSagas;
