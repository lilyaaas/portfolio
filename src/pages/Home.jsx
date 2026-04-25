import { useTranslation } from "react-i18next";
import { FileText, Send } from "lucide-react";

import IconCloud from "../components/ui/IconCloud";
import Sparkles from "../components/ui/Sparkles";

function Home() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Ambient orbs for depth */}
      <div className="absolute top-1/3 left-0 w-125 h-125 bg-secondary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-100 h-100 bg-primary/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex items-center justify-between flex-col-reverse lg:flex-row w-full z-10 gap-16 pt-24 lg:pt-0 px-6 pb-10 2xl:px-44 lg:px-24 text-center lg:text-left">
        {/* LEFT SIDE */}
        <div className="flex-[1.3]">
          {/* Location badge */}
          <div className="inline-flex items-center justify-center text-[11px] md:text-xs font-josefin font-semibold bg-white/4 border border-white/8 rounded-full px-4 py-1 md:py-2 mb-6 text-primary/80 backdrop-blur-sm tracking-wider uppercase">
            📍 {t("home_location")}
          </div>

          {/* Greeting */}
          <h2 className="text-xl md:text-3xl font-josefin font-light text-white/60 tracking-wide">
            {t("home_greeting")}{" "}
            <span className="inline-block origin-[70%_70%] animate-wave">
              👋🏻
            </span>
          </h2>

          {/* Hero title */}
          <Sparkles minSize={20} maxSize={50}>
            <h1 className="font-poppins text-4xl md:text-6xl lg:text-5xl 2xl:text-7xl leading-[1.05] font-black mb-6 uppercase tracking-wider">
              <span className="text-gradient">{t("home_title_line1")}</span>
              <br />
              <span className="text-transparent [-webkit-text-stroke:1.5px_rgba(208,131,160,0.5)] md:[-webkit-text-stroke:2px_rgba(208,131,160,0.4)]">
                {t("home_title_line2")}
              </span>
            </h1>
          </Sparkles>

          {/* CTA Button */}
          <div className="flex items-center justify-center md:justify-start gap-4 flex-col lg:flex-row mt-8">
            <a
              href="/Ilyas_Resume.pdf"
              className="group relative inline-flex items-center gap-3  py-3 px-9 text-base md:text-lg lg:text-base font-poppins font-semibold text-white bg-gradient-rose-indigo rounded-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] animate-pulse-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={20} className="relative z-10 animate-bounce" />
              <span className="relative z-10 tracking-wider uppercase">
                {t("home_resume")}
              </span>
            </a>

            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 py-3 px-9 text-base md:text-lg lg:text-base font-poppins font-semibold text-primary bg-glass-light border-2 border-primary rounded-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.12)_50%,transparent_75%)] bg-size-[200%_100%] animate-[shimmer_3s_linear_infinite]" />
              <Send size={20} className="relative z-10 animate-bounce" />
              <span className="relative z-10 tracking-wider uppercase">
                {t("home_get_in_touch")}
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex justify-center items-center scale-90 xl:scale-80 animate-float">
          <IconCloud />
        </div>
      </div>
    </section>
  );
}

export default Home;
