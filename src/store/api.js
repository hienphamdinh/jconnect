import axios from 'axios';
import * as qs from 'query-string';
import Configs from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from 'constants/Storage';
import size from 'lodash/size';

import {
  requestInterceptor,
  responseInterceptor,
  errorInterceptor,
} from './interceptor';
import {get} from 'lodash';

const instance = axios.create({
  baseURL: Configs.API_BASE_URL,
  timeout: 60000,
});

instance.interceptors.response.use(responseInterceptor, errorInterceptor);
instance.interceptors.request.use(requestInterceptor, errorInterceptor);

const handleSuccess = response => {
  return response.data;
};

const handleError = error => {
  console.log('error', error);
};

const getRequestConfig = async (config = {}, path) => {
  const currentToken =
    instance.defaults.headers.common.Authorization &&
    instance.defaults.headers.common['Access-Token'];

  let authConfig = {};
  if (!currentToken) {
    const token = (await AsyncStorage.getItem(Storage.ACCESS_TOKEN)) || '';
    if (token) {
      authConfig = {
        Authorization: `Bearer ${token}`,
        'Access-Token': token,
      };
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      instance.defaults.headers.common['Access-Token'] = token;
    }
  }

  return {
    ...config,
    headers: {
      ...get(config, 'headers'),
      ...authConfig,
    },
  };
};

export const GET = async (url, params = {}, config = {}) => {
  const queryString = params ? qs.stringify(params) : '';
  const urlWithQueryString = size(params) > 0 ? `${url}?${queryString}` : url;
  const newConfig = getRequestConfig(config, url);
  return instance
    .get(urlWithQueryString, newConfig)
    .then(handleSuccess)
    .catch(handleError);
};

export const POST = async (url, params = {}, config = {}) => {
  const newConfig = getRequestConfig(config, url);
  return instance
    .post(url, params, newConfig)
    .then(handleSuccess)
    .catch(handleError);
};

export const PUT = async (url, params = {}, config = {}) => {
  const newConfig = getRequestConfig(config, url);
  return instance
    .put(url, params, newConfig)
    .then(handleSuccess)
    .catch(handleError);
};

export const PATCH = async (url, params = {}, config = {}) => {
  const newConfig = getRequestConfig(config, url);
  return instance
    .patch(url, params, newConfig)
    .then(handleSuccess)
    .catch(handleError);
};

export const DELETE = async (url, config = {}) => {
  const newConfig = getRequestConfig(config, url);
  return instance.delete(url, newConfig).then(handleSuccess).catch(handleError);
};
