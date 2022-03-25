import { FC } from "react";
import { Header } from "@shared/components";

export const Layout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
