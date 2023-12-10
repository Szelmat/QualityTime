import { HourFormatEnum } from "../types/enums/HourFormatEnum";
import { range } from "./Range";

export const getHoursInADay = (format: HourFormatEnum) => {
  if (format === HourFormatEnum.TWENTY_FOUR_HOUR) {
    return range(24).map((hour) => `${hour}:00`);
  } else {
    return [
      ...range(12).map((hour) => `${hour}:00 AM`),
      ...range(12).map((hour) => `${hour}:00 PM`),
    ];
  }
};
