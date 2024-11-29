"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import mapboxgl from "mapbox-gl";
import "../styles/mapbox-custom.css";
import Address from "./Address";

const emailjsService = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const emailjsTemplate = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const emailjsUser = process.env.REACT_APP_EMAILJS_USER_KEY;
const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

mapboxgl.accessToken = mapboxToken;

export default function Contact() {
  const form = useRef(null);
  const mapContainer = useRef(null);
  const { t } = useTranslation();

  console.log("Current translations:", {
    title: t("contact.title"),
    subtitle: t("contact.subtitle"),
    formName: t("contact.form.name"),
  });

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
          () => {
            toast.success(t("contact.success"));
            form.current.reset();
          },
          () => {
            toast.error(t("contact.error"));
          }
        );
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              {t("contact.title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t("contact.subtitle")}
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <input
                  type="text"
                  name="name"
                  placeholder={t("contact.form.name")}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 
                    border border-transparent focus:border-[#FFB401] 
                    text-gray-900 dark:text-white transition-colors duration-300"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <input
                  type="email"
                  name="email"
                  placeholder={t("contact.form.email")}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 
                    border border-transparent focus:border-[#FFB401] 
                    text-gray-900 dark:text-white transition-colors duration-300"
                />
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="subject"
                placeholder={t("contact.form.subject")}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 
                  border border-transparent focus:border-[#FFB401] 
                  text-gray-900 dark:text-white transition-colors duration-300"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <textarea
                name="message"
                placeholder={t("contact.form.message")}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 
                  border border-transparent focus:border-[#FFB401] 
                  text-gray-900 dark:text-white transition-colors duration-300 
                  h-32 resize-none"
              ></textarea>
            </motion.div>

            <motion.div variants={itemVariants}>
              <button
                type="submit"
                className="w-full px-8 py-3 rounded-lg bg-gradient-to-r 
                  from-[#FFB401] to-[#FF9000] text-white font-medium
                  hover:shadow-lg hover:shadow-[#FFB401]/20 
                  transition-all duration-300"
              >
                {t("contact.form.send")}
              </button>
            </motion.div>
          </form>
        </motion.div>

        {/* Address Information */}
        <motion.div variants={itemVariants}>
          <Address />
        </motion.div>
      </div>
    </motion.div>
  );
}
