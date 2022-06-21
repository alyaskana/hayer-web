import { FC } from "react";
import Link from "next/link";
import { Post } from "types";
import { Caption_2, Headline, Title } from "../Typography/Typography";
import {
  Header,
  HeaderInfo,
  IconCategory,
  CardWrap,
  Counter,
  CounterIconWrap,
  NotificationCounter,
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

export const PostCardReplyClient: FC<PostCardProps> = ({ post, className }) => {
  return (
    <Link href={`/posts/${post.id}`} passHref>
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
          <div style={{ display: "flex" }}>
            <NotificationCounter>
              <Headline>+ {1}</Headline>
            </NotificationCounter>
            <Counter>
              <CounterIconWrap>
                <ResponseIcon />
              </CounterIconWrap>
              <Headline>{post.responses.length}</Headline>
            </Counter>
          </div>
        </Header>

        <Title mt="16px">{post.title}</Title>
      </CardWrap>
    </Link>
  );
};
