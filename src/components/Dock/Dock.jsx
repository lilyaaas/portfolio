import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import './Dock.css';

const Dock = ({ initialTheme }) => {
  const [theme, setTheme] = useState(initialTheme);
  const { t } = useTranslation();

  // Function Theme
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const socials = [
    {
      id: "github",
      icon: <Github size={22} />,
      label: "GitHub",
      url: "https://github.com/IlyassLho"
    },
    {
      id: "linkedin",
      icon: <Linkedin size={22} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ilyas-lhouari/"
    },
    {
      id: "email",
      icon: <Mail size={22} />,
      label: "Email",
      url: "mailto:ilyasslhouari@gmail.com"
    },
  ];

  return (
    <div className="dock-container">
      <div className="dock-bar">

        {/* Social Icons */}
        {socials.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="dock-item"
            aria-label={item.label}
          >
            {item.icon}
            <span className="dock-tooltip">{item.label}</span>
          </a>
        ))}

        {/* Separator */}
        <div className="dock-separator"></div>

        {/*Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="dock-item"
          aria-label={t('dock_toggle_theme')}
        >
          {theme === 'light' ? <Sun size={22} /> : <Moon size={22} />}
          <span className="dock-tooltip">
            {theme === 'light' ? t('dock_light_mode') : t('dock_dark_mode')}
          </span>
        </button>

      </div>
    </div>
  );
};

export default Dock;