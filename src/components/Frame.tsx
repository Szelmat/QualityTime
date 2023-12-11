import { AppShell, Flex, Switch, Title } from "@mantine/core";
import "@mantine/core/styles/AppShell.css";
import { Calendar } from "./Calendar";
import { ImportMenu } from "./ImportMenu";
import { useContext } from "react";
import { HourFormatContext } from "../contexts/HourFormatContext";
import { HourFormatEnum } from "../types/enums/HourFormatEnum";
import { CalendarHeader } from "./CalendarHeader";

export const Frame = () => {
  const { setCurrentHourFormat } = useContext(HourFormatContext);

  return (
    <AppShell padding="md">
      <AppShell.Header>
        <Flex justify="space-between" align="center" ml="5px">
          <Title order={3}>QualityTime</Title>

          <Flex align="center" gap="md" mr="5px">
            <Switch
              size="lg"
              onLabel="24H"
              offLabel="12H"
              defaultChecked
              onChange={({ target: { checked } }) => {
                checked
                  ? setCurrentHourFormat(HourFormatEnum.TWENTY_FOUR_HOUR)
                  : setCurrentHourFormat(HourFormatEnum.TWELVE_HOUR);
              }}
            />
            <ImportMenu />
          </Flex>
        </Flex>
        <CalendarHeader />
      </AppShell.Header>

      <AppShell.Main
        style={{
          padding: 0,
          paddingTop: 120,
        }}
      >
        <Calendar />
      </AppShell.Main>
    </AppShell>
  );
};
