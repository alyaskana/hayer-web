import { FC } from "react";
import Link, { LinkProps } from "next/link";

export const ExternalLink: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link passHref {...props}>
      <a target="_blank" rel="noopener noreferrer nofollow">
        {children}
      </a>
    </Link>
  );
};
