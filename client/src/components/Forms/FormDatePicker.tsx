'use client';

import React, { useState } from "react";
import { DatePicker } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

type FormDatePickerProps = {
  name: string;
  label?: string;
  isShow?: boolean | undefined;
};

const FormDatePicker: React.FC<FormDatePickerProps> = ({ name, label,isShow }) => {
  const { control, setValue } = useFormContext();
  const [show, setShow] = useState<boolean | undefined>(isShow);

  const handleOnChange = (date: Dayjs | null, dateString: string) => {
    const formattedDate = date ? date.format("YYYY-MM-DDTHH:mm:ss.SSS[Z]") : null;
    setValue(name, formattedDate);
  };
  const onOpenChange = () => {
      setShow(!show)
  }
  const defaultValue = dayjs();

  return (
    <div>
      {label && <label>{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            style={{width: "100%"}}
            showTime
            value={value ? dayjs(value) : defaultValue}
            onChange={(date, dateString) => {
              onChange(date);
              handleOnChange(date, dateString);
            }}
            open={show}
            onOpenChange={() => onOpenChange()}
          />
        )}
      />
    </div>
  );
};

export default FormDatePicker;
