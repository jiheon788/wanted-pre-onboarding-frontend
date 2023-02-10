export interface createTodoParam {
  todo: string;
}

export interface updateTodoParam {
  todo: string;
  isCompleted: boolean;
  id: number;
}

export interface deleteTodoParam {
  id: number;
}
