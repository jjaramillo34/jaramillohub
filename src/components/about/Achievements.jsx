import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Award, Code, Users, Trophy } from "lucide-react";

const Achievements = () => {
  const { t } = useTranslation();

  const achievements = [
    {
      icon: <Code className="w-8 h-8" />,
      count: "5+",
      subtitle1: t("achievementsSubTitle10"),
      subtitle2: t("achievementsSubTitle11"),
    },
    {
      icon: <Award className="w-8 h-8" />,
      count: "50+",
      subtitle1: t("achievementsSubTitle20"),
      subtitle2: t("achievementsSubTitle21"),
    },
    {
      icon: <Users className="w-8 h-8" />,
      count: "20+",
      subtitle1: t("achievementsSubTitle30"),
      subtitle2: t("achievementsSubTitle31"),
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      count: "3+",
      subtitle1: t("achievementsSubTitle40"),
      subtitle2: t("achievementsSubTitle41"),
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {achievements.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex justify-center mb-4 text-[#FFB401]">
            {item.icon}
          </div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {item.count}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {item.subtitle1}
            <br />
            {item.subtitle2}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Achievements;
