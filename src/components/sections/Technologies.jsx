import { motion } from "framer-motion";
import { technologiesConstants } from "../../constants";
import { useTranslation } from "../../hooks/useTranslation";
import { useTheme } from "../../hooks/useTheme";

export const Technologies = () => {
  const { t, language } = useTranslation();
  const { themeClasses } = useTheme();
  const { technologies, iconVariants, skillCategories } = technologiesConstants;

  return (
    <section
      id="technologies"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header alineado a la izquierda */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4">
            <span className={themeClasses.textGradient}>
              {t.technologies.title}
            </span>
          </h2>
          <p className={`text-lg md:text-xl ${themeClasses.textMuted} max-w-2xl`}>
            {t.technologies.subtitle}
          </p>
        </motion.div>

        {/* Layout de dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Columna izquierda - Iconos flotantes (3 columnas) */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center justify-start gap-6 md:gap-8">
              {technologies.map((tech, index) => {
                const IconComponent = tech.icon;
                const techKey = tech.name.toLowerCase().replace(/\s+/g, '');

                return (
                  <motion.div
                    variants={iconVariants(tech.duration)}
                    initial="initial"
                    animate="animate"
                    key={index}
                    className="flex flex-col items-center space-y-2 p-3 transition-all duration-300 cursor-pointer group"
                    whileHover={{ scale: 1.15 }}
                  >
                    <div className="relative">
                      {/* Glow effect on hover */}
                      <div className={`absolute inset-0 ${tech.color.replace('text-', 'bg-')} opacity-0 group-hover:opacity-20 blur-xl rounded-full transition-opacity duration-300`} />
                      <IconComponent className={`text-5xl md:text-6xl ${tech.color} relative z-10`} />
                    </div>
                    <span className={`text-xs font-medium ${themeClasses.textMuted} group-hover:${themeClasses.text.replace('text-', '')} transition-colors`}>
                      {t.technologies.items?.[techKey] || tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Columna derecha - Skills por categoría (2 columnas) */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.id}
                className="glass-premium rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Header de categoría */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                  <h3 className={`text-lg font-bold ${themeClasses.text}`}>
                    {language === 'en' ? category.titleEn : category.title}
                  </h3>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className={`
                        px-3 py-1.5 text-sm rounded-full
                        ${category.id === 'methodologies' ? themeClasses.tagGreen :
                          category.id === 'soft' ? themeClasses.tagPurple :
                          themeClasses.tagOrange}
                        transition-all duration-300
                      `}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
