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
import { ThemeProvider } from "./contexts/ThemeContext";
import { useTheme } from "./hooks/useTheme";
import { AnimatedBackground } from "./components/AnimatedBackground";

const AppContent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { themeClasses } = useTheme();

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen w-full overflow-hidden transition-all duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${themeClasses.bg} ${themeClasses.text} relative`}
      >
        {/* Fondo animado */}
        <AnimatedBackground />
        
        {/* Contenido principal */}
        <div className="relative z-10">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <main className="w-full overflow-x-hidden">
            <Home />
            <Technologies />
            <Projects />
            <About />
            <Contact />
          </main>
        </div>
      </div>
    </>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}