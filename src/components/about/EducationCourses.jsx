import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Education from "./Education";
import Experience from "./Experience";

const EducationCourses = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          {t("educationTitle2")}
        </h2>
        <Education />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          {t("experienceTitle")}
        </h2>
        <Experience />
      </motion.div>
    </div>
  );
};

export default EducationCourses;
