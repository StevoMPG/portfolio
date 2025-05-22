import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import { ImageCarousel } from "../ImageCarousel";
import { useTranslation } from "../../hooks/useTranslation";
import { useTheme } from "../../hooks/useTheme";

export const Projects = () => {
  const { t } = useTranslation();
  const { themeClasses } = useTheme();
  
  return (
    <section
      id="projects"
      className="min-h-screen py-20 flex items-center justify-center"
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <RevealOnScroll>
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${themeClasses.accent} bg-clip-text text-transparent mb-4`}
            >
              {t.projects.title}
            </motion.h2>
            <p className={`text-lg ${themeClasses.textMuted} max-w-2xl mx-auto`}>
              {t.projects.subtitle}
            </p>
          </div>
          
          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.projects.items.map((project, index) => {
              const isEven = index % 2 === 0;
              const initialX = isEven ? -50 : 50;
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: initialX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.2,
                    type: "spring", 
                    stiffness: 50, 
                    damping: 15 
                  }}
                  className={`${themeClasses.card} rounded-2xl p-6 transition-all duration-300 group hover:-translate-y-2 ${themeClasses.cardHover}`}
                >
                  {/* Efecto de brillo sutil */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${themeClasses.accent} opacity-0 group-hover:opacity-5 transition-all duration-500 rounded-2xl pointer-events-none`} />
                  
                  <div className="relative z-10">
                    {/* Título del proyecto */}
                    <h3 className={`text-xl md:text-2xl font-bold ${themeClasses.text} mb-3`}>
                      {project.title}
                    </h3>
                    
                    {/* Descripción */}
                    <p className={`${themeClasses.textMuted} mb-6 leading-relaxed`}>
                      {project.description}
                    </p>
                    
                    {/* Tecnologías */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${themeClasses.accent} text-white font-medium transition-all duration-300 hover:shadow-lg hover:scale-105`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Carrusel de imágenes */}
                    {project.images && project.images.length > 0 && (
                      <div className="mb-6">
                        <ImageCarousel images={project.images} />
                      </div>
                    )}

                    {/* Link del proyecto */}
                    <div className="flex justify-between items-center">
                      {project.link ? (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center space-x-2 bg-gradient-to-r ${themeClasses.accent} text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg group/link`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>{project.linkText}</span>
                          <motion.svg 
                            className="w-4 h-4"
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </motion.svg>
                        </motion.a>
                      ) : (
                        <span className={`${themeClasses.textMuted} italic px-6 py-3 rounded-lg ${themeClasses.bgTertiary}`}>
                          {t.projects.privateProject}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};