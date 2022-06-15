import { FC } from "react";
import { Caption_3 } from "components";
import { Wrap } from "./styles";

export const Footer: FC = () => {
  return (
    <Wrap>
      <div>
        <Caption_3>Designed by Sasha Barabonova, Anatoly Nikiforov</Caption_3>
        <Caption_3>Powered by Alina Bychkova</Caption_3>
      </div>
      <Caption_3>Copyright 2021-2022</Caption_3>
    </Wrap>
  );
};
