import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { motion, AnimatePresence } from "framer-motion";
import CourseData from "./courseData";
import Modal from "./modal/Modal";
import client from "../../Hooks/sanityClient";

const Course = () => {
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);
  const [data, setData] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleModal = (id) => {
    setGetModal(true);
    setModalId(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      const query = '*[_type == "course"]';
      const result = await client.fetch(query);
      console.log("Result: ", result);
      setData(result);
    };

    fetchData();
  }, []);

  const categories = ["ALL", "EXCEL", "TABLEAU", "ANALYSIS", "PYTHON", "OTHER"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="course-main p-4 bg-gray-100 dark:bg-gray-900">
      <Tabs
        selectedIndex={selectedTab}
        onSelect={(index) => setSelectedTab(index)}
      >
        <TabList className="flex flex-wrap justify-center mb-8 gap-4">
          {categories.map((category, index) => (
            <Tab
              key={category}
              className="focus:outline-none"
              selectedClassName="bg-[#FFB401] text-white"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 ${
                  selectedTab === index
                    ? "bg-[#FFB401] text-white"
                    : "bg-white text-[#FFB401] hover:bg-[#FFB401] hover:text-white"
                }`}
              >
                {category}
              </motion.span>
            </Tab>
          ))}
        </TabList>

        <div className="container mx-auto">
          {categories.map((category, index) => (
            <TabPanel key={category}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={category}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {CourseData.filter(
                    (item) =>
                      category === "ALL" ||
                      item.tag.includes(category.toLowerCase())
                  ).map((item) => (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.03 }}
                      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                      onClick={() => handleModal(item.id)}
                    >
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          src={item.image}
                          alt={item.type}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <span className="text-white text-lg font-bold text-center px-4">
                          {item.type}
                        </span>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabPanel>
          ))}
        </div>
      </Tabs>
      {getModal && <Modal modalId={modalId} setGetModal={setGetModal} />}
    </div>
  );
};

export default Course;
