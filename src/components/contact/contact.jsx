import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    operationType: "",
    message: "",
  });

  const operationTypes = [
    t("contact.form.operation_types.export"),
    t("contact.form.operation_types.logistics"),
    t("contact.form.operation_types.sourcing"),
    t("contact.form.operation_types.consulting"),
    t("contact.form.operation_types.other"),
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(t("contact.form.success_message"));
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {t("contact.title")}
          </h2>
          <div className="w-20 h-1 bg-[#099323] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("contact.subtitle")}
            <br />
            <span className="text-[#099323] font-semibold">
              {t("contact.subtitle_highlight")}
            </span>
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info & Form */}
          <div>
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="w-12 h-12 bg-[#099323]/10 rounded-xl flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-[#099323]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {t("contact.phone")}
                </h3>
                <p className="text-gray-600 text-sm"> +213 541 93 11 28</p>
                <p className="text-gray-600 text-sm">
                  WhatsApp : +213 541 93 11 28
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="w-12 h-12 bg-[#099323]/10 rounded-xl flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-[#099323]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {t("contact.email")}
                </h3>
                <p className="text-gray-600 text-sm">
                  info@greenarrowexports.com
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="w-12 h-12 bg-[#099323]/10 rounded-xl flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-[#099323]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {t("contact.address")}
                </h3>
                <p className="text-gray-600 text-sm">
                  Hai Chouhadas fraction 79 PP N°12 local N°02{" "}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="w-12 h-12 bg-[#099323]/10 rounded-xl flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6 text-[#099323]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {t("contact.hours")}
                </h3>
                <p className="text-gray-600 text-sm">
                  🕐 {t("contact.availability")}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t("contact.form.title")}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("contact.form.full_name")}
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={t("contact.form.full_name_placeholder")}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#099323] focus:ring-2 focus:ring-[#099323]/20 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("contact.form.company")}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t("contact.form.company_placeholder")}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#099323] focus:ring-2 focus:ring-[#099323]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("contact.form.email_placeholder")}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#099323] focus:ring-2 focus:ring-[#099323]/20 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("contact.form.phone")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("contact.form.phone_placeholder")}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#099323] focus:ring-2 focus:ring-[#099323]/20 transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("contact.form.operation_type")}
                  </label>
                  <select
                    name="operationType"
                    value={formData.operationType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#099323] focus:ring-2 focus:ring-[#099323]/20 transition-all"
                    required
                  >
                    <option value="">{t("contact.form.select")}</option>
                    {operationTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder={t("contact.form.message_placeholder")}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#099323] focus:ring-2 focus:ring-[#099323]/20 transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#099323] to-[#063a0c] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                >
                  {t("contact.form.submit")}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="sticky top-24">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("contact.map.title")}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {t("contact.map.address_detail")}
                </p>
              </div>
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.794574096758!2d-0.5741255245663147!3d35.69536927258269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e630078d3777b%3A0x5831310675022de7!2sHa%C3%AE%20Chouhadas%20Oran%20Alg%C3%A9rie!5e1!3m2!1sfr!2sdz!4v1776862598925!5m2!1sfr!2sdz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t("contact.map.title")}
                ></iframe>
              </div>
            </div>

            {/* Quick Contact Note */}
            <div className="mt-6 bg-[#099323]/10 rounded-2xl p-5 border border-[#099323]/20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#099323] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {t("contact.quick_note.title")}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t("contact.quick_note.text")}{" "}
                    <span className="font-semibold text-[#099323]">
                      +213 541 93 11 28
                    </span>{" "}
                    {t("contact.quick_note.or")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
