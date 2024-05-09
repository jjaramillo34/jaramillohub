import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
// load the environment variables react - side using the dotenv package

const emailjsService = process.env.EMAILJS_SERVICE_ID;
const emailjsTemplate = process.env.EMAILJS_TEMPLATE_ID;
const emailjsUser = process.env.EMAILJS_USER_KEY;

const Contact = () => {
  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        // load the service ID from the environment variable
        emailjsService,
        // load the template ID from the environment variable
        emailjsTemplate,
        form.current,
        // load the user ID from the environment variable
        emailjsUser
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          document.getElementById("myForm").reset();
        },
        (error) => {
          // get a better error message
          toast.error("Sorry something went wrong!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  const placeholderText1 = t("placeholderText1");
  const placeholderText2 = t("placeholderText2");
  const placeholderText3 = t("placeholderText3");
  const placeholderText4 = t("placeholderText4");

  return (
    <>
      <form id="myForm" className="contactform" ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={placeholderText1}
                required
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder={placeholderText2}
                required
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder={placeholderText3}
                required
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                name="message"
                placeholder={placeholderText4}
                required
              ></textarea>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button type="submit" className="button">
              <span className="button-text">{t("contactmeTitle")}</span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>
    </>
  );
};

export default Contact;
