import React from "react";
import { useTranslation } from "react-i18next";

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

  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
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

          {/* <span className="text-secondary">{val.meta}: </span>
          {val.metaInfo} */}
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
