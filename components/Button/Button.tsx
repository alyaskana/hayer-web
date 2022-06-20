import { FC, HTMLProps, ReactElement } from "react";

import { Headline, InnerLink } from "components";
import {
  BigPrimaryButton,
  PrimaryButton,
  SecondaryButton,
  NavButton,
  PrimaryBurgerButton,
} from "./styles";
import { Caption_1 } from "../Typography/Typography";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  text?: string;
  icon?: ReactElement;
  type?: "button" | "submit" | "reset";
  variant:
    | "bigPrimary"
    | "primary"
    | "secondary"
    | "navButton"
    | "primaryBurger";
  danger?: boolean;
  className?: string;
  margin?: string;
} & HTMLProps<HTMLButtonElement>;

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
  ...buttonProps
}) => {
  return (
    <>
      {variant == "bigPrimary" && (
        <BigPrimaryButton
          {...buttonProps}
          onClick={onClick}
          type={type}
          margin={margin}
        >
          <Headline color="inherit">{text}</Headline>
        </BigPrimaryButton>
      )}
      {variant == "primary" && (
        <PrimaryButton
          {...buttonProps}
          onClick={onClick}
          type={type}
          margin={margin}
        >
          <Headline color="inherit">{text}</Headline>
        </PrimaryButton>
      )}
      {variant == "primaryBurger" && (
        <PrimaryBurgerButton
          onClick={onClick}
          type={type}
          margin={margin}
          {...buttonProps}
        >
          <Headline color="inherit">{text}</Headline>
        </PrimaryBurgerButton>
      )}
      {variant == "secondary" && (
        <SecondaryButton
          onClick={onClick}
          type={type}
          danger={danger}
          margin={margin}
          {...buttonProps}
        >
          {icon}
          {text && <Caption_1 color="inherit">{text}</Caption_1>}
        </SecondaryButton>
      )}
      {variant == "navButton" && (
        <NavButton
          onClick={onClick}
          type={type}
          margin={margin}
          {...buttonProps}
        >
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
  ...buttonProps
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
          {...buttonProps}
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
        {...buttonProps}
      />
    );
  }
};
