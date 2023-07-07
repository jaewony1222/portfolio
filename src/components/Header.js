import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="head">
        <ul className="menu1">
          <li>KJW.</li>
        </ul>
        <ul className="menu">
          <li>HOME</li>
          <li>PROFILE</li>
          <li>PROJECTS</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
