import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Calendar, Building } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const { t } = useTranslation();
  const experienceContent = [
    {
      year: "06-2012 - Present",
      position: t("experiencePosition10"),
      companyName: t("experienceCompanyName10"),
      details: [
        { item: t("experienceDetails10List0") },
        { item: t("experienceDetails10List1") },
        { item: t("experienceDetails10List2") },
        { item: t("experienceDetails10List3") },
        { item: t("experienceDetails10List4") },
        { item: t("experienceDetails10List5") },
      ],
      type: "experience",
    },
    {
      year: "10-2020 - 04-2022",
      position: t("experiencePosition20"),
      companyName: t("experienceCompanyName20"),
      details: [
        { item: t("experienceDetails20List0") },
        { item: t("experienceDetails20List1") },
        { item: t("experienceDetails20List2") },
        { item: t("experienceDetails20List3") },
        { item: t("experienceDetails20List4") },
      ],

      type: "experience",
    },
    {
      year: "06-2019 - 11-2019",
      position: t("experiencePosition30"),
      companyName: t("experienceCompanyName30"),
      details: [
        { item: t("experienceDetails30List0") },
        { item: t("experienceDetails30List1") },
        { item: t("experienceDetails30List2") },
        { item: t("experienceDetails30List3") },
        { item: t("experienceDetails30List4") },
      ],
      type: "experience",
    },
    {
      year: "12-2012 - 03-2019",
      position: t("experiencePosition40"),
      companyName: t("experienceCompanyName40"),
      details: [
        { item: t("experienceDetails40List0") },
        { item: t("experienceDetails40List1") },
        { item: t("experienceDetails40List2") },
        { item: t("experienceDetails40List3") },
        { item: t("experienceDetails40List4") },
      ],

      type: "experience",
    },
    {
      year: "01-2012 - 05-2012",
      position: t("experiencePosition60"),
      companyName: t("experienceCompanyName60"),
      details: [
        { item: t("experienceDetails60List0") },
        { item: t("experienceDetails60List1") },
        { item: t("experienceDetails60List2") },
        { item: t("experienceDetails60List3") },
        { item: t("experienceDetails60List4") },
        { item: t("experienceDetails60List5") },
      ],

      type: "experience",
    },
  ];

  const listRef = useRef([]);

  useEffect(() => {
    listRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <div className="space-y-8">
      {experienceContent.map((val, i) => (
        <div
          key={i}
          ref={(el) => (listRef.current[i] = el)}
          className="border-l-4 border-[#FFB401] pl-4 py-2"
        >
          <div className="flex items-center text-gray-800 dark:text-white text-sm mb-2">
            <Calendar className="w-4 h-4 mr-2 text-[#FFB401]" />
            <span>{val.year}</span>
          </div>
          <h3 className="text-lg font-bold text-[#FFB401] mb-1">
            {val.position}
          </h3>
          <div className="flex items-center text-gray-800 dark:text-white text-sm mb-2">
            <Building className="w-4 h-4 mr-2" />
            <span>{val.companyName}</span>
          </div>
          <p className="text-black dark:text-gray-100 text-sm">
            {val.details.map((detail, index) => (
              <li
                key={index}
                className="mb-2 text-black dark:text-white text-sm leading-relaxed"
              >
                {detail.item}
              </li>
            ))}
          </p>
          <div className="mt-2 flex items-center text-sm text-gray-800 dark:text-white">
            <Briefcase className="w-4 h-4 mr-2 text-[#FFB401]" />
            <span>{val.type}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
