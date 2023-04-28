import axios from 'axios';

import { BASE_URL, TOKEN_KEY } from '../constant/constant';
import { getToken, removeToken } from '../utils/token';

const customAxios = axios.create({
  baseURL: BASE_URL,
});

customAxios.interceptors.request.use(
  config => {
    const token = getToken(TOKEN_KEY);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    removeToken(TOKEN_KEY);
    return Promise.reject(error);
  }
);

export default customAxios;
