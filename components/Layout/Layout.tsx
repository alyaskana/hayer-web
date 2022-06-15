import { FC } from "react";
import { Footer } from "components";
import { Main, Wrap, StyledHeader } from "./styles";

export const Layout: FC = ({ children }) => {
  return (
    <Wrap>
      <StyledHeader />
      <Main>{children}</Main>
      {/* <Footer /> */}
    </Wrap>
  );
};
