import DESTINATIONS from "@/constants/destinations.constant";
import { TSelectOptions } from "@/types/inputs.types";

export const SELECT_OPTIONS: TSelectOptions<number> = DESTINATIONS.map(
  (destination) => {
    return { label: destination.title, value: destination.id };
  }
);
