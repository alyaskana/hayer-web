import { useEffect, useState } from "react";
import intersection from "lodash/intersection";
import type { NextPage, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { postsFetcher } from "@shared/api";
import { Layout } from "@shared/components";
import { PostCardList } from "@shared/components";
import { Filters } from "features/feed/components/Filters/Filters";
import { Post } from "@shared/types";

type PageProps = NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
>;

const PostsPage: PageProps = ({ posts }) => {
  const [activeFilters, setActiveFilters] = useState([
    "study",
    "work",
    "events",
  ]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  useEffect(() => {
    const newPosts = posts.filter((post) => {
      const postAdTypes = post.ad_types.map((type) => type.key);
      return intersection(postAdTypes, activeFilters).length > 0;
    });

    setFilteredPosts(newPosts);
  }, [activeFilters, posts]);

  return (
    <Layout>
      <Head>
        <title>Лента постов</title>
      </Head>
      <Filters
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
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
