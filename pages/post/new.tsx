import type { NextPage } from "next";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { AdType } from "@shared/types";
import { Tag } from "@shared/types";
import {
  FieldSet,
  Form,
  FormTitle,
  Input,
  Label,
  TextArea,
  TitleInput,
} from "@shared/components/form";
import { Button, Caption_2, Caption_3, Layout } from "@shared/components";

type FormInputs = {
  title: string;
  description: string;
  ad_types: AdType[];
  format: string;
  deadline: string;
  tags: Tag[];
};

const NewPostPage: NextPage = () => {
  const { handleSubmit, control } = useForm<FormInputs>({ mode: "onChange" });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  return (
    <Layout>
      <FormTitle>Создание объявления</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FieldSet>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TitleInput placeholder="Заголовок объявления" {...field} />
            )}
          />
        </FieldSet>

        <FieldSet>
          <Label>
            <Caption_2>Дополнительное описание</Caption_2>
          </Label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextArea
                placeholder="Какие детали важно знать исполнителям? Расскажите про сроки и формат задачи"
                {...field}
              />
            )}
          />
        </FieldSet>

        <FieldSet>
          <Label>
            <Caption_2>Тип (выберите один или несколько)</Caption_2>
          </Label>
          {/* <Controller
            name="ad_types"
            control={control}
            render={({ field }) => (
              <select value={}  {...field} />
            )}
          /> */}
        </FieldSet>

        <FieldSet>
          <Label>
            <Caption_2>Тэги</Caption_2>
          </Label>
          <Caption_3>
            На основе выбранных вами тегов, пользователи смогут быстрее
            соорентироваться, подходит ли им ваще объявление
          </Caption_3>
        </FieldSet>

        <FieldSet>
          <Label>
            <Caption_2>Дедлайн</Caption_2>
          </Label>
          <Controller
            name="deadline"
            control={control}
            render={({ field }) => <Input type="date" {...field} />}
          />

          <Caption_3>
            После истечения дедлайна объявление автоматически будет закрыто и
            перемещено в архив
          </Caption_3>
        </FieldSet>
        <Button text="Создать" type="submit" />
      </Form>
    </Layout>
  );
};

export default NewPostPage;
