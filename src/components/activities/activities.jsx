import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Activities = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const navigate = useNavigate();
  const sectors = [
    {
      id: 1,
      name: t("activities.sectors.0.name"),
      description: t("activities.sectors.0.description"),
      image:
        "https://www.sdprungis.fr/sites/sdpr/files/Design%20sans%20titre1_0.png",
      alt: "Agroalimentaire",
    },
    {
      id: 2,
      name: t("activities.sectors.1.name"),
      description: t("activities.sectors.1.description"),
      image:
        "https://grey.biskriaciment.com/wp-content/uploads/2022/02/COVER-34.png",
      alt: "Industrie & BTP",
    },
    {
      id: 3,
      name: t("activities.sectors.2.name"),
      description: t("activities.sectors.2.description"),
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop",
      alt: "Pharmaceutique",
    },
    {
      id: 4,
      name: t("activities.sectors.3.name"),
      description: t("activities.sectors.3.description"),
      image:
        "https://media.bazarafrique.com/upload/post/623158dc8aad0297438386.jpg",
      alt: "Électronique",
    },
    {
      id: 5,
      name: t("activities.sectors.4.name"),
      description: t("activities.sectors.4.description"),
      image:
        "https://cdn8.futura-sciences.com/a1280/images/difference-fruit-legume.jpg",
      alt: "Vegetables",
    },
    {
      id: 6,
      name: t("activities.sectors.5.name"),
      description: t("activities.sectors.5.description"),
      image:
        "https://www.maghrebmarket.ca/cdn/shop/files/Algeriandates.jpg?v=1741464870&width=1920",
      alt: "Fruits",
    },
    {
      id: 7,
      name: t("activities.sectors.6.name"),
      description: t("activities.sectors.6.description"),
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
      alt: "Énergie & environnement",
    },
    {
      id: 8,
      name: t("activities.sectors.7.name"),
      description: t("activities.sectors.7.description"),
      image:
        "https://img-cdn.inc.com/image/upload/f_webp,c_fit,w_1920,q_auto/images/panoramic/parcels-packages-shipping_1940x900_33939.jpg",
      alt: "Emballage & packaging",
    },
  ];

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
      id="activities"
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-gray-100 to-white"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#099323]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#063a0c]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Same as Services */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div variants={titleVariants}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {t("activities.title")}
            </h2>
          </motion.div>

          <motion.div variants={titleVariants}>
            <div className="inline-block">
              <div className="w-20 h-1 bg-[#099323] mx-auto mb-6 rounded-full"></div>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t("activities.subtitle").split(" ")[0]}{" "}
                <span className="text-[#099323] font-semibold">
                  {t("activities.subtitle").split(" ").slice(1).join(" ")}
                </span>
              </p>
              <p className="text-lg text-gray-500 mt-3 max-w-2xl mx-auto">
                {t("activities.description")}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Sectors Grid with Images */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <img
                  src={sector.image}
                  alt={sector.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/800x600/e2e8f0/475569?text=${sector.name}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#099323] transition-colors duration-300 line-clamp-2">
                  {sector.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {sector.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-4 w-12 h-0.5 bg-[#099323] rounded-full group-hover:w-full transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-[#099323] mb-2">8+</div>
            <div className="font-semibold text-gray-900">
              {t("activities.stats.sectors")}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Industries stratégiques
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-[#099323] mb-2">100%</div>
            <div className="font-semibold text-gray-900">
              {t("activities.stats.coverage")}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Présence sur tout le territoire
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-[#099323] mb-2">24/7</div>
            <div className="font-semibold text-gray-900">
              {t("activities.stats.support")}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Assistance continue
            </div>
          </div>
        </motion.div>

        {/* CTA Section - Same as Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mt-16 md:mt-24"
        >
          <div className="bg-gradient-to-r from-[#099323] to-[#063a0c] rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t("activities.cta.title")}
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              {t("activities.cta.subtitle")}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/request-quote");
              }}
              className="px-8 py-3 bg-white text-[#099323] font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {t("activities.cta.button")}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
