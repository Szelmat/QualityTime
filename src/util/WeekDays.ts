import format from "date-fns/format";
import { WeekDay } from "../types/WeekDay";

export const getCurrentWeekDays = () => {
  const result = [];

  const currentDate = new Date();
  const currDayOfWeek = currentDate.getDay();
  const weekStartDay = currentDate.getDate() - (currDayOfWeek - 1);

  for (let i = weekStartDay; i < weekStartDay + 7; i++) {
    const ordinalNumOfDay = i - (weekStartDay - 1);

    const day: WeekDay = {
      weekDayName: format(new Date().setDate(i), "EEEE"),
      date: i,
      today: ordinalNumOfDay === currDayOfWeek,
    };
    result.push(day);
  }
  return result;
};
