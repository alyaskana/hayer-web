import { Dispatch, SetStateAction } from "react";
import type { NextPage } from "next";
import { Button, Caption_2 } from "components";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { FieldSet, Form, FormTitle, Input, Label } from "components/form";
import { authFetcher } from "api";
import { useAuth } from "hooks";

type StepProps = {
  id: string | number;
  setFormStep: Dispatch<SetStateAction<number>>;
};

type FormInputs = {
  first_name: string;
  last_name: string;
  password: string;
  telegram: string;
};

const Step4: NextPage<StepProps> = ({ id, setFormStep }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormInputs>({
    mode: "onChange",
    // defaultValues: {
    //   first_name: "Иван",
    //   last_name: "Иванов",
    //   telegram: "telegram",
    //   password: "123456",
    // },
  });
  const { signup } = useAuth();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    signup(id, data);
    setFormStep(5);
  };

  return (
    <>
      <FormTitle>Регистрация</FormTitle>
      <Form>
        <FieldSet>
          <Label>
            <Caption_2>Имя</Caption_2>
          </Label>
          <Controller
            name="first_name"
            control={control}
            rules={{
              required: "Это обязательное поле",
            }}
            render={({ field }) => (
              <Input {...field} error={errors?.first_name?.message} />
            )}
          />
        </FieldSet>
        <FieldSet>
          <Label>
            <Caption_2>Фамилия</Caption_2>
          </Label>
          <Controller
            name="last_name"
            control={control}
            rules={{
              required: "Это обязательное поле",
            }}
            render={({ field }) => (
              <Input {...field} error={errors?.last_name?.message} />
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
            rules={{
              required: "Пароль должен содержать минимум 6 символов",
              minLength: {
                value: 6,
                message: "Пароль должен содержать минимум 6 символов",
              },
            }}
            render={({ field }) => (
              <Input
                type="password"
                {...field}
                error={errors?.password?.message}
              />
            )}
          />
        </FieldSet>
        <Label>
          <Caption_2>Телеграм</Caption_2>
        </Label>
        <Controller
          name="telegram"
          control={control}
          rules={{
            required: "Это обязательное поле",
          }}
          render={({ field }) => (
            <Input
              {...field}
              error={errors?.telegram?.message}
              hint="Заказчики с исполнителями связываются через телеграм"
            />
          )}
        />
      </Form>
      <Button
        variant="bigPrimary"
        type="submit"
        text="Дальше"
        margin="20px 0 0"
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default Step4;
