import { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";
import { useTheme } from "../hooks/useTheme";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { t } = useTranslation();
  const { themeClasses } = useTheme();

  // Bloquear scroll cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navLinks = [
    { href: "#home", text: t.navbar.home },
    { href: "#technologies", text: t.navbar.technologies },
    { href: "#projects", text: t.navbar.projects },
    { href: "#about", text: t.navbar.about },
    { href: "#contact", text: t.navbar.contact },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-40 ${themeClasses.navBg} border-b ${themeClasses.border}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-mono text-2xl font-black tracking-tight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={themeClasses.text}>{t.navbar.brandName}</span>
            <span className={`bg-gradient-to-r ${themeClasses.accent} bg-clip-text text-transparent`}>
              {t.navbar.brandExtension}
            </span>
          </motion.a>

          {/* Navegación desktop */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-12">
            <div className="flex items-center space-x-10">
              {navLinks.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={`${themeClasses.textSecondary} hover:${themeClasses.text.replace('text-', '')} transition-all duration-300 relative group font-semibold text-sm uppercase tracking-wider`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.text}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${themeClasses.accent} transition-all duration-300 group-hover:w-full rounded-full`} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Switches de tema e idioma */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          {/* Menu hamburguesa */}
          <motion.div
            className="w-9 h-7 flex flex-col justify-between cursor-pointer z-50 md:hidden relative"
            onClick={() => setMenuOpen((prev) => !prev)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={t.accessibility.openMenu}
          >
            <motion.span
              className={`w-full h-0.5 ${themeClasses.text} bg-current origin-left rounded-full`}
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className={`w-full h-0.5 ${themeClasses.text} bg-current rounded-full`}
              animate={{
                opacity: menuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className={`w-full h-0.5 ${themeClasses.text} bg-current origin-left rounded-full`}
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};
