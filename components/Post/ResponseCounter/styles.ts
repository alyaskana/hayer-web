import { Colors } from "constants/Colors";
import styled from "styled-components";
import { CardWrap } from "../styles";
import { device } from "styles/breakpoints";

export const Wrap = styled(CardWrap)`
  height: 112px;
  margin-top: 8px;
  display: flex;
  align-items: baseline;
  @media ${device.mobile} {
    height: 96px;
    padding: 12px 14px;
  }
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
