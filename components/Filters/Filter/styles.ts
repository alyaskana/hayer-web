import styled from "styled-components";
import { Colors } from "constants/Colors";

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${Colors.Main.White};
  border-radius: 20px;
  padding: 4px;
  width: 117px;
  color: ${Colors.Main.Gray_2};
  border: none;
  cursor: pointer;
`;

export const Icon = styled.img`
  margin-right: 8px;
  width: 32px;
  height: 32px;
`;
