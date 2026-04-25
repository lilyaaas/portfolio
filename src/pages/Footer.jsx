import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full pt-16 md:pt-10 pb-22 px-5 md:px-0 border-t border-white/5 z-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-white/50 font-poppins text-sm italic text-center">
          {t("footer_text")}
        </p>

        <p className="text-white/40 font-josefin text-sm mt-2">
          © {currentYear} {t("footer_name")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
