import { Dispatch, FC, SetStateAction } from "react";
import { formatRelative } from "date-fns";
import russianLocale from "date-fns/locale/ru";
import { Button, Caption_1, Caption_2, Layout, Text, Title } from "components";
import { CardWrap, UserInfo, Footer, UserAvatar } from "components/Post/styles";
import { Colors } from "constants/Colors";
import { ButtonsWrap, ResponseHeader } from "./styles";
import { Response } from "types";
import { LinkRow, Link } from "components/User/styles";
import { ExternalLink } from "components/links/ExternalLink";
import LinkIcon from "@assets/icons/link.svg";
import { responsesFetcher } from "api/responses";

export const ResponseCard: FC<{
  response: Response;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  setMyResponse: Dispatch<SetStateAction<Response | undefined>>;
  resetForm: any;
  fetchPosts: any;
}> = ({ response, setIsEdit, setMyResponse, resetForm, fetchPosts }) => {
  const onDelete = () => {
    responsesFetcher.destroy(response.id);
    setMyResponse(undefined);
    resetForm();
    fetchPosts();
  };

  return (
    <CardWrap mt="8px">
      <ResponseHeader>
        <UserInfo>
          <UserAvatar src={response.user.avatar} />
          <Caption_1>
            {response.user.first_name} {response.user.last_name}
          </Caption_1>
        </UserInfo>
        <Caption_2 color={Colors.Main.Gray_1}>
          {formatRelative(new Date(response.created_at), new Date(), {
            locale: russianLocale,
          })}
        </Caption_2>
      </ResponseHeader>
      <Text mt="12px">{response.description}</Text>
      {response.link && (
        <LinkRow>
          <LinkIcon />
          <ExternalLink
            href={`https://www.instagram.com/${response.instagram}`}
          >
            <Link>{response.link}</Link>
          </ExternalLink>
        </LinkRow>
      )}
      <ButtonsWrap>
        <Button
          variant="secondary"
          text="Удалить отклик"
          onClick={onDelete}
          danger
        />
        <Button
          variant="secondary"
          text="Редактировать"
          onClick={() => setIsEdit(true)}
        />
      </ButtonsWrap>
    </CardWrap>
  );
};
