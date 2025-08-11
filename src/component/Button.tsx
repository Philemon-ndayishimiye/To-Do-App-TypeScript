import type React from "react";
import type { ButtonType } from "../types/Input";

export const ButtonComp = ({ label, type, onClick }: ButtonType) => {
  return (
    <button className="border rounded-xl " type={type} onClick={onClick}>
      {label}
    </button>
  );
};
