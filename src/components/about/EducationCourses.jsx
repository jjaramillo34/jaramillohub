import React from "react";

import { useTranslation } from "react-i18next";

const CourseData = [
  {
    id: 1,
    type: "Coderhouse Python & Django",
    //image: Image1,
    tag: ["python", "django", "web"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Coderhouse Python Django Course",
        client: "Coderhouse",
        language: "Python",
        date: "07-06-2022",
        preview: "https://www.coderhouse.com/",
        link: "https://us.coderhouse.com/online/python",
        techStack:
          "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
        description:
          "This course is a 3 month long course that teaches the fundamentals of Python and Django. It is a full stack web development course that teaches the basics of web development and how to build a web application from scratch.",
      },
    ],
  },
  {
    id: 2,
    type: "Getting Started with AWS ML",
    //image: Image2,
    tag: ["python", "machine learning", "aws"],
    delayAnimation: "0.2s",
    modalDetails: [
      {
        project: "Getting Started with with AWS Machine Learning",
        client: "Coursera",
        language: "Python",
        date: "09-08-2020",
        preview: "https://www.coursera.org/",
        link: "https://www.coursera.org/",
        techStack:
          "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
        description:
          "This course is a introduction to AWS Machine Learning. It teaches the basics of AWS Machine Learning and how to use it to build a machine learning model.",
      },
    ],
  },
  {
    id: 3,
    type: "Data Visualization with Python",
    tag: ["python", "analysis", "data"],
    delayAnimation: "0.4s",
    modalDetails: [
      {
        project: "Data Visualization with Python",
        client: "Coursera",
        language: "Python",
        date: "08-29-2020",
        preview: "https://www.coursera.org/",
        link: "https://www.coursera.org/",
        techStack:
          "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
        description:
          "An introductory course to data visualization with Python, covering the fundamentals of data visualization and its application in building models.",
      },
    ],
  },
  {
    id: 4,
    type: "Git for Developers Using Github",
    tag: ["other", "git"],
    delayAnimation: "0.6s",
    modalDetails: [
      {
        project: "Git for Developers Using Github",
        client: "Coursera",
        language: "Git",
        date: "09-10-2020",
        preview: "https://www.coursera.org/",
        link: "https://www.coursera.org/",
        techStack:
          "https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white",
        description:
          "An introductory course to Git, covering the basics of Git and its utilization in building a Git repository. The course also covers the basics of Github and how to use it to build a Github repository.",
      },
    ],
  },
  {
    id: 5,
    type: "Introduction to Relational Database and SQL",
    tag: ["other", "sql"],
    delayAnimation: "0.8s",
    modalDetails: [
      {
        project: "Introduction to Relational Database and SQL",
        client: "Coursera",
        language: "SQL",
        date: "09-13-2020",
        preview: "https://www.coursera.org/",
        link: "https://www.coursera.org/",
        techStack:
          "https://img.shields.io/badge/SQL-025E8C?style=for-the-badge&logo=postgresql&logoColor=white",
        description:
          "An introductory course to SQL focusing on relational databases. Covers SQL basics and building SQL databases.",
      },
    ],
  },
  {
    id: 6,
    type: "Advanced SQL for Database and SQL",
    tag: ["other", "sql"],
    delayAnimation: "1s",
    modalDetails: [
      {
        project: "Advanced SQL for Database and SQL",
        client: "Coursera",
        language: "SQL",
        date: "09-14-2020",
        preview: "https://www.coursera.org/",
        link: "https://www.coursera.org/",
        techStack:
          "https://img.shields.io/badge/SQL-025E8C?style=for-the-badge&logo=postgresql&logoColor=white",
        description:
          "An advanced course in SQL covering complex SQL queries and advanced database management techniques.",
      },
    ],
  },
  {
    id: 7,
    type: "Security and Privacy in for Big Data - Part 2",
    tag: ["other", "security"],
    delayAnimation: "1s",
    modalDetails: [
      {
        project: "Security and Privacy in for Big Data - Part 2",
        client: "Coursera",
        language: "SQL",
        date: "09-15-2020",
        preview: "https://www.coursera.org/",
        link: "https://www.coursera.org/",
        techStack:
          "https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white",
        description:
          "An advanced course focusing on security and privacy in big data, covering advanced techniques and applications in building secure big data systems.",
      },
    ],
  },
  {
    id: 8,
    type: "Security and Privacy in for Big Data - Part 1",
    tag: ["other", "security"],
    delayAnimation: "1.2s",
    modalDetails: [
      {
        project: "Security and Privacy in for Big Data - Part 1",
        client: "Coursera",
        language: "SQL",
        date: "09-15-2020",
        preview: "https://www.coursera.org/",
        link: "https://www.coursera.org/",
        techStack:
          "https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white",
        description:
          "An introductory course focusing on security and privacy in big data, covering basic concepts and methodologies in building secure big data systems.",
      },
    ],
  },
  {
    id: 9,
    type: "Troubleshooting and Debugging Techniques",
    tag: ["other", "debugging", "troubleshooting"],
    delayAnimation: "1.4s",
    modalDetails: [
      {
        project: "Troubleshooting and Debugging Techniques",
        client: "Coursera",
        language: "SQL",
        date: "09-14-2020",
        preview: "https://www.coursera.org/",
        link: "https://www.coursera.org/",
        techStack:
          "https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white",
        description:
          "An introductory course on troubleshooting and debugging techniques, covering basic approaches and strategies for effective troubleshooting and debugging.",
      },
    ],
  },
  {
    id: 10,
    type: "Python for Everybody",
    tag: ["python"],
    delayAnimation: "1.6s",
    modalDetails: [
      {
        project: "Python for Everybody",
        client: "Esri",
        language: "Python",
        date: "09-05-2020",
        preview: "https://www.esri.com/",
        link: "https://www.esri.com/",
        techStack:
          "https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white",
        description:
          "An introductory course to Python covering basics of programming with Python and its applications in various domains.",
      },
    ],
  },
  {
    id: 11,
    type: "Data Analysis with Excel & Tableau",
    tag: ["excel", "tableau", "data analysis"],
    delayAnimation: "1.8s",
    modalDetails: [
      {
        project: "Data Analysis with Excel & Tableau",
        client: "Esri",
        language: "Excel",
        date: "05-19-2015",
        preview: "https://www.generalassemb.ly/",
        link: "https://www.generalassemb.ly/",
        techStack:
          "https://img.shields.io/badge/tableau-E97627?style=for-the-badge&logo=tableau&logoColor=white",
        description:
          "An introductory course to data analysis using Excel and Tableau, covering basic data analysis techniques and visualization methods.",
      },
    ],
  },
  {
    id: 12,
    type: "Use Excel Like a Pro",
    tag: ["excel"],
    delayAnimation: "2s",
    modalDetails: [
      {
        project: "Use Excel Like a Pro",
        client: "Udemy",
        language: "Excel",
        date: "03-01-2015",
        preview: "https://www.udemy.com/",
        link: "https://www.udemy.com/",
        techStack:
          "https://img.shields.io/badge/Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white",
        description:
          "An introductory course to Excel, covering basics of Excel usage and its features for data manipulation and analysis.",
      },
    ],
  },
  {
    id: 13,
    type: "Excel 2013 - Getting Started",
    tag: ["excel"],
    delayAnimation: "2.2s",
    modalDetails: [
      {
        project: "Excel 2013 - Getting Started",
        client: "Udemy",
        language: "Excel",
        date: "06-28-2017",
        preview: "https://www.udemy.com/",
        link: "https://www.udemy.com/course/",
        techStack:
          "https://img.shields.io/badge/Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white",
        description:
          "An introductory course to Excel, covering basics of Excel usage and its features for data manipulation and analysis.",
      },
    ],
  },
  {
    id: 14,
    type: "JavaScript Understanding the Weird Parts",
    tag: ["javascript", "other"],
    delayAnimation: "2.4s",
    modalDetails: [
      {
        project: "JavaScript Understanding the Weird Parts",
        client: "Udemy",
        language: "JavaScript",
        date: "11-20-2019",
        preview: "https://www.udemy.com/",
        link: "https://www.udemy.com/",
        techStack:
          "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
        description:
          "An introductory course to JavaScript, focusing on advanced concepts and peculiarities of the language.",
      },
    ],
  },
  {
    id: 15,
    type: "Business Data Analysis with Microsoft Excel and Power BI",
    tag: ["excel", "power bi", "data analysis"],
    delayAnimation: "2.6s",
    modalDetails: [
      {
        project: "Business Data Analysis with Microsoft Excel and Power BI",
        client: "Udemy",
        language: "Excel",
        date: "01-21-2019",
        preview: "https://www.udemy.com/",
        link: "https://www.udemy.com/",
        techStack:
          "https://img.shields.io/badge/Power%20BI-F2C811?style=for-the-badge&logo=microsoft-power-bi&logoColor=black",
        description:
          "An introductory course to business data analysis using Microsoft Excel and Power BI, covering basic techniques and methodologies.",
      },
    ],
  },
  {
    id: 16,
    type: "Introduction to Python Programming",
    tag: ["python"],
    delayAnimation: "2.8s",
    modalDetails: [
      {
        project: "Introduction to Python Programming",
        client: "Udemy",
        language: "Python",
        date: "12-12-2019",
        preview: "https://www.udemy.com/",
        link: "https://www.udemy.com/",
        techStack:
          "https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white",
        description:
          "An introductory course to Python programming, covering basic syntax, data types, and programming concepts.",
      },
    ],
  },
  {
    id: 17,
    type: "Excel VBA Programming by Examples",
    tag: ["excel", "vba"],
    delayAnimation: "3s",
    modalDetails: [
      {
        project: "Excel VBA Programming by Examples",
        client: "Udemy",
        language: "Excel",
        date: "06-02-2018",
        preview: "https://www.udemy.com/",
        link: "https://www.udemy.com/",
        techStack:
          "https://img.shields.io/badge/Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white",
        description:
          "An introductory course to Excel VBA programming, covering basic concepts and examples for automating Excel tasks using VBA.",
      },
    ],
  },
  {
    id: 18,
    type: "Use Excel Like a Pro. Fast.",
    tag: ["excel"],
    delayAnimation: "3.2s",
    modalDetails: [
      {
        project: "Use Excel Like a Pro. Fast.",
        client: "Udemy",
        language: "Excel",
        date: "03-01-2015",
        preview: "https://www.udemy.com/",
        link: "https://www.udemy.com/",
        techStack:
          "https://img.shields.io/badge/Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white",
        description:
          "An introductory course to Excel, focusing on quick tips and tricks for efficient Excel usage.",
      },
    ],
  },
  {
    id: 19,
    type: "Data Structures and Algorithms with Python",
    tag: ["python", "data structures", "algorithms"],
    delayAnimation: "3.4s",
    modalDetails: [
      {
        project: "Data Structures and Algorithms with Python",
        client: "nucamp",
        language: "Python",
        date: "05-24-2022",
        preview: "https://www.nucamp.co/",
        link: "https://www.nucamp.co/",
        techStack:
          "https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white",
        description:
          "A course covering data structures and algorithms in Python, focusing on implementation and analysis of common algorithms and data structures.",
      },
    ],
  },
  {
    id: 20,
    type: "SQL and Data Modeling with Python",
    tag: ["python", "sql", "data modeling"],
    delayAnimation: "3.6s",
    modalDetails: [
      {
        project: "SQL and Data Modeling with Python",
        client: "nucamp",
        language: "Python",
        date: "06-27-2022",
        preview: "https://www.nucamp.co/",
        link: "https://www.nucamp.co/",
        techStack:
          "https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white",
        description:
          "A course covering SQL and data modeling using Python, focusing on building and managing SQL databases with Python.",
      },
    ],
  },
  {
    id: 21,
    type: "Modern Software Engineering with DevOps",
    tag: ["devops", "software engineering", "python"],
    delayAnimation: "3.8s",
    modalDetails: [
      {
        project: "Modern Software Engineering with DevOps",
        client: "nucamp",
        language: "Python",
        date: "08-01-2022",
        preview: "https://www.nucamp.co/",
        link: "https://www.nucamp.co/",
        techStack:
          "https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white",
        description:
          "A course covering modern software engineering practices with DevOps, focusing on development, deployment, and automation using Python.",
      },
    ],
  },
  {
    id: 22,
    type: "Backend, SQL, and DevOps with Python Bootcamp",
    tag: ["python", "sql", "devops"],
    delayAnimation: "4s",
    modalDetails: [
      {
        project: "Backend, SQL, and DevOps with Python Bootcamp",
        client: "nucamp",
        language: "Python",
        date: "08-01-2022",
        preview: "https://www.nucamp.co/",
        link: "https://www.nucamp.co/",
        techStack:
          "https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white",
        description:
          "A comprehensive bootcamp covering backend development, SQL, and DevOps practices with Python, focusing on building scalable and secure web applications.",
      },
    ],
  },
];

