import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, User, Code, ExternalLink } from "lucide-react";
import PortfolioData from "../portfolioData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Modal = ({ modalId, setGetModal }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  const item = PortfolioData.find((item) => item.id === modalId);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border-4 border-[#FFB401] dark:border-[#FFD980]"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#FFB401] dark:text-[#FFD980] mb-6">
              {item.type}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                {item.modalDetails.map((details, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4"
                  >
                    <DetailItem
                      icon={
                        <FileText className="text-[#FFB401] dark:text-[#FFD980]" />
                      }
                      label="Project"
                      value={details.project}
                    />
                    <DetailItem
                      icon={
                        <User className="text-[#FFB401] dark:text-[#FFD980]" />
                      }
                      label="Client"
                      value={details.client}
                    />
                    <DetailItem
                      icon={
                        <Code className="text-[#FFB401] dark:text-[#FFD980]" />
                      }
                      label="Language"
                      value={details.language}
                    />
                    <DetailItem
                      icon={
                        <ExternalLink className="text-[#FFB401] dark:text-[#FFD980]" />
                      }
                      label="Preview"
                      value={
                        <a
                          className="text-[#FFB401] dark:text-[#FFD980] hover:underline"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          href={details.link}
                        >
                          {details.preview}
                        </a>
                      }
                    />
                  </div>
                ))}
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4">
                {modalId === 3 ? (
                  <Slider {...settings}>
                    <div>
                      <img
                        src={item.image}
                        alt={item.type}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div>
                      <img
                        src={item.image}
                        alt={item.type}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div>
                      <img
                        src={item.image}
                        alt={item.type}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </Slider>
                ) : modalId === 4 ? (
                  <video
                    className="w-full h-auto rounded-lg"
                    controls
                    poster={item.image}
                  >
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={item.image}
                    alt={item.type}
                    className="w-full h-auto rounded-lg"
                  />
                )}
              </div>
            </div>

            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 bg-white dark:bg-gray-800 rounded-full p-2 transition-colors duration-200"
              onClick={() => setGetModal(false)}
            >
              <X size={24} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const DetailItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-2 mb-2 text-gray-700 dark:text-gray-300">
    {icon}
    <span className="font-semibold">{label}:</span>
    <span>{value}</span>
  </div>
);

export default Modal;
