import { FC } from "react";
import Link from "next/link";
import {
  Wrap,
  Menu,
  StyledLink,
  AuthLinks,
  AuthLink,
  Logo,
  Burger,
} from "./styles";
import { Button } from "components";
import { useAuth } from "hooks";
import { Headline } from "components";
import BurgerIcon from "@assets/icons/burger.svg";

export const Header: FC<{ className?: string }> = ({ className }) => {
  const { token } = useAuth();

  return (
    <Wrap className={className}>
      <Link href={"/"} passHref>
        <a>
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
      <Burger>
        <BurgerIcon />
      </Burger>
    </Wrap>
  );
};
