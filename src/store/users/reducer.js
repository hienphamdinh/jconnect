import {createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import {AuthTypes} from './action';

export const INITIAL_STATE = Immutable({
  user: {},
});

const createUserSuccess = (state, action) => {
  const {user} = action;
  return state.merge({
    user,
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [AuthTypes.CREATE_USER_SUCCESS]: createUserSuccess,
});
