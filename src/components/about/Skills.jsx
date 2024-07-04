import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";

const skillsContent = [
  {
    title: "Data Visualization & Analysis",
    data: [
      { skillClass: "p98", skillPercent: 98, skillName: "Excel" },
      { skillClass: "p85", skillPercent: 85, skillName: "Tableau" },
      { skillClass: "p85", skillPercent: 85, skillName: "Microsoft Power BI" },
      { skillClass: "p85", skillPercent: 85, skillName: "Data Analysis" },
      { skillClass: "p85", skillPercent: 85, skillName: "Data Visualization" },
    ],
  },
  {
    title: "Programming & Scripting",
    data: [
      { skillClass: "p92", skillPercent: 92, skillName: "Python" },
      {
        skillClass: "p94",
        skillPercent: 94,
        skillName: "Microsoft Visual Basic (VBA)",
      },
      { skillClass: "p91", skillPercent: 91, skillName: "Streamlit" },
      { skillClass: "p89", skillPercent: 89, skillName: "Selenium" },
      { skillClass: "p81", skillPercent: 81, skillName: "Tesseract" },
      { skillClass: "p91", skillPercent: 91, skillName: "BeautifulSoup" },
      { skillClass: "p92", skillPercent: 92, skillName: "Pandas" },
      { skillClass: "p85", skillPercent: 85, skillName: "Numpy" },
      { skillClass: "p82", skillPercent: 82, skillName: "OpenCV" },
      { skillClass: "p85", skillPercent: 85, skillName: "Flask" },
      { skillClass: "p85", skillPercent: 85, skillName: "Django" },
      { skillClass: "p82", skillPercent: 82, skillName: "FastAPI" },
    ],
  },
  {
    title: "Web Development",
    data: [
      { skillClass: "p81", skillPercent: 81, skillName: "HTML" },
      { skillClass: "p81", skillPercent: 81, skillName: "CSS" },
      { skillClass: "p87", skillPercent: 87, skillName: "JavaScript" },
      { skillClass: "p93", skillPercent: 93, skillName: "React" },
      { skillClass: "p85", skillPercent: 85, skillName: "NodeJS" },
      { skillClass: "p85", skillPercent: 85, skillName: "Express" },
      { skillClass: "p90", skillPercent: 90, skillName: "MongoDB" },
      { skillClass: "p90", skillPercent: 90, skillName: "SQL" },
    ],
  },
  {
    title: "Database Management",
    data: [
      { skillClass: "p85", skillPercent: 85, skillName: "SQL" },
      { skillClass: "p85", skillPercent: 85, skillName: "MySQL" },
      { skillClass: "p88", skillPercent: 88, skillName: "PostgreSQL" },
      { skillClass: "p91", skillPercent: 91, skillName: "MongoDB" },
      { skillClass: "p83", skillPercent: 83, skillName: "DB2" },
    ],
  },
  {
    title: "Operating Systems",
    data: [
      { skillClass: "p89", skillPercent: 89, skillName: "Windows" },
      { skillClass: "p78", skillPercent: 78, skillName: "Linux" },
      { skillClass: "p94", skillPercent: 94, skillName: "MacOS" },
    ],
  },
  {
    title: "Development & Collaboration Tools",
    data: [
      { skillClass: "p85", skillPercent: 85, skillName: "Docker" },
      { skillClass: "p88", skillPercent: 88, skillName: "GitHub" },
      { skillClass: "p90", skillPercent: 90, skillName: "Visual Studio Code" },
      { skillClass: "p95", skillPercent: 95, skillName: "Jupyter Notebook" },
      { skillClass: "p90", skillPercent: 90, skillName: "Cursor" },
    ],
  },
  {
    title: "Core Competencies",
    data: [
      { skillClass: "p92", skillPercent: 92, skillName: "Problem Solving" },
      { skillClass: "p92", skillPercent: 92, skillName: "Critical Thinking" },
      { skillClass: "p99", skillPercent: 99, skillName: "Analytical Skills" },
      { skillClass: "p90", skillPercent: 90, skillName: "Attention to Detail" },
      { skillClass: "p90", skillPercent: 90, skillName: "Time Management" },
      { skillClass: "p98", skillPercent: 98, skillName: "Teamwork" },
      { skillClass: "p90", skillPercent: 90, skillName: "Communication" },
      { skillClass: "p98", skillPercent: 98, skillName: "Leadership" },
      { skillClass: "p95", skillPercent: 95, skillName: "Adaptability" },
      { skillClass: "p94", skillPercent: 94, skillName: "Flexibility" },
      { skillClass: "p93", skillPercent: 93, skillName: "Creativity" },
      { skillClass: "p92", skillPercent: 92, skillName: "Innovation" },
      { skillClass: "p91", skillPercent: 91, skillName: "Curiosity" },
      { skillClass: "p96", skillPercent: 96, skillName: "Continuous Learning" },
      { skillClass: "p96", skillPercent: 96, skillName: "Self-Development" },
    ],
  },
  {
    title: "Software & Tools",
    data: [
      { skillClass: "p98", skillPercent: 98, skillName: "Microsoft Excel" },
      { skillClass: "p85", skillPercent: 85, skillName: "Microsoft Word" },
      {
        skillClass: "p85",
        skillPercent: 85,
        skillName: "Microsoft PowerPoint",
      },
      { skillClass: "p90", skillPercent: 90, skillName: "Visual Studio Code" },
      { skillClass: "p90", skillPercent: 90, skillName: "Cursor" },
      { skillClass: "p82", skillPercent: 82, skillName: "Docker" },
      { skillClass: "p82", skillPercent: 82, skillName: "Git Studio" },
      { skillClass: "p90", skillPercent: 90, skillName: "Tableau Desktop" },
      { skillClass: "p90", skillPercent: 90, skillName: "Microsoft Power BI" },
    ],
  },
];

const SkillsComponent = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="row">
      {skillsContent.map((category, index) => (
        <React.Fragment key={index}>
          <h3 className="col-12 text-center my-4">{category.title}</h3>
          <div className="row">
            {category.data
              .sort((a, b) => b.skillPercent - a.skillPercent)
              .map((val, i) => (
                <div
                  className="col-6 col-md-4 col-lg-2 mb-3 mb-sm-5"
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={`${i * 100}`}
                  ref={(el) => (elementsRef.current[i] = el)}
                  data-percent={val.skillPercent}
                >
                  <div className={`c100 p${val.skillPercent}`}>
                    <span>{val.skillPercent}%</span>
                    <div className="slice">
                      <div className="bar"></div>
                      <div className="fill"></div>
                    </div>
                  </div>
                  <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                    {val.skillName}
                  </h6>
                </div>
              ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SkillsComponent;
