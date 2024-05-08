import Image1 from "../../assets/img/course/coderhouse.png";
import Image2 from "../../assets/img/course/coursera1.jpg";
import Image3 from "../../assets/img/course/coursera2.jpg";
import Image4 from "../../assets/img/course/coursera3.jpg";
import Image5 from "../../assets/img/course/coursera4.jpg";
import Image6 from "../../assets/img/course/coursera5.jpg";
import Image7 from "../../assets/img/course/coursera6.jpg";
import Image8 from "../../assets/img/course/coursera7.jpg";
import Image9 from "../../assets/img/course/coursera8.jpg";
import Image10 from "../../assets/img/course/esri1.jpg";
import Image11 from "../../assets/img/course/ga1.jpeg";
import Image12 from "../../assets/img/course/udemy1.jpeg";
import Image13 from "../../assets/img/course/udemy2.jpeg";
import Image14 from "../../assets/img/course/udemy3.jpeg";
import Image15 from "../../assets/img/course/udemy4.jpeg";
import Image16 from "../../assets/img/course/udemy5.jpeg";
import Image17 from "../../assets/img/course/udemy6.jpeg";
import Image18 from "../../assets/img/course/udemy7.jpeg";
import Image19 from "../../assets/img/course/nucamp1.jpeg";
import Image20 from "../../assets/img/course/nucamp2.jpeg";
import Image21 from "../../assets/img/course/nucamp3.jpeg";
import Image22 from "../../assets/img/course/nucamp4.jpeg";

const CourseData = [
  {
    id: 1,
    type: "Coderhouse Python & Django",
    image: Image1,
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
          "Experience the Coderhouse Python & Django course, a comprehensive program designed to immerse you in the world of full-stack web development. Over the course of 3 months, you'll dive deep into the fundamentals of Python and Django, mastering essential concepts to build dynamic web applications from scratch. Whether you're a beginner or an experienced coder, this course provides the perfect blend of theory and hands-on practice to elevate your skills. Join us and unlock the potential of Python, Django, and web development.",
      },
    ],
  },
  {
    id: 2,
    type: "Getting Started with AWS ML",
    image: Image2,
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
          "Embark on your journey into the world of machine learning with Getting Started with AWS ML,a foundational course offered by Coursera. Designed to introduce you to AWS Machine Learning, this course provides a comprehensive overview of key concepts and practical applications. Learn how to leverage AWS tools and services to build and deploy machine learning models effectively. Whether you're a beginner or looking to expand your skills, this course offers invaluable insights into the exciting field of machine learning with AWS.",
      },
    ],
  },
  {
    id: 3,
    type: "Data Visualization with Python",
    image: Image3,
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
          "Dive into the world of data visualization with Data Visualization with Python, a course offered by Coursera. Designed as an introduction to data visualization techniques using Python, this course covers the fundamentals of visualizing data and guides you through the process of building effective data visualization models. Whether you're a beginner or looking to enhance your skills, this course provides a solid foundation in data visualization with Python, empowering you to create compelling visuals and extract meaningful insights from your data.",
      },
    ],
  },
  {
    id: 4,
    type: "Git for Developers Using Github",
    image: Image4,
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
    image: Image5,
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
    image: Image6,
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
    image: Image7,
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
    image: Image8,
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
    image: Image9,
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
    image: Image10,
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
    image: Image11,
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
    image: Image12,
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
    image: Image13,
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
    image: Image14,
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
    image: Image15,
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
          "This course is a introduction to Business Data Analysis with Microsoft Excel and Power BI. It teaches the basics of Business Data Analysis with Microsoft Excel and Power BI and how to use it to build a Business Data Analysis with Microsoft Excel & Power BI repository.",
      },
    ],
  },
  {
    id: 16,
    type: "Introduction to Python Programming",
    image: Image16,
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
    image: Image17,
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
    image: Image18,
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
    image: Image19,
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
    image: Image20,
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
    image: Image21,
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
    image: Image22,
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

export default CourseData;
