import { Github, Linkedin, Mail, Phone } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const Dock = () => {
  const socials = [
    {
      id: "github",
      icon: <Github size={20} />,
      label: "GitHub",
      url: "https://github.com/lilyaaas",
    },
    {
      id: "linkedin",
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ilyas-lhouari/",
    },
    {
      id: "email",
      icon: <Mail size={20} />,
      label: "Email",
      url: "mailto:ilyasslhouari@gmail.com",
    },
    {
      id: "phone",
      icon: <Phone size={20} />,
      label: "Call Me",
      url: "tel:+212620611239",
    },
  ];

  return (
    <div className="fixed bottom-3 md:bottom-5 h-12 left-1/2 -translate-x-1/2 z-1000 flex justify-center">
      <div className="flex pl-1 pr-2 items-center justify-center gap-2 bg-glass-light bg-glass rounded-2xl transition-all duration-300 border border-transparent hover:border-white/8">
        {/* Social Icons */}
        {socials.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center justify-center w-10 h-10 text-white/30 transition-all duration-300 rounded-full hover:text-primary hover:bg-white/4 hover:scale-110 focus:outline-none active:scale-95"
            aria-label={item.label}
          >
            {item.icon}
            <span className="absolute -top-10 px-2 py-1 bg-darkBg/90 backdrop-blur-md text-white/80 rounded-lg text-[13px] font-poppins uppercase tracking-wider opacity-0 pointer-events-none translate-y-2 transition-all duration-200 whitespace-nowrap group-hover:opacity-100 group-hover:translate-y-0 hidden md:block border border-white/6">
              {item.label}
            </span>
          </a>
        ))}

        {/* Separator */}
        <div className="w-px h-5 bg-white/8 mx-1" />

        {/* Language Switcher */}
        <div className="flex items-center justify-center">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Dock;
