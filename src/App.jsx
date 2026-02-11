import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import Preloader from './components/loading/Preloader';
import Dock from './components/Dock/Dock';
import Burger from './components/Burger/Burger';
import Footer from './components/Footer/Footer';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Education from './pages/Education/Education';
import Project from './pages/Project/Projects';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [theme, setTheme] = useState((window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

  // Function Theme
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      {isLoading ? (
        <Preloader theme={theme} onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="App">
          <Burger />
          <LanguageSwitcher />
          <Home />
          <About />
          <Skills />
          <Education />
          <Project />
          <Footer />
          <Dock currentTheme={theme} toggleTheme={toggleTheme} />
        </div>
      )}
    </>
  );
}

export default App;