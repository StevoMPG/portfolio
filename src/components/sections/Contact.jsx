import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com"; 
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
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
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3">
        <RevealOnScroll>
          <motion.h2 
              whileInView={{opacity: 1, y: 0}}
              initial={{opacity: 0, y: -50}}
              transition={{duration: 0.8}}
              className="text-2xl md:text-3xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-6 text-center">
              {t.contact.title}
          </motion.h2>
          
          <motion.form 
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.2}}
              viewport={{once: true}}
              className="space-y-6" 
              onSubmit={handleSubmit}>
            
            {t.contact.formFields.map((field) => (
              <div key={field.id} className="relative">
                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    required={field.required}
                    rows={field.rows}
                    value={formData[field.id]}
                    className="w-full bg-neutral-900 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder={field.placeholder}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.id]: e.target.value })
                    }
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    required={field.required}
                    value={formData[field.id]}
                    className="w-full bg-neutral-900 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder={field.placeholder}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.id]: e.target.value })
                    }
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 px-6 rounded-md font-medium hover:from-blue-700 hover:to-blue-500 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
            >
              {t.contact.submitButton.text}
            </button>
          </motion.form>
        </RevealOnScroll>
      </div>
    </section>
  );
};