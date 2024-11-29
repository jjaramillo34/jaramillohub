import React from "react";
import { motion } from "framer-motion";

const PageTitle = ({ title, subtitle, backgroundText }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative text-center py-12 overflow-hidden"
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
        <span className="text-[8rem] sm:text-[10rem] font-bold text-gray-100 dark:text-gray-800/50 uppercase tracking-wider">
          {backgroundText}
        </span>
      </div>

      {/* Main Title */}
      <div className="relative">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white uppercase tracking-wide">
          <span className="text-[#FFB401]">{title}</span>{" "}
          {subtitle && <span>{subtitle}</span>}
        </h1>
        <div className="w-20 h-1 bg-[#FFB401] mx-auto mt-4"></div>
      </div>
    </motion.div>
  );
};

export default PageTitle;
