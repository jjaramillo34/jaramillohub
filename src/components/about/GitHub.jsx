import React from "react";

const GitHub = () => {
  return (
    <div className="resume-box">
      <h4
        className="text-uppercase custom-title ft-wt-600"
        style={{
          marginTop: "20px",
          textAlign: "center",
        }}
        id="courses"
        name="courses"
      >
        GitHub Stats
      </h4>
      <img
        src="https://github-readme-stats.vercel.app/api?username=jjaramillo34&show_icons=true&theme=london-grass"
        alt="Javier Jaramillo's GitHub Stats"
        style={{
          width: "100%",
        }}
      />

      <div style={{ marginBottom: "40px" }}></div>
      <img
        src="https://github-readme-streak-stats.herokuapp.com/?user=jjaramillo34&theme=london-grass"
        alt="Javier Jaramillo's GitHub Streak"
        style={{
          width: "100%",
        }}
      />
    </div>
  );
};

export default GitHub;
