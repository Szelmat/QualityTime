import { Flex } from "@mantine/core";
import { HoursPane } from "./HoursPane";
import { range } from "../util/Range";

export const Calendar = () => {
  return (
    <Flex direction="row" style={{ width: "100%" }}>
      <HoursPane />
      {range(8).map(_nth => {
        return (
         <Flex direction="column" style={{
            border: "1px solid grey",
            width: "14vw",
          }}>
          Test
         </Flex>
        )
      })} 
    </Flex>
  );
};
