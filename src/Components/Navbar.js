import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt=""/>
        <h3 className="header">Madam Teekhi</h3>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/reviews"> Reviews </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/reviews"> Reviews </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
        <span className="material-symbols-outlined" id="btnMenu">
          menu
        </span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;