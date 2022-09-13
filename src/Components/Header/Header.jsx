import React from "react";
import "../Header/Header.css";
import { BsMoon } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

const Header = (themeToggle) => {
  const mack = themeToggle.toggle;
  return (
    <>
      <div className="header-container">
        <p className="header">Where in the world?</p>
        <p className="dark-mode" onClick={mack}>
          <BsMoonFill className="dark-moon moon" />
          <BsMoon className="light-moon moon" />
          Dark Mode
        </p>
      </div>
    </>
  );
};

export default Header;
