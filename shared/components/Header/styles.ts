import { Colors } from "@shared/constants/Colors";
import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  background-color: ${Colors.Main.White};
  border-radius: 0px 0px 70px 70px;
  padding: 24px 24px 24px 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  display: flex;
  justify-content: space-between;
`;

export const LogoIcon = styled.div`
  background-color: ${Colors.Main.Primary};
  border-radius: 25px;
  width: 68px;
  height: 68px;
`;

export const LogoTitle = styled.span`
  margin-left: 12px;
  font-family: "Suisse Intl";
  color: ${Colors.Main.Black};
  font-size: 68px;
  letter-spacing: -0.035em;
`;

export const Menu = styled.div`
  display: flex;
  padding: 0 6px;
`;

export const StyledLink = styled.a`
  margin: 0 6px;
  color: ${Colors.Main.Gray_2};
  transition: color 0.2s;
  :hover {
    color: ${Colors.Main.Gray_3};
  }
`;
