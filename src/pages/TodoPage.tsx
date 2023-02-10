import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import useInputs from '@/lib/hooks/useInputs';
import token from '@/lib/token';
import { createTodo, getTodos } from '@/repositories/todos/todosRepository';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ITodos {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: string | number;
}

const TodoPage = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [todoData, onChangeTodoData, setTodoData] = useInputs({ todo: '' });

  useEffect(() => {
    if (!token.getToken(ACCESS_TOKEN_KEY)) navigate('/signin');
  }, []);

  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res.data);
    });
  }, []);

  const onCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createTodo(todoData).then((_) => {
      getTodos().then((res) => {
        setTodos(res.data);
      });

      setTodoData({ todo: '' });
    });
  };

  return (
    <>
      <form onSubmit={onCreate}>
        <input data-testid="new-todo-input" name="todo" value={todoData.todo} onChange={onChangeTodoData} />
        <button type="submit" data-testid="new-todo-add-button">
          추가
        </button>
      </form>
      {todos.length === 0 ? (
        <div>todos is empty :(</div>
      ) : (
        todos.map((todo: ITodos, index: number) => (
          <li key={index}>
            <label>
              <input type="checkbox" />
              <span>{todo.todo}</span>
            </label>
          </li>
        ))
      )}
    </>
  );
};

export default TodoPage;
