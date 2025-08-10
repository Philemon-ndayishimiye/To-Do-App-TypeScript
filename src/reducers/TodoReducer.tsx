import type { TodoType } from "../types/Input";

import type { ActionType } from "../types/ReduceTpes";

export const TodoReducer = (
  Todos: TodoType[],
  action: ActionType
): TodoType[] => {
  switch (action.type) {
    case "Add Task":
      return [...Todos, { id: Date.now(), name: action.payload.name }];

    case "Remove Task":
      return Todos.filter((todo) => todo.name === action.payload.id); // remeber to put id to every task
    default:
      return Todos;
  }
};
