import {GET, POST} from 'store/api';

export const createUser = user => {
  const path = '/user/create';
  return POST(path, {user});
};

export const login = (email, password) => {
  const path = '/user/login';
  return POST(path, {email, password});
};
