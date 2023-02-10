import apiClient from '@/lib/apiClient';
import { createTodoParam } from './todosReposiroty.param';

export const getTodos = async () => {
  return await apiClient({
    method: 'get',
    url: '/todos',
  });
};

export const createTodo = async (data: createTodoParam) => {
  return await apiClient({
    method: 'post',
    url: '/todos',
    data,
  });
};
