import { Colors } from "@shared/constants/Colors";
import styled from "styled-components";

export const Wrap = styled.div`
  background-color: ${Colors.Main.White};
  border-radius: 20px;
  padding: 20px;
  height: 112px;
  margin-top: 8px;
  display: flex;
  align-items: baseline;
`;

export const Count = styled.div`
  font-family: "Suisse Intl Book";
  font-size: 89px;
  line-height: 72px;
  letter-spacing: -0.015;
  margin-right: 4px;
  color: ${Colors.Main.Gray_3};
`;

export const Icon = styled.div`
  margin-left: auto;
  width: 72px;
  height: 72px;
`;
