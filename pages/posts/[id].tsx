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

  return (
    <Layout>
      <PostCardFull post={post} />
      <Deadline date={post.deadline} />
      <ResponseCounter count={post.responses.length} />
      {myResponse ? (
        isEdit ? (
          <>
            <Form mt="8px">
              <FieldSet mb="24px">
                <Title>Редактирование</Title>
              </FieldSet>
              <FieldSet mb="24px">
                <Label>
                  <Caption_2>Комментарий</Caption_2>
                </Label>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      {...field}
                      placeholder="Расскажи как и когда сможешь выполнить заказ"
                      defaultValue={myResponse.description}
                    />
                  )}
                />
              </FieldSet>
              <Label>
                <Caption_2>
                  Ссылка на схожую работу, картинку или что-то еще
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
              text="Сохранить"
              onClick={handleSubmit(onEditResponse)}
            />
          </>
        ) : (
          <ResponseCard
            response={myResponse}
            setIsEdit={setIsEdit}
            setMyResponse={setMyResponse}
            resetForm={reset}
            fetchPosts={fetchPosts}
          />
        )
      ) : (
        <>
          <Form mt="8px">
            <FieldSet mb="24px">
              <Title>Оставить отклик</Title>
            </FieldSet>
            <FieldSet mb="24px">
              <Label>
                <Caption_2>Комментарий</Caption_2>
              </Label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TextArea
                    placeholder="Расскажи как и когда сможешь выполнить заказ"
                    {...field}
                  />
                )}
              />
            </FieldSet>
            <Label>
              <Caption_2>
                Ссылка на схожую работу, картинку или что-то еще
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
            text="Откликнуться"
            onClick={handleSubmit(onCreateResponse)}
          />
        </>
      )}
    </Layout>
  );
};

export default PostPage;
