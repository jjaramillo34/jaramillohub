import React from "react";
import { useTranslation } from "react-i18next";

const Address = () => {
  const { t } = useTranslation();
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">{t("addressTitle1")}</span>368 9th Avenue, New
        York, NY 10001
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">{t("addressTitle2")}</span>{" "}
        <a href="mailto:javier@jaramillohub.com">javier@jaramillohub.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">{t("addressTitle3")}</span>{" "}
        <a href="Tel: +1 347 239 9026">+1 347 239 9026</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
