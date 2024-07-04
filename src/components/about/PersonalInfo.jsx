import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";

const PersonalInfo = () => {
  const { t } = useTranslation();
  const personalInfoContent = [
    {
      meta: t("personalInfoMeta1"),
      metaInfo: t("personalInfoMetaInfo1"),
    },
    {
      meta: t("personalInfoMeta2"),
      metaInfo: t("personalInfoMetaInfo2"),
    },
    {
      meta: t("personalInfoMeta3"),
      metaInfo: t("personalInfoMetaInfo3"),
    },
    {
      meta: t("personalInfoMeta4"),
      metaInfo: t("personalInfoMetaInfo4"),
    },
    {
      meta: t("personalInfoMeta5"),
      metaInfo: t("personalInfoMetaInfo5"),
    },
    {
      meta: t("personalInfoMeta6"),
      metaInfo: t("personalInfoMetaInfo6"),
    },
    {
      meta: t("personalInfoMeta7"),
      metaInfo: t("personalInfoMetaInfo7"),
    },
    {
      meta: t("personalInfoMeta8"),
      metaInfo: t("personalInfoMetaInfo8"),
    },
    {
      meta: t("personalInfoMeta9"),
      metaInfo: t("personalInfoMetaInfo9"),
    },
    {
      meta: t("personalInfoMeta10"),
      metaInfo: t("personalInfoMetaInfo10"),
    },
  ];

  const listRef = useRef([]);

  useEffect(() => {
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
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li
          key={i}
          ref={(el) => {
            listRef.current[i] = el;
          }}
        >
          {val.meta === "Email" ? (
            <a href={`mailto:${val.metaInfo}`} className="text-secondary">
              {val.meta}: {val.metaInfo}
            </a>
          ) : (
            ""
          )}
          {val.meta !== "Email" ? (
            <>
              {val.meta}: {val.metaInfo}
            </>
          ) : (
            ""
          )}
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
