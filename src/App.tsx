import React from "react";
import "./App.css";
import { Frame } from "./components/Frame";
import { HourFormatContextProvider } from "./contexts/HourFormatContext";

function App() {
  return (
    <HourFormatContextProvider>
      <Frame />
    </HourFormatContextProvider>
  );
}

export default App;
