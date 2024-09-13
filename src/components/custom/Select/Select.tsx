import { useController } from "react-hook-form";
import { useEffect } from "react";

import { cn } from "@/lib/utils";
import {
  Select as ShadcnUISelect,
  SelectContent as ShadcnSelectContent,
  SelectGroup as ShadcnSelectGroup,
  SelectItem as ShadcnSelectItem,
  SelectTrigger as ShadcnTrigger,
  SelectValue as ShadcnSelectValue,
} from "@/components/ui/select";

import SelectProps from "@/components/custom/Select/Select.d";
import { Label } from "@/components/ui/label";

const Select = ({
  label,
  name,
  placeholder,
  control,
  rules,
  onValueChange,
  dataSource,
  className,
}: SelectProps) => {
  const { field, fieldState } = useController({ name, control, rules });

  useEffect(() => {
    onValueChange && onValueChange(field.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.value]);

  return (
    <div className="flex flex-col gap-2">
      {label && <Label htmlFor={field.name}>{label}</Label>}
      <ShadcnUISelect
        {...field}
        defaultValue={dataSource[0].value?.toString()}
        onValueChange={field.onChange}
      >
        <ShadcnTrigger className={cn("cursor-pointer", className)}>
          {placeholder && <ShadcnSelectValue placeholder={placeholder} />}
        </ShadcnTrigger>

        <ShadcnSelectContent position="popper" side="bottom">
          <ShadcnSelectGroup>
            {dataSource.map(item => (
              <ShadcnSelectItem
                key={item.value}
                value={item?.value?.toString() || "none"}
                className="cursor-pointer"
              >
                {item.label}
              </ShadcnSelectItem>
            ))}
          </ShadcnSelectGroup>
        </ShadcnSelectContent>
      </ShadcnUISelect>
      {fieldState?.error && (
        <p className="text-red-600 text-xs font-bold">
          {fieldState.error.message}
        </p>
      )}
    </div>
  );
};

export default Select;
