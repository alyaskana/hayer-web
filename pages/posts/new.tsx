import { useRouter } from "next/router";
import type { NextPage } from "next";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { Colors } from "@shared/constants/Colors";
import { Tag } from "@shared/types";
import {
  FieldSet,
  Form,
  FormTitle,
  Input,
  Label,
  TextArea,
  TitleInput,
  TypeCheckBox,
  RadioButton,
} from "@shared/components/form";
import { Button, Caption_2, Caption_3, Layout } from "@shared/components";
import { postsFetcher } from "@shared/api";

import WorkActiveIcon from "assets/icons/work_active.svg";
import StudyActiveIcon from "assets/icons/study_active.svg";
import EventActiveIcon from "assets/icons/event_active.svg";

type FormInputs = {
  title: string;
  description: string;
  ad_types: string[];
  format: string;
  deadline: string;
  tags: Tag[];
};

const NewPostPage: NextPage = () => {
  const router = useRouter();
  const { handleSubmit, control } = useForm<FormInputs>({ mode: "onChange" });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    postsFetcher.create(data).then(({ data }) => {
      router.push(`/posts/${data.id}`);
    });
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
          <TypeCheckBox
            control={control}
            name="ad_types"
            type="work"
            title="Работа"
            description="С финансовым вознаграждением"
            icon={<WorkActiveIcon />}
            backgroundColor={Colors.Accent.Green_white}
            checkMarkColor={Colors.Accent.Green}
          />
          <TypeCheckBox
            control={control}
            name="ad_types"
            type="study"
            icon={<StudyActiveIcon />}
            title="Учеба"
            description="Все, что внутри Вышки"
            backgroundColor={Colors.Accent.Blue_white}
            checkMarkColor={Colors.Accent.Blue}
          />

          <TypeCheckBox
            control={control}
            name="ad_types"
            type="events"
            icon={<EventActiveIcon />}
            title="Ивенты"
            description="Мероприятия, вечеринки, пиво"
            backgroundColor={Colors.Accent.Yellow_white}
            checkMarkColor={Colors.Accent.Yellow}
          />
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
            <Caption_2>Формат</Caption_2>
          </Label>
          <RadioButton label="Онлайн" value="online" control={control} />
          <RadioButton label="Москва" value="moscow" control={control} />
          <RadioButton
            label="Санкт-Петербург"
            value="st_petersburg"
            control={control}
          />
          <RadioButton
            label="Нижний Новгород"
            value="nizhny_novgorod"
            control={control}
          />
          <RadioButton label="Пермь" value="perm" control={control} />
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
        <Button variant="primary" text="Создать" type="submit" />
      </Form>
    </Layout>
  );
};

export default NewPostPage;
