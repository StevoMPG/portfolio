import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";
import { useTheme } from "../hooks/useTheme";

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const { t } = useTranslation();
  const { themeClasses } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 800);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      className={`fixed inset-0 flex items-center justify-center ${themeClasses.bg} z-50`}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center max-w-md mx-auto px-4">
        {/* Logo principal */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-6xl font-mono font-bold mb-4">
            <span className={themeClasses.text}>
              {t.loading?.brandName || "stevo"}
            </span>
            <motion.span 
              className={`bg-gradient-to-r ${themeClasses.accent} bg-clip-text text-transparent`}
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {t.loading?.brandExtension || ".dev"}
            </motion.span>
          </h1>
        </motion.div>

        {/* Barra de progreso */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full mb-6"
        >
          <div className={`w-full h-2 ${themeClasses.bgTertiary} rounded-full overflow-hidden relative`}>
            {/* Fondo de la barra */}
            <motion.div
              className={`h-full bg-gradient-to-r ${themeClasses.accent} rounded-full relative overflow-hidden`}
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Efecto de brillo que se mueve */}
              <motion.div
                className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Porcentaje */}
        <motion.p 
          className={`text-lg font-medium ${themeClasses.textMuted}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          {Math.round(progress)}%
        </motion.p>

        {/* Elementos decorativos */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Partículas flotantes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r ${themeClasses.accent} rounded-full`}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};