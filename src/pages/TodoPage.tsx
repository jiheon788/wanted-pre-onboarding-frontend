import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import token from '@/lib/token';
import { getTodos } from '@/repositories/todos/todosRepository';
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

  useEffect(() => {
    if (!token.getToken(ACCESS_TOKEN_KEY)) navigate('/signin');
  }, []);

  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res.data);
    });
  }, []);

  if (todos.length === 0) return <div>todos is empty :(</div>;

  return (
    <>
      {todos.map((todo: ITodos, index: number) => (
        <li key={index}>
          <label>
            <input type="checkbox" />
            <span>TODO 1</span>
          </label>
        </li>
      ))}
    </>
  );
};

export default TodoPage;
