import apiClient from '@/lib/apiClient';
import { postSignParam } from './authRepository.param';

export const postSignUp = async (data: postSignParam) => {
  return await apiClient({
    method: 'post',
    url: '/auth/signup',
    data,
  });
};

export const postSignIn = async (data: postSignParam) => {
  return await apiClient({
    method: 'post',
    url: '/auth/signin',
    data,
  });
};
