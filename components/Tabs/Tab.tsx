import { FC, HTMLProps } from "react";
import { Caption_2 } from "components/Typography";

import { Colors } from "constants/Colors";
import { TabWrapper } from "./styles";

type TabProps = {
  onClick?: () => void;
  active: boolean;
};

export const Tab: FC<TabProps> = ({ onClick, children, active }) => {
  return (
    <TabWrapper active={active} onClick={onClick}>
      <Caption_2 color={active ? Colors.Main.White : Colors.Main.Gray_3}>
        {children}
      </Caption_2>
    </TabWrapper>
  );
};
