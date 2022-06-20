import { FC, HTMLProps } from "react";
import styled from "styled-components";
import { device } from "styles/breakpoints";

export const Form: FC<HTMLProps<HTMLFormElement>> = styled.form`
  background-color: white;
  padding: 28px 20px;
  border-radius: 20px;
  @media ${device.mobile} {
    padding: 32px 14px;
  }
`;
