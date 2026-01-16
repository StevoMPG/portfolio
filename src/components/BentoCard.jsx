import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import { ImageCarousel } from "./ImageCarousel";
import { getBentoClasses } from "../constants/projects";

export const BentoCard = ({ project, index = 0 }) => {
  const { themeClasses } = useTheme();

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // El carrusel solo se muestra si hay imágenes
  const hasImages = project.images && project.images.length > 0;

  return (
    <motion.article
      className={`
        relative overflow-hidden rounded-3xl
        glass-premium
        p-6 lg:p-8
        group
        transition-all duration-500
        hover:shadow-2xl
        ${getBentoClasses(project.bentoSize)}
        h-auto
      `}
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {/* Efecto de luz al hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor || themeClasses.accent} opacity-[0.07]`} />
      </div>

      {/* Línea decorativa superior */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.accentColor || themeClasses.accent} opacity-50`} />

      {/* Contenido */}
      <div className="relative z-10">
        {/* Header con año y featured */}
        <div className="flex items-start justify-between mb-4">
          {/* Indicador de featured */}
          {project.featured && (
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${themeClasses.accent} text-white`}>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </div>
          )}
          {!project.featured && <div />}

          {/* Badge de año */}
          <span className={`text-xs font-mono ${themeClasses.textMuted} px-2 py-1 rounded-lg ${themeClasses.tagSecondary}`}>
            {project.year}
          </span>
        </div>

        {/* Título */}
        <h3 className={`text-xl lg:text-2xl font-black tracking-tight mb-3 ${themeClasses.text}`}>
          {project.title}
        </h3>

        {/* Descripción - Adaptativa según contenido */}
        <p className={`${themeClasses.textMuted} mb-5 leading-relaxed text-sm lg:text-base`}>
          {project.bentoSize === 'large' ? project.fullDescription : project.description}
        </p>

        {/* Tags de tecnologías */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              className={`px-2.5 py-1 text-xs rounded-full ${themeClasses.tagSecondary} transition-all duration-300`}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Carrusel de imágenes (solo si tiene imágenes) */}
        {hasImages && (
          <div className="mb-5">
            <ImageCarousel images={project.images} />
          </div>
        )}

        {/* CTA */}
        <div className="pt-2">
          {project.link ? (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-gradient-to-r ${themeClasses.accent} text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>
          ) : (
            <span className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl ${themeClasses.tagSecondary} text-sm font-medium`}>
              <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              {project.linkText}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default BentoCard;
