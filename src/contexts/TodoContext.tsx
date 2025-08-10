import React, { createContext, useEffect, useReducer} from "react";
import type { TodoType } from "../types/Input";
import { TodoReducer } from "../reducers/TodoReducer";
import type { ActionType } from "../types/ReduceTpes";

interface todoContext {
  Todos: TodoType[];
  dispatch: React.Dispatch<ActionType>;
}

interface childrenProp {
  children: React.ReactNode;
}

export const TodoContext = createContext<todoContext>({
  Todos: [],
  dispatch: () => {},
});

export const TodoProvider: React.FC<childrenProp> = ({ children }) => {
  const SavedTodo: TodoType[] = JSON.parse(
    localStorage.getItem("todos") || "[]"
  );
  const [todo, dispatch] = useReducer(TodoReducer, SavedTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  return (
    <TodoContext.Provider value={{ Todos: todo, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
