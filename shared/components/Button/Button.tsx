import { FC, ReactElement } from "react";

import { InnerLink } from "@shared/components";
import { StyledButton, StyledHeadline } from "./styles";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  text?: string;
  icon?: ReactElement;
  type?: "button" | "submit" | "reset";
};

type BaseButtonProps = Pick<ButtonProps, "icon" | "text" | "type" | "onClick">;

const BaseButton: FC<BaseButtonProps> = ({ text, icon, type }) => {
  return (
    <StyledButton type={type}>
      {icon}
      {text && <StyledHeadline>{text}</StyledHeadline>}
    </StyledButton>
  );
};

export const Button: FC<ButtonProps> = ({
  href,
  text,
  onClick,
  icon,
  type = "button",
}) => {
  if (href) {
    return (
      <InnerLink prefetch href={href} passHref>
        <BaseButton text={text} icon={icon} />
      </InnerLink>
    );
  } else {
    return <BaseButton text={text} icon={icon} type={type} onClick={onClick} />;
  }
};
