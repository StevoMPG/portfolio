import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useTranslation } from "../../hooks/useTranslation";
import { useTheme } from "../../hooks/useTheme";

export const Contact = () => {
  const { t } = useTranslation();
  const { themeClasses } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      );
      alert(t.contact.successMessage);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert(t.contact.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-24 relative"
    >
      {/* Decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-blue-500/5 blur-3xl" />
      </div>

      <motion.div
        className="w-full max-w-3xl mx-auto px-4 sm:px-6 relative z-10"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6">
            <span className={themeClasses.textGradient}>
              {t.contact.title}
            </span>
          </h2>
          <p className={`text-lg md:text-xl ${themeClasses.textMuted} max-w-xl mx-auto`}>
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Formulario con Glassmorphism Premium */}
        <motion.div
          className="glass-premium rounded-[2rem] p-8 md:p-12"
          variants={itemVariants}
        >
          <form className="space-y-8" onSubmit={handleSubmit}>
            {t.contact.formFields.map((field, index) => (
              <motion.div
                key={field.id}
                className="relative"
                variants={itemVariants}
              >
                <label
                  htmlFor={field.id}
                  className={`block text-sm font-semibold ${themeClasses.textSecondary} mb-3 uppercase tracking-wider`}
                >
                  {field.label}
                </label>

                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    required={field.required}
                    rows={field.rows}
                    value={formData[field.id]}
                    onChange={handleChange}
                    className={`
                      w-full
                      bg-white/[0.05]
                      rounded-2xl
                      py-4 px-6
                      ${themeClasses.text}
                      placeholder-gray-500
                      border border-white/[0.1]
                      focus:outline-none
                      focus:border-blue-500/50
                      focus:ring-2
                      focus:ring-blue-500/20
                      transition-all duration-300
                      resize-none
                    `}
                    placeholder={field.placeholder}
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    required={field.required}
                    value={formData[field.id]}
                    onChange={handleChange}
                    className={`
                      w-full
                      bg-white/[0.05]
                      rounded-2xl
                      py-4 px-6
                      ${themeClasses.text}
                      placeholder-gray-500
                      border border-white/[0.1]
                      focus:outline-none
                      focus:border-blue-500/50
                      focus:ring-2
                      focus:ring-blue-500/20
                      transition-all duration-300
                    `}
                    placeholder={field.placeholder}
                  />
                )}
              </motion.div>
            ))}

            {/* Botón de envío premium */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full
                py-5
                rounded-2xl
                font-bold
                text-lg
                bg-gradient-to-r ${themeClasses.accent}
                text-white
                relative
                overflow-hidden
                group
                disabled:opacity-50
                disabled:cursor-not-allowed
                transition-all duration-300
              `}
              variants={itemVariants}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {/* Efecto de brillo deslizante */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

              <span className="relative flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>{t.contact.submitButton.sending}</span>
                  </>
                ) : (
                  <>
                    <span>{t.contact.submitButton.text}</span>
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </>
                )}
              </span>
            </motion.button>
          </form>
        </motion.div>

        {/* Info adicional */}
        <motion.div
          className="mt-8 text-center"
          variants={itemVariants}
        >
          <p className={`text-sm ${themeClasses.textMuted}`}>
            <span className={`inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse`} />
            Disponible para nuevos proyectos
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
