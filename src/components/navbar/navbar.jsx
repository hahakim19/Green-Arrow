import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import arPicDark from "../../assets/logo_nav_ar.dark.svg";
import arPicLight from "../../assets/logo_nav_ar.light.svg";
import enPicDark from "../../assets/logo_nav_en.dark.svg";
import enPicLight from "../../assets/logo_nav_en.light.svg";
import frPicDark from "../../assets/logo_nav_fr.dark.svg";
import frPicLight from "../../assets/logo_nav_fr.light.svg";

const Navbar = ({
  heroRef,
  servicesRef,
  activitiesRef,
  testimonialsRef,
  contactRef,
}) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const language = i18n.language;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: t("nav.home"), type: "scroll", ref: heroRef },
    { name: t("nav.about"), type: "navigate", href: "/about" },
    { name: t("nav.services"), type: "scroll", ref: servicesRef },
    { name: t("nav.expertise"), type: "scroll", ref: activitiesRef },
    { name: t("nav.contact"), type: "scroll", ref: contactRef },
  ];

  // Get logo based on language and scroll state
  const getLogo = () => {
    if (isScrolled) {
      if (language === "ar") {
        return arPicDark;
      } else if (language === "en") {
        return enPicDark;
      }
      return frPicDark;
    } else {
      if (language === "ar") {
        return arPicLight;
      } else if (language === "en") {
        return enPicLight;
      }
      return frPicLight;
    }
  };

  const handleClick = (link) => {
    if (link.type === "navigate") {
      navigate(link.href);
      window.scrollTo(0, 0);
    } else if (link.type === "scroll" && link.ref) {
      scrollToSection(link.ref);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-white shadow-2xl py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`cursor-pointer transition-all duration-300 ${isScrolled ? "w-48" : "w-60"}`}
            >
              <img
                src={getLogo()}
                alt="Logo"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(link)}
                  className={`relative px-5 py-2 font-medium rounded-lg transition-all duration-300 group ${
                    isScrolled
                      ? "text-gray-600 hover:text-[#099323]"
                      : "text-white hover:text-[#099323]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-0.5 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 bg-[#099323]`}
                  ></span>
                </button>
              ))}

              {/* CTA Button */}
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/request-quote");
                }}
                className={`ml-4 px-6 py-2.5 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  isScrolled
                    ? "bg-gradient-to-r from-[#099323] to-[#063a0c] hover:from-[#063a0c] hover:to-[#099323] text-white"
                    : "bg-white text-[#099323] hover:bg-[#099323] hover:text-white"
                }`}
              >
                {t("nav.quote")}
              </button>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden relative w-10 h-10 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? "hover:bg-gray-100 text-gray-600"
                  : "hover:bg-white/10 text-white"
              } focus:outline-none`}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`py-2 rounded-2xl ${
                isScrolled
                  ? "bg-white shadow-xl"
                  : "bg-white/10 backdrop-blur-xl"
              }`}
            >
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(link)}
                  className={`block w-full text-left px-5 py-3 font-medium transition-all duration-200 ${
                    isScrolled
                      ? "text-gray-700 hover:text-[#099323] hover:bg-gray-50"
                      : "text-white hover:text-[#099323] hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="px-5 pt-2 pb-3">
                <button
                  onClick={() => {
                    scrollToSection(contactRef);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full px-4 py-2.5 text-center font-semibold rounded-full transition-all duration-300 ${
                    isScrolled
                      ? "bg-gradient-to-r from-[#099323] to-[#063a0c] text-white"
                      : "bg-white text-[#099323] hover:bg-[#099323] hover:text-white"
                  }`}
                >
                  {t("nav.quote")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
