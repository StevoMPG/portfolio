import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com"; 
import { motion } from "framer-motion";
import { contactConstants } from "../../constants";

export const Contact = () => {
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
      alert(contactConstants.successMessage);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert(contactConstants.errorMessage);
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
              {contactConstants.title}
          </motion.h2>
          
          <motion.form 
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.2}}
              viewport={{once: true}}
              className="space-y-6" 
              onSubmit={handleSubmit}>
            
            {contactConstants.formFields.map((field) => (
              <div key={field.id} className="relative">
                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    required={field.required}
                    rows={field.rows}
                    value={formData[field.id]}
                    className={contactConstants.inputClass}
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
                    className={contactConstants.inputClass}
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
              className={contactConstants.submitButton.class}
            >
              {contactConstants.submitButton.text}
            </button>
          </motion.form>
        </RevealOnScroll>
      </div>
    </section>
  );
};