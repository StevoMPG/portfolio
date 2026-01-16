import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
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

// Variantes para animación de entrada orquestada
const pageVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const AppContent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { themeClasses } = useTheme();

  return (
    <motion.div
      className={`min-h-screen w-full overflow-hidden ${themeClasses.bg} ${themeClasses.text} relative`}
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      {/* Fondo animado */}
      <AnimatedBackground />

      {/* Contenido principal */}
      <div className="relative z-10">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <motion.main className="w-full overflow-x-hidden" variants={sectionVariants}>
          <motion.div variants={sectionVariants}>
            <Home />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <Technologies />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <Projects />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <About />
          </motion.div>
          <motion.div variants={sectionVariants}>
            <Contact />
          </motion.div>
        </motion.main>
      </div>
    </motion.div>
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
