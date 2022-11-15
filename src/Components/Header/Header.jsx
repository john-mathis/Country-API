import React, { useContext } from "react";
import "../Header/Header.css";
import { BsMoon } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import { ThemeContext } from "../../App";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="header-container">
        <p className="header">Where in the world?</p>
        <p
          className="dark-mode-toggle"
          onClick={() => {
            toggleTheme();
          }}
        >
          <BsMoonFill
            className={
              theme === "light" ? "dark-moon moon hide" : "dark-moon moon"
            }
          />
          <BsMoon
            className={
              theme === "dark" ? "light-moon moon hide" : "light-moon moon"
            }
          />
          Dark Mode
        </p>
      </div>
    </>
  );
};

export default Header;
