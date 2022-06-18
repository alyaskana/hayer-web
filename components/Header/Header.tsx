import { FC, useState } from "react";
import Link from "next/link";
import {
  Wrap,
  Menu,
  StyledLink,
  AuthLinks,
  AuthLink,
  Logo,
  Burger,
  BurgerMenu,
  MenuItem,
  MenuItemIcon,
} from "./styles";
import { Button } from "components";
import { useAuth } from "hooks";
import { Headline } from "components";
import BurgerIcon from "@assets/icons/burger.svg";
import CloseIcon from "@assets/icons/close_menu.svg";
import FavoriteIcon from "@assets/icons/favorite_active.svg";
import ResponseIcon from "@assets/icons/response.svg";
import UserIcon from "@assets/icons/user.svg";
import BurgerPicture from "@assets/icons/login_picture.svg";
import { Title } from "components/Typography/Typography";

export const Header: FC<{ className?: string }> = ({ className }) => {
  const { token } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const onMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Wrap className={className}>
        <Link href={"/"} passHref>
          <a style={{ height: "32px" }}>
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
          <Button
            variant="primary"
            href="/posts/new"
            text="Создать объявление"
          />
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
          {menuOpen ? (
            <CloseIcon onClick={onMenuClick} />
          ) : (
            <BurgerIcon onClick={onMenuClick} />
          )}
        </Burger>
      </Wrap>
      {menuOpen && (
        <BurgerMenu>
          {token ? (
            <>
              <Link href="/favorites" passHref>
                <MenuItem>
                  <MenuItemIcon>
                    <FavoriteIcon />
                  </MenuItemIcon>
                  <Title>Закладки</Title>
                </MenuItem>
              </Link>
              <Link href="/responses" passHref>
                <MenuItem>
                  <MenuItemIcon>
                    <ResponseIcon />
                  </MenuItemIcon>
                  <Title>Отклики</Title>
                </MenuItem>
              </Link>
              <Link href="/profile" passHref>
                <MenuItem>
                  <MenuItemIcon>
                    <UserIcon />
                  </MenuItemIcon>
                  <Title>Профиль</Title>
                </MenuItem>
              </Link>
              <Button
                variant="primaryBurger"
                text="Создать объявление"
                margin="16px 0 0"
                href="/posts/new"
              />
            </>
          ) : (
            <>
              <BurgerPicture />
              <Button
                variant="primaryBurger"
                text="Зарегистрироваться"
                margin="36px 0 0"
                href="/auth/signup"
              />
              <Button
                href="/auth/login"
                variant="secondary"
                text="Войти"
                margin="24px 0 0"
              />
            </>
          )}
        </BurgerMenu>
      )}
    </>
  );
};
