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

export default apiClient;
