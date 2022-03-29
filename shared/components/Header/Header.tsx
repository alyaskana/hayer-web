import { FC } from "react";
import Link from "next/link";
import {
  Wrap,
  Logo,
  LogoTitle,
  Menu,
  StyledLink,
  AuthLinks,
  AuthLink,
} from "./styles";
import { Button } from "@shared/components";
import LogoIcon from "@assets/logo.svg";
import { useAuth } from "@shared/hooks";
import { Headline } from "../Typography/Typography";

export const Header: FC<{ className?: string }> = ({ className }) => {
  const { token } = useAuth();

  return (
    <Wrap className={className}>
      <Link href={"/feed"} passHref>
        <Logo>
          <LogoIcon />
          <LogoTitle>Хайер</LogoTitle>
        </Logo>
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
