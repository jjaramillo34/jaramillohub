import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

const Social = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: <Github />,
      link: "https://github.com/jjaramillo34/",
      name: t("social.links.github"),
    },
    {
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/javierjaramillo1/",
      name: t("social.links.linkedin"),
    },
    {
      icon: <Twitter />,
      link: "https://twitter.com/jejaramilloc",
      name: t("social.links.twitter"),
    },
    {
      icon: <Facebook />,
      link: "https://www.facebook.com/javier.jaramillo3/",
      name: t("social.links.facebook"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.ul
      className="flex space-x-4 pt-4 mb-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((val, i) => (
        <motion.li key={i} variants={itemVariants}>
          <motion.a
            href={val.link}
            target="_blank"
            rel="noreferrer"
            className="block p-3 text-gray-600 dark:text-gray-300 hover:text-[#FFB401] 
              dark:hover:text-[#FFB401] transition-colors duration-300 
              bg-gray-100 dark:bg-gray-800 rounded-full 
              hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label={val.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {React.cloneElement(val.icon, {
              size: 24,
              strokeWidth: 1.5,
              className: "transition-colors duration-300",
            })}
          </motion.a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Social;
