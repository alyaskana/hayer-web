import { Dispatch, SetStateAction } from "react";
import type { NextPage } from "next";
import { Button, Title } from "@shared/components";

type StepProps = {
  setFormStep: Dispatch<SetStateAction<number>>;
};

const Step3: NextPage<StepProps> = ({ setFormStep }) => {
  return (
    <>
      <Title>Почта подтверждена!</Title>
      <Button
        text="Продолжить"
        variant="primary"
        onClick={() => setFormStep(4)}
      />
    </>
  );
};

export default Step3;
