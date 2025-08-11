import React, { useState } from "react";
import { Input } from "../component/Input";
import type { InputType, ButtonType } from "../types/Input";
import { ButtonComp } from "../component/Button";
import { useTodo } from "../hooks/useTodo";

export default function Main() {
  const [todoName, setTodoName] = useState("");
  const { Todos, dispatch } = useTodo();

  console.log(Todos);

  return (
    <div className=" bg-purple-100 h-screen">
      <div>
        {/* <div className="flex justify-center py-[50px]">
          <h1 className="text-white font-bold text-5xl">To Do App</h1>
        </div> */}
        <div>
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
    </div>
  );
}
