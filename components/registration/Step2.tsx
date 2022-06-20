import { Dispatch, SetStateAction, useEffect, useState } from "react";
import type { NextPage } from "next";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useTimer } from "react-timer-hook";
import { Form, FormTitle, Input, Label } from "components/form";
import { Button, Caption_2 } from "components";
import { authFetcher } from "api";

type StepProps = {
  setFormStep: Dispatch<SetStateAction<number>>;
  id: string | number;
  email: string;
};

const Step2: NextPage<StepProps> = ({ id, email, setFormStep }) => {
  const {
    handleSubmit,
    control,
    watch,
    setError,
    formState: { errors },
  } = useForm<{ code: string }>({
    mode: "onChange",
    defaultValues: {
      code: "",
    },
  });

  const [sendCodeActive, setSendCodeActive] = useState(false);
  const TIMER = 60; // seconds

  const onSubmit: SubmitHandler<{ code: string }> = ({ code }) => {
    authFetcher
      .verifyEmail(id, code)
      .then(() => {
        setFormStep(3);
      })
      .catch((err) => {
        setError("code", {
          type: "value",
          // message: err.response.data.error, // это текст ошибки с бэка
          message: "Не тот :( Проверь все символы",
        });
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

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + TIMER);

  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => setSendCodeActive(true),
  });

  const SendCodeBtnText = () => {
    const timer = ` (${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")})`;
    if (sendCodeActive) {
      return "Отправить код повторно";
    } else {
      return "Отправить код повторно" + timer;
    }
  };

  const onSendCode = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + TIMER);
    restart(time);
    setSendCodeActive(false);
  };

  return (
    <>
      <FormTitle>Регистрация</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <Caption_2>Код</Caption_2>
        </Label>
        <Controller
          name="code"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              hint={`Мы отправили код на ${email}, обычно код приходит в течение 1 минуты`}
              error={errors?.code?.message}
            />
          )}
        />
      </Form>
      <Button
        text={SendCodeBtnText()}
        variant="secondary"
        onClick={onSendCode}
        disabled={!sendCodeActive}
        margin="32px 0 0"
      />
    </>
  );
};

export default Step2;
