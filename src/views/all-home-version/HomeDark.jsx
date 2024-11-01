import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  Home,
  User,
  Briefcase,
  BookOpen,
  MessageSquare,
  Mail,
  Settings,
} from "lucide-react";
import { Sun, Moon } from "lucide-react";
import Hero from "../../components/hero/Hero";
import Index from "../../components/about/AboutPage";
import Address from "../../components/Address";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../../components/Contact";
import Social from "../../components/Social";
import Course from "../../components/courses/Course";
import Testimonial from "../../components/Testimonial";
import { useTranslation } from "react-i18next";

import enflag from "../../assets/img/us-flag.png";
import esflag from "../../assets/img/es.png";

export default function HomeDark() {
  const { t, i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    // Apply the initial theme
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const menuItem = [
    { menuName: t("home"), icon: <Home size={24} /> },
    { menuName: t("about"), icon: <User size={24} /> },
    { menuName: t("portfolio1"), icon: <Briefcase size={24} /> },
    { menuName: t("courses"), icon: <BookOpen size={24} /> },
    { menuName: t("testimonial"), icon: <MessageSquare size={24} /> },
    { menuName: t("contact"), icon: <Mail size={24} /> },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsEnglish(lang === "en");
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 8px rgba(255,180,1,0.5)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <motion.button
        onClick={toggleSettings}
        className="fixed right-6 top-6 z-50 bg-gradient-to-r from-[#FFB401] to-[#FF9000] rounded-full p-3 shadow-lg"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <Settings size={24} className="text-white dark:text-gray-800" />
      </motion.button>

      <AnimatePresence>
        {isSettingsOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed right-6 top-20 z-50 bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden w-64 p-4"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              {t("settings")}
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">
                  {t("language")}
                </span>
                <motion.button
                  onClick={() => changeLanguage(isEnglish ? "es" : "en")}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <img
                    src={isEnglish ? enflag : esflag}
                    alt={isEnglish ? "English" : "Español"}
                    className="w-6 h-6 rounded-full"
                  />
                </motion.button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">
                  {t("theme")}
                </span>
                <motion.button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {isDarkMode ? (
                    <Sun
                      size={20}
                      className="text-gray-600 dark:text-gray-300"
                    />
                  ) : (
                    <Moon
                      size={20}
                      className="text-gray-600 dark:text-gray-300"
                    />
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Tabs>
        <div className="header">
          <TabList className="icon-menu revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <Tab
                className="icon-box flex flex-col items-center justify-center"
                key={i}
              >
                <motion.div
                  className="icon-container flex items-center justify-center mb-2"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {item.icon}
                </motion.div>
                <h2 className="text-center">{item.menuName}</h2>
              </Tab>
            ))}
          </TabList>
        </div>

        <div className="tab-panel_list">
          <TabPanel className="home">
            <Hero />
          </TabPanel>

          <TabPanel className="about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  {t("aboutmeTitle1")} <span>{t("aboutmeTitle2")}</span>
                </h1>
                <span className="title-bg">{t("aboutmeTitle3")}</span>
              </div>
              <Index />
            </div>
          </TabPanel>

          <TabPanel className="portfolio professional">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                {t("portfolio.title_my")}{" "}
                <span>{t("portfolio.title_portfolio")}</span>
              </h1>
              <span className="title-bg">{t("portfolio.title_works")}</span>
            </div>
            <Portfolio />
          </TabPanel>

          <TabPanel className="courses">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                {t("mycoursesTitle1")} <span>{t("mycoursesTitle2")}</span>
              </h1>
              <span className="title-bg">{t("mycoursesTitle3")}</span>
            </div>
            <Course />
          </TabPanel>

          <TabPanel className="testimonials">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                {t("mytestimonialsTitle1")}{" "}
                <span>{t("mytestimonialsTitle2")}</span>
              </h1>
              <span className="title-bg">{t("mytestimonialsTitle3")}</span>
            </div>
            <Testimonial />
          </TabPanel>

          <TabPanel className="contact">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                {t("getintouchTitle1")} <span>{t("getintouchTitle2")}</span>
              </h1>
              <span className="title-bg">{t("getintouchTitle3")}</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row">
                <div className="col-12 col-lg-4">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    {t("getintouchTitle4")}
                  </h3>
                  <p className="open-sans-font mb-4">{t("getintouchTitle5")}</p>
                  <Address />
                  <Social />
                </div>
                <div className="col-12 col-lg-8">
                  <Contact />
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
}
