import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import colors from "../../colors.json";

const SwitchLanguage = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
  ];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem("language", langCode);
  };

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors
            ${
              currentLang === lang.code
                ? "bg-gradient-to-r from-[#FFB401] to-[#FF9000] text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            } hover:shadow-md`}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          title={`Switch to ${lang.label}`}
        >
          {lang.code.toUpperCase()}
        </motion.button>
      ))}
    </div>
  );
};

export default SwitchLanguage;
