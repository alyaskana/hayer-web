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
      <Filter
        onPress={setActiveFilters}
        iconPath={
          isActive("work")
            ? "/assets/icons/work_active.svg"
            : "/assets/icons/work_unactive.svg"
        }
        text="Работа"
        type="work"
        isActive={isActive("work")}
      />
      <Filter
        onPress={setActiveFilters}
        iconPath={
          isActive("study")
            ? "/assets/icons/study_active.svg"
            : "/assets/icons/study_unactive.svg"
        }
        text="Учеба"
        type="study"
        isActive={isActive("study")}
      />
      <Filter
        onPress={setActiveFilters}
        iconPath={
          isActive("events")
            ? "/assets/icons/event_active.svg"
            : "/assets/icons/event_unactive.svg"
        }
        text="Ивенты"
        type="events"
        isActive={isActive("events")}
      />
    </FilterGroup>
  );
};
