import { useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { t } = useTranslation();
  
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            stevo<span className="animate-gradient-text bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">.dev</span>
          </a>

          <div
            className="w-7 h-5 flex items-center justify-center cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t.navbar.home}
            </a>
            <a
              href="#technologies"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t.navbar.technologies}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t.navbar.projects}
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t.navbar.about}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t.navbar.contact}
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};