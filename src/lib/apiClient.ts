import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import token from './token';

const host = 'https://pre-onboarding-selection-task.shop';
const jwtToken = token.getToken(ACCESS_TOKEN_KEY);

const apiClient = axios.create({
  baseURL: host,
  headers: {
    Authorization: jwtToken ? `Bearer ${jwtToken}` : '',
  },
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiClient;
