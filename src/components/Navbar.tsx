import React from "react";
import "../App.css";
import { DarkModeToggle, Mode  } from "@anatoliygatt/dark-mode-toggle";

interface NavbarProps {
  theme: Mode;
  changeTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <nav className="navbar">
      <div className="title">KHN</div>
       <span
       className="toggle"> <DarkModeToggle
          mode={props.theme}
          dark="Dark"
          light="Light"
          size="sm"
          inactiveTrackColor="#e2e8f0"
          inactiveTrackColorOnHover="#f8fafc"
          inactiveTrackColorOnActive="#cbd5e1"
          activeTrackColor="#334155"
          activeTrackColorOnHover="#1e293b"
          activeTrackColorOnActive="#0f172a"
          inactiveThumbColor="#1e293b"
          activeThumbColor="#e2e8f0"
          onChange={props.changeTheme}
          ariaLabel="Toggle color scheme"
        /></span>
    </nav>
  );
};

export default Navbar;
