import {GET, POST} from 'store/api';

export const createUser = user => {
  const path = '/user/create';
  return POST(path, {user});
};

export const login = (email, password) => {
  const path = '/user/login';
  return POST(path, {email, password});
};

export const createJob = job => {
  const path = '/job/create';
  return POST(path, {job});
};

export const updateUser = (userId, data) => {
  const path = '/user/update';
  return POST(path, {userId, data});
};
