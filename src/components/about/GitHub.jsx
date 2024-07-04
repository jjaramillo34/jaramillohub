import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GitHub = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
        data-aos="fade-up"
      >
        GitHub Stats
      </h4>
      <img
        src="https://github-readme-stats.vercel.app/api?username=jjaramillo34&show_icons=true&theme=london-grass"
        alt="Javier Jaramillo's GitHub Stats"
        style={{
          width: "100%",
        }}
        data-aos="fade-up"
        data-aos-delay="200"
      />

      <div style={{ marginBottom: "40px" }}></div>
      <img
        src="https://github-readme-streak-stats.herokuapp.com/?user=jjaramillo34&theme=london-grass"
        alt="Javier Jaramillo's GitHub Streak"
        style={{
          width: "100%",
        }}
        data-aos="fade-up"
        data-aos-delay="400"
      />
    </div>
  );
};

export default GitHub;
