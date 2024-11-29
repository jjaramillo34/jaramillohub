import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Code, Building, ExternalLink } from "lucide-react";

const TechProjects = () => {
  const { t } = useTranslation();
  const projectsContent = [
    {
      title: "Tech Project Portfolio",
      company: "Personal Project",
      details: [
        "Garnered over 500 unique visitors monthly by developing interactive developer portfolio using React.js and Node.js.",
        "Strengthened portfolio accessibility and user engagement by integrating Sanity.io for content management.",
      ],
      type: "Web Development",
      link: "https://jaramillohub.com/",
    },
    // Add more projects here
  ];

  return (
    <div className="space-y-8">
      {projectsContent.map((val, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="border-l-4 border-[#FFB401] pl-4 py-2"
        >
          <h3 className="text-lg font-bold text-[#FFB401] mb-1">{val.title}</h3>
          <div className="flex items-center text-gray-700 dark:text-gray-300 text-sm mb-2">
            <Building className="w-4 h-4 mr-2" />
            <span>{val.company}</span>
          </div>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-2">
            {val.details.map((detail, index) => (
              <li key={index} className="mb-1">
                {detail}
              </li>
            ))}
          </ul>
          <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
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
        </motion.div>
      ))}
    </div>
  );
};

export default TechProjects;
