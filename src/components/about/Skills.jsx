import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const categoriesRef = useRef([]);
  const skillsRef = useRef([]);

  useEffect(() => {
    categoriesRef.current.forEach((category, index) => {
      gsap.fromTo(
        category,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: category,
            start: "top 80%",
          },
        }
      );
    });

    skillsRef.current.forEach((skill) => {
      const percent = skill.dataset.percent;
      const circle = skill.querySelector(".circle-progress");

      gsap.fromTo(
        circle,
        { strokeDashoffset: 283 },
        {
          strokeDashoffset: 283 - (283 * percent) / 100,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skill,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        skill.querySelector(".percent-text"),
        { textContent: "0%" },
        {
          textContent: `${percent}%`,
          duration: 1.5,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: skill,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="container mx-auto px-4">
      {skillsContent.map((category, index) => (
        <div
          key={index}
          ref={(el) => (categoriesRef.current[index] = el)}
          className="mb-12"
        >
          <h4 className="text-2xl font-bold text-center my-6 text-[#FFB401] uppercase">
            {category.title}
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {category.data
              .sort((a, b) => b.skillPercent - a.skillPercent)
              .map((skill, i) => (
                <div
                  key={i}
                  ref={(el) => skillsRef.current.push(el)}
                  data-percent={skill.skillPercent}
                  className="flex flex-col items-center"
                >
                  <div className="relative w-24 h-24">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        className="text-gray-200"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                      />
                      <circle
                        className="circle-progress text-[#FFB401]"
                        strokeWidth="8"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                        style={{
                          strokeDasharray: 283,
                          strokeDashoffset: 283,
                          transform: "rotate(-90deg)",
                          transformOrigin: "50% 50%",
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="percent-text text-lg font-semibold">
                        0%
                      </span>
                    </div>
                  </div>
                  <h6 className="text-sm font-medium text-center mt-2">
                    {skill.skillName}
                  </h6>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsComponent;
