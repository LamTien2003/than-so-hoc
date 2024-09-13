import { Control, ValidationRule } from "react-hook-form";

export interface InputProps {
  type?: "text" | "password";
  label?: string;
  placeholder: string;
  control: Control<any>;
  rules?: ValidationRule<any>;
  name: string;
  className?: string;
}
