import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSpring, animated } from "@react-spring/web";
import { ArrowRight, X } from "lucide-react";

import heroImg from "../../assets/img/hero/dark.png";
import heroImgMobile from "../../assets/img/hero/mobile.png";
import Index from "../about/AboutPage";

const Hero = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroContent = {
    heroImage: heroImg,
    heroMobileImage: heroImgMobile,
    heroTitleName: t("heroTitleName").toUpperCase(),
    heroDesignation: t("heroDesignation").toUpperCase(),
    heroDescriptions: t("heroDescriptions"),
    heroBtn: t("heroBtn").toUpperCase(),
  };

  const animateContent = useSpring({
    opacity: isModalOpen ? 0 : 1,
    transform: isModalOpen ? "translateY(-50px)" : "translateY(0px)",
    config: { duration: 300 },
  });

  const animateModal = useSpring({
    opacity: isModalOpen ? 1 : 0,
    transform: isModalOpen ? "translateY(0px)" : "translateY(50px)",
    config: { duration: 300 },
  });

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 80 80"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0h80v80H0z"
            fill="currentColor"
            className="text-gray-50 dark:text-gray-800"
          />
          <path
            d="M0 0h40v40H0z"
            fill="currentColor"
            className="text-[#FFB401] dark:text-[#FFD980] opacity-5"
          />
          <path
            d="M40 40h40v40H40z"
            fill="currentColor"
            className="text-[#FFB401] dark:text-[#FFD980] opacity-5"
          />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen p-8 lg:p-16 max-w-7xl mx-auto">
        <animated.div
          style={animateContent}
          className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
            {heroContent.heroTitleName}
            <span className="block text-[#FFB401] dark:text-[#FFD980] mt-2">
              {heroContent.heroDesignation}
            </span>
          </h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 text-justify">
            {heroContent.heroDescriptions}
          </p>
          <button
            onClick={toggleModal}
            className="bg-[#FFB401] dark:bg-[#FFD980] text-white dark:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FFA000] dark:hover:bg-[#FFECBF] transition-colors duration-300 flex items-center justify-center mx-auto lg:mx-0 shadow-lg hover:shadow-xl"
          >
            <span className="mr-2">{heroContent.heroBtn}</span>
            <ArrowRight size={24} />
          </button>
        </animated.div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <img
            src={heroContent.heroImage}
            alt="Hero"
            className="w-full max-w-lg h-auto rounded-3xl shadow-2xl"
          />
          <img
            src={heroContent.heroMobileImage}
            alt="Hero Mobile"
            className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
          />
        </div>
      </div>

      {/* Modal */}
      <animated.div
        style={animateModal}
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
          isModalOpen ? "" : "pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={toggleModal}
        ></div>
        <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <button
            onClick={toggleModal}
            className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            <X size={24} />
          </button>
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              ABOUT{" "}
              <span className="text-[#FFB401] dark:text-[#FFD980]">ME</span>
            </h2>
            <div className="about-content text-gray-700 dark:text-gray-300">
              <Index />
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Hero;
