import React from "react";
import { Input } from "../component/Input";
import type { InputType, ButtonType } from "../types/Input";
import { ButtonComp } from "../component/Button";

export default function Home() {
  const InputData: InputType = {
    name: "todo",
    value: "philemon",
    placeholder: "Input your to do",
    type: "text",
  };

  const ButtonData: ButtonType = {
    label: "Add To Do",
    type: "button",
  };

  return (
    <div className=" bg-purple-100 h-screen">
      <div>
        <h1>To Do App</h1>
      </div>
      <div>
        <div>
          <Input InputPropData={InputData} />
          <ButtonComp ButtonContent={ButtonData} />
        </div>
      </div>
    </div>
  );
}
