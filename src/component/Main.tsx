import React, { useState } from "react";
import { Input } from "../component/Input";
import type { InputType, ButtonType } from "../types/Input";
import { ButtonComp } from "../component/Button";
import { useTodo } from "../hooks/useTodo";

export default function Main() {
  const [todoName, setTodoName] = useState("");
  const { Todos, dispatch } = useTodo();

  console.log(Todos);

  const InputData: InputType = {
    name: "todo",
    value: todoName,
    placeholder: "Input your to do",
    type: "text",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setTodoName(e.target.value);
    },
  };

  const ButtonData: ButtonType = {
    label: "Add To Do",
    type: "button",
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      dispatch({
        type: "Add Task",
        payload: { name: todoName },
      });

      setTodoName("");
    },
  };

  return (
    <div className=" bg-purple-100 h-screen">
      <div>
        {/* <div className="flex justify-center py-[50px]">
          <h1 className="text-white font-bold text-5xl">To Do App</h1>
        </div> */}
        <div>
          <Input InputPropData={InputData} />
          <ButtonComp ButtonContent={ButtonData} />
        </div>
      </div>
    </div>
  );
}
