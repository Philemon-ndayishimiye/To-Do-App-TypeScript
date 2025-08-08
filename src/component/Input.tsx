import React from "react";

import type { InputType } from "../types/Input";

interface inputProp {
  InputPropData: InputType;
}

export const Input: React.FC<inputProp> = ({ InputPropData }) => {
  return (
    <input
      className="w-[320px] px-5 py-2 text-black border"
      type={InputPropData.type}
      placeholder={InputPropData.placeholder}
      name={InputPropData.name}
      value={InputPropData.value}
      onChange={InputPropData.onChange}
    />
  );
};
