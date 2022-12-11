import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  AdvancedRealTimeChart,
  ColorTheme,
} from "react-ts-tradingview-widgets";

const App: React.FC = (props) => {
  const [theme, setTheme] = useState<ColorTheme>("light");

  function changeTheme(): void {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      <Navbar theme={theme} changeTheme={changeTheme} />
      <div className="chart">
        <AdvancedRealTimeChart theme={theme} />
      </div>
    </>
  );
};

export default App;
