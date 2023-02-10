import apiClient from '@/lib/apiClient';
import { postSignParam } from './authRepository.param';

export const postSignUp = async ({ email, password }: postSignParam) => {
  return await apiClient({
    method: 'post',
    url: '/auth/signup',
    data: {
      email,
      password,
    },
  });
};

export const postSignIn = async ({ email, password }: postSignParam) => {
  return await apiClient({
    method: 'post',
    url: '/auth/signin',
    data: {
      email,
      password,
    },
  });
};
