import styled from "styled-components";
import { FC, HTMLProps } from "react";
import { space } from "styled-system";

export const FieldSet: FC<HTMLProps<HTMLDivElement>> = styled.div`
  margin-bottom: 32px;
  position: relative;
  ${space}
`;
