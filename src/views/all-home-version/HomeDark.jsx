import React, { Suspense } from "react";
import { Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "../../components/common/Menu";

// Lazy load components
const Hero = React.lazy(() => import("../../components/hero/Hero"));
const About = React.lazy(() => import("../../components/about/AboutPage"));
const Portfolio = React.lazy(() =>
  import("../../components/portfolio/Portfolio")
);
const Contact = React.lazy(() => import("../../components/Contact"));
const Social = React.lazy(() => import("../../components/Social"));
const Course = React.lazy(() => import("../../components/courses/Course"));
const Testimonial = React.lazy(() => import("../../components/Testimonial"));

// Loading component
const ComponentLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#FFB401]/20 border-t-[#FFB401]"></div>
  </div>
);

const HomeDark = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const tabs = [
    { component: Hero },
    { component: About },
    { component: Portfolio },
    { component: Contact },
    { component: Course },
    { component: Testimonial },
  ];

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen h-screen flex flex-col bg-white dark:bg-gray-900 overflow-hidden"
    >
      <Tabs
        selectedIndex={selectedTab}
        onSelect={handleTabSelect}
        className="flex flex-col h-full relative"
      >
        <div className="header fixed top-0 right-8 z-50">
          <TabList>
            <Menu t={t} onTabSelect={handleTabSelect} />
          </TabList>
        </div>

        <div className="flex-grow overflow-y-auto">
          <div className="container mx-auto px-4 lg:px-0 py-20 min-h-screen">
            <AnimatePresence mode="wait">
              {tabs.map((tab, index) => (
                <TabPanel key={index}>
                  {selectedTab === index && (
                    <Suspense fallback={<ComponentLoader />}>
                      <motion.div
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        variants={pageVariants}
                        className={
                          index === 0
                            ? "h-full flex items-center justify-center"
                            : ""
                        }
                      >
                        <tab.component />
                      </motion.div>
                    </Suspense>
                  )}
                </TabPanel>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </Tabs>

      <div className="fixed bottom-5 left-5 z-40">
        <Suspense fallback={null}>
          <Social />
        </Suspense>
      </div>
    </motion.div>
  );
};

export default HomeDark;
