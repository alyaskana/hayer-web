import type { NextPage, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { postsFetcher } from "@shared/api";
import { Layout } from "@shared/components";

type PageProps = NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
>;

const PostsPage: PageProps = ({ posts }) => {
  console.log(posts);

  return (
    <Layout>
      <Head>
        <title>Лента постов</title>
      </Head>
      <div>
        {posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
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
