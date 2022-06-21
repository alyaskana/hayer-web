import { Post } from "types";
import { FC } from "react";
import { PostCard } from "components";
import { ListWrap } from "./styles";

export const PostCardList: FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <ListWrap>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </ListWrap>
  );
};
