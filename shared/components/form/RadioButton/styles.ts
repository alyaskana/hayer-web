import styled from "styled-components";
import CheckMark from "@assets/icons/check_mark.svg";
import { Colors } from "@shared/constants/Colors";

export const RadioButtonWrap = styled.div`
  display: flex;
  flex-direction: "row-reverse";
  border-radius: 10px;
  background: ${Colors.Main.White_gray};
  padding: 0 12px;
  margin-top: 8px;
`;

export const StyledInput: any = styled.input`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  &:checked ~ label,
  &:not(:checked) ~ label {
    position: relative;
    width: 100%;
    padding-right: 28px;
    cursor: pointer;
    display: inline-block;
    color: #666;

    & > div {
      line-height: 72px;
    }
  }
  &:checked ~ label:before,
  &:not(:checked) ~ label:before {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background: #fff;
  }
  &:checked ~ label:after,
  &:not(:checked) ~ label:after {
    content: "";
    width: 24px;
    height: 24px;
    background-image: url("/assets/icons/check_mark.svg");
    background-size: contain;
    position: absolute;
    right: 4px;
    top: 50%;
    border-radius: 100%;
    transition: transform 0.2s ease;
  }
  &:not(:checked) ~ label:after {
    opacity: 0;
    transform: scale(0) translateY(-50%);
  }
  &:checked ~ label:after {
    opacity: 1;
    transform: scale(1) translateY(-50%);
  }
`;
