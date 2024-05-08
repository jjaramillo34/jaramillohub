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
    //image: Image3,
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
          "This course is a introduction to data visualization with Python. It teaches the basics of data visualization and how to use it to build a data visualization model.",
      },
    ],
  },
  {
    id: 4,
    type: "Git for Developers Using Github",
    //image: Image4,
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
          "This course is a introduction to Git. It teaches the basics of Git and how to use it to build a Git repository.",
      },
    ],
  },
  {
    id: 5,
    type: "Introduction to Relational Database and SQL",
    //image: Image5,
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
          "This course is a introduction to SQL. It teaches the basics of SQL and how to use it to build a SQL database.",
      },
    ],
  },
  {
    id: 6,
    type: "Advanced SQL for Database and SQL",
    //image: Image6,
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
          "This course is a advanced SQL. It teaches the advanced SQL and how to use it to build a SQL database.",
      },
    ],
  },
  {
    id: 7,
    type: "Security and Privacy in for Big Data - Part 2",
    //image: Image7,
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
          "This course is a advanced security and privacy in big data. It teaches the advanced security and privacy in big data and how to use it to build a security and privacy in big data model.",
      },
    ],
  },
  {
    id: 8,
    type: "Security and Privacy in for Big Data - Part 1",
    //image: Image8,
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
          "This course is a introduction to security and privacy in big data. It teaches the basics of security and privacy in big data and how to use it to build a security and privacy in big data model.",
      },
    ],
  },
  {
    id: 9,
    type: "Troubleshooting and Debugging Techniques",
    //image: Image9,
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
          "This course is a introduction to troubleshooting and debugging techniques. It teaches the basics of troubleshooting and debugging techniques and how to use it to build a troubleshooting and debugging techniques model.",
      },
    ],
  },
  {
    id: 10,
    type: "Python for Everybody",
    //image: Image10,
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
          "This course is a introduction to Python. It teaches the basics of Python and how to use it to build a Python repository.",
      },
    ],
  },
  {
    id: 11,
    type: "Data Analysis with Excel & Tableau",
    //image: Image11,
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
          "This course is a introduction to Data Analysis with Excel & Tableau. It teaches the basics of Data Analysis with Excel & Tableau and how to use it to build a Data Analysis with Excel & Tableau repository.",
      },
    ],
  },
  {
    id: 12,
    type: "Use Excel Like a Pro",
    //image: Image12,
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
          "This course is a introduction to Excel. It teaches the basics of Excel and how to use it to build a Excel repository.",
      },
    ],
  },
  {
    id: 13,
    type: "Excel 2013 - Getting Started",
    //image: Image13,
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
          "This course is a introduction to Excel. It teaches the basics of Excel and how to use it to build a Excel repository.",
      },
    ],
  },
  {
    id: 14,
    type: "JavaScript Understanding the Weird Parts",
    //image: Image14,
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
          "This course is a introduction to JavaScript. It teaches the basics of JavaScript and how to use it to build a JavaScript repository.",
      },
    ],
  },
  {
    id: 15,
    type: "Business Data Analysis with Microsoft Excel and Power BI",
    //image: Image15,
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
          "This course is a introduction to Business Data Analysis with Microsoft Excel and Power BI. It teaches the basics of Business Data Analysis with Microsoft Excel and Power BI and how to use it to build a Business Data Analysis with Microsoft Excel and Power BI repository.",
      },
    ],
  },
  {
    id: 16,
    type: "Introduction to Python Programming",
    //image: Image16,
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
          "This course is a introduction to Python. It teaches the basics of Python and how to use it to build a Python repository.",
      },
    ],
  },
  {
    id: 17,
    type: "Excel VBA Programming by Examples",
    //image: Image17,
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
          "This course is a introduction to Excel VBA. It teaches the basics of Excel VBA and how to use it to build a Excel VBA repository.",
      },
    ],
  },
  {
    id: 18,
    type: "Use Excel Like a Pro. Fast.",
    //image: Image18,
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
          "This course is a introduction to Excel. It teaches the basics of Excel and how to use it to build a Excel repository.",
      },
    ],
  },
  {
    id: 19,
    type: "Data Structures and Algorithms with Python",
    //image: Image19,
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
          "This course is a Data Structures and Algorithms with Python. It teaches the basics of Data Structures and Algorithms with Python and how to use it to build a Data Structures and Algorithms with Python repository.",
      },
    ],
  },
  {
    id: 20,
    type: "SQL and Data Modeling with Python",
    //image: Image20,
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
          "This course is a SQL and Data Modeling with Python. It teaches the basics of SQL and Data Modeling with Python and how to use it to build a SQL and Data Modeling with Python repository.",
      },
    ],
  },
  {
    id: 21,
    type: "Modern Software Engeneering with DevOps",
    //image: Image21,
    tag: ["devops", "software engineering", "python"],
    delayAnimation: "3.8s",
    modalDetails: [
      {
        project: "Modern Software Engeneering with DevOps",
        client: "nucamp",
        language: "Python",
        date: "08-01-2022",
        preview: "https://www.nucamp.co/",
        link: "https://www.nucamp.co/",
        techStack:
          "https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white",
        description:
          "This course is a Modern Software Engeneering with DevOps. It teaches the basics of Modern Software Engeneering with DevOps and how to use it to build a Modern Software Engeneering with DevOps repository.",
      },
    ],
  },
  {
    id: 22,
    type: "Backend, SQL, and DevOps with Python Bootcamp",
    //image: Image22,
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
          "This course is a Backend, SQL, and DevOps with Python Bootcamp. It teaches the basics of Backend, SQL, and DevOps with Python Bootcamp and how to use it to build a Backend, SQL, and DevOps with Python Bootcamp repository.",
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
  CourseData.length = 12;

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
