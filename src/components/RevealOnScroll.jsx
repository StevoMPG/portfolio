import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const RevealOnScroll = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={ref} className="w-full">
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={variants}
      >
        {children}
      </motion.div>
    </div>
  );
};