import { Dispatch, SetStateAction } from "react";
import type { NextPage } from "next";
import { Button, Title } from "components";
import { SuccessWrap } from "./styles";
import Picture from "@assets/illustrations/sasha.svg";
import { Caption_1 } from "components/Typography/Typography";
import { Colors } from "constants/Colors";

type StepProps = {
  setFormStep: Dispatch<SetStateAction<number>>;
};

const Step3: NextPage<StepProps> = ({ setFormStep }) => {
  return (
    <SuccessWrap>
      <Picture />
      <Title mt="40px">Почта подтверждена!</Title>
      <Caption_1 margin="8px 8px 0" color={Colors.Main.Gray_2}>
        Осталось добавить немного информации о себе
      </Caption_1>
      <Button
        text="Продолжить"
        variant="bigPrimary"
        onClick={() => setFormStep(4)}
        margin="40px 0 0"
      />
    </SuccessWrap>
  );
};

export default Step3;
