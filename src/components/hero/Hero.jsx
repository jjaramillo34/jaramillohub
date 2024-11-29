import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, X, Code, Users, Coffee, Heart } from "lucide-react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Index from "../about/AboutPage";

import heroImg from "../../assets/img/hero/dark.png";
import heroImgMobile from "../../assets/img/hero/mobile.png";

gsap.registerPlugin(TextPlugin);

const animateValue = (obj, start, end, duration, suffix = "") => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const currentValue = Math.floor(progress * (end - start) + start);
    if (obj.current) {
      obj.current.textContent = currentValue.toLocaleString() + suffix;
    }
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

const ParticleBackground = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    if (!particlesRef.current) return;

    const particlesContainer = particlesRef.current;
    const particles = [];
    const particleCount = 150;

    const isDarkTheme = () =>
      document.documentElement.classList.contains("dark");
    particlesContainer.innerHTML = "";

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.style.cssText = `
        position: absolute;
        width: 3px;
        height: 3px;
        background-color: ${isDarkTheme() ? "#FFB401" : "#000000"};
        border-radius: 50%;
        top: 0;
        left: 0;
        will-change: transform, opacity;
        filter: blur(0.5px);
      `;

      particlesContainer.appendChild(particle);
      particles.push(particle);

      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;

      gsap.set(particle, {
        x: startX,
        y: startY,
        opacity: 0,
      });

      gsap.to(particle, {
        duration: Math.random() * 8 + 8,
        x: startX + (Math.random() * 150 - 75),
        y: startY + (Math.random() * 150 - 75),
        opacity: Math.random() * 0.4 + 0.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 3,
      });
    }

    const handleResize = () => {
      particles.forEach((particle) => {
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        gsap.set(particle, { x: startX, y: startY });
      });
    };

    window.addEventListener("resize", handleResize);
    const observer = new MutationObserver(() => {
      particles.forEach((particle) => {
        particle.style.backgroundColor = isDarkTheme() ? "#FFB401" : "#000000";
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      particles.forEach((particle) => {
        gsap.killTweensOf(particle);
        particle.remove();
      });
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none z-0"
      />
    </div>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const refs = {
    titleName: useRef(null),
    designation: useRef(null),
    description: useRef(null),
    button: useRef(null),
    image: useRef(null),
    mobileImage: useRef(null),
    modal: useRef(null),
    stats: useRef([]),
  };

  const heroContent = {
    heroTitleName: t("heroTitleName").toUpperCase(),
    heroDesignation: t("heroDesignation").toUpperCase(),
    heroDescriptions: t("heroDescriptions"),
    heroBtn: t("heroBtn").toUpperCase(),
    stats: [
      { icon: <Code />, value: 30000, label: "Lines of Code", suffix: "+" },
      { icon: <Users />, value: 10, label: "Clients", suffix: "+" },
      { icon: <Coffee />, value: 100, label: "Coffee Cups", suffix: "+" },
      { icon: <Heart />, value: 10, label: "Projects", suffix: "+" },
    ],
  };

  const toggleModal = useCallback(() => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      gsap.to(refs.modal.current, {
        duration: 0.4,
        opacity: 1,
        y: 0,
        ease: "power2.out",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(refs.modal.current, {
        duration: 0.3,
        opacity: 0,
        y: 20,
        ease: "power2.in",
        pointerEvents: "none",
        onComplete: () => setIsModalOpen(false),
      });
    }
  }, [isModalOpen]);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set([refs.image.current, refs.mobileImage.current], {
      opacity: 0,
      scale: 0.8,
    });

    gsap.set(refs.button.current, {
      opacity: 0,
      y: 20,
    });

    tl.to(refs.titleName.current, {
      duration: 2,
      text: heroContent.heroTitleName,
      ease: "none",
    })
      .to(
        refs.designation.current,
        {
          duration: 1.5,
          text: heroContent.heroDesignation,
          ease: "none",
        },
        "-=1"
      )
      .to(refs.description.current, {
        duration: 1.5,
        text: heroContent.heroDescriptions,
        ease: "none",
      })
      .to(refs.button.current, {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "power3.out",
      })
      .to([refs.image.current, refs.mobileImage.current], {
        duration: 1,
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = refs.stats.current.indexOf(entry.target);
            const stat = heroContent.stats[index];
            if (stat && entry.target) {
              animateValue(
                { current: entry.target },
                0,
                stat.value,
                2000,
                stat.suffix
              );
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.stats.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [heroContent]);

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />

      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 dark:text-white tracking-tight">
                <span ref={refs.titleName} className="block">
                  -
                </span>
                <span
                  ref={refs.designation}
                  className="block mt-3 bg-gradient-to-r from-[#FFB401] to-[#FF9000] bg-clip-text text-transparent"
                >
                  -
                </span>
              </h1>
              <p
                ref={refs.description}
                className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                -
              </p>
            </div>

            <button
              ref={refs.button}
              onClick={toggleModal}
              className="group relative inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-[#FFB401] to-[#FF9000] text-white font-semibold 
                transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FFB401]/20"
            >
              <span className="flex items-center">
                {heroContent.heroBtn}
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {heroContent.stats.map((stat, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-white/90 dark:bg-gray-800/50 backdrop-blur-sm
                    shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                    border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="p-3 rounded-full bg-gradient-to-br from-[#FFB401]/20 to-[#FF9000]/20 
                      text-[#FFB401] mb-4 group-hover:scale-110 transition-transform duration-300"
                    >
                      {stat.icon}
                    </div>
                    <span
                      ref={(el) => (refs.stats.current[index] = el)}
                      className="text-3xl font-bold bg-gradient-to-r from-[#FFB401] to-[#FF9000] bg-clip-text text-transparent"
                    >
                      0
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                ref={refs.image}
                src={heroImg}
                alt="Hero"
                className="w-full transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#FFB401]/10" />
            </div>
            <div className="absolute -bottom-6 -left-6">
              <div className="relative w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg overflow-hidden">
                <img
                  ref={refs.mobileImage}
                  src={heroImgMobile}
                  alt="Mobile Hero"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#FFB401]/10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          ref={refs.modal}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </button>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                ABOUT <span className="text-[#FFB401]">ME</span>
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <Index />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
