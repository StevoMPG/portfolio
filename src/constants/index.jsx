// Constantes para las secciones
/////////////////////////////////////////////////////////////////////////////////////////////////
//TECHNOLOGIES
import { 
  FaJava, 
  FaReact, 
  FaDatabase, 
  FaAws, 
  FaDocker, 
  FaTools, 
  FaGit,
  FaLinux,
  FaGithub, 
  FaLinkedin
} from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import wis1 from '../assets/wis1.jpeg';
import wis2 from '../assets/wis2.jpeg';
import wis3 from '../assets/wis3.jpeg';
import wis4 from '../assets/wis4.jpeg';
import wis5 from '../assets/wis5.jpeg';

export const technologiesConstants = {
  title: "Tecnologías",
  
  iconVariants: (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  }),
  
  technologies: [
    { name: "Java", icon: FaJava, color: "text-red-500", duration: 2.5 },
    { name: "React", icon: FaReact, color: "text-blue-500", duration: 6 },
    { name: "AWS", icon: FaAws, color: "text-yellow-500", duration: 3 },
    { name: "Docker", icon: FaDocker, color: "text-blue-400", duration: 8 },
    { name: "Jenkins", icon: FaTools, color: "text-red-400", duration: 2 },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400", duration: 4 },
    { name: "DB2", icon: FaDatabase, color: "text-blue-600", duration: 5 },
    { name: "Git", icon: FaGit, color: "text-orange-600", duration: 7 },
    { name: "Linux", icon: FaLinux, color: "text-yellow-600", duration: 2.5 },
  ]
};
/////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////
// ABOUT
export const aboutConstants = {
  title: "Sobre mi",
  description: "Arquitecto de software Jr apasionado con experiencia en la creación de aplicaciones escalables y soluciones innovadoras que resuelven problemas complejos de negocio.",
  
  toolsTitle: "🛠️ Herramientas",
  toolsSkills: [
    "Spring Boot", 
    "Hibernate",
    "JPA",
    "GitHub",
    "Docker",
    "Jenkins",
    "Maven",
    "Gradle",
    "VSCode",
  ],
  
  methodologiesTitle: "📋 Metodologías",
  methodologiesSkills: [
    "Agile",
    "Scrum",
    "DevOps",
    "CI/CD",
    "Microservices",
  ],
  
  otherSkillsTitle: "🌟 Otras Habilidades",
  otherSkills: [
    "Diseño de APIs RESTful",
    "OAuth 2.0",
    "JWT",
    "Design Patterns",
    "Optimización de rendimiento",
    "Análisis y diseño de sistemas",
    "Evaluación de escalabilidad",
    "Documentación técnica",
    "Pensamiento estratégico",
    "Resolución de problemas complejos"
  ],
  
  educationTitle: "🏫 Información Académica",
  education: [
    {
      degree: "Tecnólogo en Informática",
      institution: "UTEC",
      period: "(2021-2024)",
      description: "Desarrollo de sistema interno y microservicios. Diseño de arquitectura de software para nuevos proyectos."
    }
  ],
  
  experienceTitle: "💼 Experiencia Laboral",
  experience: [
    {
      company: "Universal",
      position: "Arquitecto de software Jr.",
      period: "Enero 2025 - Presente",
      description: "Diseño de arquitectura de software e interoperabilidad para nuevos proyectos de todo el grupo SEMM (Cosem, MP, Mautone). Mejora de procesos de despliegue y desarrollo de microservicios. Implementación de CI/CD y DevOps. Desarrollos puntuales para Mautone."
    },
    {
      company: "Sanatorio Mautone",
      position: "Analista programador",
      period: "Febrero 2023 - Enero 2025",
      description: "Desarrollo y mantenimiento de sistema interno, solicitudes de cambio, microservicios. Diseño de arquitectura de software para nuevos proyectos."
    },
    {
      company: "Fundación Telefonica",
      position: "Analista en Soporte",
      period: "Junio 2019 - Febrero 2023",
      description: "Soporte a usuarios finales y mantenimiento de sistemas. Implementación de mejoras en la infraestructura existente."
    }
  ]
};
/////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////
// PROJECTS
export const projectsConstants = {
  title: "Proyectos",
  
  projects: [
    {
      id: 1,
      title: "WMS - Empresa WIS",
      description: "Portal web de tipo multitenancy diseñado para satisfacer las necesidades de WIS en el ámbito de la gestión de almacenes. Este portal brinda acceso a un Sistema de Gestión de Almacenes (WMS) que permite a las organizaciones optimizar y controlar sus operaciones logísticas de manera eficiente.",
      technologies: ["React", "Axios", "ExpressJS", "Google Maps API", "PostgreSQL", "JWT", "CSS"],
      link: "",
      linkText: "Proyecto privado.",
      images: [
        wis1,
        wis2,
        wis3,
        wis4,
        wis5
      ]
    },
    {
      id: 2,
      title: "Entrenamos.uy",
      description: "Este proyecto se implementó como un sistema distribuido. Existe un servidor central el cual almacena todos los datos de la plataforma y un servidor web el cual despliega el servicio desde una aplicación web. La comunicación entre el servidor central y el servidor web es a través de web services (SOAP). Adicionalmente, el servidor central contiene una interfaz gráfica hecha en Swing para realizar actividades de administración. También tiene como idea el aplicar conceptos de la orientación a objetos y diversas tecnologías.",
      technologies: ["JAVA", "Maven" , "JPA", "HTML", "JSP", "CSS", "JavaScript", "MySQL", "SOAP", "Swing"],
      link: "https://github.com/StevoMPG/PAPLIC_LAB_FINAL",
      linkText: "Ver Proyecto →"
    }
  ]
};
/////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////
// CONTACT
export const contactConstants = {
  title: "Contacto",
  formFields: [
    {
      id: "name",
      type: "text",
      placeholder: "Nombre ...",
      required: true
    },
    {
      id: "email",
      type: "email",
      placeholder: "ejemplo@gmail.com",
      required: true
    },
    {
      id: "message",
      type: "textarea",
      placeholder: "Su mensaje...",
      required: true,
      rows: 5
    }
  ],
  submitButton: {
    text: "Enviar mensaje",
    class: "w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
  },
  inputClass: "w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5",
  successMessage: "Mensaje enviado!",
  errorMessage: "Oops! Algo salió mal! Por favor, intente de nuevo."
};
/////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////
// HOME
export const homeConstants = {
  title: "Steven Pereira",
  subtitle: "Tecnólogo en Informática",
  description: "Desarrollador Full-Stack apasionado por crear aplicaciones web limpias, escalables y de alto rendimiento. Mi enfoque combina código eficiente con una experiencia de usuario excepcional, asegurando que cada proyecto no solo cumpla, sino que supere las expectativas.",
  photoAlt: "Steven Pereira",
  photoClass: "w-64 h-64 object-cover rounded-full shadow-lg",
  titleClass: "text-3xl md:text-4xl lg:text-5xl font-thin tracking-tight mb-2",
  subtitleClass: "text-2xl md:text-3xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4",
  descriptionClass: "text-lg md:text-xl text-gray-400 max-w-xl mx-auto px-4",
  socialLinks: [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/StevoMPG",
      color: "text-gray-400 hover:text-white",
      size: 30
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/stevenpereirag/",
      color: "text-gray-400 hover:text-blue-500",
      size: 30
    }
  ],
  socialContainerClass: "flex justify-center space-x-6 mt-6"
};
/////////////////////////////////////////////////////////////////////////////////////////////////
