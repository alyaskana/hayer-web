import { useRouter } from "next/router";
import type { NextPage } from "next";
import { Button, Text, Title } from "components";
import { Step6Image, SuccessWrap } from "./styles";
import { Colors } from "constants/Colors";

const Step6: NextPage = () => {
  const router = useRouter();
  return (
    <SuccessWrap>
      <Step6Image src="/assets/images/tolya.png" alt="" />
      <Title mt="40px">Регистрация завершена!</Title>
      <Text margin="8px 8px 0" color={Colors.Main.Gray_2}>
        Теперь ты можешь искать людей на задачи, откликаться на объявления и
      </Text>
      <Button
        margin="40px 0 0"
        text="Ура! На главную"
        variant="primary"
        onClick={() => router.push("/")}
      />
    </SuccessWrap>
  );
};

export default Step6;
