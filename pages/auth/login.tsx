import type { NextPage } from "next";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useAuth } from "@shared/hooks";
import {
  FieldSet,
  Form,
  FormTitle,
  Input,
  Label,
} from "@shared/components/form";
import { Button, Caption_2, Layout } from "@shared/components";

type FormInputs = {
  email: string;
  password: string;
};

const LoginPage: NextPage = () => {
  const { login } = useAuth();

  const { handleSubmit, control } = useForm<FormInputs>({ mode: "onChange" });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    login(data.email, data.password);
  };

  return (
    <Layout>
      <FormTitle>Вход</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FieldSet>
          <Label>
            <Caption_2>Email</Caption_2>
          </Label>
          <Controller
            name="email"
            control={control}
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
            render={({ field }) => (
              <Input placeholder="******" type="password" {...field} />
            )}
          />
        </FieldSet>
        <Button variant="bigPrimary" type="submit" text="Войти" />
      </Form>
    </Layout>
  );
};

export default LoginPage;
