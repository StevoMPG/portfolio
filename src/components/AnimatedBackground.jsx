import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

export const AnimatedBackground = () => {
  const { theme } = useTheme();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    // Configurar canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Clase Particle optimizada
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = theme === 'dark' ? '#3b82f6' : '#06b6d4';
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Inicializar partículas (reducido para mejor rendimiento)
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 25000));
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Conectar partículas cercanas (optimizado)
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const opacity = (1 - distance / 100) * 0.2;
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = theme === 'dark' ? '#3b82f6' : '#06b6d4';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };

    // Animar con requestAnimationFrame optimizado
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
      animationId = requestAnimationFrame(animate);
    };

    // Inicializar
    resizeCanvas();
    initParticles();
    animate();

    // Event listener con debounce
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
        initParticles();
      }, 250);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [theme]);

  return (
    <>
      {/* Canvas de partículas optimizado */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ opacity: 0.4 }}
      />
      
      {/* Gradientes de fondo simplificados */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {theme === 'dark' ? (
          <>
            {/* Fondo principal negro */}
            <div className="absolute inset-0 bg-black" />
            
            {/* Efectos de luz celestes sutiles */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/4 rounded-full blur-3xl"
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        ) : (
          <>
            {/* Fondo principal tema claro */}
            <div className="absolute inset-0 bg-gray-800" />
            
            {/* Efectos de luz para tema claro */}
            <motion.div
              className="absolute top-1/3 right-1/3 w-72 h-72 bg-blue-400/8 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-cyan-400/6 rounded-full blur-3xl"
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}
      </div>
    </>
  );
};