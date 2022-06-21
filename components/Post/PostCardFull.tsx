import { FC, useState } from "react";
import Link from "next/link";
import { formatRelative } from "date-fns";
import russianLocale from "date-fns/locale/ru";
import { useRouter } from "next/router";

import { Colors } from "constants/Colors";
import { Post } from "types";
import { Caption_1, Caption_2, Title } from "components";
import {
  Footer,
  Header,
  HeaderInfo,
  IconCategory,
  CardWrap,
  StyledText,
  UserAvatar,
  UserInfo,
  LinkWrap,
  StyledLink,
  ActionIcon,
} from "./styles";
import { useAuth } from "hooks";
import { postsFetcher } from "api";

import ClosedIcon from "@assets/icons/closed.svg";
import WorkActiveIcon from "@assets/icons/work_active.svg";
import StudyActiveIcon from "@assets/icons/study_active.svg";
import EventActiveIcon from "@assets/icons/event_active.svg";
import FavoriteUnactiveIcon from "@assets/icons/favorite_unactive.svg";
import FavoriteActiveIcon from "@assets/icons/favorite_active.svg";
import LinkIcon from "@assets/icons/link.svg";
import EditIcon from "@assets/icons/edit.svg";

type PostCardFullProps = {
  post: Post;
  className?: string;
};

export const PostCardFull: FC<PostCardFullProps> = ({ post, className }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(post.is_favorited);

  const onSaveClick = () => {
    postsFetcher.favorite(post.id).then(() => setIsFavorite(!isFavorite));
  };

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
          <ActionIcon>
            {user?.id == post.user.id ? (
              <EditIcon onClick={() => router.push(`/posts/${post.id}/edit`)} />
            ) : isFavorite ? (
              <FavoriteActiveIcon onClick={onSaveClick} />
            ) : (
              <FavoriteUnactiveIcon onClick={onSaveClick} />
            )}
          </ActionIcon>
        </Header>

        <Title mt="16px">{post.title}</Title>

        <StyledText>{post.description}</StyledText>

        {post.link && (
          <LinkWrap>
            <LinkIcon />
            <StyledLink href={post.link}>{post.link}</StyledLink>
          </LinkWrap>
        )}

        <Footer>
          <Link href={`/user/${post.user.id}`} passHref>
            <a>
              <UserInfo>
                <UserAvatar src={post.user.avatar} />
                <Caption_1>
                  {post.user.first_name} {post.user.last_name}
                </Caption_1>
              </UserInfo>
            </a>
          </Link>
          <Caption_2 color={Colors.Main.Gray_1}>
            {formatRelative(new Date(post.created_at), new Date(), {
              locale: russianLocale,
            })}
          </Caption_2>
        </Footer>
      </CardWrap>
    </Link>
  );
};
