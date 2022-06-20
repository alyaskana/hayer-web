import { FC, useState } from "react";
import Link from "next/link";
import {
  Wrap,
  Logo,
  Burger,
  BurgerMenu,
  MenuItem,
  MenuItemIcon,
  MiniLogo,
  HeadTitle,
  FakeBurger,
} from "./styles";
import BurgerIcon from "@assets/icons/burger.svg";
import CloseIcon from "@assets/icons/close_menu.svg";
import FavoriteIcon from "@assets/icons/favorite_active.svg";
import ResponseIcon from "@assets/icons/response.svg";
import UserIcon from "@assets/icons/user.svg";
import BurgerPicture from "@assets/illustrations/login_picture.svg";
import { Title } from "components/Typography/Typography";
import { Button } from "components";
import { useAuth } from "hooks";
import { device } from "styles/breakpoints";
import styled from "styled-components";

type HeaderProps = {
  className?: string;
  title?: string;
  variant?: "miniLogoBurger" | "miniLogoTitle";
};

const MobileHeaderComponent: FC<HeaderProps> = ({
  className,
  title,
  variant,
}) => {
  const { token } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const onMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Wrap className={className}>
        <Link href={"/"} passHref>
          <a style={{ lineHeight: "75%" }}>
            {variant == "miniLogoBurger" || variant == "miniLogoTitle" ? (
              <MiniLogo />
            ) : (
              <Logo />
            )}
          </a>
        </Link>
        {variant == "miniLogoTitle" && <HeadTitle>{title}</HeadTitle>}
        {variant == "miniLogoTitle" ? (
          <FakeBurger />
        ) : (
          <Burger>
            {menuOpen ? (
              <CloseIcon onClick={onMenuClick} />
            ) : (
              <BurgerIcon onClick={onMenuClick} />
            )}
          </Burger>
        )}
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

export const MobileHeader = styled(MobileHeaderComponent)`
  display: none;
  @media ${device.mobile} {
    display: flex;
  }
`;
