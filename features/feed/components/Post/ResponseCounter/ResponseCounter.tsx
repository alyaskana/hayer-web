import { FC } from "react";
import { Title } from "@shared/components";
import { Count, Icon, Wrap } from "./styles";
import ResponseIcon from "@assets/icons/response.svg";

export const ResponseCounter: FC<{ count: number }> = ({ count }) => {
  return (
    <Wrap>
      <Count>{count}</Count>
      <Title>откликов</Title>
      <Icon>
        <ResponseIcon />
      </Icon>
    </Wrap>
  );
};
