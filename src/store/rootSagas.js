import authSagas  from "store/auth/saga";
import {all} from "redux-saga/effects";
export default function* rootSagas() {
    yield all([
        ...authSagas
    ])
}