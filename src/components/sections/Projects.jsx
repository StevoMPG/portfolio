import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";
import { ImageCarousel } from "../ImageCarousel";
import { useTranslation } from "../../hooks/useTranslation";

export const Projects = () => {
  const { t } = useTranslation();
  
  return (
    <section
      id="projects"
      className="min-h-screen py-20 flex items-center justify-center"
    >
      <div className="w-full">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto px-4">
            <motion.h2 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -50}}
                transition={{duration: 1.2, ease: "easeOut"}}
                className="text-2xl md:text-3xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6 text-center">           
                {t.projects.title}
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.projects.projects.map((project, index) => {
                const isEven = index % 2 === 0;
                const initialX = isEven ? -50 : 50;
                
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: initialX }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, type: "spring", stiffness: 50, damping: 15 }}
                    className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, key) => (
                        <span
                          key={key}
                          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.images && project.images.length > 0 && (
                      <ImageCarousel images={project.images} />
                    )}

                    <div className="flex justify-between items-center">
                      <a
                        href={project.link}
                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                      >
                        {project.linkText}
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};