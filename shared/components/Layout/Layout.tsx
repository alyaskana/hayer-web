import { FC } from "react";
import { Footer } from "@shared/components";
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
