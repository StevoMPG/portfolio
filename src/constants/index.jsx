// Constantes para las secciones
/////////////////////////////////////////////////////////////////////////////////////////////////
//TECHNOLOGIES
import { 
  FaJava, 
  FaReact, 
  FaDatabase, 
  FaDocker, 
  FaTools, 
  FaGit,
  FaLinux,
  FaGithub, 
  FaLinkedin
} from "react-icons/fa";
import { 
  SiPostgresql,
  SiTailwindcss,
  SiVite,
  SiJenkins,
  SiSupabase,
  SiCloudflare,
  SiSpring,
  SiHibernate,
  SiJira
} from "react-icons/si";

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
    { name: "React", icon: FaReact, color: "text-blue-500", duration: 6 },
    { name: "Java", icon: FaJava, color: "text-red-500", duration: 2.5 },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-teal-500", duration: 4 },
    { name: "Vite.js", icon: SiVite, color: "text-purple-500", duration: 3 },
    { name: "Jenkins", icon: SiJenkins, color: "text-blue-600", duration: 2 },
    { name: "Docker", icon: FaDocker, color: "text-blue-400", duration: 8 },
    { name: "Supabase", icon: SiSupabase, color: "text-green-500", duration: 5 },
    { name: "Cloudflare", icon: SiCloudflare, color: "text-orange-500", duration: 7 },
    { name: "Spring", icon: SiSpring, color: "text-green-600", duration: 4 },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400", duration: 4 },
    { name: "JIRA", icon: SiJira, color: "text-blue-700", duration: 3 },
    { name: "Git", icon: FaGit, color: "text-orange-600", duration: 7 },
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