import { Flex, Title, Text } from "@mantine/core";
import { getCurrentWeekDays } from "../util/WeekDays";
import { useState } from "react";
import { WeekDay } from "../types/WeekDay";

export const CalendarHeader = () => {
  const [currentWeekDays] = useState<WeekDay[]>(getCurrentWeekDays());

  return (
    <Flex direction="column">
      <Flex justify="space-evenly">
        {currentWeekDays.map((weekDay) => (
          <Flex direction="column" justify="center" align="center">
            <Title c={weekDay.today ? "blue" : undefined} order={4}>
              {weekDay.date}
            </Title>
            <Text c={weekDay.today ? "blue" : undefined} size="xs">
              {weekDay.weekDayName}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
