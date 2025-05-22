import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import photo from "../../assets/photo.webp";
import { useTranslation } from "../../hooks/useTranslation";
import { useTheme } from "../../hooks/useTheme";
import { homeConstants } from "../../constants";

export const Home = () => {
  const { t } = useTranslation();
  const { themeClasses } = useTheme();
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative"
    >
      <RevealOnScroll>
        <div className="container max-w-5xl mx-auto text-center relative z-10">
          <div className="flex flex-col items-center">
            {/* Foto de perfil optimizada */}
            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${themeClasses.accent} opacity-20 blur-xl`} />
              <motion.img
                src={photo}
                alt={t.home.title}
                className={`relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-2xl border-4 ${themeClasses.border}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Título principal */}
            <motion.h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 ${themeClasses.text}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t.home.title}
            </motion.h1>

            {/* Subtítulo con gradiente */}
            <motion.h2 
              className={`text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r ${themeClasses.accent} bg-clip-text text-transparent mb-6`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t.home.subtitle}
            </motion.h2>

            {/* Descripción */}
            <motion.p 
              className={`text-lg md:text-xl ${themeClasses.textMuted} max-w-3xl mx-auto leading-relaxed mb-8`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {t.home.description}
            </motion.p>
            
            {/* Redes sociales optimizadas */}
            <motion.div 
              className="flex justify-center space-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {homeConstants.socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${themeClasses.textMuted} hover:${themeClasses.text.replace('text-', '')} transition-all duration-300 p-3 rounded-full ${themeClasses.card} group`}
                    aria-label={t.home.socialLinks?.[social.name.toLowerCase()]}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent 
                      size={28}
                      className="group-hover:drop-shadow-lg transition-all duration-300"
                    />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};