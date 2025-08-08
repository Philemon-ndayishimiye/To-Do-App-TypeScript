import React, { createContext, useReducer, useState } from "react";
import type { TodoType } from "../types/Input";
import type { ActionTypes } from "../reducers/TodoReducer";
import { TodoReducer } from "../reducers/TodoReducer";
interface todoContext {
  Todos: TodoType[];
  dispatch: React.Dispatch<ActionTypes>;
}

interface childrenProp {
  children: React.ReactNode;
}

export const TodoContext = createContext<todoContext>({
  Todos: [],
  dispatch: () => {},
});

export const TodoProvider: React.FC<childrenProp> = ({ children }) => {
  const [todo, dispatch] = useReducer(TodoReducer, [{ name: "philemon" }]);

  return (
    <TodoContext.Provider value={{ Todos: todo, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
