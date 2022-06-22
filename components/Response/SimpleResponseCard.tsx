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

import TgIcon from "@assets/icons/tg.svg";

export const SimpleResponseCard: FC<{
  response: Response;
}> = ({ response }) => {
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
          <ExternalLink href={response.link}>
            <Link>{response.link}</Link>
          </ExternalLink>
        </LinkRow>
      )}
      <Button
        margin="8px 0 0"
        variant="secondary"
        text="Написать"
        href={response.user.link!}
        icon={<TgIcon />}
        style={{ marginTop: "16px" }}
      />
    </CardWrap>
  );
};
