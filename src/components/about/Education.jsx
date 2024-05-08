import React from "react";
import { useTranslation } from "react-i18next";

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
    //{
    //  year: "2015 - 2015",
    //  degree: t("educationDegree30"),
    //  institute: t("educationInstitute30"),
    //  details: t("educationDetails30"),
    //  type: "course",
    //},
  ];
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5
            className="poppins-font text-uppercase"
            style={{
              fontSize: "0.9rem",
              fontWeight: "600",
            }}
          >
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p
            className="open-sans-font"
            style={{
              textAlign: "justify",
              fontSize: "0.8rem",
            }}
          >
            {val.details}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
