import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, X } from "lucide-react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import heroImg from "../../assets/img/hero/dark.png";
import heroImgMobile from "../../assets/img/hero/mobile.png";
import Index from "../about/AboutPage";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const titleNameRef = useRef(null);
  const designationRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const mobileImageRef = useRef(null);
  const modalRef = useRef(null);

  const heroContent = {
    heroImage: heroImg,
    heroMobileImage: heroImgMobile,
    heroTitleName: t("heroTitleName").toUpperCase(),
    heroDesignation: t("heroDesignation").toUpperCase(),
    heroDescriptions: t("heroDescriptions"),
    heroBtn: t("heroBtn").toUpperCase(),
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      gsap.to(modalRef.current, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "power3.out",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(modalRef.current, {
        duration: 0.5,
        opacity: 0,
        y: 50,
        ease: "power3.in",
        pointerEvents: "none",
      });
    }
  };

  useEffect(() => {
    // Set initial state for images
    gsap.set([imageRef.current, mobileImageRef.current], {
      opacity: 0,
      scale: 0.8,
    });

    // Initial animations
    const tl = gsap.timeline();

    // Scramble text effect for the title name
    tl.to(titleNameRef.current, {
      duration: 2,
      text: {
        value: heroContent.heroTitleName,
        scrambleText: {
          chars: "lowerCase",
          revealDelay: 0.5,
          speed: 0.3,
        },
      },
      ease: "none",
    });

    // Scramble text effect for the designation
    tl.to(
      designationRef.current,
      {
        duration: 2,
        text: {
          value: heroContent.heroDesignation,
          scrambleText: {
            chars: "upperCase",
            revealDelay: 0.5,
            speed: 0.3,
          },
        },
        ease: "none",
      },
      "-=1.5"
    );

    // Typing effect for the description
    tl.to(descriptionRef.current, {
      duration: 2,
      text: heroContent.heroDescriptions,
      ease: "none",
    });

    // Button animation
    tl.from(buttonRef.current, {
      duration: 0.5,
      opacity: 0,
      y: 20,
      ease: "power3.out",
    });

    // Image animations
    tl.to(
      imageRef.current,
      {
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );

    tl.to(
      mobileImageRef.current,
      {
        duration: 0.5,
        opacity: 1,
        scale: 1,
        ease: "back.out(1.7)",
      },
      "-=0.25"
    );
  }, []);

  return (
    <div className="relative pt-8 lg:pt-12">
      {" "}
      {/* Added top padding to account for header */}
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 80 80"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0h80v80H0z"
            fill="currentColor"
            className="text-gray-50 dark:text-gray-800"
          />
          <path
            d="M0 0h40v40H0z"
            fill="currentColor"
            className="text-[#FFB401] dark:text-[#FFD980] opacity-5"
          />
          <path
            d="M40 40h40v40H40z"
            fill="currentColor"
            className="text-[#FFB401] dark:text-[#FFD980] opacity-5"
          />
        </svg>
      </div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen p-8 lg:p-16 max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-2xl lg:text-4xl font-bold mb-8 text-gray-600 dark:text-white">
            <span ref={titleNameRef} className="inline-block">
              -
            </span>
            <span
              ref={designationRef}
              className="block text-gray-600 dark:text-[#FFD980] mt-2"
            ></span>
          </h1>
          <p
            ref={descriptionRef}
            className="text-xl mb-8 text-gray-600 dark:text-gray-300 text-justify"
          ></p>
          <button
            ref={buttonRef}
            onClick={toggleModal}
            className="bg-[#FFB401] dark:bg-[#FFD980] text-white dark:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FFA000] dark:hover:bg-[#FFECBF] transition-colors duration-300 flex items-center justify-center mx-auto lg:mx-0 shadow-lg hover:shadow-xl"
          >
            <span className="mr-2">{heroContent.heroBtn}</span>
            <ArrowRight size={24} />
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <img
            ref={imageRef}
            src={heroContent.heroImage}
            alt="Hero"
            className="w-full max-w-lg h-auto rounded-3xl shadow-2xl"
          />
          <img
            ref={mobileImageRef}
            src={heroContent.heroMobileImage}
            alt="Hero Mobile"
            className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
          />
        </div>
      </div>
      {/* Modal */}
      <div
        ref={modalRef}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 opacity-0 pointer-events-none"
        style={{ transform: "translateY(50px)" }}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={toggleModal}
        ></div>
        <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <button
            onClick={toggleModal}
            className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            <X size={24} />
          </button>
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              ABOUT{" "}
              <span className="text-[#FFB401] dark:text-[#FFD980]">ME</span>
            </h2>
            <div className="about-content text-gray-700 dark:text-gray-300">
              <Index />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
