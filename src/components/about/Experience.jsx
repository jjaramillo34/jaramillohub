import React from "react";
import { useTranslation } from "react-i18next";

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
    },
  ];

  return (
    <ul>
      {experienceContent.map((val, i) => (
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
            {val.position}
            <span className="place open-sans-font">{val.companyName}</span>
          </h5>
          <p className="open-sans-font">
            {val.details.map((detail, index) => (
              // Assuming you want each detail in its own <span>; if not, adjust as necessary
              // create a list with the details with a line break and with dots
              <li
                key={index}
                style={{
                  fontSize: "0.8rem",
                  item: "inside",
                  textAlign: "justify",
                  marginLeft: "-1.30rem",
                }}
              >
                {detail.item}
              </li>
            ))}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
