import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("use useTodo in correct way");
  } else {
    return context;
  }
};
