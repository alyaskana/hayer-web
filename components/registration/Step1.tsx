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
  const { handleSubmit, control } = useForm<FormInputs>({ mode: "onChange" });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    authFetcher.signup(data.email).then((res) => {
      setUserId(res.data.id);
      setUserEmail(data.email);
      setFormStep(2);
    });
  };

  return (
    <>
      <FormTitle>Регистрация</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FieldSet>
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
              <Input placeholder="example@edu.hse.ru" {...field} />
            )}
          />
        </FieldSet>
        <Button variant="bigPrimary" type="submit" text="Получить код" />
      </Form>
    </>
  );
};

export default Step1;
