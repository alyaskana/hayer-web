import styled from "styled-components";
import { Colors } from "@shared/constants/Colors";
import { Caption_1 } from "@shared/components/Typography/Typography";

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.Main.White};
  border-radius: 20;
  padding: 4px;
  color: ${Colors.Main.Gray_2};
`;

export const Icon = styled.img`
  margin-right: 8px;
  width: 32px;
  height: 32px;
`;

export const StyledCaption_1 = styled(Caption_1)`
  color: ${Colors.Main.Gray_2};
`;
