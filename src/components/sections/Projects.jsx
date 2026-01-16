import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { useTheme } from "../../hooks/useTheme";
import { BentoCard } from "../BentoCard";
import { projectsData, projectsText } from "../../constants/projects";

export const Projects = () => {
  const { t, language } = useTranslation();
  const { themeClasses } = useTheme();

  // Obtener proyectos según el idioma actual
  const projects = projectsData[language] || projectsData.es;
  const texts = projectsText[language] || projectsText.es;

  const headerVariants = {
    initial: { opacity: 0, y: -30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-24 flex items-center justify-center relative"
    >
      {/* Decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-cyan-500/5 to-transparent blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6"
          >
            <span className={themeClasses.textGradient}>
              {texts.title}
            </span>
          </motion.h2>
          <p className={`text-lg md:text-xl ${themeClasses.textMuted} max-w-2xl mx-auto`}>
            {texts.subtitle}
          </p>
        </motion.div>

        {/* Grid Bento de proyectos - Adaptativo al contenido */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto items-start">
          {projects.map((project, index) => (
            <BentoCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
