import authSagas from 'store/auth/saga';
import userSagas from 'store/user/saga';
import {all} from 'redux-saga/effects';
export default function* rootSagas() {
  yield all([...authSagas, ...userSagas]);
}
