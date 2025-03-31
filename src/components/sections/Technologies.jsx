import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";
import { technologiesConstants } from "../../constants";
import { useTranslation } from "../../hooks/useTranslation";

export const Technologies = () => {
  const { t } = useTranslation();
  const { technologies, iconVariants } = technologiesConstants;
  
  return (
    <section id="technologies" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <RevealOnScroll>
        <motion.h2 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 1.5}}
            className="text-2xl md:text-3xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6 text-center">
            {t.technologies.title}
        </motion.h2>
        <div className="">
          <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-4 p-4"
            >
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div 
                  variants={iconVariants(tech.duration)}
                  initial="initial"
                  animate="animate"
                  key={index}
                  className="rounded-2xl p-4 hover:bg-neutral-800 transition-colors duration-300 flex flex-col items-center">
                  <IconComponent className={`text-5xl ${tech.color} mb-2`} />
                  <span className="text-sm text-neutral-300">{tech.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};