import { Control, ValidationRule } from "react-hook-form";

export interface SelectValue {
  label: string;
  value: string | number | undefined;
}

export default interface SelectProps {
  label?: string;
  name: string;
  control: Control<any>;
  variant?: "classic" | "surface" | "soft" | "ghost";
  placeholder?: string;
  dataSource: SelectValue[];
  rules?: ValidationRule<any>;
  onValueChange?: (value: any) => void;
  className?: string;
}
