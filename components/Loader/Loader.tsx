import { FC } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Colors } from "constants/Colors";

import { Wrapper } from "./styles";

export const Loader: FC = () => {
  return (
    <Wrapper>
      <ThreeDots color={Colors.Main.Primary} height={80} width={80} />
    </Wrapper>
  );
};
