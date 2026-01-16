/**
 * Configuración de proyectos para el portfolio.
 * Cada proyecto tiene versiones ES/EN y configuración para el grid Bento.
 */

// Imágenes de los proyectos
import wis1 from '../assets/wis1.webp';
import wis2 from '../assets/wis2.webp';
import wis3 from '../assets/wis3.webp';
import wis4 from '../assets/wis4.webp';
import wis5 from '../assets/wis5.webp';
import bungee1 from '../assets/bungee1.webp';
import bungee2 from '../assets/bungee2.webp';
import bungee3 from '../assets/bungee3.webp';
import lacasaca1 from '../assets/lacasaca1.webp';
import metalurgica1 from '../assets/metalurgica1.webp';
import metalurgica2 from '../assets/metalurgica2.webp';
import vitalbaric1 from '../assets/vitalbaric1.png';
import vitalbaric2 from '../assets/vitalbaric2.webp';
import gestionClinica1 from '../assets/gestion-clinica1.png';
import gestionClinica2 from '../assets/gestion-clinica2.jpg';

// Tamaños para el grid Bento: large ocupa 2x2, medium 1x2, wide 2x1
export const bentoConfig = {
  sizes: {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:row-span-2",
    small: "",
    wide: "md:col-span-2"
  }
};

