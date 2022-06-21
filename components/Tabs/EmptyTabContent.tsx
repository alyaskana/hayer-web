import { FC, HTMLProps, ReactNode } from "react";
import { Headline } from "components/Typography";

import { TabContentWrapper, IconWrapper, Icon } from "./styles";

type EmptyTabContentProps = {
  iconPath: string;
};
export const EmptyTabContent: FC<EmptyTabContentProps> = ({
  children,
  iconPath,
}) => {
  return (
    <TabContentWrapper>
      <IconWrapper>
        <Icon src={iconPath} alt="Empty tab icon" />
      </IconWrapper>
      <Headline>{children}</Headline>
    </TabContentWrapper>
  );
};
