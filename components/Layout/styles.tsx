import { Colors } from "constants/Colors";
import styled from "styled-components";
import { device } from "styles/breakpoints";

export const Main = styled.main`
  margin: 0 auto;
  max-width: 728px;
  @media ${device.mobile} {
    padding: 60px 8px;
  }
`;

export const Wrap = styled.div`
  padding: 0 20px 20px;
  background-color: ${Colors.Main.White_gray};
  min-height: 100vh;

  @media ${device.mobile} {
    padding: 0;
  }
`;
