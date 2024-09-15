"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Send, MapPin } from "lucide-react";

const emailjsService = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const emailjsTemplate = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const emailjsUser = process.env.REACT_APP_EMAILJS_USER_KEY;
const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

mapboxgl.accessToken = mapboxToken;

export default function Contact() {
  const form = useRef(null);
  const mapContainer = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/light-v10",
        center: [-74.006, 40.7128], // New York City coordinates
        zoom: 12,
      });

      new mapboxgl.Marker({ color: "#FFB401" })
        .setLngLat([-74.006, 40.7128])
        .addTo(map);

      return () => map.remove();
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(emailjsService, emailjsTemplate, form.current, emailjsUser)
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
            form.current.reset();
          },
          (error) => {
            toast.error("Sorry, something went wrong!", {
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
    }
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-12"
    >
      <motion.form
        id="myForm"
        className="space-y-6"
        ref={form}
        onSubmit={sendEmail}
        variants={containerVariants}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <input
              type="text"
              name="name"
              placeholder={t("placeholderText1")}
              required
              className="w-full px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-full border-2 border-transparent focus:outline-none focus:border-[#FFB401] transition-colors duration-300"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <input
              type="email"
              name="user_email"
              placeholder={t("placeholderText2")}
              required
              className="w-full px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-full border-2 border-transparent focus:outline-none focus:border-[#FFB401] transition-colors duration-300"
            />
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <input
            type="text"
            name="subject"
            placeholder={t("placeholderText3")}
            required
            className="w-full px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-full border-2 border-transparent focus:outline-none focus:border-[#FFB401] transition-colors duration-300"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <textarea
            name="message"
            placeholder={t("placeholderText4")}
            required
            className="w-full px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-3xl border-2 border-transparent focus:outline-none focus:border-[#FFB401] transition-colors duration-300 h-32 resize-none"
          ></textarea>
        </motion.div>
        <motion.div variants={itemVariants}>
          <motion.button
            type="submit"
            className="px-8 py-3 bg-[#FFB401] text-white rounded-full hover:bg-[#E5A200] transition-colors duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">{t("contactmeTitle")}</span>
            <Send size={20} />
          </motion.button>
        </motion.div>
      </motion.form>

      <motion.div variants={containerVariants}>
        <motion.h3
          className="text-2xl font-bold mb-4 text-[#FFB401] flex items-center"
          variants={itemVariants}
        >
          <MapPin className="mr-2" size={24} />
          My Office Location
        </motion.h3>
        <motion.div
          ref={mapContainer}
          className="h-96 rounded-2xl overflow-hidden shadow-lg"
          variants={itemVariants}
        />
      </motion.div>
    </motion.div>
  );
}
