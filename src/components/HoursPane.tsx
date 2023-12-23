import { Flex } from "@mantine/core";
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
        <Flex direction="column" justify="space-around" key={hourTag} style={{
          alignSelf: 'center',
          padding: 0,
          height: 100,
          borderBottom: '1px solid grey',
        }}>{hourTag}</Flex>
      ))}
    </Flex>
  );
};
