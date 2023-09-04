import React, { useContext } from "react";
import { themeContext } from "../themeContext/themeContext";
import "./ThemeSwitcher.css";
export const ThemeSwitcher: React.FC = () => {
  const context = useContext(themeContext);
  if (!context) return <p>gggg</p>;
  let { theme } = context;
  const toggleTheme = () => {
    context.setTheme(theme === "light" ? "dark" : "light");
    console.log(context);
    if (context.theme === "dark") {
      return <div id="dark"></div>;
    }
  };
  return (
    <div>
      <button id="button"
        onClick={toggleTheme}
        className={`y ${context.theme === "dark" ? "dark" : "light"}`}
      >
        {context.theme}
      </button>
    </div>
  );
};
