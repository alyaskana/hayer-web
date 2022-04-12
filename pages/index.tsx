import { useState } from "react";
import type { NextPage, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { postsFetcher } from "@shared/api";
import { Layout } from "@shared/components";
import { PostCardList } from "@shared/components";
import { Filters } from "features/feed/components/Filters/Filters";

type PageProps = NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
>;

const PostsPage: PageProps = ({ posts }) => {
  const [activeFilters, setActiveFilters] = useState([
    "study",
    "work",
    "event",
  ]);

  return (
    <Layout>
      <Head>
        <title>Лента постов</title>
      </Head>
      <Filters
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
      <PostCardList posts={posts} />
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
