import { FC } from "react";
import Link from "next/link";
import { Wrap, Menu, StyledLink, AuthLinks, AuthLink, Logo } from "./styles";
import { Headline } from "components";
import { Button } from "components";

import { useAuth } from "hooks";
import styled from "styled-components";
import { device } from "styles/breakpoints";

export const DesktopHeaderComponent: FC<{ className?: string }> = ({
  className,
}) => {
  const { token } = useAuth();
  return (
    <Wrap className={className}>
      <Link href={"/"} passHref>
        <a style={{ lineHeight: "75%" }}>
          <Logo />
        </a>
      </Link>
      {token && (
        <Menu>
          <StyledLink href={"/favorites"}>
            <Headline color="inherit">Закладки</Headline>
          </StyledLink>
          <StyledLink href={"/responses"}>
            <Headline color="inherit">Отклики</Headline>
          </StyledLink>
          <StyledLink href={"/profile"}>
            <Headline color="inherit"> Профиль</Headline>
          </StyledLink>
        </Menu>
      )}
      {token ? (
        <Button variant="primary" href="/posts/new" text="Создать объявление" />
      ) : (
        <AuthLinks>
          <AuthLink href={"/auth/login"}>
            <Headline color="inherit">Войти</Headline>
          </AuthLink>
          <AuthLink href={"/auth/signup"}>
            <Headline color="inherit">Зарегистрироваться</Headline>
          </AuthLink>
        </AuthLinks>
      )}
    </Wrap>
  );
};

export const DesktopHeader = styled(DesktopHeaderComponent)`
  @media ${device.mobile} {
    display: none;
  }
`;
