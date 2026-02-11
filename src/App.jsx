import React, { useState } from 'react';
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

  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
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
          <Dock initialTheme={getInitialTheme()} />
        </div>
      )}
    </>
  );
}

export default App;