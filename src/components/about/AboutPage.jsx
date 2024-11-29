import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import PageTitle from "../common/PageTitle";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import EducationCourses from "./EducationCourses";
import GitHub from "./GitHub";
import Achievements from "./Achievements";

const AboutPage = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-12 space-y-16"
    >
      {/* Title Section */}
      <PageTitle
        title={t("aboutmeTitle1")}
        subtitle={t("aboutmeTitle2")}
        backgroundText={t("aboutmeTitle1")}
      />

      {/* Personal Info Section */}
      <motion.section variants={sectionVariants} className="mb-16">
        <PersonalInfo />
      </motion.section>

      {/* Achievements Section */}
      <motion.section variants={sectionVariants} className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white uppercase">
            {t("achievementsTitle")}
          </h2>
          <div className="w-16 h-1 bg-[#FFB401] mx-auto mt-2"></div>
        </div>
        <Achievements />
      </motion.section>

      {/* Skills Section */}
      <motion.section variants={sectionVariants} className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white uppercase">
            {t("skillsTitle")}
          </h2>
          <div className="w-16 h-1 bg-[#FFB401] mx-auto mt-2"></div>
        </div>
        <Skills />
      </motion.section>

      {/* Resume Section */}
      <motion.section variants={sectionVariants} className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white uppercase">
            {t("aboutmeTitle3")}
          </h2>
          <div className="w-16 h-1 bg-[#FFB401] mx-auto mt-2"></div>
        </div>
        <EducationCourses />
      </motion.section>

      {/* GitHub Stats Section */}
      <motion.section variants={sectionVariants}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white uppercase">
            {t("githubStatsTitle")}
          </h2>
          <div className="w-16 h-1 bg-[#FFB401] mx-auto mt-2"></div>
        </div>
        <GitHub />
      </motion.section>
    </motion.div>
  );
};

export default AboutPage;
