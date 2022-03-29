import { FC, ReactElement, ChangeEvent } from "react";
import { Controller, Control } from "react-hook-form";

import { CheckBox } from "./CheckBox";

const handleTypeChange = (
  event: ChangeEvent<HTMLInputElement>,
  onChange: (value: string[]) => void,
  value: string[]
) => {
  const valueCopy = event.target.checked
    ? [...(value || []), event.target.value]
    : value.filter((val) => val !== event.target.value);
  onChange(valueCopy);
};

type TypeCheckBoxProps = {
  control: Control<any, any>;
  title: string;
  description: string;
  icon: ReactElement;
  backgroundColor: string;
  checkMarkColor: string;
  name: string;
  type: string;
};

export const TypeCheckBox: FC<TypeCheckBoxProps> = ({
  control,
  title,
  description,
  icon,
  backgroundColor,
  checkMarkColor,
  name,
  type,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, name, value } }) => (
        <CheckBox
          icon={icon}
          title={title}
          description={description}
          backgroundColor={backgroundColor}
          checkMarkColor={checkMarkColor}
          onChange={(e) => handleTypeChange(e, onChange, value)}
          value={type}
          key={type}
          checked={value?.includes(type)}
          name={name}
        />
      )}
    />
  );
};
