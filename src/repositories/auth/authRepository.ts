import apiClient from '@/lib/apiClient';
import { postSignUpParam } from './authRepository.param';

export const postSignUp = async (data: postSignUpParam) => {
  return await apiClient({
    method: 'post',
    url: '/auth/signup',
    data,
  });
};
