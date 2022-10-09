import {createActions} from 'reduxsauce';
const {Types, Creators} = createActions({
  createUser: ['user', 'onSuccess', 'onFailed'],
  createUserSuccess: ['user'],
});

export const AuthTypes = Types;
export default Creators;
