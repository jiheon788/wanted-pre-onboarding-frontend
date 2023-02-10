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

/**
 * 디버깅 코드
 */
apiClient.interceptors.response.use(
  (response) => {
    console.log('response success: ', response);
    return response;
  },
  (error) => {
    console.log('response error: ', error);
    return Promise.reject(error);
  },
);

export default apiClient;
