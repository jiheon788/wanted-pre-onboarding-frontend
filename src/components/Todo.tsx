import { ITodo } from '@/pages/TodoPage';

interface ITodoProps {
  todo: ITodo;
  onChangeTodos: (selectedTodo: ITodo) => void;
  onClickDeleteButton: (id: number) => void;
}

const Todo = ({ todo, onChangeTodos, onClickDeleteButton }: ITodoProps) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.isCompleted} onChange={() => onChangeTodos(todo)} />
        <span>{todo.todo}</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button data-testid="delete-button" onClick={() => onClickDeleteButton(todo.id)}>
        삭제
      </button>
    </li>
  );
};

export default Todo;
