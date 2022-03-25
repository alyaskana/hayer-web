import styled from "styled-components";
import { Colors } from "@shared/constants/Colors";
import { Headline } from "@shared/components/Typography/Typography";

export const StyledLink = styled.a`
  padding: 30px 56px;
  background-color: ${Colors.Main.Primary};
  border-radius: 90px;
  transition: background-color 0.2s;
  display: flex;
  gap: 8px;
  align-items: center;

  :hover {
    background-color: ${Colors.Main.PrimaryHover};
  }
  :active {
    background-color: ${Colors.Main.PrimaryPressed};
  }
`;

export const StyledHeadline = styled(Headline)`
  color: ${Colors.Main.White};
`;
