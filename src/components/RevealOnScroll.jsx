import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Solo activa "isVisible" al entrar, pero no lo desactiva al salir
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Aumentamos el threshold para mayor seguridad
        rootMargin: "0px 0px -50px 0px", // Área de detección extendida hacia abajo
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className="w-full"> {/* Removimos overflow-hidden */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};