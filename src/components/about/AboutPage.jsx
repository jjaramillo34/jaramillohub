import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Achievements from "./Achievements";
import Education from "./Education";
import EducationCourses from "./EducationCourses";
import GitHub from "./GitHub";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import cv from "../../assets/img/Javier Jaramillo resume.webp";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import gsap from "gsap";

const AboutPage = () => {
  const { t } = useTranslation();
  const arrowRef = useRef();
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showArrow) {
      gsap.fromTo(
        arrowRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  }, [showArrow]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="main-content">
      <div className="container">
        <div className="row">
          {/* Personal Info Starts */}
          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12"></div>
              {/* End .col */}
              <div className="col-12 d-block d-sm-none">
                <img
                  src={heroImgMobile}
                  className="img-fluid main-img-mobile"
                  alt="about avatar"
                />
              </div>
              {/* image for mobile menu */}
              <div className="col-12">
                <PersonalInfo />
              </div>
              {/* End personal info */}
              <div className="col-12 mt-1">
                <a className="button" href={cv} download>
                  <span className="button-text">{t("personalInfoButton")}</span>
                  <span className="button-icon fa fa-download"></span>
                </a>
              </div>
              {/* End download button */}
            </div>
          </div>
          {/* Personal Info Ends */}
          {/* Achievements Starts */}
          <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <Achievements />
          </div>
          {/* Achievements Ends */}
        </div>
        {/* End .row */}
        <hr className="separator" />
        {/* Skills Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
              {t("skillsTitle")}
            </h3>
          </div>
          <Skills />
        </div>
        {/* Skills Ends */}
        <hr className="separator mt-1" />
        {/* Experience & Education Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
              {t("educationTitle1")}
              <span>&</span> {t("educationTitle2")}
            </h3>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <h4
                className="text-uppercase custom-title ft-wt-600"
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                }}
                id="experience"
                name="experience"
              >
                {t("experienceTitle")}
              </h4>
              <Experience />
              <GitHub />
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <h4
                className="text-uppercase custom-title ft-wt-600"
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                }}
                id="education"
                name="education"
              >
                {t("educationTitle")}
              </h4>
              <Education />
            </div>
            <div className="resume-box">
              <h4
                className="text-uppercase custom-title ft-wt-600"
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                }}
                id="courses"
                name="courses"
              >
                {t("coursesTitle")}
              </h4>
              <EducationCourses />
            </div>
          </div>
        </div>
        {/* Experience & Education Ends */}
      </div>
      {showArrow && (
        <button
          ref={arrowRef}
          onClick={handleScrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            backgroundColor: "#f0ad4e",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          <i className="fa fa-arrow-up" style={{ color: "#fff" }}></i>
        </button>
      )}
    </section>
  );
};

export default AboutPage;
