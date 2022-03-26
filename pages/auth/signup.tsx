import type { NextPage } from "next";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useAuth } from "@shared/hooks";

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
      <div>
        <Controller
          name="link"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input placeholder="@username" type="text" {...field} />
          )}
        />
      </div>
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignupPage;
