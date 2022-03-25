import { FC } from "react";
import Link, { LinkProps } from "next/link";

export const InnerLink: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link passHref {...props}>
      <a>{children}</a>
    </Link>
  );
};
