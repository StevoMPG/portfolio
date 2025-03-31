import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";

export const About = () => {
  const { t } = useTranslation();
  
  return (
    <section
      id="about"
      className="min-h-screen py-20">
      <div className="h-full flex items-center justify-center">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto px-4">
            {/* Título centrado correctamente */}
            <div className="w-full text-center mb-8">
              <motion.h2 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -50}}
                transition={{duration: 0.8, ease: "easeOut"}}
                className="text-2xl md:text-3xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent inline-block"
              >
                {t.about.title}
              </motion.h2>
            </div>
            
            <motion.div 
              className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all"
            >
              <p className="text-gray-300 mb-6">
                {t.about.description}
              </p>
              
              {/* Herramientas */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">{t.about.toolsTitle}</h3>
                <div className="flex flex-wrap gap-2">
                  {t.about.toolsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                              hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Metodologías */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">{t.about.methodologiesTitle}</h3>
                <div className="flex flex-wrap gap-2">
                  {t.about.methodologiesSkills.map((method, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                              hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Otras Habilidades */}
              <div>
                <h3 className="text-xl font-bold mb-4">{t.about.otherSkillsTitle}</h3>
                <div className="flex flex-wrap gap-2">
                  {t.about.otherSkills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                              hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Reducir el espacio entre las tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
              <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -50}}
                transition={{duration: 0.6, ease: "easeOut"}}
                className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"
              >
                <h3 className="text-xl font-bold mb-4">{t.about.educationTitle}</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {t.about.education.map((edu, index) => (
                    <div key={index}>
                      <strong>{edu.degree}</strong> - {edu.institution} {edu.period}
                      <p>
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 50}}
                transition={{duration: 0.6, ease: "easeOut"}}
                className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"
              >
                <h3 className="text-xl font-bold mb-4">{t.about.experienceTitle}</h3>
                <div className="space-y-4 text-gray-300">
                  {t.about.experience.map((exp, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-bold mb-2">
                        {exp.position}
                      </h3>
                      <h4 className="font-semibold">
                        {exp.company} ({exp.period})
                      </h4>
                      <p>
                        {exp.description}
                      </p>
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