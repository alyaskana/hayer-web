import { FC } from "react";
import { Title } from "components";
import { Count, Icon, Wrap } from "./styles";
import ResponseIcon from "@assets/icons/response.svg";
import { pluralize } from "utils";

export const ResponseCounter: FC<{ count: number }> = ({ count }) => {
  return (
    <Wrap>
      <Count>{count}</Count>
      <Title>{pluralize(count, ["отклик", "отклика", "откликов"])}</Title>
      <Icon>
        <ResponseIcon />
      </Icon>
    </Wrap>
  );
};
