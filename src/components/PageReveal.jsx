import { motion } from "framer-motion";

// Variantes para la animación de entrada orquestada
const pageVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] // easeOutExpo
    }
  }
};

// Wrapper principal para la página
export const PageReveal = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};

// Wrapper para cada sección individual
export const RevealSection = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      className={className}
      variants={{
        initial: {
          opacity: 0,
          y: 40,
          scale: 0.98
        },
        animate: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.7,
            delay,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

// Export de variantes para uso externo
export { pageVariants, sectionVariants };
