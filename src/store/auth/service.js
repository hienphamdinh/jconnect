import axios from 'axios';
import {GET} from 'store/api';
import get from 'lodash/get';

const BASE_URL = 'http://localhost:3000/api/';

export const checkEmail = async email => {
  const path = 'users/check-email';
  const res = await axios
    .post(path, email, {baseURL: BASE_URL})
    .then(response => {
      get(response, 'data');
      return get(response, 'data');
    });

  return res;
};

export const login = phone => {
  const path = '/users/login/hien';
  return GET(path, {hien: 'yen'});
};
