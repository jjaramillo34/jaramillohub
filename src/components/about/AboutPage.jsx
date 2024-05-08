import React from "react";
import Achievements from "./Achievements";
import Education from "./Education";
import EducationCourses from "./EducationCourses";
import GitHub from "./GitHub";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import cv from "../../assets/img/Javier Jaramillo resume.webp";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import { useTranslation } from "react-i18next";
//import animate from "https://cdn.jsdelivr.net/npm/animateplus@2/animateplus.js";

const AboutPage = () => {
  const { t } = useTranslation();

  //animate({
  //  elements: ".h3",
  //  duration: 2000,
  //  delay: (index) => index * 100,
  //  transform: ["scale(0)", "scale(1)"],
  //});

  // //animate({
  //  elements: ".text-uppercase custom-title mb-0 ft-wt-600",
  //  duration: 2000,
  //  delay: (index) => index * 100,
  //  opacity: [0, 1],
  //});

  return (
    <section className="main-content ">
      <div className="container">
        <div className="row">
          {/* Personal Info Starts */}

          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  {t("personalInfos")}
                </h3>
              </div>
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
          {/*  Personal Info Ends */}

          {/*  Boxes Starts */}
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
        {/*  Experience & Education Ends */}
      </div>
    </section>
  );
};

export default AboutPage;
