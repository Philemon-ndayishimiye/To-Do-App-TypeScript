import type React from "react";
import type { ButtonType } from "../types/Input";

export const ButtonComp = ({ label, type, onClick }: ButtonType) => {
  return (
    <button
      className="rounded-4xl cursor-pointer font-bold bg-green-400 text-black px-4 py-3 ml-1 "
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
