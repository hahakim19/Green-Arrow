import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const { t } = useTranslation();
  const [expandedService, setExpandedService] = useState(null);
  const navigate = useNavigate();
  // Smooth scroll to section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const services = [
    {
      id: 1,
      number: "02",
      title: t("services.items.0.title"),
      description: t("services.items.0.description"),
      details: t("services.items.0.details"),
    },
    {
      id: 2,
      number: "03",
      title: t("services.items.1.title"),
      description: t("services.items.1.description"),
      details: t("services.items.1.details"),
    },
    {
      id: 3,
      number: "04",
      title: t("services.items.2.title"),
      description: t("services.items.2.description"),
      details: t("services.items.2.details"),
    },
    {
      id: 4,
      number: "05",
      title: t("services.items.3.title"),
      description: t("services.items.3.description"),
      details: t("services.items.3.details"),
    },
    {
      id: 5,
      number: "06",
      title: t("services.items.4.title"),
      description: t("services.items.4.description"),
      details: t("services.items.4.details"),
    },
  ];

  const toggleExpand = (id) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const titleVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-gray-100 to-white"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#099323]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#063a0c]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div variants={titleVariants}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {t("services.title")}
            </h2>
          </motion.div>

          <motion.div variants={titleVariants}>
            <div className="inline-block">
              <div className="w-20 h-1 bg-[#099323] mx-auto mb-6 rounded-full"></div>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t("services.subtitle").split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-[#099323] font-semibold">
                  {t("services.subtitle").split(" ").slice(-1).join(" ")}
                </span>
              </p>
              <p className="text-lg text-gray-500 mt-3 max-w-2xl mx-auto">
                {t("services.description")}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Services List - Two Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Services List */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    expandedService === service.id ? "shadow-xl" : ""
                  }`}
                  onClick={() => toggleExpand(service.id)}
                >
                  {/* Service Header - Always Visible */}
                  <div className="p-6 flex items-start gap-4 hover:bg-gray-50 rounded-xl transition-colors duration-200">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#099323] transition-colors duration-300">
                          {service.title}
                        </h3>
                        <motion.svg
                          animate={{
                            rotate: expandedService === service.id ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="w-5 h-5 text-[#099323] flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </motion.svg>
                      </div>
                      <p className="text-gray-600 mt-2">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                          <div className="bg-[#099323]/5 rounded-lg p-5">
                            <p className="text-gray-700 leading-relaxed">
                              {service.details}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Clean Stats Panel */}
          <div className="sticky top-24">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  {t("services.cta.title")}
                </h3>
                <div className="w-16 h-1 bg-[#099323] mx-auto mb-6 rounded-full"></div>

                {/* Stats Grid */}
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#099323] mb-2">
                      5+
                    </div>
                    <div className="text-gray-600 font-medium">
                      {t("services.stats.1")}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {t("services.stats.1.1")}
                    </div>
                  </div>

                  <div className="border-t border-gray-100"></div>

                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#099323] mb-2">
                      500+
                    </div>
                    <div className="text-gray-600 font-medium">
                      {t("services.stats.2")}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {t("services.stats.2.1")}
                    </div>
                  </div>

                  <div className="border-t border-gray-100"></div>

                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#099323] mb-2">
                      98%
                    </div>
                    <div className="text-gray-600 font-medium">
                      {t("services.stats.3")}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {t("services.stats.3.1")}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-[#099323] to-[#063a0c] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate("/request-quote");
                  }}
                >
                  {t("services.cta.button")}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
