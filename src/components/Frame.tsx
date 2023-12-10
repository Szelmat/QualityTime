import { AppShell, Flex, Switch, Title } from "@mantine/core";
import "@mantine/core/styles/AppShell.css";
import { Calendar } from "./Calendar";
import { ImportMenu } from "./ImportMenu";
import { useContext } from "react";
import { HourFormatContext } from "../contexts/HourFormatContext";
import { HourFormatEnum } from "../types/enums/HourFormatEnum";

export const Frame = () => {
  const { setCurrentHourFormat } = useContext(HourFormatContext);

  return (
    <AppShell header={{ height: 50 }} padding="md">
      <AppShell.Header>
        <Flex justify="space-between" align="center" ml="5px">
          <Title order={1}>QualityTime</Title>

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
      </AppShell.Header>

      <AppShell.Main>
        <Calendar />
      </AppShell.Main>
    </AppShell>
  );
};
