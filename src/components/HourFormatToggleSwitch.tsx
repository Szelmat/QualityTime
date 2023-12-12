import { useContext } from "react";
import { HourFormatContext } from "../contexts/HourFormatContext";
import { Switch } from "@mantine/core";
import { HourFormatEnum } from "../types/enums/HourFormatEnum";

export const HourFormatToggleSwitch = (props: { label?: string }) => {
  const { currentHourFormat, setCurrentHourFormat } =
    useContext(HourFormatContext);

  return (
    <Switch
      size="lg"
      onLabel="24H"
      offLabel="12H"
      checked={currentHourFormat === HourFormatEnum.TWENTY_FOUR_HOUR}
      label={props.label}
      labelPosition="left"
      onChange={({ target: { checked } }) => {
        checked
          ? setCurrentHourFormat(HourFormatEnum.TWENTY_FOUR_HOUR)
          : setCurrentHourFormat(HourFormatEnum.TWELVE_HOUR);
      }}
    />
  );
};