const EducationCourses = () => {
  const { t } = useTranslation();
  const educationContent = [
    {
      year: "2022 - 2022",
      degree: t("coursesTitle1"),
      institute: t("coursesInstitute1"),
      details: t("coursesDetails1"),
      type: "course",
    },
    {
      year: "2022 - 2022",
      degree: t("coursesTitle2"),
      institute: t("coursesInstitute2"),
      details: t("coursesDetails2"),
      type: "course",
    },
    {
      year: "2022 - 2022",
      degree: t("coursesTitle3"),
      institute: t("coursesInstitute3"),
      details: t("coursesDetails3"),
      type: "course",
    },
    {
      year: "2022 - 2022",
      degree: t("coursesTitle4"),
      institute: t("coursesInstitute4"),
      details: t("coursesDetails4"),
      type: "course",
    },
  ];

  // sort the courses by date and return the first 6
  CourseData.sort(
    (a, b) =>
      new Date(b.modalDetails[0].date) - new Date(a.modalDetails[0].date)
  );
  CourseData.length = 16;

  return (
    <ul>
      {CourseData.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">
            {val.modalDetails[0].date}
          </span>
          <h5
            className="poppins-font text-uppercase"
            style={{
              fontSize: "0.9rem",
              fontWeight: "600",
            }}
          >
            {val.type}
            <span className="place open-sans-font">
              {val.modalDetails[0].client}
            </span>
          </h5>
          <p
            className="open-sans-font"
            style={{
              fontSize: "0.8rem",
              // justify the text
              textAlign: "justify",
            }}
          >
            {val.modalDetails[0].description}
          </p>

          <div>
            {val.tag.map((tag, index) => (
              <span
                key={index}
                className="badge badge-pill badge-secondary"
                style={{
                  margin: "0.1rem",
                  backgroundColor: "#f0ad4e",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default EducationCourses;

//{
//  educationContent.map((val, i) => (
//    <li key={i}>
//      <div className="icon">
//        <i className="fa fa-briefcase"></i>
//      </div>
//      <span className="time open-sans-font text-uppercase">{val.year}</span>
//      <h5 className="poppins-font text-uppercase">
//        {val.degree}
//        <span className="place open-sans-font">{val.institute}</span>
//      </h5>
//      <p className="open-sans-font">{val.details}</p>
//    </li>
//  ));
//}
