import { FC } from "react";
import { differenceInCalendarDays } from "date-fns";

import { Colors } from "constants/Colors";
import { Title, Headline } from "components";
import { pluralizeWithCount } from "utils";

import { Icon, Wrap } from "./styles";

import TimeIcon from "@assets/icons/time.svg";
import ClosedIcon from "@assets/icons/closed.svg";

export const Deadline: FC<{ date: string }> = ({ date }) => {
  if (new Date(date) >= new Date()) {
    const deadline = pluralizeWithCount(
      differenceInCalendarDays(new Date(date), new Date()),
      ["день", "дня", "дней"]
    );
    return (
      <Wrap>
        <Icon>
          <TimeIcon />
        </Icon>
        <div>
          <Headline mb="4px" color={Colors.Main.Gray_1}>
            Дедлайн
          </Headline>
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
