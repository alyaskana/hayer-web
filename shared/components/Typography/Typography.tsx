import { FC } from "react";
import styled from "styled-components";
import { Colors } from "../../constants/Colors";
import { space } from "styled-system";

const Base = styled.div`
  ${space};
`;

// const TextComponent: FC<{ color?: string }> = ({
//   children,
//   color,
//   ...props
// }) => (
//   <Base color={color} {...props}>
//     {children}
//   </Base>
// );

export const Title = styled(Base)`
  font-family: "Suisse Intl Book";
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${(props) => props.color || Colors.Main.Gray_3};
`;

export const Headline = styled(Base)`
  font-family: "Suisse Intl Book";
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.015em;
  color: ${(props) => props.color || Colors.Main.Gray_3};
`;

export const Subtitle = styled(Base)`
  font-family: "Suisse Intl";
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.015em;
  font-weight: 600;
  color: ${(props) => props.color || Colors.Main.Gray_3};
`;

export const Text = styled(Base)`
  font-family: "Suisse Intl";
  font-size: 15px;
  line-height: 20px;
  color: ${(props) => props.color || Colors.Main.Gray_3};
`;

export const Caption_1 = styled(Base)`
  font-family: "Suisse Intl Book";
  font-size: 15px;
  line-height: 16px;
  color: ${(props) => props.color || Colors.Main.Gray_3};
`;

export const Caption_2 = styled(Base)`
  font-family: "Suisse Intl Book";
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => props.color || Colors.Main.Gray_2};
`;

export const Caption_3 = styled(Base)`
  font-family: "Suisse Intl Book";
  font-size: 11px;
  line-height: 14px;
  color: ${(props) => props.color || Colors.Main.Gray_2};
`;
