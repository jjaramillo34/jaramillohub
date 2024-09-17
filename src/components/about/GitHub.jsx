import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GitHub = () => {
  const componentRef = useRef(null);
  const titleRef = useRef(null);
  const stat1Ref = useRef(null);
  const stat2Ref = useRef(null);

  useEffect(() => {
    const component = componentRef.current;
    const title = titleRef.current;
    const stats = [stat1Ref.current, stat2Ref.current];

    gsap.fromTo(
      title,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: component,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      stats,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: component,
          start: "top 60%",
        },
      }
    );
  }, []);

  return (
    <div ref={componentRef} className="py-12 px-4 md:px-0">
      <div className="space-y-12 max-w-4xl mx-auto">
        <div
          ref={stat1Ref}
          className="transform transition-all duration-300 hover:-translate-y-2"
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=jjaramillo34&show_icons=true&theme=github_dark&hide_border=true&title_color=FFB401&icon_color=FFB401&text_color=ffffff&bg_color=1c1c1c"
            alt="Javier Jaramillo's GitHub Stats"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div
          ref={stat2Ref}
          className="transform transition-all duration-300 hover:-translate-y-2"
        >
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=jjaramillo34&theme=github-dark-blue&hide_border=true&stroke=FFB401&ring=FFB401&fire=FFB401&currStreakNum=ffffff&sideNums=ffffff&dates=ffffff&currStreakLabel=FFB401&background=1c1c1c"
            alt="Javier Jaramillo's GitHub Streak"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default GitHub;
