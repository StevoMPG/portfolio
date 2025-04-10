import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import { Technologies } from "./components/sections/Technologies";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() { 
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <LanguageProvider>
      <>
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
        <div
          className={`min-h-screen w-full overflow-hidden transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } bg-black text-gray-100`}
        >
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className="w-full overflow-x-hidden">
            <Home />
            <Technologies />
            <Projects />
            <About />
            <Contact />
          </div>
        </div>
      </>
    </LanguageProvider>
  );
};