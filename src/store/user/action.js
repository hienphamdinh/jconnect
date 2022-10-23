import {createActions} from 'reduxsauce';
const {Types, Creators} = createActions({
  createUser: ['user', 'onSuccess', 'onFailed'],
  createUserSuccess: ['response'],
  login: ['email', 'password', 'onSuccess', 'onFailed'],
  loginSuccess: ['response'],
  logout: ['onSuccess'],
  logoutSuccess: [],
});

export const UserTypes = Types;
export default Creators;
