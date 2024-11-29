import React from "react";
import { motion } from "framer-motion";

const GitHub = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src="https://github-readme-stats.vercel.app/api?username=jjaramillo34&show_icons=true&theme=radical"
          alt="GitHub Stats"
          className="w-full rounded-lg shadow-lg"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          src="https://github-readme-streak-stats.herokuapp.com/?user=jjaramillo34&theme=radical"
          alt="GitHub Streak"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=jjaramillo34&layout=compact&theme=radical"
        alt="Top Languages"
        className="w-full md:w-1/2 rounded-lg shadow-lg"
      />
    </motion.div>
  );
};

export default GitHub;
