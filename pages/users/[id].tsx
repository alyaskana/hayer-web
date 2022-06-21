import { postsFetcher, usersFetcher } from "api";
import { Layout, PostCard, PostCardList } from "components";
import { ResponseCounter } from "components/Post/ResponseCounter/ResponseCounter";
import { ListWrap } from "components/PostCardList/styles";
import { PostsCounter } from "components/User/PostsCounter/PostsCounter";
import { UserCard } from "components/User/UserCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { User } from "types";

const UserPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (!!id) {
      usersFetcher.getById(id).then((response) => setUser(response.data));
      postsFetcher.getAll;
    }
  }, [id]);

  if (!user) return null;

  return (
    <Layout headerVariant="miniLogoBurger">
      <UserCard user={user} />
      <ResponseCounter count={user.responses.length} />
      <PostsCounter count={user.posts.length} />
      <ListWrap mt="8px">
        {user.posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </ListWrap>
    </Layout>
  );
};

export default UserPage;
