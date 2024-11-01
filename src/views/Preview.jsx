import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const previewDemo = [
  {
    img: "path/to/your/image1.jpg",
    title: "Dark & Light (Professional)",
    routerPath: "/home-dark",
    delayAnimation: 0.2,
  },
  {
    img: "path/to/your/image2.jpg",
    title: "Dark & Light (RTL Version)",
    routerPath: "/home-rtl",
    delayAnimation: 0.4,
  },
];

const Preview = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="banner text-center py-20 bg-gradient-to-r from-[#FFB401] to-[#FF9000]">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="content text-white"
        >
          <h1 className="text-5xl font-bold mb-4">Portfolio Showcase</h1>
          <h2 className="text-2xl">Personal Portfolio React Template</h2>
        </motion.div>
      </section>

      <section className="demo py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {previewDemo.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: val.delayAnimation }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="content text-center">
                  <div className="bg_container">
                    <Link to={val.routerPath} target="_blank" rel="noreferrer">
                      <img
                        src={val.img}
                        alt="demo"
                        className="w-full h-64 object-cover"
                      />
                    </Link>
                  </div>
                  <h2 className="text-xl font-semibold my-4">{val.title}</h2>
                  <div className="anchor mb-6">
                    <Link
                      className="bg-[#FFB401] text-white px-6 py-2 rounded-full hover:bg-[#FF9000] transition duration-300"
                      to={val.routerPath}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Demo
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-6"
          >
            Build Your Super Fast{" "}
            <span className="text-[#FFB401]">React JS</span> &amp;{" "}
            <span className="text-[#FFB401]">Bootstrap 5</span> Based Portfolio
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              className="inline-block bg-[#FFB401] text-white px-8 py-3 rounded-full hover:bg-[#FF9000] transition duration-300"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              Get Started Now
            </a>
          </motion.div>
        </div>
        <div className="mt-12 text-center text-gray-400">
          <p>Personal Portfolio React Template</p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} Designed with{" "}
            <span className="text-red-500">&#10084;</span> by You
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Preview;
