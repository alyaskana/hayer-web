import { FC } from "react";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

type HeaderProps = {
  className?: string;
  title?: string;
  variant?: "miniLogoBurger" | "miniLogoTitle";
};

export const Header: FC<HeaderProps> = ({ className, title, variant }) => {
  return (
    <>
      <DesktopHeader className={className} />
      <MobileHeader title={title} variant={variant} className={className} />
    </>
  );
};
