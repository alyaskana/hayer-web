import styled from "styled-components";
import { Colors } from "constants/Colors";

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

  :disabled {
    color: ${Colors.Main.White_gray};
    background-color: ${Colors.Main.Gray_1};
    svg {
      fill: ${Colors.Main.White_gray};
    }
  }
`;

export const BigPrimaryButton = styled(DefaultButton)`
  height: 145px;
  width: 100%;
  padding: 40px;
  background-color: ${Colors.Main.Primary};
  color: ${Colors.Main.White};

  :hover {
    background-color: ${Colors.Main.PrimaryHover};
  }
  :active {
    background-color: ${Colors.Main.PrimaryPressed};
  }
`;

export const PrimaryButton = styled(DefaultButton)`
  height: 80px;
  padding: 30px;
  min-width: 290px;
  background-color: ${Colors.Main.Primary};
  color: ${Colors.Main.White};

  :hover {
    background-color: ${Colors.Main.PrimaryHover};
  }
  :active {
    background-color: ${Colors.Main.PrimaryPressed};
  }
`;

export const SecondaryButton = styled(DefaultButton)`
  height: 48px;
  padding: 16px;
  min-width: 340px;
  background-color: ${Colors.Main.White_gray};
  color: ${(props) => (props.danger ? Colors.Accent.Red : Colors.Main.Primary)};

  svg {
    fill: ${Colors.Main.Primary};
  }

  :hover {
    background-color: ${Colors.Main.White_gray};
  }
  :active {
    background-color: "#E4E4E4";
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
