import { Dispatch, FC, SetStateAction } from "react";
import { Filter } from "./Filter/Filter";
import { FilterGroup } from "./styles";

type FitersProps = {
  activeFilters: string[];
  setActiveFilters: Dispatch<SetStateAction<string[]>>;
};

export const Filters: FC<FitersProps> = ({
  activeFilters,
  setActiveFilters,
}) => {
  const isActive = (type: any) => {
    return activeFilters.includes(type);
  };

  return (
    <FilterGroup>
      <View style={{ marginRight: 4, flex: 1 }}>
        <Filter
          onPress={setActiveFilters}
          iconPath={
            isActive("work")
              ? require("~/assets/images/work_active.png")
              : require("~/assets/images/work_unactive.png")
          }
          text="Работа"
          type="work"
          isActive={isActive("work")}
        />
      </View>
      <View style={{ marginRight: 4, flex: 1 }}>
        <Filter
          onPress={setActiveFilters}
          iconPath={
            isActive("study")
              ? require("~/assets/images/study_active.png")
              : require("~/assets/images/study_unactive.png")
          }
          text="Учеба"
          type="study"
          isActive={isActive("study")}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Filter
          onPress={setActiveFilters}
          iconPath={
            isActive("event")
              ? require("~/assets/images/event_active.png")
              : require("~/assets/images/event_unactive.png")
          }
          text="Ивенты"
          type="event"
          isActive={isActive("event")}
        />
      </View>
    </FilterGroup>
  );
};
