"use client";

import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";

interface IInput {
    name: string;
    value?: string | string[] | undefined;
    placeholder?: string;
    label?: string;
    rows?: number;
}

const FormTextArea = ({
    name,
    value,
    placeholder,
    label,
    rows
}: IInput) => {
    const { control } = useFormContext();

    return (
        <div className={`flex flex-col w-full`}>
            {label ? label : null}
            <Controller
                control={control}
                name={name}
                render={({ field }) =>

                    <Input.TextArea
                        rows={rows}
                        placeholder={placeholder}
                        {...field}
                        defaultValue={value}
                    />
                }
            />
        </div>
    );
};

export default FormTextArea;