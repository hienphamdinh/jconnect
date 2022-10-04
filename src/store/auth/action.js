import {createActions} from 'reduxsauce';
const {Types, Creators} = createActions({
  login: ['phone', 'password'],
  loginSuccess: ['phone'],
  checkEmail: ['email', 'callback'],
  verifyEmail: ['email', 'callback'],
});

export const AuthTypes = Types;
export default Creators;
