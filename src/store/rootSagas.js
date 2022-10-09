import authSagas from 'store/auth/saga';
import usersSagas from 'store/users/saga';
import {all} from 'redux-saga/effects';
export default function* rootSagas() {
  yield all([...authSagas, ...usersSagas]);
}
