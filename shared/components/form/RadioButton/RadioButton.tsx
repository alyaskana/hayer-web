import { FC, HTMLProps } from "react";
import { Controller, Control } from "react-hook-form";

import { Caption_1, Caption_2 } from "@shared/components";

import { StyledInput, RadioButtonWrap } from "./styles";

type TypeCheckBoxProps = HTMLProps<HTMLInputElement> & {
  control: Control<any, any>;
  label: string;
  value: string;
};

export const RadioButton: FC<TypeCheckBoxProps> = ({
  control,
  label,
  value,
}) => {
  return (
    <Controller
      name="format"
      control={control}
      render={({ field }) => (
        <RadioButtonWrap>
          <StyledInput {...field} id={value} value={value} type="radio" />
          <label htmlFor={value}>
            <Caption_1>{label}</Caption_1>
          </label>
        </RadioButtonWrap>
      )}
    />
  );
};
