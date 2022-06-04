import { FC } from "react";
import { Wrap } from "./styles";
import { Text } from "@shared/components/Typography/Typography";

type TagProps = {
  text: string;
};

export const Tag: FC<TagProps> = ({ text }) => {
  return (
    <Wrap>
      <Text>{text}</Text>
    </Wrap>
  );
};
