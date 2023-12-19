import {
  AppShell,
  Burger,
  CloseButton,
  Flex,
  Title,
} from "@mantine/core";
import "@mantine/core/styles/AppShell.css";
import { Calendar } from "./Calendar";
import { ActionsMenu } from "./ImportMenu";
import { CalendarHeader } from "./CalendarHeader";
import format from "date-fns/format";
import { useDisclosure } from "@mantine/hooks";
import { HourFormatToggleSwitch } from "./HourFormatToggleSwitch";

export const Frame = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      aside={{
        width: 300,
        breakpoint: "sm",
        collapsed: {
          mobile: !opened,
          desktop: !opened,
        },
      }}
    >
      <AppShell.Header>
        <Flex justify="space-between" align="center" ml="5px">
          <Burger opened={opened} onClick={toggle} size="sm" mr={76} />
          <Title order={3}>{format(new Date(), "yyyy LLLL")}</Title>

          <Flex align="center" gap="md" mr="5px">
            <ActionsMenu />
          </Flex>
        </Flex>
        <CalendarHeader />
      </AppShell.Header>

      <AppShell.Aside p="md">
        <CloseButton onClick={() => toggle()} />
        <Flex direction="column" align="center">
          <Flex>
            <HourFormatToggleSwitch label="Hour Format:" />
          </Flex>
        </Flex>
      </AppShell.Aside>

      <AppShell.Main
        style={{
          padding: 0,
          paddingTop: 79,
        }}
      >
        <Calendar />
      </AppShell.Main>
    </AppShell>
  );
};
