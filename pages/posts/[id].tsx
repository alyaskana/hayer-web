import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { responsesFetcher } from "api/responses";
import { useAuth } from "hooks";
import { postsFetcher } from "api";

import { Button, Caption_2, Layout, Text, Title } from "components";
import { Post, Response } from "types";
import { Deadline } from "components/Post/Deadline/Deadline";
import { PostCardFull } from "components/Post/PostCardFull";
import { ResponseCounter } from "components/Post/ResponseCounter/ResponseCounter";
import { FieldSet, Form, Input, Label, TextArea } from "components/form";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ResponseCard } from "components/Response/ResponseCard";
import { SimpleResponseCard } from "components/Response/SimpleResponseCard";

type FormInputs = {
  post_id: number;
  description: string;
  link: string;
};

const PostPage = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { id } = router.query;
  const [post, setPost] = useState<Post>();
  const [myResponse, setMyResponse] = useState<Response>();
  const [isEdit, setIsEdit] = useState(false);
  const { handleSubmit, control, setValue, reset } = useForm<FormInputs>({
    mode: "onBlur",
  });

  const onCreateResponse: SubmitHandler<FormInputs> = (data) => {
    responsesFetcher
      .create(data)
      .then(() => {
        fetchPosts();
      })
      .catch((res) => console.log(res));
  };

  const onEditResponse: SubmitHandler<FormInputs> = (data) => {
    responsesFetcher
      .update(myResponse?.id, data)
      .then(() => {
        fetchPosts();
        setIsEdit(false);
      })
      .catch((res) => console.log(res));
  };

  const fetchPosts = () => {
    postsFetcher.getById(id).then(({ data }) => {
      setPost(data);
      setValue("post_id", data.id);
      setMyResponse(data.responses.find((r) => r.user.id == user?.id));
    });
  };

  useEffect(() => {
    if (id) {
      fetchPosts();
    }
  }, [id, user]);

  if (!post) return null;

  const MyResponse = () => {
    if (isEdit) {
      return (
        <>
          <Form mt="8px">
            <FieldSet mb="24px">
              <Title>????????????????????????????</Title>
            </FieldSet>
            <FieldSet mb="24px">
              <Label>
                <Caption_2>??????????????????????</Caption_2>
              </Label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TextArea
                    {...field}
                    placeholder="???????????????? ?????? ?? ?????????? ?????????????? ?????????????????? ??????????"
                    defaultValue={myResponse.description}
                  />
                )}
              />
            </FieldSet>
            <Label>
              <Caption_2>
                ???????????? ???? ???????????? ????????????, ???????????????? ?????? ??????-???? ??????
              </Caption_2>
            </Label>
            <Controller
              name="link"
              control={control}
              render={({ field }) => (
                <Input {...field} defaultValue={myResponse.link} />
              )}
            />
          </Form>
          <Button
            margin="8px 0 0"
            variant="bigPrimary"
            text="??????????????????"
            onClick={handleSubmit(onEditResponse)}
          />
        </>
      );
    }
    return (
      <ResponseCard
        response={myResponse}
        setIsEdit={setIsEdit}
        setMyResponse={setMyResponse}
        resetForm={reset}
        fetchPosts={fetchPosts}
      />
    );
  };

  const CreateResponse = () => {
    if (post.user.id == user?.id) return <></>;

    return (
      <>
        <Form mt="8px">
          <FieldSet mb="24px">
            <Title>???????????????? ????????????</Title>
          </FieldSet>
          <FieldSet mb="24px">
            <Label>
              <Caption_2>??????????????????????</Caption_2>
            </Label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextArea
                  placeholder="???????????????? ?????? ?? ?????????? ?????????????? ?????????????????? ??????????"
                  {...field}
                />
              )}
            />
          </FieldSet>
          <Label>
            <Caption_2>
              ???????????? ???? ???????????? ????????????, ???????????????? ?????? ??????-???? ??????
            </Caption_2>
          </Label>
          <Controller
            name="link"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form>
        <Button
          margin="8px 0 0"
          variant="bigPrimary"
          text="????????????????????????"
          onClick={handleSubmit(onCreateResponse)}
        />
      </>
    );
  };

  const ResponseList = () => {
    return (
      <div>
        {post.responses.map((response) => {
          return <SimpleResponseCard key={response.id} response={response} />;
        })}
      </div>
    );
  };

  return (
    <Layout>
      <PostCardFull post={post} />
      <Deadline date={post.deadline} />
      <ResponseCounter count={post.responses.length} />
      {post.user.id == user?.id && <ResponseList />}
      {myResponse ? <MyResponse /> : <CreateResponse />}
    </Layout>
  );
};

export default PostPage;
