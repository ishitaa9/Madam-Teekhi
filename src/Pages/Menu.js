import React from "react";
import { MenuList } from "../Helpers/MenuList";
import MenuItem from "../Components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Reviews</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;