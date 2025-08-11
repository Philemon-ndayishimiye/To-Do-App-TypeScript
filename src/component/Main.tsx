import React, { useState } from "react";
import { Input } from "../component/Input";
import { ButtonComp } from "../component/Button";
import { useTodo } from "../hooks/useTodo";
import Title from "./Title";

export default function Main() {
  const [todoName, setTodoName] = useState("");
  const { Todos, dispatch } = useTodo();

  console.log(Todos);

  return (
    <div className="bg-black pb-[30px] w-[50%] ">
      <div className="flex justify-center items-center">
        <Title />
      </div>

      <div className="border border-gray-300 w-[427px] rounded-4xl flex ]">
        <Input
          type="text"
          name="Todo"
          placeholder="Enter your Todo "
          value={todoName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTodoName(e.target.value);
          }}
        />
        <ButtonComp
          label="Add Task"
          type="button"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            dispatch({
              type: "Add Task",
              payload: { name: todoName },
            });
          }}
        />
      </div>
    </div>
  );
}
