import React, { useState, useEffect } from "react";
import { Tab, TabList } from "react-tabs";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  BookOpen,
  MessageSquare,
  Mail,
} from "lucide-react";

const Menu = ({ t, onTabSelect }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItem = [
    { menuName: t("home"), icon: <Home size={24} /> },
    { menuName: t("about"), icon: <User size={24} /> },
    { menuName: t("portfolio1"), icon: <Briefcase size={24} /> },
    { menuName: t("courses"), icon: <BookOpen size={24} /> },
    { menuName: t("testimonial"), icon: <MessageSquare size={24} /> },
    { menuName: t("contact"), icon: <Mail size={24} /> },
  ];

  const handleTabClick = (index) => {
    if (onTabSelect) {
      onTabSelect(index);
    }
  };

  const MobileTab = ({ item, index }) => (
    <Tab
      key={index}
      onClick={() => handleTabClick(index)}
      className="flex flex-col items-center outline-none cursor-pointer group"
    >
      <motion.div
        className="relative mb-1 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="p-2 rounded-lg group-hover:bg-[#FFB401]/10 dark:group-hover:bg-[#FFB401]/20">
          <div className="text-gray-600 dark:text-gray-400 group-hover:text-[#FFB401] dark:group-hover:text-[#FFB401] group-[.selected]:text-[#FFB401]">
            {item.icon}
          </div>
        </div>
      </motion.div>
      <span className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-[#FFB401] dark:group-hover:text-[#FFB401] group-[.selected]:text-[#FFB401]">
        {item.menuName}
      </span>
    </Tab>
  );

  const DesktopTab = ({ item, index }) => (
    <Tab
      key={index}
      onClick={() => handleTabClick(index)}
      className="outline-none cursor-pointer"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <motion.div className="group relative flex items-center gap-3">
        {/* Label tooltip */}
        <motion.div
          className={`
            absolute right-full mr-3 px-4 py-2 rounded-full
            bg-gradient-to-r from-[#FFB401] to-[#FF9000]
            transform transition-all duration-300 ease-in-out
            ${
              hoveredIndex === index
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4 pointer-events-none"
            }
          `}
        >
          <span className="text-white whitespace-nowrap text-sm font-medium">
            {item.menuName}
          </span>
        </motion.div>

        {/* Icon container */}
        <motion.div
          className={`
            relative w-12 h-12 rounded-full 
            bg-white dark:bg-gray-800 
            shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50
            flex items-center justify-center
            transition-all duration-300 ease-in-out
            group-hover:bg-[#FFB401] group-[.selected]:bg-[#FFB401]
            group-hover:scale-110
            group-hover:shadow-[#FFB401]/25
            group-[.selected]:shadow-[#FFB401]/25
          `}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-[#FFB401]/0 group-hover:bg-[#FFB401]/20 dark:group-hover:bg-[#FFB401]/10 blur-md transition-all duration-300" />

          {/* Icon */}
          <div className="relative text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white group-[.selected]:text-white">
            {item.icon}
          </div>
        </motion.div>
      </motion.div>
    </Tab>
  );

  return (
    <>
      {isMobile ? (
        <TabList
          className="fixed bottom-0 left-0 right-0 flex justify-around items-center py-4 px-4 
          bg-white dark:bg-gray-900 
          shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 
          z-50 backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90
          border-t border-gray-100 dark:border-gray-800"
        >
          {menuItem.map((item, i) => (
            <MobileTab key={i} item={item} index={i} />
          ))}
        </TabList>
      ) : (
        <TabList className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6">
          {menuItem.map((item, i) => (
            <DesktopTab key={i} item={item} index={i} />
          ))}
        </TabList>
      )}
    </>
  );
};

export default Menu;
