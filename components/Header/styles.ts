import { FC } from "react";
import { Colors } from "constants/Colors";
import styled from "styled-components";
import { device } from "styles/breakpoints";
import LogoIcon from "@assets/logo.svg";
import MiniLogoIcon from "@assets/logo_symbol.svg";
import { Subtitle } from "components/Typography/Typography";

import { InnerLink } from "components/links/InnerLink";

export const Wrap = styled.div`
  width: 100%;
  background-color: ${Colors.Main.White};
  border-radius: 0px 0px 44px 44px;
  padding: 16px 24px;
  height: 100px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobile} {
    background-color: ${Colors.Main.White_gray};
    margin-bottom: 0;
    border-radius: 0;
    padding: 8px;
    height: auto;
    position: fixed;
    top: 0;
    z-index: 5;
  }
`;

export const Logo = styled(LogoIcon)`
  width: 170px;
  @media ${device.mobile} {
    width: auto;
    height: 32px;
    padding-left: 4px;
  }
`;

export const MiniLogo = styled(MiniLogoIcon)`
  display: none;
  width: 32px;
  height: 32px;
  @media ${device.mobile} {
    display: block;
  }
`;

export const Menu = styled.div`
  display: flex;
  padding: 0 6px;

  @media ${device.mobile} {
    display: none;
  }
`;

export const StyledLink: FC<{
  href: string;
  hasNotification?: boolean;
}> = styled(InnerLink)`
  margin: 0 16px;
  color: ${Colors.Main.Gray_2};
  transition: color 0.2s;
  position: relative;
  :hover {
    color: ${Colors.Main.Gray_3};
  }

  &:after {
    content: "";
    display: ${(props) => (props.hasNotification ? "block" : "none")};
    display: "block";
    position: absolute;
    right: -10px;
    top: 0;
    width: 8px;
    height: 8px;
    border-radius: 20px;
    background: ${Colors.Accent.Red}};
  }
`;

export const AuthLinks = styled.div`
  display: flex;
  align-items: center;
  @media ${device.mobile} {
    display: none;
  }
`;

export const AuthLink = styled(InnerLink)`
  margin-left: 32px;
  color: ${Colors.Main.Gray_2};
  transition: color 0.2s;
  :hover {
    color: ${Colors.Main.Gray_3};
  }
`;

export const FakeBurger = styled.div`
  width: 32px;
  display: none;
  @media ${device.mobile} {
    display: block;
  }
`;

export const Burger = styled.div`
  display: none;
  padding: 8px 20px;
  background-color: ${Colors.Main.Gray_1};
  border-radius: 90px;
  height: 40px;
  position: relative;

  svg {
    width: 24px;
    height: 24px;
  }

  @media ${device.mobile} {
    display: block;

    &:after {
      content: "";
      display: ${(props) => (props.hasNotification ? "block" : "none")};
      display: "block";
      position: absolute;
      right: 4px;
      top: 1px;
      width: 8px;
      height: 8px;
      border-radius: 20px;
      background: ${Colors.Accent.Red}};
    }
  }


`;

export const BurgerMenu = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${Colors.Main.White_gray};
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 8px;
  text-align: center;

  body {
    overflow: hidden;
  }
`;

export const MenuItem = styled.div`
  padding: 27px 28px;
  border-radius: 90px;
  background-color: ${Colors.Main.White};
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const MenuItemIcon = styled.div`
  margin-right: 12px;
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const HeadTitle = styled(Subtitle)`
  display: none;
  @media ${device.mobile} {
    display: block;
  }
`;

export const BurgerPicture = styled.img`
  width: 265px;
  height: 160px;
  margin: 96px auto 0;
`;
