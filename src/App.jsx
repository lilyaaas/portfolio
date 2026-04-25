import { useState } from "react";

// Components
import Preloader from "./components/loading/Preloader";
import ParticleField from "./components/ui/ParticleField";
import Dock from "./components/Dock/Dock";
import Header from "./components/header/Header";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Projects";
import Contact from "./pages/contact";
import Footer from "./pages/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative w-full bg-darkBg transition-colors duration-500">
          <Header />
          <ParticleField />
          <Home />
          <About />
          <Project />
          <Contact />
          <Dock />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
