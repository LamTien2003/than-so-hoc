import { useController } from "react-hook-form";

import { Input as ShadcnInput } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { InputProps } from "@/components/custom/Input/Input.d";

const Input = ({
  type = "text",
  label,
  name,
  control,
  rules,
  placeholder,
  className,
}: InputProps) => {
  const { field, fieldState } = useController({ name, control });

  return (
    <div className="flex flex-col gap-2">
      {label && <Label htmlFor={field.name}>{label}</Label>}
      <ShadcnInput
        {...field}
        placeholder={placeholder}
        type={type}
        className={className}
      />

      {fieldState?.error && (
        <p className="text-red-600 text-xs font-bold">
          {fieldState.error.message}
        </p>
      )}
    </div>
  );
};

export default Input;
