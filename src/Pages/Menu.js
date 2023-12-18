import React from "react";
import { MenuList } from "../Helpers/MenuList";
import MenuItem from "../Components/MenuItem";
import "../styles/Menu.css";
import Teekhi2 from "../assets/teekhi2.png";


function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Reviews <img src={Teekhi2} width={50} height={50} className="teekhi-img-reviews" alt=""/></h1>
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