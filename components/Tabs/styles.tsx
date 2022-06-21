import { FC, HTMLProps } from "react";
import styled from "styled-components";

import { Colors } from "constants/Colors";

type TabWrapperType = HTMLProps<HTMLDivElement> & { active: boolean };

export const TabWrapper: FC<TabWrapperType> = styled.div<TabWrapperType>`
  flex: 1;
  background: ${(props) =>
    props.active ? Colors.Main.Gray_3 : Colors.Main.Gray_1};
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TabContentWrapper: FC<HTMLProps<HTMLDivElement>> = styled.div`
  background: ${Colors.Main.White};
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 20px 14px;
`;

export const IconWrapper: FC<HTMLProps<HTMLDivElement>> = styled.div`
  background: ${Colors.Main.White_gray};
  border-radius: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 19px;
  margin-right: 12px;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
`;
