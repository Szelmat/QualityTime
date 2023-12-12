import { Button, Flex, Menu } from "@mantine/core";
import {
  IconBrandGoogle,
  IconBrandOffice,
  IconFileImport,
  IconUpload,
} from "@tabler/icons-react";
import { ComingSoonBadge } from "./ComingSoonBadge";

export const ActionsMenu = () => {
  return (
    <>
      <Menu>
        <Menu.Target>
          <Button leftSection={<IconFileImport size={18} />} size="sm">
            Import
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item disabled>
            <Flex align="center" gap="md">
              <IconUpload />
              Upload From My Computer
              <ComingSoonBadge />
            </Flex>
          </Menu.Item>

          <Menu.Divider />

          <Menu.Item disabled>
            <Flex align="center" gap="md">
              <IconBrandGoogle />
              Connect Google Calendar
              <ComingSoonBadge />
            </Flex>
          </Menu.Item>

          <Menu.Item disabled>
            <Flex align="center" gap="md">
              <IconBrandOffice />
              Connect Microsoft Office
              <ComingSoonBadge />
            </Flex>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};
