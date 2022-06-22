import { device } from "styles/breakpoints";
import styled from "styled-components";
import { Colors } from "constants/Colors";
import { Tag } from "components";
import { Text } from "components/Typography/Typography";
import { Avatar } from "components/Avatar/Avatar";
import Link from "next/link";
import { space } from "styled-system";

export const CardWrap = styled.div`
  background-color: ${Colors.Main.White};
  padding: 20px;
  width: 100%;
  border-radius: 20px;
  ${space}

  @media ${device.mobile} {
    padding: 14px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const IconCategory = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 4px;
`;

export const Counter = styled.div`
  height: 32px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: ${Colors.Main.White_gray};
  border-radius: 100px;
  display: flex;
  align-items: center;
`;

export const NotificationCounter = styled(Counter)`
  background-color: ${Colors.Accent.Yellow};
  margin-right: 4px;
`;

export const CounterIconWrap = styled.div`
  margin-right: 4px;
  width: 20px;
  height: 20px;
`;

export const Tags = styled.div`
  display: flex;
  margin-top: 12px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled(Avatar)`
  margin-right: 8px;
`;

export const StyledTag = styled(Tag)`
  margin-right: 4px;
`;

export const StyledText = styled(Text)`
  margin-top: 16px;
  max-width: 550px;
`;

export const TruncatedText = styled(StyledText)`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

export const StyledLink = styled.a`
  font-family: "Suisse Intl Book";
  font-size: 15px;
  line-height: 16px;
  color: ${Colors.Main.Primary};
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 8px;

  :hover {
    text-decoration: underline;
  }
`;

export const ActionIcon = styled.div`
  cursor: pointer;
`;
