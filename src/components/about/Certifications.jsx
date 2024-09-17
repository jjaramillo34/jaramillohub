import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Award, Building } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const { t } = useTranslation();
  const certificationsContent = [
    {
      year: "2022",
      title: "Computer Associate (Software)",
      institute: "DCAS",
      type: "certification",
    },
    {
      year: "2020",
      title: "Computer Programmer Analyst",
      institute: "DCAS",
      type: "certification",
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
      {certificationsContent.map((val, i) => (
        <div
          key={i}
          ref={(el) => (listRef.current[i] = el)}
          className="border-l-4 border-[#FFB401] pl-4 py-2"
        >
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <Calendar className="w-4 h-4 mr-2 text-[#FFB401]" />
            <span>{val.year}</span>
          </div>
          <h3 className="text-lg font-bold text-[#FFB401] mb-1">{val.title}</h3>
          <div className="flex items-center text-gray-700 text-sm mb-2">
            <Building className="w-4 h-4 mr-2" />
            <span>{val.institute}</span>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Award className="w-4 h-4 mr-2 text-[#FFB401]" />
            <span>{val.type}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
