import { Title, Text } from "components/Typography";
import { FC } from "react";
import { User } from "types";
import { useAuth } from "hooks";
import {
  UserCardWrap,
  UserInfo,
  UserAvatar,
  CourseWrap,
  Course,
  EduProgram,
  AboutText,
  Links,
  LinkRow,
  Link,
  EditButtonWrap,
} from "./styles";
import { Button } from "components/Button/Button";
import InstagramIcon from "@assets/icons/instagram.svg";
import LinkIcon from "@assets/icons/link.svg";
import EditIcon from "@assets/icons/edit.svg";

export const UserCard: FC<{ user: User }> = ({ user }) => {
  const { user: currentUser } = useAuth();

  return (
    <>
      <UserCardWrap>
        <UserAvatar src={user.avatar} />
        <UserInfo>
          <Title>
            {user.first_name} {user.last_name}
          </Title>
          {user.course && user.edu_program && (
            <CourseWrap>
              <Course>{user.course}</Course>
              <EduProgram>{user.edu_program}</EduProgram>
            </CourseWrap>
          )}
          {user.about && <AboutText>{user.about}</AboutText>}
          {(user.instagram || user.link) && (
            <Links>
              {user.instagram && (
                <LinkRow>
                  <InstagramIcon />
                  <a
                    href={`https://www.instagram.com/${user.instagram}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Link>{user.instagram}</Link>
                  </a>
                </LinkRow>
              )}
              {user.link && (
                <LinkRow>
                  <LinkIcon />
                  <a
                    href={`https://${user.link}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Link>{user.link}</Link>
                  </a>
                </LinkRow>
              )}
            </Links>
          )}
          {user.id == currentUser?.id && (
            <EditButtonWrap>
              <Button
                variant="secondary"
                icon={<EditIcon />}
                text="Изменить"
                href="/"
              />
            </EditButtonWrap>
          )}
        </UserInfo>
      </UserCardWrap>
    </>
  );
};
