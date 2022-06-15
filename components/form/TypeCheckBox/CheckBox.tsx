import { FC, ReactElement } from "react";
import { ControllerRenderProps } from "react-hook-form";

import { Caption_1, Caption_2 } from "components";

import {
  CheckBoxItem,
  IconWrap,
  StyledCheckMark,
  HiddenCheckBox,
} from "./styles";

type CheckBoxProps = {
  title: string;
  description: string;
  icon: ReactElement;
  backgroundColor: string;
  checkMarkColor: string;
  name: string;
  checked: boolean;
} & Pick<ControllerRenderProps, "onChange" | "value">;

export const CheckBox: FC<CheckBoxProps> = ({
  title,
  description,
  icon,
  backgroundColor,
  checkMarkColor,
  name,
  onChange,
  value,
  checked,
}) => {
  return (
    <label htmlFor={value}>
      <CheckBoxItem backgroundColor={backgroundColor} active={checked}>
        <IconWrap active={checked}>{icon}</IconWrap>
        <div>
          <Caption_1>{title}</Caption_1>
          <Caption_2>{description}</Caption_2>
        </div>
        <StyledCheckMark active={checked} fillColor={checkMarkColor} />
      </CheckBoxItem>
      <HiddenCheckBox
        type="checkbox"
        name={name}
        id={value}
        onChange={onChange}
        value={value}
        checked={checked}
      />
    </label>
  );
};
