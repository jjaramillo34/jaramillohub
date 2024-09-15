import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, GraduationCap, Building } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const { t } = useTranslation();
  const educationContent = [
    {
      year: "2008 - 2011",
      degree: t("educationDegree10"),
      institute: t("educationInstitute10"),
      details: t("educationDetails10"),
      type: "education",
    },
    {
      year: "2005 - 2007",
      degree: t("educationDegree20"),
      institute: t("educationInstitute20"),
      details: t("educationDetails20"),
      type: "education",
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
      {educationContent.map((val, i) => (
        <div
          key={i}
          ref={(el) => (listRef.current[i] = el)}
          className="border-l-4 border-[#FFB401] pl-4 py-2"
        >
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <Calendar className="w-4 h-4 mr-2 text-[#FFB401]" />
            <span>{val.year}</span>
          </div>
          <h3 className="text-lg font-bold text-[#FFB401] mb-1">
            {val.degree}
          </h3>
          <div className="flex items-center text-gray-700 text-sm mb-2">
            <Building className="w-4 h-4 mr-2" />
            <span>{val.institute}</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{val.details}</p>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <GraduationCap className="w-4 h-4 mr-2 text-[#FFB401]" />
            <span>{val.type}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
