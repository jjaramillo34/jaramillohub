import React from "react";
//import animate from "https://cdn.jsdelivr.net/npm/animateplus@2/animateplus.js";

const skillsContent = [
  { skillClass: "p95", skillPercent: "95", skillName: "EXCEL" },
  { skillClass: "p90", skillPercent: "90", skillName: "VBA" },
  { skillClass: "p90", skillPercent: "85", skillName: "PYTHON" },
  { skillClass: "p85", skillPercent: "85", skillName: "SELENIUM" },
  { skillClass: "p85", skillPercent: "85", skillName: "PANDAS" },
  { skillClass: "p85", skillPercent: "85", skillName: "DATA ANALYSIS" },
  { skillClass: "p85", skillPercent: "85", skillName: "TABLEAU" },
  { skillClass: "p80", skillPercent: "80", skillName: "R" },
  { skillClass: "p80", skillPercent: "80", skillName: "SQL" },
  { skillClass: "p75", skillPercent: "75", skillName: "HTML" },
  { skillClass: "p75", skillPercent: "75", skillName: "CSS" },
  { skillClass: "p75", skillPercent: "75", skillName: "JAVASCRIPT" },
  { skillClass: "p75", skillPercent: "75", skillName: "REACT" },
  { skillClass: "p75", skillPercent: "75", skillName: "MONGODB" },
  { skillClass: "p60", skillPercent: "60", skillName: "NODEJS" },
  { skillClass: "p60", skillPercent: "60", skillName: "EXPRESS" },
];

const Skills = () => {
  //animate({
  //  elements: ".c100",
  //  duration: 2000,
  //  defaultEasing: "easeInOutQuad",
  //  delay: 1000,
  //  opacity: [0, 1],
  //  translateY: [20, 0],
  //  translateX: [20, 0],
  //});

  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
