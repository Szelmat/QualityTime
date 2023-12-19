import { Card, Flex, Paper } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { HourFormatContext } from "../contexts/HourFormatContext";
import { getHoursInADay } from "../util/Hours";

export const HoursPane = () => {
  const { currentHourFormat } = useContext(HourFormatContext);
  const [hours, setHours] = useState(getHoursInADay(currentHourFormat));

  useEffect(() => {
    setHours(getHoursInADay(currentHourFormat));
  }, [currentHourFormat]);

  return (
    <Flex direction="column">
      {hours.map((hourTag) => (
        <Paper key={hourTag} p={0} h={100}>{hourTag}</Paper>
      ))}
    </Flex>
  );
};
