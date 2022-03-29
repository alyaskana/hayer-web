import { Colors } from "@shared/constants/Colors";
import { Header } from "@shared/components/Header/Header";
import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
  max-width: 728px;
`;

export const Wrap = styled.div`
  padding: 0 20px;
  background-color: ${Colors.Main.White_gray};
  min-height: 100vh;
`;

export const StyledHeader = styled(Header)`
  margin-bottom: 40px;
`;
