import styled from "styled-components";
import { Colors } from "@shared/constants/Colors";
import { Tag } from "@shared/components";
import {
  Text,
  Title,
  Caption_2,
} from "@shared/components/Typography/Typography";
import { Avatar } from "@shared/components/Avatar/Avatar";

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

export const ResponseCounter = styled.div`
  height: 32px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: ${Colors.Main.White_gray};
  border-radius: 100px;
  display: flex;
  align-items: center;
`;

export const ResponseIconWrap = styled.div`
  margin-right: 4px;
  width: 20px;
  height: 20px;
`;

export const Tags = styled.div`
  display: flex;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin-bottom: 24px;
  max-width: 550px;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 12px;
`;

export const StyledCaption_2 = styled(Caption_2)`
  margin-left: 4px;
`;
