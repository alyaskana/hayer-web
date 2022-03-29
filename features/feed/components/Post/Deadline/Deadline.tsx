import { Colors } from "@shared/constants/Colors";
import { Title } from "@shared/components";
import { Icon, Wrap, StyledHeadline } from "./styles";
import TimeIcon from "@assets/icons/time.svg";
import ClosedIcon from "@assets/icons/closed.svg";
import { FC } from "react";

export const Deadline: FC<{ date: string }> = ({ date }) => {
  if (new Date(date) > new Date()) {
    return (
      <Wrap>
        <Icon>
          <TimeIcon />
        </Icon>
        <div>
          <StyledHeadline color={Colors.Main.Gray_1}>Дедлайн</StyledHeadline>
          <Title>12 дней</Title>
        </div>
      </Wrap>
    );
  } else {
    return (
      <Wrap>
        <Icon>
          <ClosedIcon />
        </Icon>
        <Title color={Colors.Accent.Red}>Объявление закрыто</Title>
      </Wrap>
    );
  }
};
