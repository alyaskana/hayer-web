import { useEffect, useState, FC } from "react";

import { PostCardReplyClient, Loader } from "components";
import { EmptyTabContent } from "components/Tabs";
import { postsFetcher } from "api";
import { Post } from "types";

import { CardList } from "./styles";

export const EmployeeResponsesTab: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    postsFetcher
      .latestResponses()
      .then(({ data }) => {
        setPosts(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (posts.length === 0) {
    return (
      <EmptyTabContent iconPath="/assets/images/chick.png">
        Пока что тут пусто
      </EmptyTabContent>
    );
  }

  return (
    <CardList>
      {posts.map((post) => (
        <PostCardReplyClient post={post} key={post.id} />
      ))}
    </CardList>
  );
};
