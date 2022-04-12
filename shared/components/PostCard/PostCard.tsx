import { FC } from "react";
import Link from "next/link";
import { formatRelative } from "date-fns";
import russianLocale from "date-fns/locale/ru";

import { Colors } from "@shared/constants/Colors";
import { Post } from "@shared/types";
import { truncate } from "@shared/utils";
import { Caption_1, Caption_2, Headline } from "../Typography/Typography";
import {
  Footer,
  Header,
  HeaderInfo,
  IconCategory,
  PostWrap,
  ResponseCounter,
  ResponseIconWrap,
  StyledTag,
  StyledText,
  StyledTitle,
  StyledCaption_2,
  Tags,
  UserAvatar,
  UserInfo,
} from "./styles";

import ClosedIcon from "@assets/icons/closed.svg";
import WorkActiveIcon from "@assets/icons/work_active.svg";
import StudyActiveIcon from "@assets/icons/study_active.svg";
import EventActiveIcon from "@assets/icons/event_active.svg";
import ResponseIcon from "@assets/icons/response.svg";

type PostCardProps = {
  post: Post;
  className?: string;
};

export const PostCard: FC<PostCardProps> = ({ post, className }) => {
  return (
    <Link href={`/posts/${post.id}`} passHref>
      <PostWrap className={className}>
        <Header>
          <HeaderInfo>
            {new Date(post.deadline) < new Date() ? (
              <IconCategory>
                <ClosedIcon />
              </IconCategory>
            ) : null}
            {post.ad_types.find((type) => type.name == "Работа") ? (
              <IconCategory>
                <WorkActiveIcon />
              </IconCategory>
            ) : null}
            {post.ad_types.find((type) => type.name == "Учеба") ? (
              <IconCategory>
                <StudyActiveIcon />
              </IconCategory>
            ) : null}
            {post.ad_types.find((type) => type.name == "Ивенты") ? (
              <IconCategory>
                <EventActiveIcon />
              </IconCategory>
            ) : null}
            <StyledCaption_2>{post.format}</StyledCaption_2>
          </HeaderInfo>
          <ResponseCounter>
            <ResponseIconWrap>
              <ResponseIcon />
            </ResponseIconWrap>
            <Headline>{post.responses.length}</Headline>
          </ResponseCounter>
        </Header>

        <StyledTitle>{post.title}</StyledTitle>
        {post.tags.length > 0 && (
          <Tags>
            {post.tags.map((tag) => (
              <StyledTag text={tag.name} key={tag.id} />
            ))}
          </Tags>
        )}

        <StyledText>{truncate(post.description, 180)}</StyledText>

        <Footer>
          <UserInfo>
            <UserAvatar src={post.user.avatar} />
            <Caption_1>
              {post.user.first_name} {post.user.last_name}
            </Caption_1>
          </UserInfo>
          <Caption_2 color={Colors.Main.Gray_1}>
            {formatRelative(new Date(post.created_at), new Date(), {
              locale: russianLocale,
            })}
          </Caption_2>
        </Footer>
      </PostWrap>
    </Link>
  );
};
