import { Dispatch, SetStateAction, useEffect } from "react";
import type { NextPage } from "next";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  FieldSet,
  Form,
  FormTitle,
  Input,
  Label,
} from "@shared/components/form";
import { Button, Caption_2 } from "@shared/components";
import { authFetcher } from "@shared/api";

type StepProps = {
  setFormStep: Dispatch<SetStateAction<number>>;
  id: string | number;
  email: string;
};

const Step2: NextPage<StepProps> = ({ id, email, setFormStep }) => {
  const { handleSubmit, control, watch } = useForm<{ code: string }>({
    mode: "onChange",
    defaultValues: {
      code: "",
    },
  });

  const onSubmit: SubmitHandler<{ code: string }> = ({ code }) => {
    authFetcher.verifyEmail(id, code).then((res) => {
      setFormStep(3);
    });
  };

  useEffect(() => {
    const subscription = watch((data) => {
      if (data.code?.length == 6) {
        handleSubmit(onSubmit(data));
      }
    });
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);

  return (
    <>
      <FormTitle>Регистрация</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FieldSet>
          <Label>
            <Caption_2>Код</Caption_2>
          </Label>
          <Controller
            name="code"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </FieldSet>
        <Button variant="bigPrimary" type="submit" text="Зарегистрироваться" />
      </Form>
    </>
  );
};

export default Step2;
