import { Dispatch, SetStateAction } from "react";
import type { NextPage } from "next";
import { Button, Caption_2, Text } from "components";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  FieldSet,
  Form,
  FormTitle,
  Input,
  Label,
  TextArea,
} from "components/form";
import { authFetcher } from "api";
import { Colors } from "constants/Colors";

type StepProps = {
  id: string | number;
  setFormStep: Dispatch<SetStateAction<number>>;
};

type FormInputs = {
  avatar: string;
  edu_program: string;
  course: string;
  instagram: string;
  link: string;
  about: string;
};

const Step5: NextPage<StepProps> = ({ id, setFormStep }) => {
  const { handleSubmit, control } = useForm<FormInputs>({ mode: "onChange" });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    authFetcher
      .update(id, data)
      .then((res) => {
        console.log("update success!");
        console.log(res.data);
        setFormStep(6);
      })
      .catch((res) => console.log(res));
  };

  return (
    <>
      <FormTitle>Регистрация</FormTitle>
      <Form>
        <FieldSet>
          <Text color={Colors.Main.Gray_2}>
            Заполнение этих данных необязательно. Если их добавишь — заказчик с
            большей вероятностью выберет именно тебя
          </Text>
        </FieldSet>
        <FieldSet>
          <Label>
            <Caption_2>Аватарка</Caption_2>
          </Label>
          <Controller
            name="avatar"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </FieldSet>
        <FieldSet>
          <Label>
            <Caption_2>Образовательная программа</Caption_2>
          </Label>
          <Controller
            name="edu_program"
            control={control}
            render={({ field }) => <Input placeholder="Выбери ОП" {...field} />}
          />
        </FieldSet>
        <FieldSet>
          <Label>
            <Caption_2>Курс</Caption_2>
          </Label>
          <Controller
            name="course"
            control={control}
            render={({ field }) => (
              <Input placeholder="Выбери курс" {...field} />
            )}
          />
        </FieldSet>
        <FieldSet>
          <Label>
            <Caption_2>Instagram</Caption_2>
          </Label>
          <Controller
            name="instagram"
            control={control}
            render={({ field }) => <Input placeholder="@username" {...field} />}
          />
        </FieldSet>
        <FieldSet>
          <Label>
            <Caption_2>
              Ссылка на твое портфолио, тг-канал или что-то еще
            </Caption_2>
          </Label>
          <Controller
            name="link"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </FieldSet>
        <Label>
          <Caption_2>Личное описание</Caption_2>
        </Label>
        <Controller
          name="about"
          control={control}
          render={({ field }) => (
            <TextArea
              {...field}
              placeholder="Расскажи пару слов о себе. Что умеешь, чем увлекаешься, что любишь?"
            />
          )}
        />
      </Form>
      <Button
        variant="bigPrimary"
        type="submit"
        text="Зарегистрироваться"
        onClick={handleSubmit(onSubmit)}
        margin="20px 0 0"
      />
    </>
  );
};

export default Step5;
