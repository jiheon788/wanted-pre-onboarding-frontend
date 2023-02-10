import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import useInputs from '@/lib/hooks/useInputs';
import token from '@/lib/token';
import { createTodo, deleteTodo, getTodos, updateTodo } from '@/repositories/todos/todosRepository';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ITodo {
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

  const loadTodos = () => {
    getTodos().then((res) => {
      setTodos(res.data);
    });
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const onCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createTodo(todoData).then((_) => {
      loadTodos();

      setTodoData({ todo: '' });
    });
  };

  const onChangeTodos = (selectedTodo: ITodo) => {
    let { todo, isCompleted, id } = selectedTodo;
    isCompleted = !isCompleted;
    updateTodo({ todo, isCompleted, id }).then((_) => {
      loadTodos();
    });
  };

  const onClickDeleteButton = (id: number) => {
    deleteTodo({ id }).then((_) => {
      loadTodos();
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
        todos.map((todo: ITodo, index: number) => (
          <li key={index}>
            <label>
              <input type="checkbox" checked={todo.isCompleted} onChange={() => onChangeTodos(todo)} />
              <span>{todo.todo}</span>
            </label>
            <button data-testid="modify-button">수정</button>
            <button data-testid="delete-button" onClick={() => onClickDeleteButton(todo.id)}>
              삭제
            </button>
          </li>
        ))
      )}
    </>
  );
};

export default TodoPage;
