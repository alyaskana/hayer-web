import { postsFetcher } from "api";
import { Button, Layout } from "components";
import { Post } from "types";
import { Deadline } from "components/Post/Deadline/Deadline";
import { PostCardFull } from "components/Post/PostCardFull";
import { ResponseCounter } from "components/Post/ResponseCounter/ResponseCounter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    if (!!id) {
      postsFetcher.getById(id).then((response) => setPost(response.data));
    }
  }, [id]);

  if (!post) return null;
  return (
    <Layout>
      <PostCardFull post={post} />
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
