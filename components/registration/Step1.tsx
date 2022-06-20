import { Dispatch, SetStateAction } from "react";
import type { NextPage } from "next";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { FieldSet, Form, FormTitle, Input, Label } from "components/form";
import { Button, Caption_2 } from "components";
import { authFetcher } from "api";

type StepProps = {
  setFormStep: Dispatch<SetStateAction<number>>;
  setUserId: Dispatch<SetStateAction<string | number | undefined>>;
  setUserEmail: Dispatch<SetStateAction<string | undefined>>;
};

type FormInputs = {
  email: string;
};

const Step1: NextPage<StepProps> = ({
  setFormStep,
  setUserEmail,
  setUserId,
}) => {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<FormInputs>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    authFetcher
      .signup(data.email)
      .then((res) => {
        setUserId(res.data.id);
        setUserEmail(data.email);
        setFormStep(2);
      })
      .catch((err) => {
        setError("email", {
          type: "value",
          message: err.response.data.error, // это текст ошибки с бэка
          // message: "Не тот :( Проверь все символы",
        });
      });
  };

  return (
    <>
      <FormTitle>Регистрация</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <Caption_2>Email</Caption_2>
        </Label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Это обязательное поле",
            pattern: {
              value: /^[\w-\.]+@edu.hse.ru$/,
              message: "Кажется, это не вышкинская почта",
            },
          }}
          // defaultValue="aabychkova_4@edu.hse.ru"
          render={({ field }) => (
            <Input
              placeholder="example@edu.hse.ru"
              hint="Отправим код для подтверждения почты. Присылать рекламу не будем"
              error={errors?.email?.message}
              {...field}
            />
          )}
        />
      </Form>
      <Button
        variant="bigPrimary"
        type="submit"
        text="Получить код"
        margin="32px 0 0"
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default Step1;
