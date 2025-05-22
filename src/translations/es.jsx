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

  // Pantalla de carga
  loading: {
    brandName: "stevo",
    brandExtension: ".dev"
  },

  // Inicio
  home: {
    title: "Steven Pereira",
    subtitle: "Arquitecto de Software Jr.",
    description: "Especializado en el desarrollo de aplicaciones escalables y soluciones innovadoras. Con experiencia en tecnologías modernas y metodologías ágiles, me enfoco en crear sistemas robustos que resuelven problemas complejos de negocio, optimizando procesos y mejorando la experiencia del usuario.",
    socialLinks: {
      github: "GitHub",
      linkedin: "LinkedIn"
    }
  },

  // Tecnologías
  technologies: {
    title: "Tecnologías & Herramientas",
    subtitle: "Tecnologías que domino y utilizo en mis proyectos",
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
    description: "Arquitecto de software Jr apasionado con experiencia en la creación de aplicaciones escalables y soluciones innovadoras que resuelven problemas complejos de negocio.",
    toolsTitle: "🛠️ Herramientas & Frameworks",
    methodologiesTitle: "📋 Metodologías & Prácticas",
    otherSkillsTitle: "🌟 Habilidades Adicionales",
    educationTitle: "🎓 Información Académica",
    experienceTitle: "💼 Experiencia Laboral",
    
    education: [
      {
        degree: "Tecnólogo en Informática",
        institution: "UTEC",
        period: "(2021-2024)",
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

  // Proyectos
  projects: {
    title: "Proyectos Destacados",
    subtitle: "Una muestra de mis trabajos más significativos",
    viewProject: "Ver Proyecto →",
    privateProject: "Proyecto Privado",
    technologies: "Tecnologías utilizadas:",
    
    items: [
      {
        id: 1,
        title: "WMS - Empresa WIS",
        description: "Portal web de tipo multitenancy diseñado para satisfacer las necesidades de WIS en el ámbito de la gestión de almacenes. Este portal brinda acceso a un Sistema de Gestión de Almacenes (WMS) que permite a las organizaciones optimizar y controlar sus operaciones logísticas de manera eficiente.",
        technologies: ["React", "Axios", "ExpressJS", "Google Maps API", "PostgreSQL", "JWT", "CSS"],
        link: "",
        linkText: "Proyecto privado.",
        images: [wis1, wis2, wis3, wis4, wis5]
      },
      {
        id: 2,
        title: "Bungeeuy.com",
        description: "Bungeeuy fue mi primer proyecto freelance, desarrollado como una plataforma de reservas online. El frontend fue construido con React 18, TailwindCSS 3 y Vite.js, mientras que el backend fue implementado completamente en Supabase (PostgreSQL y Deno). Se integraron APIs de Supabase y Mercado Pago (Checkout Pro) para gestionar autenticación, almacenamiento y pagos. El sistema permite al administrador iniciar sesión para gestionar agendas, crear paquetes y visualizar reservas. Los usuarios, sin necesidad de registrarse, pueden seleccionar fechas y horarios disponibles, completar sus datos y confirmar su turno mediante pago online. Al completarse la transacción, un webhook confirma la reserva y se envía un correo automático con un código único de confirmación.",
        technologies: ["React 18", "TailwindCSS 3", "Vite.js", "Supabase", "PostgreSQL", "Deno", "Mercado Pago SDK", "Supabase SDK", "Cloudflare", "SEO Optimization"],
        link: "https://www.bungeeuy.com",
        linkText: "Ver Proyecto →"
      },

      {
        id: 3,
        title: "Entrenamos.uy",
        description: "Este proyecto se implementó como un sistema distribuido. Existe un servidor central el cual almacena todos los datos de la plataforma y un servidor web el cual despliega el servicio desde una aplicación web. La comunicación entre el servidor central y el servidor web es a través de web services (SOAP). Adicionalmente, el servidor central contiene una interfaz gráfica hecha en Swing para realizar actividades de administración. También tiene como idea el aplicar conceptos de la orientación a objetos y diversas tecnologías.",
        technologies: ["JAVA", "Maven", "JPA", "HTML", "JSP", "CSS", "JavaScript", "MySQL", "SOAP", "Swing"],
        link: "https://github.com/StevoMPG/PAPLIC_LAB_FINAL",
        linkText: "Ver Proyecto →"
      }
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

  // Accesibilidad
  accessibility: {
    closeMenu: "Cerrar menú",
    openMenu: "Abrir menú",
    toggleTheme: "Cambiar tema",
    toggleLanguage: "Cambiar idioma",
    scrollToTop: "Volver arriba"
  }
};