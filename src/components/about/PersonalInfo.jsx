import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Flag,
  Languages,
  Briefcase,
  GraduationCap,
  Heart,
  Info,
} from "lucide-react";

const PersonalInfo = () => {
  const { t } = useTranslation();
  const personalInfoContent = [
    {
      meta: t("personalInfoMeta1"),
      metaInfo: t("personalInfoMetaInfo1"),
      icon: User,
    },
    {
      meta: t("personalInfoMeta2"),
      metaInfo: t("personalInfoMetaInfo2"),
      icon: Mail,
    },
    {
      meta: t("personalInfoMeta3"),
      metaInfo: t("personalInfoMetaInfo3"),
      icon: Phone,
    },
    {
      meta: t("personalInfoMeta4"),
      metaInfo: t("personalInfoMetaInfo4"),
      icon: Calendar,
    },
    {
      meta: t("personalInfoMeta5"),
      metaInfo: t("personalInfoMetaInfo5"),
      icon: MapPin,
    },
    {
      meta: t("personalInfoMeta6"),
      metaInfo: t("personalInfoMetaInfo6"),
      icon: Flag,
    },
    {
      meta: t("personalInfoMeta7"),
      metaInfo: t("personalInfoMetaInfo7"),
      icon: Languages,
    },
    {
      meta: t("personalInfoMeta8"),
      metaInfo: t("personalInfoMetaInfo8"),
      icon: Briefcase,
    },
    {
      meta: t("personalInfoMeta9"),
      metaInfo: t("personalInfoMetaInfo9"),
      icon: GraduationCap,
    },
    {
      meta: t("personalInfoMeta10"),
      metaInfo: t("personalInfoMetaInfo10"),
      icon: Heart,
    },
  ];

  const titleRef = useRef(null);
  const listRef = useRef([]);

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

    // List items animation
    gsap.fromTo(
      listRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="space-y-4">
      <h2
        ref={titleRef}
        className="text-xl font-bold text-center text-[#FFB401] flex items-center justify-center mb-2"
      >
        <Info className="w-5 h-5 mr-2" />
        {t("personalInfoTitle")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {personalInfoContent.map((val, i) => (
          <div
            key={i}
            ref={(el) => {
              listRef.current[i] = el;
            }}
            className="flex items-center group transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded"
          >
            <val.icon className="w-4 h-4 text-[#FFB401] mr-2 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {val.meta}
              </span>
              {val.meta === "Email" ? (
                <a
                  href={`mailto:${val.metaInfo}`}
                  className="text-sm text-[#FFB401] hover:underline"
                >
                  {val.metaInfo}
                </a>
              ) : (
                <span className="text-sm text-gray-800 dark:text-gray-200">
                  {val.metaInfo}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;
