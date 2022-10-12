import {GET, POST} from 'store/api';

export const createUser = user => {
  const path = '/user/create';
  return POST(path, {user});
};
