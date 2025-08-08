type Value = string | number;
type Type = "number" | "text" | "date" | "password";

export interface InputType {
  variant?: string;
  name: string;
  placeholder: string;
  value: Value;
  type: Type;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
