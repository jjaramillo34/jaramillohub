import React, { useState } from "react";
import lightImage from "../../assets/img/sun.png";
import darkImage from "../../assets/img/moon.png";

const SwitchDark = () => {
// set default theme light
const [isLight, setIsLight] = useState(false);

const handleLabelClick = () => {
  // set theme dark or light as default theme
  if (isLight) {
    localStorage.setItem("theme-color", "light");
    document.querySelector("body").classList.add("light");
    document.querySelector("body").classList.remove("dark");
    console.log("light");
    setIsLight(false);
  } else {
    localStorage.setItem("theme-color", "dark");
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light");
    console.log("dark");
    setIsLight(true);
  }
};

  return (
    <label className={`theme-switcher-label d-flex  ${isLight ? 'active' : "dark"}`}>
      <input
        type="checkbox"
        onClick={handleLabelClick}
        className="theme-switcher"
      />
      <div className="switch-handle">
        <span className="light-text">
          <img src={lightImage} alt="swicher" className="filter_1" />
        </span>
        <span className="dark-text">
          <img src={darkImage} alt="swicher" className="filter_2" />
        </span>
      </div>
    </label>
  );
};

// export default SwitchDark default theme light
export default SwitchDark;


//const handleLabelClick = () => {
//  if (isDark) {
//    localStorage.setItem("theme-color", "dark");
//    document.querySelector("body").classList.add("dark");
//    document.querySelector("body").classList.remove("light");
//    setIsDark(false);
//  } else {
//    localStorage.setItem("theme-color", "light");
//    document.querySelector("body").classList.add("light");
//    document.querySelector("body").classList.remove("dark");
//    setIsDark(true);
//  }
//};

