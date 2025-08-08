import type React from "react";
import type { ButtonType } from "../types/Input";

interface ButtonProp {
  ButtonContent: ButtonType;
}

export const ButtonComp: React.FC<ButtonProp> = ({ ButtonContent }) => {
  return (
    <button
      className="border rounded-xl "
      type={ButtonContent.type}
      onClick={ButtonContent.onClick}
    >
      {ButtonContent.label}
    </button>
  );
};
