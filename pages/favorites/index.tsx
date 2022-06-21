import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { postsFetcher } from "api";
import { Layout, Loader, PostCardList } from "components";
import { Post } from "types";

const FavoritesPage: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    postsFetcher
      .favoritePosts()
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

  return (
    <Layout headerVariant="miniLogoBurger">
      <Head>
        <title>Избранное</title>
      </Head>
      <PostCardList posts={posts} />
    </Layout>
  );
};

export default FavoritesPage;
