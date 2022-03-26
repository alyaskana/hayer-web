import { Post } from "@shared/types";
import { FC } from "react";
import { PostCard } from "@shared/components";
import { StyledPostCard, ListWrap } from "./styles";

export const PostCardList: FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <ListWrap>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </ListWrap>
  );
};
