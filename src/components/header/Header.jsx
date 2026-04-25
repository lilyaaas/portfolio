import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { t } = useTranslation();

  const links = [
    { key: "nav_home", href: "#home" },
    { key: "nav_about", href: "#about" },
    { key: "nav_projects", href: "#projects" },
    { key: "nav_contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 py-3 transition-all duration-500 bg-darkBg/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center justify-between px-6 2xl:px-44 lg:px-24">
        {/* Logo Section */}
        <div className="z-50 font-bold tracking-wide cursor-pointer">
          <span className="text-2xl font-josefin text-gradient">ILYAS.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center lg:gap-12 md:gap-7">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative font-poppins font-medium text-white/50 tracking-wider transition-all duration-300 hover:text-white group"
            >
              {t(link.key)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Burger & Menu Wrapper */}
        <div ref={menuRef} className="md:hidden">
          <button
            className="relative z-50 p-2 text-white transition-all duration-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X size={28} className="text-secondary" />
            ) : (
              <Menu size={28} className="text-primary" />
            )}
          </button>

          {/* Mobile Overlay Menu */}
          <div
            className={`fixed top-0 right-0 h-screen w-[70%] bg-darkBg/95 backdrop-blur-xl border-l border-white/10 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-lg font-poppins font-bold tracking-[0.2em] text-white hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t(link.key)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
