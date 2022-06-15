import { Dispatch, FC, SetStateAction } from "react";
import { Button, Icon } from "./styles";
import { Colors } from "constants/Colors";
import { Caption_1 } from "components/Typography/Typography";

type FilterProps = {
  onPress: Dispatch<SetStateAction<string[]>>;
  iconPath: string;
  text: string;
  type: "work" | "study" | "events";
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
    <Button onClick={handleFilterPress}>
      <Icon src={iconPath} />
      <Caption_1 color={Colors.Main.Gray_2}>{text}</Caption_1>
    </Button>
  );
};
