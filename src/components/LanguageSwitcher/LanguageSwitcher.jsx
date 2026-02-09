import React, { useState, useEffect, useRef } from 'react';
import { Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'ru', name: 'Russian' },
  ];

  // Filter out current language from options
  const availableLanguages = languages.filter(lang => lang.code !== i18n.language);

  const changeLanguage = (langCode) => {
    const selectedLang = languages.find(lang => lang.code === langCode);
    i18n.changeLanguage(langCode);
    setIsOpen(false);
    
    // Show toast notification
    toast.success(`Language changed to ${selectedLang.name}`, {
      position: 'top-center',
      duration: 2000,
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="language-switcher-container" ref={dropdownRef}>
      <button
        className="language-switcher-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change Language"
      >
        <Languages size={20} />
      </button>

      <div className={`language-dropdown ${isOpen ? 'open' : ''}`}>
        {availableLanguages.map((lang) => (
          <button
            key={lang.code}
            className="language-option"
            onClick={() => changeLanguage(lang.code)}
          >
            <span className="language-name">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;

