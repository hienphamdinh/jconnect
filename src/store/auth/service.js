import axios from 'axios';
import get from 'lodash/get';
const BASE_URL = 'http://localhost:3000/api/';

export const checkEmail = async email => {
  const path = 'users/check-email';
  let data;
  const res = await axios
    .post(path, email, {baseURL: BASE_URL})
    .then(response => {
      get(response, 'data');
      return get(response, 'data');
    });

  return res;
};
