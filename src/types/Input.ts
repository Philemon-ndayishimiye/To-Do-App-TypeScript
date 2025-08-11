import type React from "react";

type Value = string | number;
type Type = "number" | "text" | "date" | "password";

export interface InputType {
  name: string;
  placeholder: string;
  value: Value;
  type: Type;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type ButtonTy = "submit" | "button" | "reset";

export interface ButtonType {
  label: string;
  type: ButtonTy;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface TodoType {
  id: string | number;
  name: string;
  completed: boolean;
}
