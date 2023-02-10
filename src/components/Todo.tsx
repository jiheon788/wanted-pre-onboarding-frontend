import { ITodo } from '@/pages/TodoPage';
import { useState } from 'react';

interface ITodoProps {
  todo: ITodo;
  onChangeTodos: (selectedTodo: ITodo) => void;
  onClickDeleteButton: (id: number) => void;
}

const Todo = ({ todo, onChangeTodos, onClickDeleteButton }: ITodoProps) => {
  const [isUpdate, setIsUpdate] = useState(false);

  return (
    <li>
      {isUpdate ? (
        <>
          <input data-testid="modify-input" />
          <button data-testid="submit-button">제출</button>
          <button data-testid="cancel-button" onClick={() => setIsUpdate(false)}>
            취소
          </button>
        </>
      ) : (
        <>
          <label>
            <input type="checkbox" checked={todo.isCompleted} onChange={() => onChangeTodos(todo)} />
            <span>{todo.todo}</span>
          </label>
          <button data-testid="modify-button" onClick={() => setIsUpdate(true)}>
            수정
          </button>
          <button data-testid="delete-button" onClick={() => onClickDeleteButton(todo.id)}>
            삭제
          </button>
        </>
      )}
    </li>
  );
};

export default Todo;
