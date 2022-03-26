import { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import ImageSvg from "assets/icons/image.svg";

type AvatarProps = {
  src: string | null | undefined;
  size?: number;
  className?: string;
};

export const Avatar: FC<AvatarProps> = ({ src, size = 32, className }) => {
  if (!!src) {
    const imageSrc = process.env.NEXT_PUBLIC_API_HOST + src;

    return (
      <img
        src={imageSrc}
        alt="avatar"
        width={size}
        height={size}
        className={className}
      />
    );
  }
  return <ImageSvg width={size} height={size} className={className} />;
};

// export const StyledImage = styled(Avatar)`
//   border-radius: 100%;
//   width: ${(props) => props.size || "20px"};
//   height: ${(props) => props.size || "20px"};
// `;
