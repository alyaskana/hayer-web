import { FC, ReactElement } from "react";

import { InnerLink } from "@shared/components";
import { StyledLink, StyledHeadline } from "./styles";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  text?: string;
  icon?: ReactElement;
};

type BaseButtonProps = Pick<ButtonProps, "icon" | "text">;

const BaseButton: FC<BaseButtonProps> = ({ text, icon }) => {
  return (
    <StyledLink>
      {icon}
      {text && <StyledHeadline>{text}</StyledHeadline>}
    </StyledLink>
  );
};

export const Button: FC<ButtonProps> = ({ href, text, onClick, icon }) => {
  if (href) {
    return (
      <InnerLink prefetch href={href} passHref>
        <BaseButton text={text} icon={icon} />
      </InnerLink>
    );
  } else {
    return (
      <button type="button" onClick={onClick}>
        <BaseButton text={text} icon={icon} />
      </button>
    );
  }
};
