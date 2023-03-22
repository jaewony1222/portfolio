import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="head">
        <ul className="menu">
          <li>김 재 원 .</li>
        </ul>
        <ul className="menu">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PROJECTS</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
