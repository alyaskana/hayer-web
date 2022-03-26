import { Colors } from "@shared/constants/Colors";
import styled from "styled-components";
import { Text } from "@shared/components/Typography/Typography";

export const Wrap = styled.div`
  align-items: center;
  background-color: ${Colors.Main.White_gray};
  padding: 8px 16px;
  border-radius: 20px;
  display: flex;
`;

export const StyledText = styled(Text)`
  color: ${Colors.Main.Gray_2};
`;
