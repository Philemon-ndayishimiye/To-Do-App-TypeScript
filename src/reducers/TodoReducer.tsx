import type { TodoType } from "../types/Input";

import type { ActionType } from "../types/ReduceTpes";

export const TodoReducer = (
  Todos: TodoType[],
  action: ActionType
): TodoType[] => {
  switch (action.type) {
    case "Add Task":
      return [
        ...Todos,
        { id: Date.now(), name: action.payload.name, completed: false },
      ];

    case "Remove Task":
      return Todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return Todos;
  }
};
