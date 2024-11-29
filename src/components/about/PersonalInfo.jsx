import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  Briefcase,
  GraduationCap,
  Languages,
  Info,
} from "lucide-react";

const PersonalInfo = () => {
  const { t } = useTranslation();

  const personalInfoFields = [
    {
      key: "firstName",
      icon: User,
    },
    {
      key: "lastName",
      icon: User,
    },
    {
      key: "age",
      icon: Info,
    },
    {
      key: "address",
      icon: MapPin,
    },
    {
      key: "email",
      icon: Mail,
      isLink: true,
      getLinkHref: (value) => `mailto:${value}`,
    },
    {
      key: "phone",
      icon: Phone,
      isLink: true,
      getLinkHref: (value) => `tel:${value}`,
    },
    {
      key: "website",
      icon: Globe,
      isLink: true,
      getLinkHref: (value) => `https://${value}`,
    },
    {
      key: "freelance",
      icon: Briefcase,
    },
    {
      key: "degree",
      icon: GraduationCap,
    },
    {
      key: "languages",
      icon: Languages,
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center text-[#FFB401] flex items-center justify-center mb-2">
        <Info className="w-5 h-5 mr-2" />
        {t("personalInfo.title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {personalInfoFields.map((field, i) => (
          <motion.div
            key={field.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center group transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded"
          >
            <field.icon className="w-4 h-4 text-[#FFB401] mr-2 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {t(`personalInfo.fields.${field.key}.label`)}
              </span>
              {field.isLink ? (
                <motion.a
                  href={field.getLinkHref(
                    t(`personalInfo.fields.${field.key}.value`)
                  )}
                  className="text-sm text-[#FFB401] hover:underline"
                  whileHover={{ x: 5 }}
                >
                  {t(`personalInfo.fields.${field.key}.value`)}
                </motion.a>
              ) : (
                <span className="text-sm text-gray-800 dark:text-gray-200">
                  {t(`personalInfo.fields.${field.key}.value`)}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;
