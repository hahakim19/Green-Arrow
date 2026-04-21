import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import aboutLogoFr from "../assets/about_logo_fr.svg";
import aboutLogoEn from "../assets/about_logo_en.svg";
import aboutLogoAr from "../assets/about_logo_ar.svg";
import multipleLogo from "../assets/multiple_logo.svg";
import fadeLogo from "../assets/fade_logo.svg";

const RequestQuotePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const language = i18n.language;

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    serviceType: "",
    originCountry: "",
    destinationCountry: "",
    productType: "",
    quantity: "",
    urgency: "",
    message: "",
  });

  const serviceTypes = [
    { value: "import", label: t("requestQuote.form.service_types.import") },
    { value: "export", label: t("requestQuote.form.service_types.export") },
    { value: "customs", label: t("requestQuote.form.service_types.customs") },
    {
      value: "logistics",
      label: t("requestQuote.form.service_types.logistics"),
    },
    { value: "sourcing", label: t("requestQuote.form.service_types.sourcing") },
    {
      value: "consulting",
      label: t("requestQuote.form.service_types.consulting"),
    },
  ];

  const urgencyOptions = [
    { value: "normal", label: t("requestQuote.form.urgency.normal") },
    { value: "urgent", label: t("requestQuote.form.urgency.urgent") },
    { value: "very_urgent", label: t("requestQuote.form.urgency.very_urgent") },
  ];

  const countries = [
    "Algérie",
    "France",
    "Espagne",
    "Italie",
    "Allemagne",
    "Chine",
    "Turquie",
    "Émirats Arabes Unis",
    "États-Unis",
    "Canada",
    "Autre",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
    alert(t("requestQuote.form.success_message"));
    // Add your API call here
  };

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
      {/* Hero Section */}
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
          {t("requestQuote.back_home")}
        </button>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">
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
              {t("requestQuote.title")}
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t("requestQuote.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {t("requestQuote.form.title")}
              </h2>
              <p className="text-gray-500 mb-6">
                {t("requestQuote.form.subtitle")}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("requestQuote.form.full_name")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={t("requestQuote.form.full_name_placeholder")}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#099323] focus:ring-2 focus:ring-[#099323]/20 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("requestQuote.form.company")}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t("requestQuote.form.company_placeholder")}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#099323] focus:ring-2 focus:ring-[#099323]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("requestQuote.form.email")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("requestQuote.form.email_placeholder")}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#099323] focus:ring-2 focus:ring-[#099323]/20 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("requestQuote.form.phone")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("requestQuote.form.phone_placeholder")}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#099323] focus:ring-2 focus:ring-[#099323]/20 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("requestQuote.form.service_type")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#099323] focus:ring-2 focus:ring-[#099323]/20 transition-all"
                      required
                    >
                      <option value="">{t("requestQuote.form.select")}</option>
                      {serviceTypes.map((type, index) => (
                        <option key={index} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("requestQuote.form.urgency_title")}
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#099323] focus:ring-2 focus:ring-[#099323]/20 transition-all"
                    >
                      <option value="">{t("requestQuote.form.select")}</option>
                      {urgencyOptions.map((option, index) => (
                        <option key={index} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("requestQuote.form.origin_country")}
                    </label>
                    <select
                      name="originCountry"
                      value={formData.originCountry}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#099323] focus:ring-2 focus:ring-[#099323]/20 transition-all"
                    >
                      <option value="">
                        {t("requestQuote.form.select_country")}
                      </option>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("requestQuote.form.destination_country")}
                    </label>
                    <select
                      name="destinationCountry"
                      value={formData.destinationCountry}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#099323] focus:ring-2 focus:ring-[#099323]/20 transition-all"
                    >
                      <option value="">
                        {t("requestQuote.form.select_country")}
                      </option>
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("requestQuote.form.product_type")}
                    </label>
                    <input
                      type="text"
                      name="productType"
                      value={formData.productType}
                      onChange={handleChange}
                      placeholder={t(
                        "requestQuote.form.product_type_placeholder",
                      )}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#099323] focus:ring-2 focus:ring-[#099323]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("requestQuote.form.quantity")}
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder={t("requestQuote.form.quantity_placeholder")}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#099323] focus:ring-2 focus:ring-[#099323]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("requestQuote.form.message")}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder={t("requestQuote.form.message_placeholder")}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#099323] focus:ring-2 focus:ring-[#099323]/20 transition-all resize-none"
                  ></textarea>
                </div>

                <div className="flex sm:flex-row gap-4 justify-between items-center pt-4">
                  <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200"
                  >
                    {t("requestQuote.form.cancel")}
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-[#099323] to-[#063a0c] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                  >
                    {t("requestQuote.form.submit")}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-8 bg-[#099323]/5 rounded-2xl p-6 border border-[#099323]/10 text-center">
            <p className="text-gray-600 text-sm">
              {t("requestQuote.info_text")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuotePage;
