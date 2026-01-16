import { motion, useMotionValue, useTransform } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { useTheme } from "../../hooks/useTheme";
import { useState, useRef, useEffect } from "react";

export const About = () => {
  const { t } = useTranslation();
  const { themeClasses, theme } = useTheme();
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const x = useMotionValue(0);

  // Calcular límites de drag
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      setContainerWidth(container.offsetWidth);
      setContentWidth(container.scrollWidth);
    }
  }, [t.about.experience]);

  const dragConstraints = {
    left: -(contentWidth - containerWidth + 40),
    right: 0
  };

  // Progress indicator
  const progressWidth = useTransform(
    x,
    [dragConstraints.left, 0],
    ["100%", "0%"]
  );

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Layout superior: Título izquierda + Educación derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Columna izquierda - Título y descripción */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4">
              <span className={themeClasses.textGradient}>
                {t.about.title}
              </span>
            </h2>
            <p className={`text-lg md:text-xl ${themeClasses.textMuted} max-w-xl leading-relaxed`}>
              {t.about.description}
            </p>
          </motion.div>

          {/* Columna derecha - Educación */}
          <motion.div
            className="glass-premium rounded-3xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🎓</span>
              <h3 className={`text-2xl font-bold ${themeClasses.text}`}>
                {t.about.educationTitle}
              </h3>
            </div>

            {t.about.education.map((edu, index) => (
              <div key={index}>
                <div className="flex items-start gap-4">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${themeClasses.accent} mt-2 flex-shrink-0`} />
                  <div>
                    <h4 className={`text-xl font-bold ${themeClasses.text}`}>
                      {edu.degree}
                    </h4>
                    <p className={`${themeClasses.textSecondary} font-medium`}>
                      {edu.institution}
                    </p>
                    <span className={`text-sm ${themeClasses.tagPrimary} px-3 py-1 rounded-full inline-block mt-2 mb-3`}>
                      {edu.period}
                    </span>
                    <p className={`${themeClasses.textMuted} text-sm leading-relaxed`}>
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Sección inferior - Experiencia Timeline Horizontal Draggable */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="text-3xl">💼</span>
              <h3 className={`text-2xl font-bold ${themeClasses.text}`}>
                {t.about.experienceTitle}
              </h3>
            </div>

            {/* Indicador de drag */}
            <div className={`hidden md:flex items-center gap-2 text-sm ${themeClasses.textMuted}`}>
              <span>← {t.about.dragToExplore} →</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className={`h-1 rounded-full mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'}`}>
            <motion.div
              className={`h-full rounded-full bg-gradient-to-r ${themeClasses.accent}`}
              style={{ width: progressWidth }}
            />
          </div>

          {/* Timeline Container */}
          <div className="relative overflow-hidden">
            {/* Línea del timeline - Visible y prominente */}
            <div className={`absolute top-[60px] left-0 right-0 h-1 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-400'}`}>
              <div className={`absolute inset-0 bg-gradient-to-r ${themeClasses.accent} opacity-50`} />
            </div>

            {/* Contenedor draggable - optimizado para GPU */}
            <motion.div
              ref={containerRef}
              className="flex gap-8 cursor-grab active:cursor-grabbing py-4"
              style={{ x, willChange: 'transform' }}
              drag="x"
              dragConstraints={dragConstraints}
              dragElastic={0.1}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
            >
              {t.about.experience.map((exp, index) => {
                const isCurrentJob = index === 0;
                return (
                  <motion.div
                    key={index}
                    className={`flex-shrink-0 ${isCurrentJob ? 'w-[420px] md:w-[480px]' : 'w-[360px] md:w-[400px]'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Marcador de fecha con punto */}
                    <div className="flex flex-col items-start mb-6">
                      {/* Punto grande del timeline */}
                      <div className="relative flex items-center">
                        <div className={`
                          ${isCurrentJob ? 'w-8 h-8' : 'w-6 h-6'} rounded-full
                          bg-gradient-to-r ${isCurrentJob ? 'from-green-500 to-emerald-400' : themeClasses.accent}
                          ring-4 ${theme === 'dark' ? 'ring-black' : 'ring-gray-100'}
                          shadow-lg
                          z-10
                          ${isCurrentJob ? 'animate-pulse' : ''}
                        `} />
                        {/* Línea conectora vertical */}
                        <div className={`absolute top-6 left-[11px] w-[2px] h-8 bg-gradient-to-b ${themeClasses.accent} opacity-50`} />
                      </div>

                      {/* Badge de período */}
                      <div className={`
                        mt-10 px-4 py-2 rounded-xl
                        ${isCurrentJob
                          ? 'bg-gradient-to-r from-green-500 to-emerald-400'
                          : 'bg-gradient-to-r from-blue-600 to-cyan-500'
                        }
                        text-white font-bold text-sm
                        shadow-lg
                        flex items-center gap-2
                      `}>
                        {isCurrentJob && (
                          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        )}
                        {exp.period}
                      </div>
                    </div>

                    {/* Card de experiencia */}
                    <motion.div
                      className={`
                        rounded-2xl p-6
                        ${isCurrentJob
                          ? theme === 'dark'
                            ? 'bg-gradient-to-br from-green-900/30 to-emerald-900/20 border-2 border-green-500/50 shadow-xl shadow-green-500/10'
                            : 'bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 shadow-xl'
                          : 'glass-premium'
                        }
                        ${theme === 'dark' ? 'hover:border-blue-500/50' : 'hover:border-blue-500'}
                        transition-all duration-300
                      `}
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Badge de trabajo actual */}
                      {isCurrentJob && (
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-3
                          ${theme === 'dark' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-green-100 text-green-700 border border-green-300'}
                        `}>
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          {t.about.currentJob}
                        </div>
                      )}

                      <h4 className={`${isCurrentJob ? 'text-2xl' : 'text-xl'} font-black ${themeClasses.text} mb-1`}>
                        {exp.position}
                      </h4>
                      <p className={`${themeClasses.textSecondary} font-semibold mb-4 flex items-center gap-2`}>
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${isCurrentJob ? 'from-green-500 to-emerald-400' : themeClasses.accent}`} />
                        {exp.company}
                      </p>

                      {/* Descripción completa */}
                      <div className={`${themeClasses.textMuted} text-sm space-y-2`}>
                        {exp.description.split('• ').filter(item => item.trim()).map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-2">
                            <span className={`${isCurrentJob ? 'text-green-500' : 'text-cyan-500'} font-bold flex-shrink-0 mt-0.5`}>→</span>
                            <span className="leading-relaxed">{item.trim()}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>

          {/* Indicador de scroll para móvil */}
          <p className={`text-center text-sm ${themeClasses.textMuted} mt-6 md:hidden`}>
            ← {t.about.swipeToSee} →
          </p>
        </motion.div>
      </div>
    </section>
  );
};
