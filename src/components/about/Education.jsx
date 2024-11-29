import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, Building } from "lucide-react";

const Education = () => {
  const { t } = useTranslation();
  const educationContent = [
    {
      year: "2018 - 2022",
      degree: t("educationDegree10"),
      institute: t("educationInstitute10"),
      details: t("educationDetails10"),
    },
    {
      year: "2016 - 2018",
      degree: t("educationDegree20"),
      institute: t("educationInstitute20"),
      details: t("educationDetails20"),
    },
    {
      year: "2022",
      degree: t("educationDegree30"),
      institute: t("educationInstitute30"),
      details: t("educationDetails30"),
    },
  ];

  return (
    <div className="space-y-8">
      {educationContent.map((edu, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="border-l-4 border-[#FFB401] pl-4 py-2"
        >
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
            <Calendar className="w-4 h-4 mr-2 text-[#FFB401]" />
            <span>{edu.year}</span>
          </div>
          <h3 className="text-lg font-bold text-[#FFB401] mb-1">
            {edu.degree}
          </h3>
          <div className="flex items-center text-gray-700 dark:text-gray-300 text-sm mb-2">
            <Building className="w-4 h-4 mr-2" />
            <span>{edu.institute}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {edu.details}
          </p>
          <div className="mt-2 flex items-center text-sm text-gray-600 dark:text-gray-400">
            <GraduationCap className="w-4 h-4 mr-2 text-[#FFB401]" />
            <span>{t("education")}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Education;
