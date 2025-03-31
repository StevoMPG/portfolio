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
