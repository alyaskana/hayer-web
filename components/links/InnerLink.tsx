import { FC } from "react";
import Link, { LinkProps } from "next/link";

export const InnerLink: FC<LinkProps & { className?: string }> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Link passHref {...props}>
      <a className={className}>{children}</a>
    </Link>
  );
};
