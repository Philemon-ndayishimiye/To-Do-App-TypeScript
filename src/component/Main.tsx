import React, { useState } from "react";
import { Input } from "../component/Input";
import { ButtonComp } from "../component/Button";
import { useTodo } from "../hooks/useTodo";
import Title from "./Title";
import { IconComp } from "./IconComp";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Main() {
  const [todoName, setTodoName] = useState("");
  const { Todos, dispatch } = useTodo();

  console.log(Todos);

  return (
    <div className="bg-black w-[50%] h-dvh  pb-[50px]">
      <div className="flex justify-center items-center">
        <Title />
      </div>
      <div className="flex justify-center">
        <div className="border border-gray-300 w-[427px] rounded-4xl ]">
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

      <div className="pl-[18%] pt-[6%] pr-[30px]">
        <div>
          {Todos.map((todos) => (
            <div
              key={todos.id}
              className="bg-gray-300 py-2 my-2 flex px-[20px] justify-between rounded-lg"
            >
              <div className="flex gap-2">
                {todos.completed === false ? (
                  <IconComp icon={<FaRegCircle />} />
                ) : (
                  <IconComp icon={<FaRegCheckCircle />} />
                )}
                <div>
                  <h1>{todos.name}</h1>
                </div>
              </div>

              <div>
                <IconComp
                  icon={<MdDelete />}
                  OnClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    dispatch({
                      type: "Remove Task",
                      payload: { id: todos.id },
                    });
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
