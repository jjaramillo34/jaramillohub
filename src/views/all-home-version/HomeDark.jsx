import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Hero from "../../components/hero/Hero";
import Index from "../../components/about/AboutPage";
import Address from "../../components/Address";
import Portfolio from "../../components/portfolio/Portfolio";
//import Blog from "../../components/blog/Blog";
import Contact from "../../components/Contact";
import Social from "../../components/Social";
import Course from "../../components/courses/Course";
import Testimonial from "../../components/Testimonial";
import SwitchDark from "../../components/switch/SwitchDark";
import { useTranslation } from "react-i18next";
// import spring for animation
import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

import enflag from "../../assets/img/us-flag.png";
import esflag from "../../assets/img/es.png";

// create a list of languages with their respective flags
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

const HomeDark = () => {
  const { t, i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(true);
  const [isSpanish, setIsSpanish] = useState(false);

  // create menu items array for english and spanish languages
  const menuItem = [
    { menuName: t("home"), icon: "fa-home" },
    { menuName: t("about"), icon: "fa-user" },
    { menuName: t("portfolio1"), icon: "fa-briefcase" },
    { menuName: t("courses"), icon: "fa-book" },
    { menuName: t("testimonial"), icon: "fa-comment" },
    { menuName: t("contact"), icon: "fa-envelope" },
  ];

  // create a function to change the language
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsEnglish(!isEnglish);
  };

  // create a function to toggle the language
  const toggleLanguage = () => {
    if (isEnglish) {
      changeLanguage("es");
    } else {
      changeLanguage("en");
    }
  };

  const handleLanguage = () => {
    toggleLanguage();
  };

  // create a slider to change the language when the user clicks on the flag
  const bind = useDrag(({ down }) => {
    if (!down) {
      handleLanguage();
    }
  });

  const left = isEnglish ? "0" : "50%";
  const right = isSpanish ? "0" : "50%";

  // animate the language switcher
  const animate = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 2000,
      animation: "easeIn",
      type: "spring",
    },
  });

  const animateTitle = useSpring({
    from: { opacity: 0, transform: "translateY(-100%)" },
    to: { opacity: 1, transform: "translateY(0%)" },
    config: { duration: 2000 },
  });

  const animateSubtitle = useSpring({
    from: { opacity: 0, transform: "translateY(100%)" },
    to: { opacity: 1, transform: "translateY(0%)" },
    config: { duration: 2000 },
  });

  document.querySelector("body").classList.remove("rtl");
  document.querySelector("body").classList.add("light");

  return (
    <div className="yellow">
      <div className="lang-switcher">
        <div className="lang-switcher__toggle"></div>
        <div className="lang-switcher__list">
          <animated.div
            style={animate}
            className="lang-switcher__item"
            {...bind()}
          >
            {isEnglish ? (
              <animated.div style={{ left: left }} className="flag-icon">
                <img
                  src={locales.en.flag}
                  alt={locales.en.title}
                  onClick={handleLanguage}
                  height="64"
                  width="64"
                />
                <span>&nbsp;&nbsp;&nbsp;</span>
                <span>{locales.en.title}</span>
              </animated.div>
            ) : (
              <div className="flag-icon">
                <img
                  src={locales.es.flag}
                  alt={locales.es.title}
                  onClick={handleLanguage}
                  height="64"
                  width="64"
                />
                <span>&nbsp;&nbsp;&nbsp;</span>
                <span>{locales.es.title}</span>
              </div>
            )}
          </animated.div>
        </div>
      </div>

      <SwitchDark />
      {/* End Switcher */}
      <Tabs>
        <div className="header">
          <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <Tab className="icon-box" key={i}>
                <i className={`fa ${item.icon}`}></i>
                <h2>{item.menuName}</h2>
              </Tab>
            ))}
          </TabList>
        </div>
        {/* End Menu Content */}

        <div className="tab-panel_list">
          {/* Hero Content Starts */}
          <TabPanel className="home ">
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block"></div>
              <Hero />
            </div>
          </TabPanel>
          {/* Hero Content Ends */}

          {/* About Content Starts */}
          <TabPanel className="about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <animated.h1 style={animateTitle}>
                  {t("aboutmeTitle1")} <span>{t("aboutmeTitle2")}</span>
                </animated.h1>
                <animated.span style={animateSubtitle} className="title-bg">
                  {t("aboutmeTitle3")}
                </animated.span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </TabPanel>
          {/* About Content Ends */}

          {/* Portfolio Content Starts */}
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
            {/* End title */}
            <Portfolio />
          </TabPanel>
          {/* Portfolio Content Ends */}

          {/*  Courses Content Starts */}
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
            {/* End title */}
            <Course />
          </TabPanel>
          {/* Courses Content Ends */}

          {/* Blog Content Starts */}
          {/*<TabPanel className="blog">
            <div
              className="title-section text-left text-sm-center "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                my <span>blog</span>
              </h1>
              <span className="title-bg">posts</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              
              <div className="row pb-50">
                <Blog />
              </div>
              
            </div>
          </TabPanel>*/}
          {/* Blog Content Ends */}

          {/* Testimonials Content Starts */}
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
            {/* End title */}
            <Testimonial />
          </TabPanel>
          {/* Portfolio Content Ends */}

          {/* Contact Content Starts */}
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
                {/*  Left Side Starts */}
                <div className="col-12 col-lg-4">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    {t("getintouchTitle4")}
                  </h3>
                  <p className="open-sans-font mb-4">{t("getintouchTitle5")}</p>
                  <Address />
                  {/* End Address */}

                  <Social />
                  {/* End Social */}
                </div>
                {/* Left Side Ends */}

                {/*  Contact Form Starts  */}
                <div className="col-12 col-lg-8">
                  <Contact />
                </div>
                {/*  Contact Form Ends */}
              </div>
            </div>

            {/* End .container */}
          </TabPanel>
          {/* Contact Content Ends */}
        </div>
      </Tabs>
    </div>
  );
};

export default HomeDark;
