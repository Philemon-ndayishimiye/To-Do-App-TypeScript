import React from "react";

import type { InputType } from "../types/Input";

interface inputProp {
  InputPropData: InputType;
}

export const Input: React.FC<inputProp> = ({ InputPropData }) => {
  return (
    <input
      
      type={InputPropData.type}
      placeholder={InputPropData.placeholder}
      name={InputPropData.name}
      value={InputPropData.value}
      onChange={InputPropData.onChange}
    />
  );
};
