import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";
import { useTheme } from "../hooks/useTheme";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const { t } = useTranslation();
  const { themeClasses } = useTheme();
  
  const menuItems = [
    { href: "#home", text: t.navbar.home },
    { href: "#technologies", text: t.navbar.technologies },
    { href: "#projects", text: t.navbar.projects },
    { href: "#about", text: t.navbar.about },
    { href: "#contact", text: t.navbar.contact },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          className={`fixed inset-0 z-50 ${themeClasses.bg} backdrop-blur-md`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col justify-center items-center h-full relative">
            
            {/* Botón de cerrar */}
            <motion.button
              onClick={() => setMenuOpen(false)}
              className={`absolute top-6 right-6 ${themeClasses.text} text-3xl p-2 rounded-full ${themeClasses.card} transition-colors duration-300`}
              aria-label={t.accessibility?.closeMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              ×
            </motion.button>

            {/* Enlaces del menú */}
            <nav className="flex flex-col items-center space-y-8 mb-12">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`text-2xl font-semibold ${themeClasses.text} transition-all duration-300 relative group`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {item.text}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${themeClasses.accent} transition-all duration-300 group-hover:w-full`} />
                </motion.a>
              ))}
            </nav>
            
            {/* Controles */}
            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <ThemeToggle />
              <LanguageSwitcher />
            </motion.div>

            {/* Decoración de fondo */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div
                className={`absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r ${themeClasses.accent} opacity-10 rounded-full blur-xl`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className={`absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r ${themeClasses.accent} opacity-5 rounded-full blur-xl`}
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.05, 0.15, 0.05],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};