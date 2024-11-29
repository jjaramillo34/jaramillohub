import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Calendar, Award, Building, ExternalLink } from "lucide-react";

const Certifications = () => {
  const { t } = useTranslation();
  const certificationsContent = [
    {
      year: "2022",
      title: t("coursesTitle1"),
      institute: t("coursesInstitute1"),
      details: t("coursesDetails1"),
      link: "https://www.coursera.org/",
    },
    // Add more certifications here
  ];

  return (
    <div className="space-y-8">
      {certificationsContent.map((cert, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="border-l-4 border-[#FFB401] pl-4 py-2"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
            <h3 className="text-lg font-bold text-[#FFB401]">{cert.title}</h3>
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mt-1 md:mt-0">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{cert.year}</span>
            </div>
          </div>
          <div className="flex items-center mb-2 text-gray-700 dark:text-gray-300 text-sm">
            <Building className="w-4 h-4 mr-2" />
            <span>{cert.institute}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
            {cert.details}
          </p>
          {cert.link && (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#FFB401] hover:underline"
              whileHover={{ x: 5 }}
            >
              {t("viewCertificate")}
              <ExternalLink className="w-4 h-4 ml-1" />
            </motion.a>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Certifications;
