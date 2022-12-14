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
    <div className="app" style={{ backgroundColor: theme === "dark" ? "#22303C" : "#fff" }}>
      <Navbar theme={theme} changeTheme={changeTheme} />
      <div className="chart">
        <AdvancedRealTimeChart theme={theme} />
      </div>
    </div>
  );
};

export default App;
