import { useEffect, useState } from "react";
import intersection from "lodash/intersection";
import type { NextPage, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import actionCable from "actioncable";

import { postsFetcher } from "@shared/api";
import { Layout } from "@shared/components";
import { PostCardList } from "@shared/components";
import { Filters } from "features/feed/components/Filters/Filters";
import { Post } from "@shared/types";
import { useActionCable } from "@shared/hooks";

type PageProps = NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
>;

const PostsPage: PageProps = ({ posts: initialPosts }) => {
  const { cable } = useActionCable();
  const [posts, setPosts] = useState(initialPosts);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  const [activeFilters, setActiveFilters] = useState([
    "study",
    "work",
    "events",
  ]);

  const [hasNewPosts, setHasNewPosts] = useState(false);
  const [subscription, setSubscription] = useState<actionCable.Channel>();

  useEffect(() => {
    const newPosts = posts.filter((post) => {
      const postAdTypes = post.ad_types.map((type) => type.key);
      return intersection(postAdTypes, activeFilters).length > 0;
    });

    setFilteredPosts(newPosts);
  }, [activeFilters, posts]);

  useEffect(() => {
    const handleReceivedMessage = () => {
      setHasNewPosts(!hasNewPosts);
    };

    if (cable) {
      const newSubscription = cable.subscriptions.create("FeedChannel", {
        received: () => {
          handleReceivedMessage();
        },
      });
      setSubscription(newSubscription);
    }

    return () => {
      subscription?.unsubscribe();
    };
  }, [cable]);

  const handleUpdateFeed = () => {
    postsFetcher.getAll().then(({ data }) => {
      setHasNewPosts(false);
      setPosts(data);
    });
  };

  return (
    <Layout>
      <Head>
        <title>Лента постов</title>
      </Head>
      <Filters
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
      {hasNewPosts && (
        <div onClick={handleUpdateFeed}>У вас есть новые посты</div>
      )}
      <PostCardList posts={filteredPosts} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const { data } = await postsFetcher.getAll();
  return {
    props: { posts: data },
  };
}

export default PostsPage;
