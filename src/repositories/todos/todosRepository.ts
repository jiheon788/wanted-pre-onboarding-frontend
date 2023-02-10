import apiClient from '@/lib/apiClient';

export const getTodos = async () => {
  return await apiClient({
    method: 'get',
    url: '/todos',
  });
};
