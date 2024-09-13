import React from "react";
import { useForm } from "react-hook-form";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { setMonth, setYear } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import DatePicker from "@/components/custom/DatePicker/DatePicker";
import Input from "@/components/custom/Input/Input";
import Select from "@/components/custom/Select/Select";
import { Button } from "@/components/ui/button";

const genderList = [
  {
    label: "Nam",
    value: "male",
  },
  {
    label: "Nữ",
    value: "female",
  },
  {
    label: "Khác",
    value: "others",
  },
];

const FormSchema = z.object({
  date: z.date({ required_error: "Không được để trống" }),
  fullName: z.string().min(1, "Không được để trống"),
  gender: z.string().min(1, "Không được để trống"),
});

const FormInput = () => {
  const { handleSubmit, control, setValue, getValues, trigger } = useForm<{
    date: Date | undefined;
    fullName: string;
    gender: string;
  }>({
    defaultValues: {
      date: undefined,
      fullName: "",
      gender: "",
    },
    resolver: zodResolver(FormSchema),
  });

  const onDateChange = (date: Date | undefined) => {
    if (!date) return;
    setValue("date", date);
    trigger("date");
  };

  const onMonthChange = (month: string) => {
    if (!month) return;
    const { date } = getValues();
    setValue("date", setMonth(date || Date.now(), parseInt(month) - 1));
    trigger("date");
  };

  const onYearChange = (year: string) => {
    if (!year) return;
    const { date } = getValues();
    setValue("date", setYear(date || Date.now(), parseInt(year)));
    trigger("date");
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      className="w-full flex flex-col gap-4 items-center my-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full flex flex-col gap-6">
        <Input
          label="Họ và tên"
          name="fullName"
          control={control}
          placeholder="Nhập họ và tên"
          className="w-full h-12 border border-gray-400 bg-slate-50 placeholder:text-gray-800 text-gray-800"
        />

        <div className="w-full grid grid-cols-2 gap-2 md:grid-rows-2 md:grid-cols-none">
          <DatePicker
            className="h-12"
            label="Ngày sinh"
            name="date"
            control={control}
            onChange={onDateChange}
            onMonthChange={onMonthChange}
            onYearChange={onYearChange}
          />
          <Select
            label="Giới tính"
            control={control}
            dataSource={genderList}
            name="gender"
            placeholder="Chọn Giới Tính"
            className="bg-gray-200 text-gray-900 h-12"
          />
        </div>
      </div>

      <Button size={"lg"}>
        Tra Cứu Ngay <MagnifyingGlassIcon className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
};

export default FormInput;
