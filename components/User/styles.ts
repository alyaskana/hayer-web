import styled from "styled-components";
import { device } from "styles/breakpoints";
import { CardWrap } from "components/Post/styles";
import { Avatar } from "components/Avatar/Avatar";
import { Colors } from "constants/Colors";
import { Caption_1, Text } from "components/Typography";

export const UserAvatar = styled(Avatar)`
  width: 100%;
  height: 100%;
  max-width: 306px;
  @media ${device.mobile} {
    max-width: none;
  }
`;

export const UserCardWrap = styled(CardWrap)`
  display: flex;

  @media ${device.mobile} {
    flex-direction: column;
    border-top-left-radius: 500px;
    border-top-right-radius: 500px;
  }
`;

export const UserInfo = styled.div`
  margin: 0 0 0 20px;
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    margin: 24px 0 0 0;
  }
`;

export const CourseWrap = styled.div`
  display: flex;
  margin-top: 8px;
  align-items: center;
  @media ${device.mobile} {
    margin-top: 6px;
  }
`;

export const Course = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 20px;
  background-color: ${Colors.Main.Gray_1};
  color: ${Colors.Main.White};
  font-family: "Suisse Intl Book";
  font-size: 13px;
  margin-right: 4px;
  border-radius: 20px;
`;

export const EduProgram = styled.div`
  font-family: "Suisse Intl Book";
  font-size: 15px;
  color: ${Colors.Main.Gray_1};
`;

export const AboutText = styled(Text)`
  margin-top: 16px;
  @media ${device.mobile} {
    margin-top: 12px;
  }
`;

export const Links = styled.div`
  margin-top: 20px;
`;

export const LinkRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  :first-child {
    margin-top: 0;
  }
`;

export const Link = styled(Caption_1)`
  color: ${Colors.Main.Primary};
  margin-left: 8px;
`;

export const EditButtonWrap = styled.div`
  margin: auto 0 0;
  padding: 20px 0 0;
`;
