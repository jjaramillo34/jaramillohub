import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(TextPlugin, MotionPathPlugin);

const NotFound = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const errorTextRef = useRef(null);
  const messageRef = useRef(null);
  const buttonRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const errorText = errorTextRef.current;

    // Create 3D text elements
    const text = "404 ERROR";
    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      span.style.position = "relative";
      errorText.appendChild(span);

      gsap.set(span, {
        rotationY: -180,
        opacity: 0,
        z: -500,
      });

      gsap.to(span, {
        duration: 1.5,
        rotationY: 0,
        opacity: 1,
        z: 0,
        ease: "back.out(1.7)",
        delay: index * 0.1,
      });
    });

    // Continuous rotation animation
    gsap.to(errorText, {
      rotationY: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
    });

    // Mouse move effect
    container.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      gsap.to(errorText, {
        rotationY: x * 20,
        rotationX: -y * 20,
        duration: 0.5,
      });
    });

    // Create particles
    const particlesContainer = particlesRef.current;
    for (let i = 0; i < 100; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute w-1 h-1 bg-white rounded-full";
      particlesContainer.appendChild(particle);

      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.5,
      });

      gsap.to(particle, {
        duration: 10 + Math.random() * 20,
        x: "+=" + (Math.random() * 1000 - 500),
        y: "+=" + (Math.random() * 1000 - 500),
        repeat: -1,
        yoyo: true,
        ease: "none",
      });
    }

    // Animate the message
    gsap.to(messageRef.current, {
      duration: 2,
      text: t("notFoundMessage"),
      ease: "none",
      delay: 1.5,
    });

    // Animate the button
    gsap.from(buttonRef.current, {
      duration: 0.5,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      delay: 3,
    });
  }, [t]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FFB401] to-[#FF9000] flex items-center justify-center p-4 perspective-1000"
    >
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none"
      ></div>
      <div className="relative text-center z-10">
        <h1
          ref={errorTextRef}
          className="text-9xl font-bold text-white mb-8 shadow-lg inline-block"
          style={{ transformStyle: "preserve-3d" }}
        ></h1>
        <p ref={messageRef} className="text-3xl text-white mb-12 shadow-md"></p>
        <Link
          to="/"
          ref={buttonRef}
          className="inline-block bg-white text-[#FFB401] font-bold py-4 px-10 rounded-full shadow-lg hover:bg-[#FFB401] hover:text-white transition duration-300 text-xl transform hover:scale-110"
        >
          {t("notFoundButton")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