export const projectsData = {
  es: [
    {
      id: 1,
      title: "Entrenamos.uy",
      description: "Sistema distribuido con servidor central y web services SOAP.",
      fullDescription: "Este proyecto se implementó como un sistema distribuido. Existe un servidor central el cual almacena todos los datos de la plataforma y un servidor web el cual despliega el servicio desde una aplicación web. La comunicación entre el servidor central y el servidor web es a través de web services (SOAP).",
      technologies: ["JAVA", "Maven", "JPA", "HTML", "JSP", "CSS", "JavaScript", "MySQL", "SOAP", "Swing"],
      images: [],
      link: "https://github.com/StevoMPG/PAPLIC_LAB_FINAL",
      linkText: "Ver Código",
      featured: false,
      bentoSize: "medium",
      year: "2023",
      accentColor: "from-green-500 to-cyan-500"
    },
    {
      id: 2,
      title: "WMS - Empresa WIS",
      description: "Portal web multitenancy para gestión de almacenes con optimización logística.",
      fullDescription: "Portal web de tipo multitenancy diseñado para satisfacer las necesidades de WIS en el ámbito de la gestión de almacenes. Este portal brinda acceso a un Sistema de Gestión de Almacenes (WMS) que permite a las organizaciones optimizar y controlar sus operaciones logísticas de manera eficiente.",
      technologies: ["React", "Axios", "ExpressJS", "Google Maps API", "PostgreSQL", "JWT", "CSS"],
      images: [wis1, wis2, wis3, wis4, wis5],
      link: "",
      linkText: "Proyecto privado",
      featured: true,
      bentoSize: "large",
      year: "2024",
      accentColor: "from-blue-500 to-purple-500"
    },
    {
      id: 3,
      title: "Bungeeuy.com",
      description: "Plataforma de reservas online para experiencias de bungee jumping con pagos integrados.",
      fullDescription: "Plataforma completa de reservas online para experiencias de bungee jumping en Uruguay. Incluye dashboard de administración con autenticación, sistema de reservas sin registro previo, integración con Mercado Pago (Checkout Pro) para pagos online, emails de confirmación automáticos con código único, soporte para múltiples participantes por reserva, verificación de disponibilidad en tiempo real, PWA y optimización SEO. El backend está implementado completamente en Supabase utilizando PostgreSQL, Auth y Edge Functions con Deno.",
      technologies: ["React 18", "TailwindCSS 3", "Vite 6", "Framer Motion", "Supabase", "PostgreSQL", "Deno", "Mercado Pago SDK", "HeadlessUI", "PWA", "Cloudflare"],
      images: [bungee1, bungee2, bungee3],
      link: "https://www.bungeeuy.com",
      linkText: "Ver Proyecto",
      featured: true,
      bentoSize: "medium",
      year: "2024",
      accentColor: "from-orange-500 to-amber-500"
    },
    {
      id: 4,
      title: "VitalBaric",
      description: "Landing page para la marca de medicina hiperbárica de Clínica Select en Punta del Este.",
      fullDescription: "Sitio web para VitalBaric, la marca de medicina hiperbárica de Clínica Select en Punta del Este, Uruguay. Centro especializado con cámara hiperbárica certificada. Incluye información sobre procedimientos, beneficios del tratamiento, aplicaciones médicas (medicina deportiva, heridas, neuropatías, pie diabético, etc.), información del director médico Prof. Dr. Erik Nadruz, formulario de contacto con mapa integrado, y soporte completo de internacionalización (ES/EN) con i18next. Optimizado para SEO con meta tags dinámicos.",
      technologies: ["React 19", "TailwindCSS 4", "Vite 7", "Framer Motion", "i18next", "SEO"],
      images: [vitalbaric1, vitalbaric2],
      link: "https://www.vitalbaric.com.uy/",
      linkText: "Ver Proyecto",
      featured: false,
      bentoSize: "medium",
      year: "2025",
      accentColor: "from-cyan-500 to-blue-600"
    },
    {
      id: 5,
      title: "LaCasaca Store",
      description: "E-commerce de camisetas retro de fútbol con catálogo dinámico y panel de administración.",
      fullDescription: "Tienda online especializada en camisetas retro de fútbol ubicada en Maldonado, Uruguay. Incluye catálogo dinámico con filtros por categoría (camisetas, corta vientos, camperas, retro), integración con WhatsApp para consultas y pedidos, sección de FAQ, información de envíos y pagos, y panel de administración protegido para gestión del inventario. El backend utiliza Supabase con autenticación y base de datos PostgreSQL.",
      technologies: ["React 19", "TailwindCSS 4", "Vite 7", "Supabase", "PostgreSQL", "Framer Motion"],
      images: [lacasaca1],
      link: "https://lacasaca.pages.dev/",
      linkText: "Ver Proyecto",
      featured: false,
      bentoSize: "medium",
      year: "2025",
      accentColor: "from-red-500 to-orange-500"
    },
    {
      id: 6,
      title: "Software Clínico",
      description: "Sistema de gestión clínica integral con historia clínica electrónica y firma digital.",
      fullDescription: "Sistema de gestión clínica completo en desarrollo para Clínica Select. Incluye gestión de pacientes (CRUD), historia clínica electrónica con firma digital SHA-256, autenticación JWT con EdDSA (Ed25519), sistema RBAC jerárquico con 6 roles (SUPER_ADMIN, ADMIN, DIRECTOR, SECRETARIA, MEDICO, PACIENTE), auditoría completa con Hibernate Envers, dashboard de estadísticas, exportación PDF de historias clínicas, y dark mode. Arquitectura hexagonal con Clean Architecture.",
      technologies: ["Angular 21", "Java 25", "Spring Boot 4", "PostgreSQL 18", "TailwindCSS 4", "TypeScript 5.9", "Hibernate 7", "JWT EdDSA", "Docker"],
      images: [gestionClinica1, gestionClinica2],
      link: "",
      linkText: "En desarrollo",
      featured: true,
      bentoSize: "medium",
      year: "2026",
      accentColor: "from-emerald-500 to-teal-600"
    },
    {
      id: 7,
      title: "Metalúrgica SC",
      description: "Landing page profesional para empresa de herrería y metalúrgica industrial.",
      fullDescription: "Sitio web corporativo para empresa de herrería en Maldonado, Uruguay. Presenta los servicios de fabricación de portones, rejas de seguridad, estructuras metálicas y mobiliario industrial. Incluye galería de proyectos con carrusel interactivo, sección de clientes, formulario de contacto con EmailJS, y optimización SEO con Schema.org. Diseño responsive con animaciones fluidas y estética industrial moderna.",
      technologies: ["React 19", "TailwindCSS 4", "Vite 7", "Framer Motion", "EmailJS", "Swiper", "Schema.org"],
      images: [metalurgica1, metalurgica2],
      link: "",
      linkText: "En desarrollo",
      featured: false,
      bentoSize: "wide",
      year: "2026",
      accentColor: "from-gray-600 to-orange-500"
    }
  ],
  en: [
    {
      id: 1,
      title: "Entrenamos.uy",
      description: "Distributed system with central server and SOAP web services.",
      fullDescription: "This project was implemented as a distributed system. There is a central server which stores all platform data and a web server which deploys the service from a web application. Communication between the central server and the web server is through web services (SOAP).",
      technologies: ["JAVA", "Maven", "JPA", "HTML", "JSP", "CSS", "JavaScript", "MySQL", "SOAP", "Swing"],
      images: [],
      link: "https://github.com/StevoMPG/PAPLIC_LAB_FINAL",
      linkText: "View Code",
      featured: false,
      bentoSize: "medium",
      year: "2023",
      accentColor: "from-green-500 to-cyan-500"
    },
    {
      id: 2,
      title: "WMS - WIS Company",
      description: "Multitenancy web portal for warehouse management with logistics optimization.",
      fullDescription: "Multitenancy web portal designed to meet WIS needs in warehouse management. This portal provides access to a Warehouse Management System (WMS) that allows organizations to optimize and control their logistics operations efficiently.",
      technologies: ["React", "Axios", "ExpressJS", "Google Maps API", "PostgreSQL", "JWT", "CSS"],
      images: [wis1, wis2, wis3, wis4, wis5],
      link: "",
      linkText: "Private Project",
      featured: true,
      bentoSize: "large",
      year: "2024",
      accentColor: "from-emerald-500 to-teal-600"
    },
    {
      id: 3,
      title: "Bungeeuy.com",
      description: "Online booking platform for bungee jumping experiences with integrated payments.",
      fullDescription: "Complete online booking platform for bungee jumping experiences in Uruguay. Includes admin dashboard with authentication, registration-free booking system, Mercado Pago integration (Checkout Pro) for online payments, automatic confirmation emails with unique code, support for multiple participants per reservation, real-time availability checking, PWA and SEO optimization. The backend is fully implemented in Supabase using PostgreSQL, Auth and Edge Functions with Deno.",
      technologies: ["React 18", "TailwindCSS 3", "Vite 6", "Framer Motion", "Supabase", "PostgreSQL", "Deno", "Mercado Pago SDK", "HeadlessUI", "PWA", "Cloudflare"],
      images: [bungee1, bungee2, bungee3],
      link: "https://www.bungeeuy.com",
      linkText: "View Project",
      featured: true,
      bentoSize: "medium",
      year: "2024",
      accentColor: "from-orange-500 to-amber-500"
    },
    {
      id: 4,
      title: "VitalBaric",
      description: "Landing page for Clínica Select's hyperbaric medicine brand in Punta del Este.",
      fullDescription: "Website for VitalBaric, the hyperbaric medicine brand of Clínica Select in Punta del Este, Uruguay. Specialized center with certified hyperbaric chamber. Includes procedure information, treatment benefits, medical applications (sports medicine, wounds, neuropathies, diabetic foot, etc.), medical director Prof. Dr. Erik Nadruz information, contact form with integrated map, and full internationalization support (ES/EN) with i18next. SEO optimized with dynamic meta tags.",
      technologies: ["React 19", "TailwindCSS 4", "Vite 7", "Framer Motion", "i18next", "SEO"],
      images: [vitalbaric1, vitalbaric2],
      link: "https://www.vitalbaric.com.uy/",
      linkText: "View Project",
      featured: false,
      bentoSize: "medium",
      year: "2025",
      accentColor: "from-cyan-500 to-blue-600"
    },
    {
      id: 5,
      title: "LaCasaca Store",
      description: "Retro football shirts e-commerce with dynamic catalog and admin panel.",
      fullDescription: "Online store specialized in retro football shirts located in Maldonado, Uruguay. Includes dynamic catalog with category filters (shirts, windbreakers, jackets, retro), WhatsApp integration for inquiries and orders, FAQ section, shipping and payment information, and protected admin panel for inventory management. Backend uses Supabase with authentication and PostgreSQL database.",
      technologies: ["React 19", "TailwindCSS 4", "Vite 7", "Supabase", "PostgreSQL", "Framer Motion"],
      images: [lacasaca1],
      link: "https://lacasaca.pages.dev/",
      linkText: "View Project",
      featured: false,
      bentoSize: "medium",
      year: "2025",
      accentColor: "from-red-500 to-orange-500"
    },
    {
      id: 6,
      title: "Clinical Software",
      description: "Comprehensive clinical management system with electronic medical records and digital signature.",
      fullDescription: "Complete clinical management system in development for Clínica Select. Includes patient management (CRUD), electronic medical records with SHA-256 digital signature, JWT authentication with EdDSA (Ed25519), hierarchical RBAC system with 6 roles (SUPER_ADMIN, ADMIN, DIRECTOR, SECRETARY, DOCTOR, PATIENT), full audit trail with Hibernate Envers, statistics dashboard, PDF export of medical records, and dark mode. Hexagonal architecture with Clean Architecture.",
      technologies: ["IntelliJ IDEA","Angular 21", "Java 25", "Spring Boot 4", "PostgreSQL 18", "TailwindCSS 4", "TypeScript 5.9", "Hibernate 7", "JWT EdDSA", "Docker", "Docker Compose", "Nginx"],
      images: [gestionClinica1, gestionClinica2],
      link: "",
      linkText: "In development",
      featured: true,
      bentoSize: "medium",
      year: "2026",
      accentColor: "from-blue-500 to-purple-500"
    },
    {
      id: 7,
      title: "Metalúrgica SC",
      description: "Professional landing page for metalworking and industrial blacksmith company.",
      fullDescription: "Corporate website for a blacksmith company in Maldonado, Uruguay. Showcases services including gate manufacturing, security bars, metal structures, and industrial furniture. Features interactive project gallery with carousel, clients section, contact form with EmailJS, and SEO optimization with Schema.org. Responsive design with fluid animations and modern industrial aesthetics.",
      technologies: ["React 19", "TailwindCSS 4", "Vite 7", "Framer Motion", "EmailJS", "Swiper", "Schema.org"],
      images: [metalurgica1, metalurgica2],
      link: "",
      linkText: "In development",
      featured: false,
      bentoSize: "wide",
      year: "2026",
      accentColor: "from-gray-600 to-orange-500"
    }
  ]
};

// Textos de la sección (para traducciones)
export const projectsText = {
  es: {
    title: "Proyectos Destacados",
    subtitle: "Una muestra de mis trabajos más significativos",
    viewProject: "Ver Proyecto",
    privateProject: "Proyecto Privado",
    technologies: "Tecnologías:"
  },
  en: {
    title: "Featured Projects",
    subtitle: "A showcase of my most significant work",
    viewProject: "View Project",
    privateProject: "Private Project",
    technologies: "Technologies:"
  }
};

// Helper para obtener clases Bento
export const getBentoClasses = (size) => {
  return bentoConfig.sizes[size] || "";
};
