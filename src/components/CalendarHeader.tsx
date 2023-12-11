import { Flex, Title, Text } from "@mantine/core";
import { format } from "date-fns";
import { getCurrentWeekDays } from "../util/WeekDays";
import { useState } from "react";
import { WeekDay } from "../types/WeekDay";

export const CalendarHeader = () => {
  const [currentWeekDays] = useState<WeekDay[]>(getCurrentWeekDays());

  return (
    <Flex direction="column">
      <Flex
        align="center"
        justify="center"
        style={{ border: "1px solid black" }}
      >
        <Title order={3}>{format(new Date(), "yyyy LLLL")}</Title>
      </Flex>
      <Flex justify="space-evenly">
        {currentWeekDays.map((weekDay) => (
          <Flex direction="column" justify="center" align="center">
            <Title order={4}>{weekDay.date}</Title>
            <Text>{weekDay.weekDayName}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
