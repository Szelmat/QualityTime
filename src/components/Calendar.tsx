import { Flex } from "@mantine/core";
import { HoursPane } from "./HoursPane";
import { range } from "../util/Range";

export const Calendar = () => {
  return (
    <Flex direction="row" style={{ width: "100%" }}>
      <HoursPane />
      {range(7).map((_nth) => {
        return (
          <Flex
            direction="column"
            style={{
              border: "1px solid grey",
            }}
          >
            {range(24).map((_i) => (
              <Flex direction="column" style={{
                borderBottom: "2px solid grey",
                height: 100,
                width: '13.9vw',
              }}>
                {range(4).map((_j) => (
                  <Flex
                    style={{
                      height: '25px',
                      borderBottom: "1px dotted grey",
                    }}
                  ></Flex>
                ))}
              </Flex>
            ))}
          </Flex>
        );
      })}
    </Flex>
  );
};
