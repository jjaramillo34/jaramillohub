"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  Home,
  User,
  Briefcase,
  BookOpen,
  MessageSquare,
  Mail,
  Globe,
} from "lucide-react";
import Hero from "../../components/hero/Hero";
import Index from "../../components/about/AboutPage";
import Address from "../../components/Address";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../../components/Contact";
import Social from "../../components/Social";
import Course from "../../components/courses/Course";
import Testimonial from "../../components/Testimonial";
import SwitchDark from "../../components/switch/SwitchDark";
import { useTranslation } from "react-i18next";

import enflag from "../../assets/img/us-flag.png";
import esflag from "../../assets/img/es.png";

const locales = {
  en: {
    title: "English",
    flag: enflag,
    rtl: false,
    code: "en",
    active: true,
    default: true,
    direction: "ltr",
    icon: "us",
    name: "English",
    translations: { en: "English", es: "Spanish" },
  },
  es: {
    title: "Español",
    flag: esflag,
    rtl: false,
    code: "es",
    active: true,
    default: false,
    direction: "ltr",
    icon: "es",
    name: "Spanish",
    translations: { en: "Inglés", es: "Español" },
  },
};

export default function HomeDark() {
  const { t, i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(true);

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
    setIsEnglish(!isEnglish);
  };

  const toggleLanguage = () => {
    changeLanguage(isEnglish ? "es" : "en");
  };

  return (
    <div className="yellow">
      <div className="lang-switcher">
        <motion.div
          className="lang-switcher__toggle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2"
          >
            <img
              src={isEnglish ? enflag : esflag}
              alt={isEnglish ? "English" : "Español"}
              className="w-12 h-10"
            />
          </button>
        </motion.div>
      </div>

      <SwitchDark />

      <Tabs>
        <div className="header">
          <TabList className="icon-menu revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <Tab
                className="icon-box flex flex-col items-center justify-center"
                key={i}
              >
                <div className="icon-container flex items-center justify-center mb-2">
                  {item.icon}
                </div>
                <h2 className="text-center">{item.menuName}</h2>
              </Tab>
            ))}
          </TabList>
        </div>

        <div className="tab-panel_list">
          <TabPanel className="home">
            <div
              className="container-fluid main-container container-home p-0"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block"></div>
              <Hero />
            </div>
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
