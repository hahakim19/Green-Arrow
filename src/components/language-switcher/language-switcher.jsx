import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const language = i18n.language || "fr";

  const changeLanguage = (lang) => {
    console.log("changeLanguage", lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);

    document.documentElement.lang = lang;

    if (lang === "ar") {
      document.documentElement.dir = "rtl";
      document.body.classList.add("rtl");
    } else {
      document.documentElement.dir = "ltr";
      document.body.classList.remove("rtl");
    }

    setIsLanguageOpen(false);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && savedLanguage !== i18n.language) {
      changeLanguage(savedLanguage);
    }
  }, []);

  const getFlag = () => {
    switch (language) {
      case "fr":
        return "🇫🇷";
      case "en":
        return "🇬🇧";
      case "ar":
        return "🇩🇿";
      default:
        return "🇫🇷";
    }
  };

  const languages = [
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "ar", label: "العربية", flag: "🇩🇿" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[1001]">
      <div className="relative">
        {/* Main Button - Circular Design */}
        <button
          onClick={() => setIsLanguageOpen(!isLanguageOpen)}
          className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 flex items-center justify-center text-2xl"
        >
          {getFlag()}
        </button>

        {/* Dropdown */}
        {isLanguageOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-[1000]"
              onClick={() => setIsLanguageOpen(false)}
            />

            {/* Options */}
            <div
              className="absolute bottom-full right-0 mb-3 z-[1010] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden min-w-[180px] animate-slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full px-4 py-3 flex items-center gap-3 transition-all duration-200 hover:bg-gray-50 ${
                    language === lang.code
                      ? "bg-[#099323]/10 text-[#099323]"
                      : "text-gray-700"
                  }`}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="flex-1 text-left font-medium">
                    {lang.label}
                  </span>
                  {language === lang.code && (
                    <svg
                      className="w-4 h-4 text-[#099323]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slideUp 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}

export default LanguageSwitcher;
