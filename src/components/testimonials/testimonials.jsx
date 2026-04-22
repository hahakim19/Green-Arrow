import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef as useRefScroll } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  const ref = useRefScroll(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const carouselRef = useRef(null);
  const { t } = useTranslation();
  const language = i18n.language;

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Benali",
      position: "Directeur Général, Benali Import",
      content:
        "Un partenaire fiable et professionnel. Grâce à FLÈCHE VERTE, nous avons pu développer nos activités d'import en toute sérénité. Leur équipe est réactive et compétente.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Fatima Zohra",
      position: "Responsable Logistique, Agroplus",
      content:
        "Je recommande vivement FLÈCHE VERTE pour leur expertise en dédouanement. Ils nous ont accompagnés pas à pas et ont simplifié des procédures complexes.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Karim Mansouri",
      position: "CEO, Mansouri Group",
      content:
        "Une équipe à l'écoute et des solutions sur mesure. FLÈCHE VERTE a grandement contribué à notre expansion internationale.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Nadia Bensalem",
      position: "Directrice des Opérations, PharmAlg",
      content:
        "Service exceptionnel ! Les délais sont respectés et la communication est excellente. Un vrai plaisir de travailler avec eux.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Sofiane Khelifa",
      position: "Fondateur, Khelifa Export",
      content:
        "FLÈCHE VERTE nous a ouvert les portes des marchés internationaux. Leur accompagnement dans l'export a été déterminant pour notre croissance.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 6,
      name: "Leila Hamdi",
      position: "Directrice Commerciale, TechDZ",
      content:
        "Professionnalisme et réactivité sont au rendez-vous. Je recommande sans hésitation leurs services logistiques.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = useNavigate();
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const currentItems = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage,
  );

  const nextSlide = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(totalPages - 1);
    }
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
      id="testimonials"
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
          variants={titleVariants}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {t("testimonials.title")}
          </h2>
          <div className="w-20 h-1 bg-[#099323] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("testimonials.desc-1")}{" "}
            <span className="text-[#099323] font-semibold">
              {t("testimonials.desc-2")}
            </span>
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative" ref={carouselRef}>
          {/* Carousel Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {currentItems.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <svg
                    className="w-12 h-12 text-[#099323]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Stars Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 leading-relaxed mb-6 italic line-clamp-4">
                    "{testimonial.content}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 ring-2 ring-[#099323]/20">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#099323] to-[#063a0c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute -left-4 md:-left-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-[#099323] group z-10"
              >
                <svg
                  className="w-6 h-6 text-[#099323] group-hover:text-white transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute -right-4 md:-right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-[#099323] group z-10"
              >
                <svg
                  className="w-6 h-6 text-[#099323] group-hover:text-white transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Dots Navigation */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "w-8 bg-[#099323]"
                      : "w-2 bg-gray-300 hover:bg-[#099323]/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Stats Summary */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
          className="mt-16 bg-gradient-to-r from-[#099323] to-[#063a0c] rounded-2xl p-8 md:p-10 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-white/90">{t("stats.1")}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/90">{t("stats.2")}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-white/90">{t("stats.3")}</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">Rejoignez nos clients satisfaits</p>
          <button
            className="px-8 py-3 bg-gradient-to-r from-[#099323] to-[#063a0c] text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/request-quote");
            }}
          >
            {t("hero.cta1")}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
