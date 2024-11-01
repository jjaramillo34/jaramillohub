import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import lightImage from "../../assets/img/sun.png";
import darkImage from "../../assets/img/moon.png";

const SwitchDark = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-color");
    if (savedTheme === "light") {
      setIsLight(false);
      applyTheme(false);
    } else {
      setIsLight(true);
      applyTheme(true);
    }
  }, []);

  const applyTheme = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  const handleToggle = () => {
    setIsLight(!isLight);
    applyTheme(!isLight);
    localStorage.setItem("theme-color", !isLight ? "dark" : "light");
  };

  return (
    <motion.div
      className="relative w-16 h-8 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer"
      onClick={handleToggle}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center"
        animate={{
          x: isLight ? 32 : 0,
          backgroundColor: isLight ? "#FFB401" : "#ffffff",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.img
          src={isLight ? darkImage : lightImage}
          alt={isLight ? "Dark Mode" : "Light Mode"}
          className="w-4 h-4"
          animate={{ rotate: isLight ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SwitchDark;
