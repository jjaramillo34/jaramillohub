import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import lightImage from "../../assets/img/sun.png";
import darkImage from "../../assets/img/moon.png";
import colors from "../../colors.json";

const SwitchDark = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Update document class and localStorage
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Add system theme change listener
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [isDark]);

  return (
    <motion.div
      className="relative w-16 h-8 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer"
      onClick={() => setIsDark(!isDark)}
      whileTap={{ scale: 0.95 }}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <motion.div
        className="absolute top-1 left-1 w-6 h-6 rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: isDark ? 32 : 0,
          backgroundColor: isDark ? colors.theme.primary : "#ffffff",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.img
          src={isDark ? darkImage : lightImage}
          alt={isDark ? "Dark Mode" : "Light Mode"}
          className="w-4 h-4"
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SwitchDark;
