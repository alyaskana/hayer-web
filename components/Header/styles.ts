import { Colors } from "constants/Colors";
import styled from "styled-components";
import { device } from "styles/breakpoints";
import LogoIcon from "@assets/logo.svg";

export const Wrap = styled.div`
  width: 100%;
  background-color: ${Colors.Main.White};
  border-radius: 0px 0px 44px 44px;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin-bottom: 32px;

  @media ${device.mobile} {
    background-color: transparent;
    margin-bottom: 12px;
    border-radius: 0;
    padding: 0;
    padding-top: 8px;
    height: 40px;
  }
`;

export const Logo = styled(LogoIcon)`
  width: 170px;
  @media ${device.mobile} {
    width: auto;
    height: 32px;
  }
`;

export const Menu = styled.div`
  display: flex;
  padding: 0 6px;

  @media ${device.mobile} {
    display: none;
  }
`;

export const StyledLink = styled.a`
  margin: 0 16px;
  color: ${Colors.Main.Gray_2};
  transition: color 0.2s;
  :hover {
    color: ${Colors.Main.Gray_3};
  }
`;

export const AuthLinks = styled.div`
  display: flex;
  align-items: center;
  @media ${device.mobile} {
    display: none;
  }
`;

export const AuthLink = styled.a`
  margin-left: 32px;
  color: ${Colors.Main.Gray_2};
  transition: color 0.2s;
  :hover {
    color: ${Colors.Main.Gray_3};
  }
`;

export const Burger = styled.div`
  padding: 8px 20px;
  background-color: ${Colors.Main.Gray_1};
  border-radius: 90px;
  height: 40px;
`;
