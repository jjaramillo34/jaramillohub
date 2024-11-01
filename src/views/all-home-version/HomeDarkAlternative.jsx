import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Home,
  User,
  Briefcase,
  BookOpen,
  MessageSquare,
  Mail,
  Menu,
  X,
} from "lucide-react";
import Hero from "../../components/hero/Hero";
import Index from "../../components/about/AboutPage";
import Portfolio from "../../components/portfolio/Portfolio";
import Course from "../../components/courses/Course";
import Testimonial from "../../components/Testimonial";
import Contact from "../../components/Contact";
import SwitchDark from "../../components/switch/SwitchDark";

import enflag from "../../assets/img/us-flag.png";
import esflag from "../../assets/img/es.png";

const menuItems = [
  { name: "home", icon: Home },
  { name: "about", icon: User },
  { name: "portfolio", icon: Briefcase },
  { name: "courses", icon: BookOpen },
  { name: "testimonial", icon: MessageSquare },
  { name: "contact", icon: Mail },
];

const HomeDarkAlternative = () => {
  const { t, i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(true);
  const [activeTab, setActiveTab] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsEnglish(!isEnglish);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Hero />;
      case "about":
        return <Index />;
      case "portfolio":
        return <Portfolio />;
      case "courses":
        return <Course />;
      case "testimonial":
        return <Testimonial />;
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header with Menu */}
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold text-[#FFB401]">Your Logo</div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`flex items-center px-3 py-2 rounded-md transition-colors duration-200 ${
                    activeTab === item.name
                      ? "bg-[#FFB401] text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  <item.icon size={18} className="mr-2" />
                  <span className="text-sm font-medium">{t(item.name)}</span>
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
              onClick={toggleMobileMenu}
            >
              <Menu size={24} />
            </button>

            <div className="flex items-center space-x-4">
              <SwitchDark />
              <button
                onClick={() => changeLanguage(isEnglish ? "es" : "en")}
                className="flex items-center space-x-2"
              >
                <img
                  src={isEnglish ? enflag : esflag}
                  alt={isEnglish ? "English" : "Español"}
                  className="w-6 h-6 rounded-full"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
          >
            <div className="container mx-auto px-4 py-2">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveTab(item.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center w-full px-4 py-3 text-left transition-colors duration-200 ${
                    activeTab === item.name
                      ? "bg-[#FFB401] text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <item.icon size={20} className="mr-3" />
                  <span className="text-sm font-medium">{t(item.name)}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default HomeDarkAlternative;
