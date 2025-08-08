import type { TodoType } from "../types/Input";
export const ACTIONS = {
  Add_Todo: "addtodo",
  Remove_Todo: "removetodo",
  Update_todo: "updatetodo",
} as const;

export interface ActionTypes {
  type: string;
  payload: payLoadType;
}

interface payLoadType {
  todo: string;
}

export const TodoReducer = (
  Todos: TodoType[],
  action: ActionTypes
): TodoType[] => {
  switch (action.type) {
    case ACTIONS.Add_Todo:
      return [...Todos, { name: action.payload.todo }];

    default:
      return Todos;
  }
};
