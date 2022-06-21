import { useEffect, useState, FC } from "react";

import { PostCardReplyClient, Loader } from "components";
import { EmptyTabContent } from "components/Tabs";
import { postsFetcher } from "api";
import { Post } from "types";
import { useNewResponses } from "hooks";

import { CardList } from "./styles";
import Link from "next/link";

export const EmployeeResponsesTab: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { cleanResponses } = useNewResponses();

  useEffect(() => {
    postsFetcher
      .latestResponses()
      .then(({ data }) => {
        setPosts(data);
        cleanResponses();
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
        <Link href={`/post/${post.id}`} passHref key={post.id}>
          <a>
            <PostCardReplyClient post={post} key={post.id} />
          </a>
        </Link>
      ))}
    </CardList>
  );
};
