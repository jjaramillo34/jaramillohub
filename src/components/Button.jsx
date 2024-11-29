import React from "react";
import { motion } from "framer-motion";

export default function Button({ color, onClick, children, className }) {
  return (
    <motion.button
      className={`px-4 py-2 rounded-full transition-colors duration-300 ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
