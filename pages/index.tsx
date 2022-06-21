import { useEffect, useState } from "react";
import intersection from "lodash/intersection";
import type { NextPage, InferGetServerSidePropsType } from "next";
import Head from "next/head";

import { postsFetcher } from "api";
import { Layout } from "components";
import { PostCardList } from "components";
import { Filters } from "components/Filters/Filters";
import { Post } from "types";

type PageProps = NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
>;

const PostsPage: PageProps = ({ posts: initialPosts }) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  const [hasNewPosts, setHasNewPosts] = useState(false);

  const [activeFilters, setActiveFilters] = useState([
    "study",
    "work",
    "events",
  ]);

  useEffect(() => {
    const newPosts = posts.filter((post) => {
      const postAdTypes = post.ad_types.map((type) => type.key);
      return intersection(postAdTypes, activeFilters).length > 0;
    });

    setFilteredPosts(newPosts);
  }, [activeFilters, posts]);

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
