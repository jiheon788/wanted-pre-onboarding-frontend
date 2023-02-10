import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import token from '@/lib/Token';

const host = 'https://pre-onboarding-selection-task.shop';
const jwtToken = token.getToken(ACCESS_TOKEN_KEY);

const CustomAxios = axios.create({
  baseURL: host,
  headers: {
    Authorization: jwtToken ? `Bearer ${jwtToken}` : '',
  },
});

/**
 * 디버깅 코드
 */
CustomAxios.interceptors.response.use(
  (response) => {
    console.log('response success: ', response);
    return response;
  },
  (error) => {
    console.log('response error: ', error);
    return Promise.reject(error);
  },
);

export default CustomAxios;
