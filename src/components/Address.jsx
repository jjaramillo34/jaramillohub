import React from "react";
import { useTranslation } from "react-i18next";
import { MapPin, Mail, Phone } from "lucide-react";

const Address = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <div className="flex items-start group">
        <div className="bg-[#FFB401] p-3 rounded-full mr-4 flex-shrink-0">
          <MapPin className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-[#FFB401] mb-2">
            {t("addressTitle1")}
          </h3>
          <p className="text-gray-800 dark:text-gray-200">
            368 9th Avenue, New York, NY 10001
          </p>
        </div>
      </div>

      <div className="flex items-start group">
        <div className="bg-[#FFB401] p-3 rounded-full mr-4 flex-shrink-0">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-[#FFB401] mb-2">
            {t("addressTitle2")}
          </h3>
          <a
            href="mailto:javier@jaramillohub.com"
            className="text-gray-800 dark:text-gray-200 hover:text-[#FFB401] dark:hover:text-[#FFB401] transition-colors duration-300"
          >
            javier@jaramillohub.com
          </a>
        </div>
      </div>

      <div className="flex items-start group">
        <div className="bg-[#FFB401] p-3 rounded-full mr-4 flex-shrink-0">
          <Phone className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-[#FFB401] mb-2">
            {t("addressTitle3")}
          </h3>
          <a
            href="tel:+13472399026"
            className="text-gray-800 dark:text-gray-200 hover:text-[#FFB401] dark:hover:text-[#FFB401] transition-colors duration-300"
          >
            +1 347 239 9026
          </a>
        </div>
      </div>
    </div>
  );
};

export default Address;
