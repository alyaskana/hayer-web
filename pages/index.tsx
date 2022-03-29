import type { NextPage, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { postsFetcher } from "@shared/api";
import { Layout } from "@shared/components";
import { PostCardList } from "@shared/components";

type PageProps = NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
>;

const PostsPage: PageProps = ({ posts }) => {
  return (
    <Layout>
      <Head>
        <title>Лента постов</title>
      </Head>
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
