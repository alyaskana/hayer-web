import { FC } from "react";
import { Footer } from "components";
import { Header } from "components";
import { Main, Wrap } from "./styles";

export const Layout: FC = ({ children }) => {
  return (
    <Wrap>
      <Header mb="32px" />
      <Main>{children}</Main>
      {/* <Footer /> */}
    </Wrap>
  );
};
