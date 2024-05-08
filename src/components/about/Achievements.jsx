import React from "react";
import { useTranslation } from "react-i18next";
//import animate from "https://cdn.jsdelivr.net/npm/animateplus@2/animateplus.js";

const Achievements = () => {
  const { t } = useTranslation();
  const achievementsContent = [
    {
      title: "12",
      subTitle1: t("achievementsSubTitle10"),
      subTitle2: t("achievementsSubTitle11"),
    },
    {
      title: "10",
      subTitle1: t("achievementsSubTitle20"),
      subTitle2: t("achievementsSubTitle21"),
    },
    {
      title: "10",
      subTitle1: t("achievementsSubTitle30"),
      subTitle2: t("achievementsSubTitle31"),
    },
    {
      title: "6",
      subTitle1: t("achievementsSubTitle40"),
      subTitle2: t("achievementsSubTitle41"),
    },
  ];

  //animate({
  //  elements: ".box-stats",
  //  duration: 2000,
  //  delay: (index) => index * 100,
  //  opacity: [0, 1],
  //  translateY: [20, 0],
  //  translateX: [20, 0],
  //});

  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
