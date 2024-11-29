import React from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Sun, Moon } from "lucide-react";

const IconButton = ({ onClick, icon: Icon, isActive }) => (
  <motion.button
    onClick={onClick}
    className={`
      flex items-center justify-center w-12 h-12 rounded-full 
      ${
        isActive
          ? "bg-gradient-to-r from-[#FFB401] to-[#FF9000] text-white"
          : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
      }
      hover:shadow-lg hover:shadow-[#FFB401]/20
      border border-gray-100 dark:border-gray-700
      transition-all duration-200
    `}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {Icon}
  </motion.button>
);

const SettingsPanel = ({
  isDarkMode,
  toggleTheme,
  isSettingsOpen,
  toggleSettings,
  isEnglish,
  changeLanguage,
}) => {
  const { t } = useTranslation();

  const panelVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      <motion.button
        onClick={toggleSettings}
        className="fixed right-6 top-6 z-50 p-3 rounded-full
          bg-gradient-to-r from-[#FFB401] to-[#FF9000]
          shadow-lg shadow-[#FFB401]/20
          hover:shadow-[#FFB401]/30
          transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={t("common.settings")}
      >
        <Settings className="w-6 h-6 text-white" />
      </motion.button>

      <AnimatePresence mode="wait">
        {isSettingsOpen && (
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-24 top-6 z-50 w-72
              bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              rounded-2xl shadow-xl
              shadow-gray-200/50 dark:shadow-gray-900/50
              backdrop-blur-lg bg-opacity-95 dark:bg-opacity-95"
          >
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t("common.settings")}
              </h3>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {t("common.language")}
                </span>
                <IconButton
                  onClick={() => changeLanguage(isEnglish ? "es" : "en")}
                  icon={
                    <span className="text-sm font-medium">
                      {isEnglish ? "EN" : "ES"}
                    </span>
                  }
                  isActive={true}
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {t("common.theme")}
                </span>
                <IconButton
                  onClick={toggleTheme}
                  icon={isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                  isActive={true}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SettingsPanel;
