import { FC, ReactElement } from "react";

import { Headline, InnerLink } from "@shared/components";
import {
  BigPrimaryButton,
  PrimaryButton,
  SecondaryButton,
  NavButton,
} from "./styles";
import { Caption_1 } from "../Typography/Typography";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  text?: string;
  icon?: ReactElement;
  type?: "button" | "submit" | "reset";
  variant: "bigPrimary" | "primary" | "secondary" | "navButton";
  danger?: boolean;
  className?: string;
  margin?: string;
};

type BaseButtonProps = Pick<
  ButtonProps,
  | "icon"
  | "text"
  | "type"
  | "danger"
  | "variant"
  | "onClick"
  | "className"
  | "margin"
>;

// выбирает вариант кнопки для отрисовки
const BaseButton: FC<BaseButtonProps> = ({
  text,
  icon,
  type,
  variant,
  danger = false,
  onClick,
  margin,
}) => {
  return (
    <>
      {variant == "bigPrimary" && (
        <BigPrimaryButton onClick={onClick} type={type} margin={margin}>
          <Headline color="inherit">{text}</Headline>
        </BigPrimaryButton>
      )}
      {variant == "primary" && (
        <PrimaryButton onClick={onClick} type={type} margin={margin}>
          <Headline color="inherit">{text}</Headline>
        </PrimaryButton>
      )}
      {variant == "secondary" && (
        <SecondaryButton
          onClick={onClick}
          type={type}
          danger={danger}
          margin={margin}
        >
          {icon}
          {text && <Caption_1 color="inherit">{text}</Caption_1>}
        </SecondaryButton>
      )}
      {variant == "navButton" && (
        <NavButton onClick={onClick} type={type} margin={margin}>
          {icon}
        </NavButton>
      )}
    </>
  );
};

// выбирает только между кнопкой и обернутой в ссылку кнопкой
export const Button: FC<ButtonProps> = ({
  href,
  text,
  onClick,
  icon,
  type = "button",
  variant,
  className,
  margin,
}) => {
  if (href) {
    return (
      <InnerLink prefetch href={href} passHref>
        <BaseButton
          text={text}
          icon={icon}
          variant={variant}
          className={className}
          margin={margin}
        />
      </InnerLink>
    );
  } else {
    return (
      <BaseButton
        text={text}
        icon={icon}
        type={type}
        variant={variant}
        margin={margin}
        onClick={onClick}
        className={className}
      />
    );
  }
};
