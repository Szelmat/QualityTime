import React, { createContext, useState } from "react";
import { HourFormatEnum } from "../types/enums/HourFormatEnum";

export const HourFormatContext = createContext({
  currentHourFormat: HourFormatEnum.TWENTY_FOUR_HOUR,
  setCurrentHourFormat: (format: HourFormatEnum) => {},
});

export const HourFormatContextProvider = (props: {
  children?: React.ReactNode;
}) => {
  const [currentHourFormat, setCurrentHourFormat] = useState<HourFormatEnum>(
    HourFormatEnum.TWENTY_FOUR_HOUR
  );

  return (
    <HourFormatContext.Provider
      value={{
        currentHourFormat,
        setCurrentHourFormat,
      }}
    >
      {props.children}
    </HourFormatContext.Provider>
  );
};
