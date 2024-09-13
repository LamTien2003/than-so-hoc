import React from "react";

export default interface DatePickerProps {
  name: string;
  label?: string;
  control: Control<any>;
  rules?: ValidationRule<any>;
  className?: string;
  onChange: (value: Date | undefined) => void;
  onYearChange?: (value: string) => void;
  onMonthChange?: (value: string) => void;
}
