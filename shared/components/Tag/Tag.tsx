import { FC } from "react";
import { Wrap, StyledText } from "./styles";

type TagProps = {
  text: string;
};

export const Tag: FC<TagProps> = ({ text }) => {
  return (
    <Wrap>
      <StyledText>{text}</StyledText>
    </Wrap>
  );
};
