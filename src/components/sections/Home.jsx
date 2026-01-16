import { motion } from "framer-motion";
import photo from "../../assets/photo.webp";
import { useTranslation } from "../../hooks/useTranslation";
import { useTheme } from "../../hooks/useTheme";
import { homeConstants } from "../../constants";

export const Home = () => {
  const { t } = useTranslation();
  const { themeClasses, theme } = useTheme();

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 40 },
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
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative"
    >
      {/* Orbes decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto w-full relative z-10"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {/* Layout de dos columnas en desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna izquierda - Texto */}
          <div className="order-2 lg:order-1">
            <motion.div variants={itemVariants}>
              <span className={`text-sm font-semibold uppercase tracking-widest ${themeClasses.textMuted} mb-4 block`}>
                👋 Hola, soy
              </span>
            </motion.div>

            <motion.h1
              className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9] mb-6 ${themeClasses.text}`}
              variants={itemVariants}
            >
              {t.home.title.split(' ')[0]}
              <br />
              <span className={`bg-gradient-to-r ${themeClasses.accent} bg-clip-text text-transparent`}>
                {t.home.title.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-6">
              <span className={`text-xl md:text-2xl lg:text-3xl font-bold ${themeClasses.textSecondary}`}>
                {t.home.subtitle}
              </span>
            </motion.div>

            <motion.p
              className={`text-base md:text-lg ${themeClasses.textMuted} max-w-xl leading-relaxed mb-8`}
              variants={itemVariants}
            >
              {t.home.description}
            </motion.p>

            {/* Redes sociales + CTA */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              variants={itemVariants}
            >
              {/* Botón CTA */}
              <motion.a
                href="#contact"
                className={`
                  px-8 py-4 rounded-2xl
                  bg-gradient-to-r ${themeClasses.accent}
                  text-white font-bold text-sm
                  shadow-lg shadow-blue-500/25
                  transition-all duration-300
                `}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactar →
              </motion.a>

              {/* Redes sociales */}
              <div className="flex gap-3">
                {homeConstants.socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        p-3 rounded-xl
                        glass-premium
                        ${themeClasses.textMuted}
                        hover:text-white
                        transition-all duration-300
                      `}
                      aria-label={social.name}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent size={22} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Columna derecha - Foto */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Glow de fondo */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${themeClasses.accent} opacity-20 blur-3xl scale-110`} />

              {/* Marco decorativo */}
              <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-r ${themeClasses.accent} opacity-20 blur-sm`} />

              {/* Foto */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={photo}
                  alt={t.home.title}
                  fetchpriority="high"
                  loading="eager"
                  decoding="async"
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl ring-4 ring-white/10"
                />

                {/* Badge flotante con fondo sólido */}
                <motion.div
                  className={`
                    absolute -bottom-4 -right-4 rounded-2xl px-4 py-3
                    ${theme === 'dark'
                      ? 'bg-gray-900 border border-gray-700'
                      : 'bg-white border-2 border-gray-300 shadow-xl'
                    }
                  `}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    {/* Bandera de Uruguay */}
                    <img
                      src="https://flagcdn.com/w40/uy.png"
                      srcSet="https://flagcdn.com/w80/uy.png 2x"
                      width="32"
                      height="20"
                      alt="Uruguay"
                      className="rounded shadow-sm"
                    />
                    <div className="flex flex-col">
                      <span className={`text-sm font-bold ${themeClasses.text}`}>Maldonado</span>
                      <span className={`text-xs font-medium ${themeClasses.textMuted}`}>Uruguay</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className={`w-6 h-10 rounded-full border-2 ${themeClasses.border} flex justify-center pt-2`}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${themeClasses.accent}`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
