import { FC } from "react";
import Link from "next/link";
import { Wrap, Logo, LogoIcon, LogoTitle, Menu, StyledLink } from "./styles";
import { Button } from "@shared/components";

export const Header: FC<{ className?: string }> = ({ className }) => {
  return (
    <Wrap className={className}>
      <Link href={"/feed"} passHref>
        <Logo>
          <LogoIcon />
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
      <Button href="/post/new" text="Создать объявление" />
    </Wrap>
  );
};