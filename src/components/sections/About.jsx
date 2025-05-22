import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslation } from "../../hooks/useTranslation";
import { useTheme } from "../../hooks/useTheme";

export const About = () => {
  const { t } = useTranslation();
  const { themeClasses } = useTheme();
  
  return (
    <section
      id="about"
      className="min-h-screen py-20"
    >
      <div className="h-full flex items-center justify-center">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto px-4">
            {/* Título */}
            <div className="w-full text-center mb-12">
              <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${themeClasses.accent} bg-clip-text text-transparent`}
              >
                {t.about.title}
              </motion.h2>
            </div>
            
            {/* Descripción principal */}
            <motion.div 
              className={`${themeClasses.card} rounded-2xl p-8 mb-8 transition-all duration-300 hover:-translate-y-1`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className={`${themeClasses.textSecondary} text-lg leading-relaxed`}>
                {t.about.description}
              </p>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Herramientas */}
              <motion.div 
                className={`${themeClasses.card} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className={`text-xl font-bold ${themeClasses.text} mb-4`}>
                  {t.about.toolsTitle}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {t.about.toolsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${themeClasses.accent} text-white transition-all duration-300 hover:scale-105`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
              
              {/* Metodologías */}
              <motion.div 
                className={`${themeClasses.card} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className={`text-xl font-bold ${themeClasses.text} mb-4`}>
                  {t.about.methodologiesTitle}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {t.about.methodologiesSkills.map((method, key) => (
                    <span
                      key={key}
                      className="px-3 py-1 text-sm rounded-full bg-green-500/20 text-green-400 border border-green-500/30 transition-all duration-300 hover:scale-105 hover:bg-green-500/30"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </motion.div>
              
              {/* Otras Habilidades */}
              <motion.div 
                className={`${themeClasses.card} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className={`text-xl font-bold ${themeClasses.text} mb-4`}>
                  {t.about.otherSkillsTitle}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {t.about.otherSkills.slice(0, 6).map((skill, key) => (
                    <span
                      key={key}
                      className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 transition-all duration-300 hover:scale-105 hover:bg-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Educación y Experiencia */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Educación */}
              <motion.div 
                className={`${themeClasses.card} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 h-fit`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h3 className={`text-xl font-bold ${themeClasses.text} mb-6`}>
                  {t.about.educationTitle}
                </h3>
                {t.about.education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h4 className={`font-bold ${themeClasses.text} mb-1`}>
                      {edu.degree}
                    </h4>
                    <p className={`${themeClasses.textSecondary} mb-2`}>
                      {edu.institution} {edu.period}
                    </p>
                    <p className={`${themeClasses.textMuted} text-sm leading-relaxed`}>
                      {edu.description}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Experiencia */}
              <motion.div 
                className={`${themeClasses.card} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className={`text-xl font-bold ${themeClasses.text} mb-6`}>
                  {t.about.experienceTitle}
                </h3>
                <div className="space-y-6">
                  {t.about.experience.map((exp, index) => (
                    <div key={index} className="relative">
                      {/* Indicador de línea temporal */}
                      {index < t.about.experience.length - 1 && (
                        <div className={`absolute left-3 top-8 bottom-0 w-0.5 ${themeClasses.border}`} />
                      )}
                      
                      <div className="flex items-start space-x-4">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${themeClasses.accent} mt-2 flex-shrink-0`} />
                        <div>
                          <h4 className={`font-bold ${themeClasses.text} mb-1`}>
                            {exp.position}
                          </h4>
                          <p className={`${themeClasses.textSecondary} mb-3 text-sm`}>
                            {exp.company} • {exp.period}
                          </p>
                          <div className={`${themeClasses.textMuted} text-sm leading-relaxed`}>
                            {exp.description.split('• ').filter(item => item.trim()).map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-start mb-2">
                                <span className={`text-gradient bg-gradient-to-r ${themeClasses.accent} bg-clip-text text-transparent mr-2 font-bold`}>•</span>
                                <span>{item.trim()}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};