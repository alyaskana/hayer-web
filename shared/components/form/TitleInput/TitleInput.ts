import { FC, HTMLProps } from "react";
import { Colors } from "@shared/constants/Colors";
import styled from "styled-components";

export const TitleInput: FC<HTMLProps<HTMLInputElement>> = styled.input`
  font-family: "Suisse Intl Book";
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${Colors.Main.Gray_3};
  outline: none;
  border: none;
  width: 100%;
  background-color: transparent;

  ::placeholder {
    color: ${Colors.Main.Gray_1};
  }
`;
