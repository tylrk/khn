import React, { ReactElement } from "react";

interface MenuProps {
    img: ReactElement;
    text: string;
}

export const MenuItems: React.FC<MenuProps> = (props) => {
    return (
        <li className="menu-items">
            <span>{props.img}</span>
            <span>{props.text}</span>
        </li>
    )
};