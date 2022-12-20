import React from "react";
import "../App.css";
import { DarkModeToggle, Mode } from "@anatoliygatt/dark-mode-toggle";
import { AiOutlineMenu } from 'react-icons/ai';

interface NavbarProps {
  theme: Mode;
  changeTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <nav className="navbar">
        <div className="menu-container">
          <div className="menu-img"><AiOutlineMenu size="30" /></div>
      </div>
      <div className="title">KHN</div>
      <div>
        <DarkModeToggle
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
        />
      </div>
    </nav>
  );
};

export default Navbar;