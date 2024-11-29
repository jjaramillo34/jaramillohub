import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkillsComponent = () => {
  const { t } = useTranslation();
  const skillsRef = useRef([]);

  const skillsContent = [
    {
      title: t("skills.programmingLanguages"),
      data: [
        { skillName: "Python", skillPercent: 95 },
        { skillName: "JavaScript", skillPercent: 90 },
        { skillName: "SQL", skillPercent: 85 },
        { skillName: "R", skillPercent: 80 },
        { skillName: "Java", skillPercent: 75 },
        { skillName: "C++", skillPercent: 70 },
      ],
    },
    {
      title: t("skills.dataScience"),
      data: [
        { skillName: "Pandas", skillPercent: 90 },
        { skillName: "NumPy", skillPercent: 85 },
        { skillName: "Scikit-learn", skillPercent: 85 },
        { skillName: "TensorFlow", skillPercent: 80 },
        { skillName: "PyTorch", skillPercent: 75 },
        { skillName: "Jupyter", skillPercent: 85 },
      ],
    },
    {
      title: t("skills.dataEngineering"),
      data: [
        { skillName: "PostgreSQL", skillPercent: 90 },
        { skillName: "MongoDB", skillPercent: 85 },
        { skillName: "Apache Spark", skillPercent: 80 },
        { skillName: "AWS", skillPercent: 75 },
        { skillName: "Docker", skillPercent: 70 },
        { skillName: "ETL Pipelines", skillPercent: 85 },
      ],
    },
    {
      title: t("skills.dataVisualization"),
      data: [
        { skillName: "Tableau", skillPercent: 95 },
        { skillName: "Power BI", skillPercent: 90 },
        { skillName: "Plotly", skillPercent: 85 },
        { skillName: "Matplotlib", skillPercent: 85 },
        { skillName: "Seaborn", skillPercent: 80 },
        { skillName: "D3.js", skillPercent: 75 },
      ],
    },
    {
      title: t("skills.webDevelopment"),
      data: [
        { skillName: "React", skillPercent: 90 },
        { skillName: "Node.js", skillPercent: 85 },
        { skillName: "HTML/CSS", skillPercent: 80 },
        { skillName: "Django", skillPercent: 75 },
        { skillName: "Flask", skillPercent: 70 },
        { skillName: "RESTful APIs", skillPercent: 85 },
      ],
    },
  ];

  useEffect(() => {
    skillsRef.current.forEach((skill) => {
      if (!skill) return;

      const circle = skill.querySelector(".circle-progress");
      const percentText = skill.querySelector(".percent-text");
      const percent = parseInt(skill.dataset.percent);
      const radius = 45;
      const circumference = 2 * Math.PI * radius;

      // Set initial state
      gsap.set(circle, {
        strokeDasharray: circumference,
        strokeDashoffset: circumference,
      });

      // Create animation
      gsap.to(circle, {
        strokeDashoffset: circumference - (circumference * percent) / 100,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skill,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });

      // Animate percentage number
      gsap.to(percentText, {
        textContent: percent,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: skill,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
        onUpdate: function () {
          percentText.textContent = Math.round(percentText.textContent) + "%";
        },
      });
    });
  }, []);

  return (
    <div className="container mx-auto px-4">
      {skillsContent.map((category, categoryIndex) => (
        <motion.div
          key={categoryIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: categoryIndex * 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-[#FFB401]">
            {category.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.data.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                ref={(el) => skillsRef.current.push(el)}
                data-percent={skill.skillPercent}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      className="text-gray-200 dark:text-gray-700 stroke-current"
                      strokeWidth="8"
                      fill="none"
                      cx="64"
                      cy="64"
                      r="45"
                    />
                    <circle
                      className="circle-progress text-[#FFB401] stroke-current"
                      strokeWidth="8"
                      strokeLinecap="round"
                      fill="none"
                      cx="64"
                      cy="64"
                      r="45"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="percent-text text-2xl font-bold text-gray-700 dark:text-gray-300">
                      0%
                    </span>
                  </div>
                </div>
                <h4 className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300">
                  {skill.skillName}
                </h4>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsComponent;
