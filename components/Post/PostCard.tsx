import { FC } from "react";
import Link from "next/link";
import { formatRelative } from "date-fns";
import russianLocale from "date-fns/locale/ru";

import { Colors } from "constants/Colors";
import { Post } from "types";
import {
  Caption_1,
  Caption_2,
  Headline,
  Title,
} from "../Typography/Typography";
import {
  Footer,
  Header,
  HeaderInfo,
  IconCategory,
  CardWrap,
  Counter,
  CounterIconWrap,
  TruncatedText,
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
      <a>
        <CardWrap className={className}>
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
              <Caption_2 ml="4px">{post.format}</Caption_2>
            </HeaderInfo>
            <Counter>
              <CounterIconWrap>
                <ResponseIcon />
              </CounterIconWrap>
              <Headline>{post.responses.length}</Headline>
            </Counter>
          </Header>

          <Title mt="16px">{post.title}</Title>

          <TruncatedText>{post.description}</TruncatedText>

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
        </CardWrap>
      </a>
    </Link>
  );
};
