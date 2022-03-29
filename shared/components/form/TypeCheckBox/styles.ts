import styled from "styled-components";
import { Colors } from "@shared/constants/Colors";
import CheckMark from "@assets/icons/check_mark.svg";

export const CheckBoxItem = styled.div<{
  backgroundColor: string;
  active: boolean;
}>`
  background-color: ${(props) =>
    props.active ? props.backgroundColor : Colors.Main.White_gray};
  padding: 18px 12px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  margin-top: 8px;
  transition: background-color 0.2s ease;

  & * {
    transition: stroke 0.2s ease, fill 0.2s ease;
  }
`;

export const IconWrap = styled.div<{ active: boolean }>`
  margin-right: 12px;
  width: 32px;
  height: 32px;

  & circle {
    fill: ${(props) => (props.active ? undefined : Colors.Main.Gray_1)};
  }
`;

export const StyledCheckMark = styled(CheckMark)<{
  fillColor: string;
  active: boolean;
}>`
  display: ${(props) => (props.active ? "block" : "none")};
  margin-left: auto;
  width: 32px;
  height: 32px;

  & > path {
    stroke: ${(props) => props.fillColor};
  }
`;

export const HiddenCheckBox = styled.input`
  display: none;
`;
