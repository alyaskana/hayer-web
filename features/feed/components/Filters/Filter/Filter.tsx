import { Dispatch, FC, SetStateAction } from "react";
import { Caption_1 } from "@shared/components/Typography/Typography";
import { Button, Icon } from "./styles";
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
        <Caption_1 style={{ color: Colors.Main.Gray_2 }}>{text}</Caption_1>
      </Button>
    </div>
  );
};
