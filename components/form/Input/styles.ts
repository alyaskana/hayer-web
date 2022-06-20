import { Caption_3 } from "components";
import { Colors } from "constants/Colors";
import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 16px;
  background-color: ${Colors.Main.White_gray};
  border-radius: 20px;
  width: 100%;
  border-radius: 12px;
  font-family: "Suisse Intl";
  font-size: 15px;
  line-height: 20px;
  color: ${Colors.Main.Gray_3};
  border: ${(props) =>
    props.error
      ? `1px solid ${Colors.Accent.Red}`
      : `1px solid ${Colors.Main.White_gray}`};
  outline: none;

  ::placeholder {
    color: ${Colors.Main.Gray_1};
  }
`;

export const HintMessage = styled(Caption_3)`
  margin-top: 8px;
  color: ${Colors.Main.Gray_2};
`;

export const ErrorMessage = styled(Caption_3)`
  margin-top: 4px;
  color: ${Colors.Accent.Red};
`;
