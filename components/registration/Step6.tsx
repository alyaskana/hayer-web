import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import { Button, Text, Title } from "components";
import styled from "styled-components";

const Step6: NextPage = () => {
  const router = useRouter();
  return (
    <Wrap>
      <Title>Регистрация завершена!</Title>
      <Text>
        Теперь ты можешь искать людей на задачи, откликаться на объявления и
      </Text>
      <Button
        text="Ура! На главную"
        variant="primary"
        onClick={() => router.push("/")}
      />
    </Wrap>
  );
};

export default Step6;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
