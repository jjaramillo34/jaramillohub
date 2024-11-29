import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

const Address = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const addressItems = [
    {
      icon: <MapPin />,
      title: t("contact.address.title"),
      content: t("personalInfo.fields.address.value"),
      link: false,
    },
    {
      icon: <Mail />,
      title: t("contact.address.email"),
      content: t("personalInfo.fields.email.value"),
      link: `mailto:${t("personalInfo.fields.email.value")}`,
    },
    {
      icon: <Phone />,
      title: t("contact.address.phone"),
      content: t("personalInfo.fields.phone.value"),
      link: `tel:${t("personalInfo.fields.phone.value")}`,
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {addressItems.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="flex items-start group"
        >
          <motion.div
            className="bg-gradient-to-r from-[#FFB401] to-[#FF9000] p-3 rounded-full mr-4 flex-shrink-0"
            whileHover={{ scale: 1.1 }}
          >
            {React.cloneElement(item.icon, {
              className: "w-6 h-6 text-white",
            })}
          </motion.div>
          <div>
            <h3 className="font-semibold text-[#FFB401] mb-2">{item.title}</h3>
            {item.link ? (
              <motion.a
                href={item.link}
                className="text-gray-800 dark:text-gray-200 hover:text-[#FFB401] 
                  dark:hover:text-[#FFB401] transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                {item.content}
              </motion.a>
            ) : (
              <p className="text-gray-800 dark:text-gray-200">{item.content}</p>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Address;
