"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format, getMonth, getYear } from "date-fns";
import { vi } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { convertToTitleCase } from "@/helper/helper";

import DatePickerProps from "./DatePicker.d";
import { useController } from "react-hook-form";
import { Label } from "@/components/ui/label";

const DatePicker = ({
  name,
  label,
  control,
  rules,
  onChange,
  onYearChange,
  onMonthChange,
  className,
}: DatePickerProps) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  });

  return (
    <div className="flex flex-col gap-2">
      {label && <Label htmlFor={field.name}>{label}</Label>}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"default"}
            className={cn(
              "min-w-[240px] w-full h-12 justify-start text-left font-normal",
              !field.value && "text-muted-foreground",
              className
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {field.value ? (
              convertToTitleCase(
                format(field.value, "PPP", {
                  locale: vi,
                })
              )
            ) : (
              <span className="text-gray-900">Chọn ngày tháng năm sinh</span>
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent
          align="start"
          className="flex w-auto flex-col space-y-2 p-2"
          side="bottom"
        >
          {onMonthChange && (
            <Select
              value={
                field.value ? (getMonth(field.value) + 1).toString() : undefined
              }
              onValueChange={onMonthChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Chọn Tháng Sinh" />
              </SelectTrigger>
              <SelectContent position="popper" side="bottom" avoidCollisions>
                {[...new Array(12)].map((_, index) => (
                  <SelectItem
                    value={(index + 1).toString()}
                    key={index}
                    className="cursor-poniter"
                  >
                    Tháng {index + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          {onYearChange && (
            <Select
              value={field.value ? getYear(field.value).toString() : undefined}
              onValueChange={onYearChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Chọn Năm Sinh" />
              </SelectTrigger>
              <SelectContent position="popper">
                {[...new Array(60)].map((_, index) => (
                  <SelectItem
                    value={(getYear(Date.now()) - index).toString()}
                    key={index}
                  >
                    Năm {getYear(Date.now()) - index}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          <div className="rounded-md border">
            <Calendar
              mode="single"
              selected={field.value}
              defaultMonth={field.value}
              onSelect={onChange}
              month={field.value}
              locale={vi}
            />
          </div>
        </PopoverContent>
      </Popover>
      {fieldState?.error && (
        <p className="text-red-600 text-xs font-bold">
          {fieldState.error.message}
        </p>
      )}
    </div>
  );
};

export default DatePicker;
