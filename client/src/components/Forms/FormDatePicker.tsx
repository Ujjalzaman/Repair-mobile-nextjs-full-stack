import React from "react";
import { DatePicker } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

type FormDatePickerProps = {
  name: string;
  label?: string;
};

const FormDatePicker: React.FC<FormDatePickerProps> = ({ name, label }) => {
  const { control, setValue } = useFormContext();

  const handleOnChange = (date: Dayjs | null, dateString: string) => {
    const formattedDate = date ? date.format("YYYY-MM-DDTHH:mm:ss.SSS[Z]") : null;
    setValue(name, formattedDate);
  };

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
          />
        )}
      />
    </div>
  );
};

export default FormDatePicker;
