import type { NextPage } from "next";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useAuth } from "@shared/hooks";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name="email"
          control={control}
          defaultValue="aabychkova_4@edu.hse.ru"
          render={({ field }) => <input placeholder="Email" {...field} />}
        />
      </div>
      <div>
        <Controller
          name="password"
          control={control}
          defaultValue="123456"
          render={({ field }) => (
            <input placeholder="Password" type="password" {...field} />
          )}
        />
      </div>
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginPage;
