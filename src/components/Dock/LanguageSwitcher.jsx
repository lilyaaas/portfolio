import { useState } from "react";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";


const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setSelectedLanguage(langCode);
  };

  return (
    <div className="relative inline-block">
      <button
        className="group relative flex items-center justify-center w-10 h-10 text-darkBg/40 dark:text-white/30 transition-all duration-300 rounded-full hover:text-primary hover:bg-darkBg/4 dark:hover:bg-white/4 hover:scale-105 focus:outline-none active:scale-95 cursor-pointer"
        onClick={() => changeLanguage(selectedLanguage == "en" ? "fr" : "en")}
        aria-label="Change Language"
      >
        <div className="group relative">
          <Languages size={20} />
          <span className="ml-2 text-[10px] absolute -top-1 -right-2 font-bold">
            {selectedLanguage == "en" ? "FR" : "EN"}
          </span>
        </div>
        
        <span className="absolute -top-10 px-1 py-1 bg-lightBg/95 dark:bg-darkBg/90 backdrop-blur-md text-darkBg/80 dark:text-white/80 rounded-lg text-[13px] font-poppins uppercase tracking-wider opacity-0 pointer-events-none translate-y-2 transition-all duration-200 whitespace-nowrap group-hover:opacity-100 group-hover:translate-y-0 hidden md:block border border-darkBg/10 dark:border-white/6">
          Change Language
        </span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
