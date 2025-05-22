import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import { technologiesConstants } from "../../constants";
import { useTranslation } from "../../hooks/useTranslation";
import { useTheme } from "../../hooks/useTheme";

export const Technologies = () => {
  const { t } = useTranslation();
  const { themeClasses } = useTheme();
  const { technologies, iconVariants } = technologiesConstants;
  
  return (
    <section 
      id="technologies" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto text-center">
          {/* Título */}
          <motion.h2 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${themeClasses.accent} bg-clip-text text-transparent mb-16`}
          >
            {t.technologies.title}
          </motion.h2>

          {/* Grid de tecnologías sin recuadros */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-8 p-4"
          >
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              const techKey = tech.name.toLowerCase().replace(/\s+/g, '');
              
              return (
                <motion.div 
                  variants={iconVariants(tech.duration)}
                  initial="initial"
                  animate="animate"
                  key={index}
                  className="flex flex-col items-center space-y-3 p-4 transition-colors duration-300 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icono */}
                  <IconComponent className={`text-6xl ${tech.color}`} />
                  
                  {/* Nombre */}
                  <span className={`text-sm font-medium ${themeClasses.textSecondary}`}>
                    {t.technologies.items?.[techKey] || tech.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};