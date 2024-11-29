import React from "react";
import { useTranslation } from "react-i18next";

const TranslationDebug = () => {
  const { i18n } = useTranslation();
  const showDebug = process.env.REACT_APP_SHOW_TRANSLATION_DEBUG === "true";

  if (!showDebug) return null;

  return (
    <div className="fixed bottom-0 right-0 max-w-md max-h-48 overflow-auto bg-white/90 dark:bg-gray-800/90 p-2 text-xs rounded-tl-lg shadow-lg">
      <pre className="text-gray-700 dark:text-gray-300">
        {JSON.stringify(i18n.options, null, 2)}
      </pre>
    </div>
  );
};

export default TranslationDebug;
