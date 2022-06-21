import styled from "styled-components";
import { Colors } from "constants/Colors";
import { device } from "styles/breakpoints";

const DefaultButton = styled.button<{ danger?: boolean; margin?: string }>`
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  transition: background-color 0.2s;
  border-radius: 90px;
  margin: ${(props) => props.margin};
  width: 100%;

  :disabled {
    cursor: default;
    color: ${Colors.Main.White_gray};
    background-color: ${Colors.Main.Gray_1};
    svg {
      fill: ${Colors.Main.White_gray};
    }
  }
`;

export const BigPrimaryButton = styled(DefaultButton)`
  width: 100%;
  padding: 62.5px 40px;
  background-color: ${Colors.Main.Primary};
  color: ${Colors.Main.White};

  :hover {
    background-color: ${Colors.Main.PrimaryHover};
  }
  :active {
    background-color: ${Colors.Main.PrimaryPressed};
  }

  @media ${device.mobile} {
    height: auto;
    padding: 30px 36px;
  }
`;

export const PrimaryButton = styled(DefaultButton)`
  height: 68px;
  padding: 24px 36px;
  background-color: ${Colors.Main.Primary};
  color: ${Colors.Main.White};

  :hover {
    background-color: ${Colors.Main.PrimaryHover};
  }
  :active {
    background-color: ${Colors.Main.PrimaryPressed};
  }
`;

export const PrimaryBurgerButton = styled(DefaultButton)`
  padding: 30px;
  background-color: ${Colors.Main.Primary};
  color: ${Colors.Main.White};
  width: 100%;
`;

export const SecondaryButton = styled(DefaultButton)`
  height: 48px;
  padding: 16px;
  min-width: 340px;
  background-color: ${Colors.Main.White_gray};
  color: ${(props) => (props.danger ? Colors.Accent.Red : Colors.Main.Primary)};

  svg {
    path {
      fill: ${Colors.Main.Primary};
    }
  }

  :hover {
    background-color: ${Colors.Main.White_gray};
  }
  :active {
    background-color: "#E4E4E4";
  }
  :disabled {
    background-color: ${Colors.Main.White_gray};
    color: ${Colors.Main.Gray_2};
  }
`;

export const NavButton = styled(DefaultButton)`
  padding: 8px 20px;
  background-color: ${Colors.Main.Gray_1};

  svg {
    fill: ${Colors.Main.Gray_3};
  }

  :hover {
    background-color: "#E4E4E4";
  }
  :active {
    background-color: ${Colors.Main.Gray_1};
  }
`;
