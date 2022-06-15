import { postsFetcher } from "@shared/api";
import { Button, Layout } from "@shared/components";
import { Post } from "@shared/types";
import { Deadline } from "@shared/components/Post/Deadline/Deadline";
import { PostCardReplyClient } from "@shared/components/Post/PostCardReplyClient";
import { ResponseCounter } from "@shared/components/Post/ResponseCounter/ResponseCounter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post>();
  console.log(post);

  useEffect(() => {
    if (!!id) {
      postsFetcher.getById(id).then((response) => setPost(response.data));
    }
  }, [id]);

  if (!post) return null;
  return (
    <Layout>
      <PostCardReplyClient post={post} />
      <Deadline date={post.deadline} />
      <ResponseCounter count={post.responses.length} />
      <Button
        margin="32px 0 0"
        variant="bigPrimary"
        text="Откликнуться"
        href="/responses/new"
      />
    </Layout>
  );
};

export default PostPage;
