import React from "react";
import Link from "next/link";
import { Wrap, Logo, LogoIcon, LogoTitle, Menu, StyledLink } from "./styles";
import { Button } from "@shared/components";

export const Header = () => {
  return (
    <Wrap>
      <Link href={"/posts"} passHref>
        <Logo>
          <LogoIcon></LogoIcon>
          <LogoTitle>Хайер</LogoTitle>
        </Logo>
      </Link>
      <Menu>
        <Link href={"/favorites"} passHref>
          <StyledLink>Закладки</StyledLink>
        </Link>
        <Link href={"/responses"} passHref>
          <StyledLink>Отклики</StyledLink>
        </Link>
        <Link href={"/profile"} passHref>
          <StyledLink>Профиль</StyledLink>
        </Link>
      </Menu>
      <Button href="/posts/new" text="Создать объявление" />
    </Wrap>
  );
};
