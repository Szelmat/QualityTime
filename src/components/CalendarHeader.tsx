import { Flex } from "@mantine/core";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

export const CalendarHeader = () => {
  return (
    <Flex direction="column">
      <Flex
        align="center"
        justify="center"
        style={{ border: "1px solid black" }}
      >
        {format(new Date(), "yyyy LLLL", { locale: enUS })}
      </Flex>
    </Flex>
  );
};
