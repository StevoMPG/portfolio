// Constantes para las secciones
/////////////////////////////////////////////////////////////////////////////////////////////////
//TECHNOLOGIES
import {
  FaJava,
  FaReact,
  FaDocker,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaAngular
} from "react-icons/fa";
import {
  SiPostgresql,
  SiTailwindcss,
  SiVite,
  SiJenkins,
  SiSupabase,
  SiCloudflare,
  SiSpring,
  SiSpringboot,
  SiJira,
  SiKotlin,
  SiSlack
} from "react-icons/si";
import { DiDatabase } from "react-icons/di";

// Icono personalizado para GeneXus
const GeneXusIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" stroke="currentColor" fill="none"/>
  </svg>
);

export const technologiesConstants = {
  title: "Tecnologías",

  iconVariants: (duration) => ({
    initial: { y: -15 },
    animate: {
      y: [20, -20],
      transition: {
        duration: duration * 0.6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  }),

  // Tecnologías principales con iconos flotantes
  technologies: [
    { name: "React", icon: FaReact, color: "text-blue-500", duration: 6, category: "frontend" },
    { name: "Angular", icon: FaAngular, color: "text-red-600", duration: 5, category: "frontend" },
    { name: "Java", icon: FaJava, color: "text-red-500", duration: 2.5, category: "backend" },
    { name: "Spring", icon: SiSpring, color: "text-green-600", duration: 4, category: "backend" },
    { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500", duration: 3.5, category: "backend" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-teal-500", duration: 4, category: "frontend" },
    { name: "Vite.js", icon: SiVite, color: "text-purple-500", duration: 3, category: "frontend" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400", duration: 4, category: "backend" },
    { name: "Docker", icon: FaDocker, color: "text-blue-400", duration: 8, category: "devops" },
    { name: "Jenkins", icon: SiJenkins, color: "text-blue-600", duration: 2, category: "devops" },
    { name: "Supabase", icon: SiSupabase, color: "text-green-500", duration: 5, category: "backend" },
    { name: "Cloudflare", icon: SiCloudflare, color: "text-orange-500", duration: 7, category: "devops" },
    { name: "Git", icon: FaGit, color: "text-orange-600", duration: 7, category: "tools" },
    { name: "GitHub", icon: FaGithub, color: "text-gray-400", duration: 4.5, category: "tools" },
    { name: "JIRA", icon: SiJira, color: "text-blue-700", duration: 3, category: "tools" },
    { name: "Slack", icon: SiSlack, color: "text-purple-600", duration: 4.2, category: "tools" },
    { name: "DB2", icon: DiDatabase, color: "text-green-700", duration: 3.8, category: "backend" },
    { name: "GeneXus", icon: GeneXusIcon, color: "text-orange-500", duration: 5.5, category: "tools" },
  ],

  // Skills agrupados por categoría
  skillCategories: [
    {
      id: "methodologies",
      title: "Metodologías",
      titleEn: "Methodologies",
      color: "from-green-500 to-emerald-400",
      skills: ["Scrum", "Agile", "DevOps", "CI/CD", "TDD", "Clean Code"]
    },
    {
      id: "soft",
      title: "Soft Skills",
      titleEn: "Soft Skills",
      color: "from-purple-500 to-pink-400",
      skills: ["Liderazgo", "Comunicación", "Resolución de Problemas", "Trabajo en Equipo", "Pensamiento Estratégico"]
    },
    {
      id: "architecture",
      title: "Arquitectura",
      titleEn: "Architecture",
      color: "from-orange-500 to-amber-400",
      skills: ["Microservicios", "REST APIs", "SOAP", "API Gateway", "JWT", "OAuth 2.0"]
    }
  ]
};
/////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////
// HOME
export const homeConstants = {
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
