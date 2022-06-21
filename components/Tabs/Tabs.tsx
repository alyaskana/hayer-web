import styled from "styled-components";
import { FC, HTMLProps } from "react";
import { space } from "styled-system";

type TabsType = HTMLProps<HTMLDivElement> & { mb: number };
export const Tabs: FC<TabsType> = styled.div<TabsType>`
  width: 100%;
  padding: 3px;
  background: rgba(116, 116, 116, 0.3);
  backdrop-filter: blur(21px);
  border-radius: 16px;
  height: 49px;
  display: flex;
  ${space}
`;
