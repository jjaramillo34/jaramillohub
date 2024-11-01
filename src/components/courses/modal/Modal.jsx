import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  FileText,
  User,
  Code,
  ExternalLink,
  Cog,
  Calendar,
} from "lucide-react";
import CourseData from "../courseData";

const CourseModal = ({ modalId, setGetModal }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-6xl bg-white dark:bg-gray-800 rounded-3xl shadow-xl border-4 border-[#FFB401] dark:border-[#FFD980] my-8"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {CourseData.filter((item) => item.id === modalId).map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-6 md:p-8 max-h-[90vh] overflow-y-auto"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#FFB401] dark:text-[#FFD980] mb-4 sm:mb-6 md:mb-8">
                {item.type}
              </h2>

              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
                <figure className="lg:w-1/2">
                  <img
                    src={item.image}
                    alt={item.type}
                    className="w-full h-auto rounded-lg shadow-md object-cover"
                  />
                </figure>
                <div className="lg:w-1/2 space-y-4 sm:space-y-6">
                  {item.modalDetails.map((details, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 sm:p-6"
                    >
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {details.description}
                      </p>

                      <div className="grid grid-cols-1 gap-4">
                        <DetailItem
                          icon={
                            <FileText className="text-blue-500 flex-shrink-0" />
                          }
                          label="Project"
                          value={details.project}
                          fullWidth
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <DetailItem
                            icon={<User className="text-green-500" />}
                            label="Client"
                            value={details.client}
                          />
                          <DetailItem
                            icon={<Code className="text-indigo-500" />}
                            label="Language"
                            value={details.language}
                          />
                          <DetailItem
                            icon={<ExternalLink className="text-yellow-500" />}
                            label="Preview"
                            value={
                              <a
                                className="text-[#FFB401] hover:underline"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                href={details.link}
                              >
                                Click here
                              </a>
                            }
                          />
                          <DetailItem
                            icon={<Cog className="text-purple-500" />}
                            label="Tech Stack"
                            value={
                              <img
                                src={details.techStack}
                                alt="tech stack"
                                className="h-5 ml-2 inline-block"
                              />
                            }
                          />
                          <DetailItem
                            icon={<Calendar className="text-pink-500" />}
                            label="Date"
                            value={details.date}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 bg-white dark:bg-gray-800 rounded-full p-1"
                onClick={() => setGetModal(false)}
              >
                <X size={24} />
              </button>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const DetailItem = ({ icon, label, value, fullWidth = false }) => (
  <div
    className={`flex items-start space-x-2 text-sm sm:text-base ${
      fullWidth ? "col-span-full" : ""
    }`}
  >
    <span className="mt-1">{icon}</span>
    <div className="flex-grow">
      <span className="font-semibold">{label}:</span>
      <span className="text-gray-600 dark:text-gray-300 ml-2 break-words">
        {value}
      </span>
    </div>
  </div>
);

export default CourseModal;
