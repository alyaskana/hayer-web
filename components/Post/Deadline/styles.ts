import { Colors } from "constants/Colors";
import styled from "styled-components";
import { device } from "styles/breakpoints";
import { CardWrap } from "../styles";

export const Wrap = styled(CardWrap)`
  height: 112px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  @media ${device.mobile} {
    height: 96px;
    padding: 12px 14px;
  }
`;

export const Icon = styled.div`
  width: 72px;
  height: 72px;
  margin-right: 12px;
`;
