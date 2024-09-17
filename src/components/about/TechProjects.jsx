import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calendar,
  Code,
  Building,
  Users,
  Server,
  ExternalLink,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TechProjects = () => {
  const { t } = useTranslation();
  const projectsContent = [
    {
      title: "Tech Project Portfolio",
      company: "Personal Project",
      details: [
        "Garnered over 500 unique visitors monthly by developing interactive developer portfolio using React.js and Node.js.",
        "Strengthened portfolio accessibility and user engagement by integrating Sanity.io for content management, enabling streamlined content updates and interactive project showcases.",
      ],
      type: "Web Development",
      link: "https://jaramillohub.com/",
    },
    {
      title: "SMS Notifications",
      company: "Mech-Tech College",
      details: [
        "Reduced communication response times by enacting SMS Notification system using Python Streamlit, MongoDB, and Twilio API, enriching user communication efficiency.",
        "Accommodated increase in user traffic without performance degradation by deploying the SMS Notification application on AWS Lightsail, gaining high availability and scalability.",
      ],
      type: "Backend Development",
      link: "https://smsnotification.com/",
    },
    {
      title: "Power Solar PR Project",
      company: "Power Solar PR",
      details: [
        "Improved solar power management across Puerto Rico by developing Power Solar PR, integrating React and Mapbox.",
        "Progressed operational efficiency and performance tracking in solar power installations by enabling geographical analysis.",
      ],
      type: "Full Stack Development",
      link: "https://powersolarpr.vercel.app/",
    },
  ];

  const listRef = useRef([]);

  useEffect(() => {
    listRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  return (
    <div className="space-y-8">
      {projectsContent.map((val, i) => (
        <div
          key={i}
          ref={(el) => (listRef.current[i] = el)}
          className="border-l-4 border-[#FFB401] pl-4 py-2"
        >
          <h3 className="text-lg font-bold text-[#FFB401] mb-1">{val.title}</h3>
          <div className="flex items-center text-gray-700 text-sm mb-2">
            <Building className="w-4 h-4 mr-2" />
            <span>{val.company}</span>
          </div>
          <ul className="list-disc list-inside text-gray-600 text-sm leading-relaxed mb-2">
            {val.details.map((detail, index) => (
              <li key={index} className="mb-1">
                {detail}
              </li>
            ))}
          </ul>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Code className="w-4 h-4 mr-2 text-[#FFB401]" />
            <span>{val.type}</span>
          </div>
          <a
            href={val.link}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center text-[#FFB401] hover:underline"
          >
            {t("viewProject")}
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default TechProjects;
