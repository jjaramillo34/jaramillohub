import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

const NotFound = () => {
  const { t } = useTranslation();
  const textRefs = {
    title: useRef(null),
    subtitle: useRef(null),
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRefs.title.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(textRefs.subtitle.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center space-y-8">
        <h1 ref={textRefs.title} className="text-6xl font-bold text-[#FFB401]">
          {t("404Error")}
        </h1>
        <p
          ref={textRefs.subtitle}
          className="text-xl text-gray-600 dark:text-gray-400"
        >
          {t("notFoundMessage")}
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-[#FFB401] to-[#FF9000] 
            text-white rounded-full hover:shadow-lg hover:shadow-[#FFB401]/20 
            transition-all duration-300"
        >
          {t("notFoundButton")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
