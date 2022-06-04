import { FC, HTMLProps } from "react";
import { Colors } from "@shared/constants/Colors";
import styled from "styled-components";

export const TextArea: FC<HTMLProps<HTMLTextAreaElement>> = styled.textarea`
  width: 100%;
  height: 136px;
  border-radius: 12px;
  padding: 8px 12px;
  color: ${Colors.Main.Gray_3};
  font-family: "Suisse Intl";
  font-size: 15px;
  line-height: 20px;
  background-color: ${Colors.Main.White_gray};
  border: none;
  resize: none;
  outline: none;

  ::placeholder {
    color: ${Colors.Main.Gray_1};
  }
`;
