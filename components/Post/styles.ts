import styled from "styled-components";
import { Colors } from "constants/Colors";
import { Tag } from "components";
import { Text, Title, Caption_2 } from "components/Typography/Typography";
import { Avatar } from "components/Avatar/Avatar";

export const PostWrap = styled.div`
  background-color: ${Colors.Main.White};
  padding: 20px;
  width: 100%;
  border-radius: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
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
  margin-top: 24px;
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
  margin-top: 20px;
  max-width: 550px;
`;
