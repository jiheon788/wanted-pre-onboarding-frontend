import Todo from '@/components/Todo';
import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import useInputs from '@/lib/hooks/useInputs';
import token from '@/lib/token';
import { createTodo, deleteTodo, getTodos, updateTodo } from '@/repositories/todos/todosRepository';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface ITodo {
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
    <div className="container my-5">
      <h1 className="display-5 fw-bold">Todos</h1>
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <form onSubmit={onCreate}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="할 일을 입력해주세요."
              data-testid="new-todo-input"
              name="todo"
              value={todoData.todo}
              onChange={onChangeTodoData}
            />
            <button className="btn btn-dark" type="submit" data-testid="new-todo-add-button">
              추가
            </button>
          </div>
        </form>
        <ul className="list-group w-auto">
          {todos.length === 0 ? (
            <div>todos is empty :(</div>
          ) : (
            todos.map((todo: ITodo) => (
              <Todo
                key={todo.id}
                todo={todo}
                onChangeTodos={onChangeTodos}
                onClickDeleteButton={onClickDeleteButton}
                loadTodos={loadTodos}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default TodoPage;
