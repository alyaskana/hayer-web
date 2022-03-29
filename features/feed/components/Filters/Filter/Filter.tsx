import { Dispatch, FC, SetStateAction } from "react";
import { Button, Icon, StyledCaption_1 } from "./styles";
import { Colors } from "@shared/constants/Colors";

type FilterProps = {
  onPress: Dispatch<SetStateAction<string[]>>;
  iconPath: string;
  text: string;
  type: "work" | "study" | "event";
  isActive: boolean;
};

export const Filter: FC<FilterProps> = ({
  onPress,
  iconPath,
  text,
  type,
  isActive,
}) => {
  const handleFilterPress = () => {
    onPress((prevState) =>
      isActive
        ? prevState.filter((stateType: string) => stateType != type)
        : prevState.concat(type)
    );
  };

  return (
    <div onClick={handleFilterPress}>
      <Button>
        <Icon src={iconPath} />
        <StyledCaption_1>{text}</StyledCaption_1>
      </Button>
    </div>
  );
};
