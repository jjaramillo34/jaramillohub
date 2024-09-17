import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const SocialShare = [
  {
    icon: <Facebook />,
    link: "https://www.facebook.com/javier.jaramillo3/",
    name: "Facebook",
  },
  {
    icon: <Twitter />,
    link: "https://twitter.com/jejaramilloc",
    name: "Twitter",
  },
  {
    icon: <Linkedin />,
    link: "https://www.linkedin.com/in/javierjaramillo1/",
    name: "LinkedIn",
  },
  {
    icon: <Github />,
    link: "https://github.com/jjaramillo34/",
    name: "GitHub",
  },
];

const Social = () => {
  return (
    <ul className="flex space-x-4 pt-4 mb-5">
      {SocialShare.map((val, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, y: 20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <a
            href={val.link}
            target="_blank"
            rel="noreferrer"
            className="block p-2 text-gray-600 hover:text-[#ffb401] transition-colors duration-300 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label={val.name}
          >
            {React.cloneElement(val.icon, { size: 24, strokeWidth: 1.5 })}
          </a>
        </motion.li>
      ))}
    </ul>
  );
};

export default Social;
