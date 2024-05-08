import React from "react";
//import animate from "animateplus";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/javier.jaramillo3/",
  },
  {
    iconName: "fa fa-twitter",
    link: "https://twitter.com/jejaramilloc",
  },
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/javierjaramillo1/",
  },
  {
    iconName: "fa fa-github",
    link: "https://github.com/jjaramillo34/",
  },
];

const Social = () => {
  //animate({
  //  elements: ".social",
  //  duration: 2000,
  //  defaultEasing: "easeInOutQuad",
  //  delay: 1000,
  //  opacity: [0, 1],
  //  translateY: [20, 0],
  //  translateX: [20, 0],
  //});

  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
