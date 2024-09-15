import React, { useState } from "react";
import Modal from "react-modal";
import { useTranslation } from "react-i18next";
import { useSpring, animated } from "@react-spring/web";
import { X, ArrowRight } from "lucide-react";

import heroImg from "../../assets/img/hero/dark.png";
import heroImgMobile from "../../assets/img/hero/mobile.png";
import Index from "../about/AboutPage";

const Hero = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const heroContent = {
    heroImage: heroImg,
    heroMobileImage: heroImgMobile,
    heroTitleName: t("heroTitleName"),
    heroDesignation: t("heroDesignation"),
    heroDescriptions: t("heroDescriptions"),
    heroBtn: t("heroBtn"),
  };

  const animateContent = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 1000 },
  });

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className="row home-details-container align-items-center">
      <div
        className="col-lg-4 bg position-fixed d-none d-lg-block"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + heroContent.heroImage
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start">
        <animated.div style={animateContent}>
          <img
            src={heroContent.heroMobileImage}
            className="img-fluid main-img-mobile d-sm-block d-lg-none rounded-full shadow-lg mb-6"
            alt="hero man"
          />
          <h1 className="text-uppercase poppins-font text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            {heroContent.heroTitleName}.
            <span className="block text-[#FFB401] mt-2">
              {heroContent.heroDesignation}
            </span>
          </h1>
          <p className="open-sans-font text-lg mb-6 text-gray-600 dark:text-gray-300">
            {heroContent.heroDescriptions}
          </p>
          <button
            className="button bg-[#FFB401] text-white px-6 py-3 rounded-full hover:bg-[#E5A200] transition-colors duration-300 flex items-center justify-center mx-auto lg:mx-0"
            onClick={toggleModal}
          >
            <span className="button-text mr-2">{heroContent.heroBtn}</span>
            <ArrowRight size={20} />
          </button>
        </animated.div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="About Me"
        className="custom-modal dark hero max-w-4xl mx-auto mt-20 p-8 rounded-lg bg-white dark:bg-gray-900"
        overlayClassName="custom-overlay dark fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
        closeTimeoutMS={500}
      >
        <button
          className="close-modal absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          onClick={toggleModal}
        >
          <X size={24} />
        </button>
        <div className="box_inner about">
          <div data-aos="fade-up" data-aos-duration="1200">
            <div className="title-section text-left text-sm-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                ABOUT <span className="text-[#FFB401]">ME</span>
              </h1>
              <span className="title-bg text-6xl font-bold text-gray-200 dark:text-gray-700 opacity-10 absolute top-0 left-0 right-0">
                Resume
              </span>
            </div>
            <Index />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Hero;
