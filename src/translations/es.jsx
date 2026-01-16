import wis1 from '../assets/wis1.webp';
import wis2 from '../assets/wis2.webp';
import wis3 from '../assets/wis3.webp';
import wis4 from '../assets/wis4.webp';
import wis5 from '../assets/wis5.webp';

export const es = {
  // Navegación
  navbar: {
    home: "Inicio",
    technologies: "Tecnologías",
    projects: "Proyectos",
    about: "Sobre mi",
    contact: "Contacto",
    brandName: "stevo",
    brandExtension: ".dev"
  },

  // Inicio
  home: {
    title: "Steven Pereira",
    subtitle: "Tecnólogo en Informática",
    description: "Especializado en el desarrollo de aplicaciones escalables y soluciones innovadoras. Con experiencia en tecnologías modernas y metodologías ágiles, me enfoco en crear sistemas robustos que resuelven problemas complejos de negocio, optimizando procesos y mejorando la experiencia del usuario.",
    socialLinks: {
      github: "GitHub",
      linkedin: "LinkedIn"
    }
  },

  // Tecnologías
  technologies: {
    title: "Tecnologías & Herramientas",
    subtitle: "Tecnologías que he utilizado en mis años de experiencia profesional",
    items: {
      react: "React",
      java: "Java", 
      tailwindcss: "TailwindCSS",
      vitejs: "Vite.js",
      jenkins: "Jenkins",
      docker: "Docker",
      supabase: "Supabase",
      cloudflare: "Cloudflare",
      springframework: "Spring Framework",
      hibernate: "Hibernate",
      postgresql: "PostgreSQL",
      jira: "JIRA",
      rest: "REST APIs",
      soap: "SOAP",
      jwt: "JWT",
      git: "Git",
      linux: "Linux"
    }
  },

  // Sobre mi
  about: {
    title: "Sobre mi",
    description: "Tecnologo en Informática apasionado con experiencia en la creación de aplicaciones escalables y soluciones innovadoras que resuelven problemas complejos de negocio.",
    toolsTitle: "Herramientas & Frameworks",
    methodologiesTitle: "Metodologías & Prácticas",
    otherSkillsTitle: "Habilidades Adicionales",
    educationTitle: "Información Académica",
    experienceTitle: "Experiencia Laboral",
    currentJob: "Actual",
    dragToExplore: "Arrastra para explorar",
    swipeToSee: "Desliza para ver más",
    
    education: [
      {
        degree: "Tecnólogo en Informática",
        institution: "UTEC",
        period: "2021-2024",
        description: "El Título de Tecnólogo en Informática capacita a los profesionales con las habilidades necesarias para el desarrollo, implementación, mantenimiento y gestión de sistemas informáticos. Esto incluye conocimientos en programación, bases de datos, redes e ingeniería de software. El programa hace hincapié en la experiencia práctica y las habilidades para resolver problemas, preparando a los graduados para un campo dinámico y en constante evolución."
      }
    ],
    
    experience: [
      {
        company: "Universal",
        position: "Arquitecto de software Jr.",
        period: "Enero 2025 - Presente",
        description: "• Mejora de procesos de despliegue, implementando CI/CD con Jenkins, Docker y funciones en Groovy. • Implementación de API Gateway KrakenD para optimizar la gestión de microservicios. • Diseño de arquitectura de software e interoperabilidad para nuevos proyectos del grupo SEMM (Cosem, MP, Mautone). • Estimaciones de alta y baja de nuevos desarrollos, evaluando todos los sistemas involucrados. • Desarrollos puntuales para Mautone (Cajas, Indicadores, módulos específicos)."
      },
      {
        company: "Sanatorio Mautone",
        position: "Analista Programador",
        period: "Febrero 2023 - Enero 2025",
        description: "• Lideré la implementación completa de un proyecto mayor que expandió los servicios de pago para más de 50,000 afiliados a través de redes externas (Abitab, RedPagos, APP/Totems), incluyendo análisis médicos, estudios, consultas y medicamentos mediante servicios web REST y SOAP. • Participé en el proyecto de interoperabilidad con SEMM, COSEM y MP, integrando y optimizando la entrega de servicios. • Implementé solicitudes de cambio en nuestro ERP interno, abordando mejoras significativas en Contabilidad, Tesorería, Facturación, Gestión de Indicadores, Factura Electrónica (DGI) y puntos de venta (POS) con el proveedor FISERV. • Analicé, diseñé, desarrollé e implementé exitosamente el proyecto de Gestión de Indicadores, módulo clave utilizado por gerentes y directores."
      },
      {
        company: "Fundación Telefónica Movistar",
        position: "Analista de Soporte",
        period: "Julio 2019 - Febrero 2023",
        description: "• Brindé soporte a usuarios de plataforma en Uruguay, gestionando tareas y resolviendo incidentes a través del sistema designado. • Gestioné e implementé nuevos cursos en Uruguay, asegurando su correcta integración en la plataforma. • Realicé análisis y detección de errores en la plataforma, mejorando su estabilidad y rendimiento. • Ejecuté análisis de datos de la plataforma para la toma de decisiones estratégicas utilizando PowerBI y Excel."
      }
    ],
    
    toolsSkills: [
      "React", 
      "Java",
      "TailwindCSS",
      "Vite.js",
      "Jenkins",
      "Docker",
      "Supabase",
      "Cloudflare",
      "Spring Boot",
      "Hibernate",
      "JPA",
      "PostgreSQL",
      "Maven",
      "Gradle",
      "VSCode",
      "IntelliJ IDEA"
    ],
    
    methodologiesSkills: [
      "Metodologías Ágiles",
      "Scrum",
      "DevOps",
      "CI/CD",
      "Microservicios",
      "JIRA",
      "REST APIs",
      "SOAP Web Services",
      "JWT",
      "TDD"
    ],
    
    otherSkills: [
      "Diseño de APIs RESTful",
      "OAuth 2.0",
      "JWT",
      "Patrones de Diseño",
      "Optimización de Rendimiento",
      "Análisis y Diseño de Sistemas",
      "Evaluación de Escalabilidad",
      "Documentación Técnica",
      "Pensamiento Estratégico",
      "Resolución de Problemas Complejos"
    ]
  },


  // Contacto
  contact: {
    title: "Hablemos",
    subtitle: "¿Tienes un proyecto en mente? Contactemos y hagámoslo realidad",
    formFields: [
      {
        id: "name",
        type: "text",
        placeholder: "Tu nombre...",
        label: "Nombre",
        required: true
      },
      {
        id: "email",
        type: "email",
        placeholder: "ejemplo@gmail.com",
        label: "Correo electrónico",
        required: true
      },
      {
        id: "message",
        type: "textarea",
        placeholder: "Cuéntame sobre tu proyecto...",
        label: "Mensaje",
        required: true,
        rows: 5
      }
    ],
    submitButton: {
      text: "Enviar Mensaje",
      sending: "Enviando..."
    },
    successMessage: "¡Mensaje enviado exitosamente! Te responderé pronto.",
    errorMessage: "¡Oops! Algo salió mal. Por favor, intenta de nuevo."
  },

  // Temas
  theme: {
    toggle: "Cambiar tema",
    dark: "Tema oscuro",
    light: "Tema claro"
  },

  // Idiomas
  language: {
    spanish: "Español",
    english: "English"
  },

  // Configuración
  settings: {
    theme: "Tema",
    language: "Idioma"
  },

  // Accesibilidad
  accessibility: {
    closeMenu: "Cerrar menú",
    openMenu: "Abrir menú",
    toggleTheme: "Cambiar tema",
    toggleLanguage: "Cambiar idioma",
    scrollToTop: "Volver arriba"
  }
};