import { FC } from "react";
import { differenceInCalendarDays } from "date-fns";

import { Colors } from "@shared/constants/Colors";
import { Title } from "@shared/components";
import { pluralize } from "@shared/utils";

import { Icon, Wrap, StyledHeadline } from "./styles";

import TimeIcon from "@assets/icons/time.svg";
import ClosedIcon from "@assets/icons/closed.svg";

export const Deadline: FC<{ date: string }> = ({ date }) => {
  if (new Date(date) > new Date()) {
    const deadline = pluralize(
      differenceInCalendarDays(new Date(date), new Date()),
      ["день", "дня", "дней"]
    );
    return (
      <Wrap>
        <Icon>
          <TimeIcon />
        </Icon>
        <div>
          <StyledHeadline color={Colors.Main.Gray_1}>Дедлайн</StyledHeadline>
          <Title>{deadline}</Title>
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
