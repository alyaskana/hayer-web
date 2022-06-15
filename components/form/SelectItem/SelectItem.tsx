import { Caption_1, Caption_2 } from "components/Typography/Typography";
import { FC, ReactNode } from "react";
import { Wrap, IconWrap, TextBlock } from "./styles";

type SelectIteProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
};

export const SelectItem: FC<SelectIteProps> = ({ icon, title, subtitle }) => {
  return (
    <Wrap>
      <IconWrap>{icon}</IconWrap>
      <TextBlock>
        <Caption_1>{title}</Caption_1>
        <Caption_2>{subtitle}</Caption_2>
      </TextBlock>
    </Wrap>
  );
};
