import type { NextPage } from "next";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useAuth } from "hooks";
import { FieldSet, Form, FormTitle, Input, Label } from "components/form";
import { Button, Caption_2, Layout } from "components";

type FormInputs = {
  email: string;
  password: string;
  link: string;
};

const SignupPage: NextPage = () => {
  const { signup } = useAuth();

  const { handleSubmit, control } = useForm<FormInputs>({ mode: "onChange" });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    signup(data.email, data.password, data.link);
  };

  return (
    <Layout>
      <FormTitle>Регистрация</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FieldSet>
          <Label>
            <Caption_2>Email</Caption_2>
          </Label>
          <Controller
            name="email"
            control={control}
            // defaultValue="aabychkova_4@edu.hse.ru"
            render={({ field }) => (
              <Input placeholder="example@edu.hse.ru" {...field} />
            )}
          />
        </FieldSet>
        <FieldSet>
          <Label>
            <Caption_2>Пароль</Caption_2>
          </Label>
          <Controller
            name="password"
            control={control}
            // defaultValue="123456"
            render={({ field }) => (
              <Input placeholder="******" type="password" {...field} />
            )}
          />
        </FieldSet>
        <FieldSet>
          <Label>
            <Caption_2>Телеграм</Caption_2>
          </Label>
          <Controller
            name="link"
            control={control}
            render={({ field }) => (
              <Input placeholder="@username" type="text" {...field} />
            )}
          />
        </FieldSet>
        <Button variant="bigPrimary" type="submit" text="Зарегистрироваться" />
      </Form>
    </Layout>
  );
};

export default SignupPage;
