import React from "react";

import type { InputType } from "../types/Input";

export const Input = ({
  type,
  placeholder,
  name,
  value,
  onChange,
}: InputType) => {
  return (
    <input
      className="w-[320px]  px-5 py-3 border border-none  focus:outline-none text-gray-200 "
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
