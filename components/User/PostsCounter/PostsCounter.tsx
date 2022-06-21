import { FC } from "react";
import { Title } from "components";
import { Count, Icon, Wrap } from "components/Post/ResponseCounter/styles";
import PostIcon from "@assets/icons/post.svg";
import { pluralize } from "utils";

export const PostsCounter: FC<{ count: number }> = ({ count }) => {
  return (
    <Wrap>
      <Count>{count}</Count>
      <Title>
        {pluralize(count, ["объявление", "объявления", "объявлений"])}
      </Title>
      <Icon>
        <PostIcon />
      </Icon>
    </Wrap>
  );
};
