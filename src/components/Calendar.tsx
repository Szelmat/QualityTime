import { Grid } from "@mantine/core";
import { HoursPane } from "./HoursPane";

export const Calendar = () => {
  return (
    <Grid>
      <Grid.Col span={6}>
        <HoursPane />
      </Grid.Col>
      <Grid.Col span={6}></Grid.Col>
    </Grid>
  );
};
