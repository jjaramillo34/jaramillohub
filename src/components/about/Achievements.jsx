import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Plus, Award } from "lucide-react";
import gsap from "gsap";

const Achievements = () => {
  const { t } = useTranslation();
  const achievementsContent = [
    {
      title: 12,
      subTitle1: t("achievementsSubTitle10"),
      subTitle2: t("achievementsSubTitle11"),
    },
    {
      title: 10,
      subTitle1: t("achievementsSubTitle20"),
      subTitle2: t("achievementsSubTitle21"),
    },
    {
      title: 10,
      subTitle1: t("achievementsSubTitle30"),
      subTitle2: t("achievementsSubTitle31"),
    },
    {
      title: 6,
      subTitle1: t("achievementsSubTitle40"),
      subTitle2: t("achievementsSubTitle41"),
    },
  ];

  const titleRef = useRef(null);
  const achievementRef = useRef([]);
  const counterRef = useRef([]);

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    // Entrance animation for achievements
    gsap.fromTo(
      achievementRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    // Counting animation for achievement numbers
    counterRef.current.forEach((counter, index) => {
      gsap.fromTo(
        counter,
        { innerText: "0" },
        {
          innerText: achievementsContent[index].title,
          duration: 2,
          ease: "power1.inOut",
          snap: { innerText: 1 },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <div>
      <h2
        ref={titleRef}
        className="text-2xl font-bold text-center text-[#FFB401] mb-8 flex items-center justify-center"
      >
        <Award className="w-6 h-6 mr-2" />
        {t("achievementsTitle")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievementsContent.map((val, i) => (
          <div
            key={i}
            ref={(el) => (achievementRef.current[i] = el)}
            className="border-l-4 border-[#FFB401] pl-4 py-2 group"
          >
            <div className="flex items-center justify-between mb-2">
              <h3
                ref={(el) => (counterRef.current[i] = el)}
                className="text-4xl font-bold text-[#FFB401] font-poppins"
              >
                0
              </h3>
              <Plus className="text-[#FFB401] w-6 h-6 transition-transform duration-300 group-hover:rotate-180" />
            </div>
            <p className="text-sm uppercase font-semibold text-gray-700 dark:text-gray-300 font-open-sans">
              {val.subTitle1}
            </p>
            <span className="block text-sm text-gray-500 dark:text-gray-400 mt-1">
              {val.subTitle2}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
