import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialData from "./testimonialData";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const slideVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const paginate = (newDirection) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = TestimonialData.length - 1;
      if (newIndex >= TestimonialData.length) newIndex = 0;
      return newIndex;
    });
  };

  return (
    <motion.div
      className="w-full py-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative max-w-[1600px] mx-auto">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="px-4 py-8"
          >
            <div className="testimonial relative">
              <div className="absolute top-0 left-0 text-[#ffb401] opacity-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              <div className="testimonial__content relative z-10">
                <div className="testimonial__info flex flex-col items-center space-y-6">
                  <motion.div
                    className="testimonial__img w-32 h-32 rounded-full overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      src={TestimonialData[currentIndex].imageUrl}
                      alt={TestimonialData[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="testimonial__name">
                    <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">
                      {TestimonialData[currentIndex].name}
                    </h4>
                  </div>
                  <div className="testimonial__position">
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {TestimonialData[currentIndex].title}
                    </p>
                  </div>
                  <div className="testimonial__social">
                    <motion.a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#ffb401] hover:text-[#e5a200] transition-colors duration-300"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Linkedin size={28} />
                    </motion.a>
                  </div>
                  <div className="testimonial__description mt-6 w-full">
                    <blockquote className="text-gray-700 dark:text-white italic text-center text-md leading-relaxed">
                      "{TestimonialData[currentIndex].description}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <motion.button
          className="absolute left-[-70px] top-1/2 transform -translate-y-1/2 bg-[#ffb401] text-white p-4 rounded-full"
          onClick={() => paginate(-1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={36} />
        </motion.button>
        <motion.button
          className="absolute right-[-70px] top-1/2 transform -translate-y-1/2 bg-[#ffb401] text-white p-4 rounded-full"
          onClick={() => paginate(1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={36} />
        </motion.button>
      </div>
    </motion.div>
  );
}
