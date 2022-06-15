import { FC, useState } from "react";
import Link from "next/link";
import { formatRelative } from "date-fns";
import russianLocale from "date-fns/locale/ru";

import { Colors } from "constants/Colors";
import { Post } from "types";
import { Caption_1, Caption_2, Title } from "components";
import {
  Footer,
  Header,
  HeaderInfo,
  IconCategory,
  PostWrap,
  StyledTag,
  StyledText,
  Tags,
  UserAvatar,
  UserInfo,
} from "./styles";

import ClosedIcon from "@assets/icons/closed.svg";
import WorkActiveIcon from "@assets/icons/work_active.svg";
import StudyActiveIcon from "@assets/icons/study_active.svg";
import EventActiveIcon from "@assets/icons/event_active.svg";
import FavoriteUnactiveIcon from "@assets/icons/favorite_unactive.svg";
import FavoriteActiveIcon from "@assets/icons/favorite_active.svg";

type PostCardFullProps = {
  post: Post;
  className?: string;
};

export const PostCardFull: FC<PostCardFullProps> = ({ post, className }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const onSaveClick = () => {
    setIsFavorite(!isFavorite);
  };
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
            <Caption_2 ml="4px">{post.format}</Caption_2>
          </HeaderInfo>
          {isFavorite ? (
            <FavoriteActiveIcon onClick={onSaveClick} />
          ) : (
            <FavoriteUnactiveIcon onClick={onSaveClick} />
          )}
        </Header>

        <Title mb="12px">{post.title}</Title>
        {/* {post.tags.length > 0 && (
          <Tags>
            {post.tags.map((tag) => (
              <StyledTag text={tag.name} key={tag.id} />
            ))}
          </Tags>
        )} */}

        <StyledText mt="20px" mb="24px">
          {post.description}
        </StyledText>

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
