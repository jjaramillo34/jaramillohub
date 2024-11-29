import React from "react";
import { motion } from "framer-motion";
import SettingsPanel from "../common/SettingsPanel";

const MainLayout = ({ children }) => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white dark:bg-gray-900"
    >
      <SettingsPanel />
      {children}
    </motion.div>
  );
};

export default MainLayout;
