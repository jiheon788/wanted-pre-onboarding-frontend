import useInputs from '@/lib/hooks/useInputs';
import { ITodo } from '@/pages/TodoPage';
import { updateTodo } from '@/repositories/todos/todosRepository';
import { useState } from 'react';

interface ITodoProps {
  todo: ITodo;
  onChangeTodos: (selectedTodo: ITodo) => void;
  onClickDeleteButton: (id: number) => void;
  loadTodos: () => void;
}

const Todo = ({ todo, onChangeTodos, onClickDeleteButton, loadTodos }: ITodoProps) => {
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
    <li className="list-group-item d-flex gap-3">
      {isUpdate ? (
        <form onSubmit={onUpdate} className="d-flex gap-2">
          <label className="d-flex gap-3">
            <input
              type="checkbox"
              className="form-check-input flex-shrink-0"
              checked={todo.isCompleted}
              onChange={() => onChangeTodos(todo)}
            />
            <input data-testid="modify-input" name="todo" value={todoEdit.todo} onChange={onChangeTodoEdit} />
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
              onChange={() => onChangeTodos(todo)}
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
