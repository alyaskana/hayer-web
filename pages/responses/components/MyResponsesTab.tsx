import { useEffect, useState, FC } from "react";

import { PostCardReplyMy, Loader } from "components";
import { EmptyTabContent } from "components/Tabs";
import { postsFetcher } from "api";
import { Post } from "types";

import { CardList } from "./styles";
import Link from "next/link";

export const MyResponsesTab: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    postsFetcher
      .myLatestResponses()
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
      <EmptyTabContent iconPath="/assets/images/wave.png">
        Откликайся на объявления других пользователей
      </EmptyTabContent>
    );
  }

  return (
    <CardList>
      {posts.map((post) => (
        <Link href={`/post/${post.id}`} passHref key={post.id}>
          <a>
            <PostCardReplyMy post={post} key={post.id} />
          </a>
        </Link>
      ))}
    </CardList>
  );
};
