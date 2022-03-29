import { Colors } from "@shared/constants/Colors";
import { FC, HTMLProps } from "react";
import styled from "styled-components";

export const Input: FC<HTMLProps<HTMLInputElement>> = styled.input`
  padding: 16px 8px;
  background-color: ${Colors.Main.White_gray};
  border-radius: 20px;
  width: 100%;
  border-radius: 12px;
  font-family: "Suisse Intl";
  font-size: 15px;
  line-height: 20px;
  color: ${Colors.Main.Gray_3};
  border: none;
  outline: none;

  ::placeholder {
    color: ${Colors.Main.Gray_1};
  }
`;
