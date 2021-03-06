import { FC } from "react";
import { Image } from "./styles";

type AvatarProps = {
  src: string | null | undefined;
  size?: number | string;
  className?: string;
};

export const Avatar: FC<AvatarProps> = ({ src, size = 32, className }) => {
  const imageSrc = src
    ? process.env.NEXT_PUBLIC_API_HOST + src
    : "/assets/images/default_avatar.png";

  return (
    <Image
      src={imageSrc}
      alt="avatar"
      width={size}
      height={size}
      className={className}
    />
  );
};
