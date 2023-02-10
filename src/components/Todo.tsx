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
    <li>
      {isUpdate ? (
        <form onSubmit={onUpdate}>
          <label>
            <input type="checkbox" checked={todo.isCompleted} onChange={() => onChangeTodos(todo)} />
            <input data-testid="modify-input" name="todo" value={todoEdit.todo} onChange={onChangeTodoEdit} />
          </label>
          <button type="submit" data-testid="submit-button">
            제출
          </button>
          <button type="button" data-testid="cancel-button" onClick={() => setIsUpdate(false)}>
            취소
          </button>
        </form>
      ) : (
        <>
          <label>
            <input type="checkbox" checked={todo.isCompleted} onChange={() => onChangeTodos(todo)} />
            <span>{todo.todo}</span>
          </label>
          <button type="button" data-testid="modify-button" onClick={() => setIsUpdate(true)}>
            수정
          </button>
          <button type="button" data-testid="delete-button" onClick={() => onClickDeleteButton(todo.id)}>
            삭제
          </button>
        </>
      )}
    </li>
  );
};

export default Todo;
