import { useState } from "react";
import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
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
      const result = await emailjs.sendForm(
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

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="w-full max-w-2xl mx-auto px-4">
        <RevealOnScroll>
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${themeClasses.accent} bg-clip-text text-transparent mb-4`}
            >
              {t.contact.title}
            </motion.h2>
            <p className={`text-lg ${themeClasses.textMuted} max-w-xl mx-auto`}>
              {t.contact.subtitle}
            </p>
          </div>
          
          {/* Formulario */}
          <motion.div
            className={`${themeClasses.card} rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              {t.contact.formFields.map((field, index) => (
                <motion.div 
                  key={field.id}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <label 
                    htmlFor={field.id}
                    className={`block text-sm font-medium ${themeClasses.textSecondary} mb-2`}
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
                      className={`w-full ${themeClasses.bgTertiary} rounded-lg py-3 px-4 ${themeClasses.text} placeholder-gray-500 border ${themeClasses.border} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none`}
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
                      className={`w-full ${themeClasses.bgTertiary} rounded-lg py-3 px-4 ${themeClasses.text} placeholder-gray-500 border ${themeClasses.border} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                      placeholder={field.placeholder}
                    />
                  )}
                </motion.div>
              ))}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r ${themeClasses.accent} text-white py-4 px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{t.contact.submitButton.sending}</span>
                  </div>
                ) : (
                  t.contact.submitButton.text
                )}
              </motion.button>
            </form>
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
};