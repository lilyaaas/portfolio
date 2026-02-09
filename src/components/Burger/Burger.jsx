import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Burger.css';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { t } = useTranslation();

  const links = [
    { key: "nav_home", href: "#home" },
    { key: "nav_about", href: "#about" },
    { key: "nav_skills", href: "#skills" },
    { key: "nav_education", href: "#education" },
    { key: "nav_projects", href: "#projects" },
    { key: "nav_certificate", href: "#certificate" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
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
    <div ref={menuRef}>
      <button 
        className={`burger-btn ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={25} /> : <Menu size={25} />}
      </button>

      <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
        <nav className="menu-nav">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="menu-link"
              onClick={() => setIsOpen(false)}
            >
              {t(link.key)}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Burger;