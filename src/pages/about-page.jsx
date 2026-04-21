import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import aboutLogoFr from "../assets/about_logo_fr.svg";
import aboutLogoEn from "../assets/about_logo_en.svg";
import aboutLogoAr from "../assets/about_logo_ar.svg";
import multipleLogo from "../assets/multiple_logo.svg";
import fadeLogo from "../assets/fade_logo.svg";

const AboutPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const language = i18n.language;

  const stats = [
    { number: "10+", label: t("services.stats.1") },
    { number: "500+", label: t("services.stats.2") },
    { number: "50+", label: t("stats.4") },
    { number: "100%", label: t("activities.stats.coverage") },
  ];

  const values = [
    {
      title: t("about.values.excellence"),
      description: t("about.values.excellence_desc"),
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: t("about.values.integrity"),
      description: t("about.values.integrity_desc"),
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: t("about.values.innovation"),
      description: t("about.values.innovation_desc"),
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: t("about.values.reactivity"),
      description: t("about.values.reactivity_desc"),
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const getLogo = () => {
    if (language === "ar") {
      return aboutLogoAr;
    } else if (language === "en") {
      return aboutLogoEn;
    }
    return aboutLogoFr;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Logo */}
      <div className="relative bg-gradient-to-r from-[#099323] to-[#063a0c] py-16 md:py-24">
        <img
          src={multipleLogo}
          alt=""
          className="absolute z-[1020] 
    -right-[100px] sm:-right-[120px] md:-right-[140px] lg:-right-[175px] 
    bottom-[20px] sm:bottom-[30px] md:bottom-[40px] lg:bottom-[30px] 
    w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]
    opacity-50 hover:opacity-100 transition-opacity duration-300
    pointer-events-none"
        />
        <img
          src={fadeLogo}
          alt=""
          className="absolute z-[1020] pointer-events-none
    opacity-50 hover:opacity-100 transition-opacity duration-300
    
    -left-[10px]  -left-[70px] md:-left-[100px] lg:-left-[130px]
    bottom-[5px] -bottom-[125px] md:bottom-[30px] lg:-bottom-[190px]
    w-[50px] w-[170px] md:w-[250px] lg:w-[325px]"
        />
        {/* Return to Home Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-8 left-8 md:top-12 md:left-12 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-lg transition-all duration-200 group"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          {t("about.back_home")}
        </button>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">
          {/* Large Logo Placeholder */}
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-44 h-auto">
              <img
                src={getLogo()}
                alt="Logo"
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Title */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {t("about.title")}
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t("about.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("about.mission.title")}
              </h2>
              <div className="w-20 h-1 bg-[#099323] mb-6 rounded-full"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t("about.mission.text1")}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t("about.mission.text2")}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#099323]/10 to-[#063a0c]/10 rounded-2xl p-8"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-[#099323] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <p className="text-gray-800 italic text-lg">
                  "{t("about.mission.quote")}"
                </p>
                <p className="text-[#099323] font-semibold mt-4">
                  — {t("about.mission.author")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#099323] to-[#063a0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("about.values.title")}
            </h2>
            <div className="w-20 h-1 bg-[#099323] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              {t("about.values.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-[#099323]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#099323] transition-colors duration-300">
                  <div className="text-[#099323] group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* White Text Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("about.why_choose.title")}
            </h2>
            <div className="w-20 h-1 bg-[#099323] mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t("about.why_choose.text1")}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("about.why_choose.text2")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#099323] to-[#063a0c]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("about.cta.title")}
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            {t("about.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3 bg-white text-[#099323] font-semibold rounded-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              {t("about.cta.button")}
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#099323] transition-all duration-200"
            >
              {t("about.cta.button_back")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
