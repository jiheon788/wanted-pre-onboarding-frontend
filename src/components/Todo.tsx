import useInputs from '@/lib/hooks/useInputs';
import { ITodo } from '@/pages/TodoPage';
import { updateTodo } from '@/repositories/todos/todosRepository';
import { useState } from 'react';

interface ITodoProps {
  todo: ITodo;
  onCheckTodo: (selectedTodo: ITodo) => void;
  onClickDeleteButton: (id: number) => void;
  loadTodos: () => void;
}

const Todo = ({ todo, onCheckTodo, onClickDeleteButton, loadTodos }: ITodoProps) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [todoEdit, onChangeTodoEdit] = useInputs(todo);

  const onUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsUpdate(false);

    let { todo, isCompleted, id } = todoEdit;
    updateTodo({ todo, isCompleted, id }).then((_) => {
      loadTodos();
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isUpdate ? (
        <form
          onSubmit={onUpdate}
          className="d-flex justify-content-between align-items-center"
          style={{ width: '100%' }}
        >
          <label className="d-flex gap-3 align-items-center" style={{ width: '80%' }}>
            <input
              type="checkbox"
              className="form-check-input flex-shrink-0"
              checked={todo.isCompleted}
              onChange={() => onCheckTodo(todo)}
            />
            <input
              data-testid="modify-input"
              className="form-control"
              name="todo"
              value={todoEdit.todo}
              onChange={onChangeTodoEdit}
            />
          </label>
          <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="submit" className="btn btn-outline-dark btn-sm" data-testid="submit-button">
              제출
            </button>
            <button
              type="button"
              className="btn btn-outline-dark btn-sm"
              data-testid="cancel-button"
              onClick={() => setIsUpdate(false)}
            >
              취소
            </button>
          </div>
        </form>
      ) : (
        <>
          <label className="d-flex gap-3">
            <input
              type="checkbox"
              className="form-check-input flex-shrink-0"
              checked={todo.isCompleted}
              onChange={() => onCheckTodo(todo)}
            />
            <span className="pt-1 form-checked-content">{todo.todo}</span>
          </label>
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button
              type="button"
              className="btn btn-outline-dark btn-sm"
              data-testid="modify-button"
              onClick={() => setIsUpdate(true)}
            >
              수정
            </button>
            <button
              type="button"
              className="btn btn-outline-dark btn-sm"
              data-testid="delete-button"
              onClick={() => onClickDeleteButton(todo.id)}
            >
              삭제
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default Todo;
