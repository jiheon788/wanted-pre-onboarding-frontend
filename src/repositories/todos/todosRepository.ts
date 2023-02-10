import apiClient from '@/lib/apiClient';
import { createTodoParam, updateTodoParam } from './todosReposiroty.param';

export const getTodos = async () => {
  return await apiClient({
    method: 'get',
    url: '/todos',
  });
};

export const createTodo = async ({ todo }: createTodoParam) => {
  return await apiClient({
    method: 'post',
    url: '/todos',
    data: {
      todo,
    },
  });
};

export const updateTodo = async ({ todo, isCompleted, id }: updateTodoParam) => {
  return await apiClient({
    method: 'put',
    url: `/todos/${id}`,
    data: {
      todo,
      isCompleted,
    },
  });
};
