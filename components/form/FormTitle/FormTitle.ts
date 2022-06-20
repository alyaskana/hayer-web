import { Colors } from "constants/Colors";
import styled from "styled-components";
import { device } from "styles/breakpoints";

export const FormTitle = styled.h1`
  font-family: "Suisse Intl Book";
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -0.011em;
  font-weight: 400;
  color: ${Colors.Main.Black};
  margin-bottom: 32px;
  @media ${device.mobile} {
    display: none;
  }
`;
