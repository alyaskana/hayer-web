import { FC, ReactNode } from "react";
import { Footer } from "components";
import { Header } from "components";
import { Main, Wrap } from "./styles";

type LayoutProps = {
  children: ReactNode;
  title?: string;
  headerVariant?: "default" | "miniLogoBurger" | "miniLogoTitle";
};

export const Layout: FC<LayoutProps> = ({ children, title, headerVariant }) => {
  return (
    <Wrap>
      <Header variant={headerVariant} title={title} mb="32px" />
      <Main>{children}</Main>
      {/* <Footer /> */}
    </Wrap>
  );
};
