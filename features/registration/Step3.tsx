import { Dispatch, SetStateAction } from "react";
import type { NextPage } from "next";
import { Title } from "@shared/components";
import { FormTitle } from "@shared/components/form";

type StepProps = {
  setFormStep: Dispatch<SetStateAction<number>>;
};

const Step3: NextPage<StepProps> = ({ setFormStep }) => {
  return (
    <>
      <FormTitle>Регистрация</FormTitle>
      <Title>Почта подтверждена!</Title>
    </>
  );
};

export default Step3;
