import wis1 from '../assets/wis1.webp';
import wis2 from '../assets/wis2.webp';
import wis3 from '../assets/wis3.webp';
import wis4 from '../assets/wis4.webp';
import wis5 from '../assets/wis5.webp';

export const en = {
  // Navigation
  navbar: {
    home: "Home",
    technologies: "Technologies",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    brandName: "stevo",
    brandExtension: ".dev"
  },

  // Loading screen
  loading: {
    brandName: "stevo",
    brandExtension: ".dev"
  },

  // Home
  home: {
    title: "Steven Pereira",
    subtitle: "Jr. Software Architect",
    description: "Specialized in developing scalable applications and innovative solutions. With experience in modern technologies and agile methodologies, I focus on creating robust systems that solve complex business problems, optimizing processes and improving user experience.",
    socialLinks: {
      github: "GitHub",
      linkedin: "LinkedIn"
    }
  },

  // Technologies
  technologies: {
    title: "Technologies & Tools",
    subtitle: "Technologies I master and use in my projects",
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

  // About
  about: {
    title: "About me",
    description: "Junior Software Architect passionate with experience in creating scalable applications and innovative solutions that solve complex business problems.",
    toolsTitle: "🛠️ Tools & Frameworks",
    methodologiesTitle: "📋 Methodologies & Practices",
    otherSkillsTitle: "🌟 Additional Skills",
    educationTitle: "🎓 Academic Information",
    experienceTitle: "💼 Work Experience",
    
    education: [
      {
        degree: "IT Technologist",
        institution: "UTEC",
        period: "(2021-2024)",
        description: "The Technologist Degree in Information Technology equips professionals with the skills necessary for the development, implementation, maintenance, and management of computer systems. This includes knowledge in programming, databases, networks, and software engineering. The program emphasizes practical experience and problem-solving skills, preparing graduates for a dynamic and evolving field."
      }
    ],
    
    experience: [
      {
        company: "Universal",
        position: "Jr. Software Architect",
        period: "January 2025 - Present",
        description: "• Improved deployment processes by implementing CI/CD with Jenkins, Docker, and Groovy functions. • Implemented KrakenD API Gateway to optimize microservices management. • Designed software architecture and interoperability for new projects across the SEMM group (Cosem, MP, Mautone). • Provided high and low-level estimations for new developments, evaluating all involved systems. • Specific developments for Mautone (Cashier modules, Indicators, specific modules)."
      },
      {
        company: "Sanatorio Mautone",
        position: "Programmer Analyst",
        period: "February 2023 - January 2025",
        description: "• Successfully led the complete implementation of a major project that expanded payment services for over 50,000 members through external networks (Abitab, RedPagos, APP/Totems), including medical analysis, studies, consultations, and medications using REST and SOAP web services. • Participated in the interoperability project with SEMM, COSEM, and MP, integrating and optimizing service delivery. • Implemented change requests in our internal ERP, addressing significant improvements in Accounting, Treasury, Billing, Indicator Management, Electronic Billing (DGI), and points of sale (POS) with FISERV provider. • Analyzed, designed, developed, and successfully implemented the Indicator Management project, a key module used by managers and directors."
      },
      {
        company: "Fundación Telefónica Movistar",
        position: "Support Analyst",
        period: "July 2019 - February 2023",
        description: "• Provided platform support to users in Uruguay, managing tasks and resolving incidents through the designated system. • Managed and implemented new courses in Uruguay, ensuring proper platform integration. • Performed analysis and bug detection on the platform, improving stability and performance. • Executed platform data analysis for strategic decision-making using PowerBI and Excel."
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
      "Agile Methodologies",
      "Scrum",
      "DevOps",
      "CI/CD",
      "Microservices",
      "JIRA",
      "REST APIs",
      "SOAP Web Services",
      "JWT",
      "TDD"
    ],
    
    otherSkills: [
      "RESTful API Design",
      "OAuth 2.0",
      "JWT",
      "Design Patterns",
      "Performance Optimization",
      "System Analysis & Design",
      "Scalability Assessment",
      "Technical Documentation",
      "Strategic Thinking",
      "Complex Problem Solving"
    ]
  },

  // Projects
  projects: {
    title: "Featured Projects",
    subtitle: "A showcase of my most significant work",
    viewProject: "View Project →",
    privateProject: "Private Project",
    technologies: "Technologies used:",
    
    items: [
      {
        id: 1,
        title: "WMS - WIS Company",
        description: "Multi-tenant web portal designed to meet WIS's needs in the warehouse management field. This portal provides access to a Warehouse Management System (WMS) that allows organizations to optimize and control their logistics operations efficiently.",
        technologies: ["React", "Axios", "ExpressJS", "Google Maps API", "PostgreSQL", "JWT", "CSS"],
        link: "",
        linkText: "Private project.",
        images: [wis1, wis2, wis3, wis4, wis5]
      },
      {
        id: 2,
        title: "Bungeeuy.com",
        description: "Bungeeuy was my first freelance project, developed as an online booking platform. The frontend was built using React 18, TailwindCSS 3, and Vite.js, while the backend was implemented entirely with Supabase (PostgreSQL and Deno). Supabase and Mercado Pago APIs (Checkout Pro) were integrated for authentication, data handling, and payment processing. The system allows the admin to log in, manage user bookings, create packages, and monitor appointments. Users, without needing an account, can choose available dates and times, enter their information, and confirm a booking through online payment. Upon successful payment, a webhook confirms the reservation and sends a confirmation email with a unique reservation code.",
        technologies: ["React 18", "TailwindCSS 3", "Vite.js", "Supabase", "PostgreSQL", "Deno", "Mercado Pago SDK", "Supabase SDK", "Cloudflare", "SEO Optimization"],
        link: "https://www.bungeeuy.com",
        linkText: "View Project →"
      },
      {
        id: 3,
        title: "Entrenamos.uy",
        description: "This project was implemented as a distributed system. There is a central server that stores all the platform data and a web server that deploys the service from a web application. Communication between the central server and the web server is through web services (SOAP). Additionally, the central server contains a graphical interface made in Swing to perform administration activities. It also aims to apply object-oriented concepts and various technologies.",
        technologies: ["JAVA", "Maven", "JPA", "HTML", "JSP", "CSS", "JavaScript", "MySQL", "SOAP", "Swing"],
        link: "https://github.com/StevoMPG/PAPLIC_LAB_FINAL",
        linkText: "View Project →"
      }
    ]
  },

  // Contact
  contact: {
    title: "Let's Talk",
    subtitle: "Have a project in mind? Let's connect and make it happen",
    formFields: [
      {
        id: "name",
        type: "text",
        placeholder: "Your name...",
        label: "Name",
        required: true
      },
      {
        id: "email",
        type: "email",
        placeholder: "example@gmail.com",
        label: "Email",
        required: true
      },
      {
        id: "message",
        type: "textarea",
        placeholder: "Tell me about your project...",
        label: "Message",
        required: true,
        rows: 5
      }
    ],
    submitButton: {
      text: "Send Message",
      sending: "Sending..."
    },
    successMessage: "Message sent successfully! I'll get back to you soon.",
    errorMessage: "Oops! Something went wrong. Please try again."
  },

  // Themes
  theme: {
    toggle: "Toggle theme",
    dark: "Dark theme",
    light: "Light theme"
  },

  // Languages
  language: {
    spanish: "Español",
    english: "English"
  },

  // Accessibility
  accessibility: {
    closeMenu: "Close menu",
    openMenu: "Open menu",
    toggleTheme: "Toggle theme",
    toggleLanguage: "Toggle language",
    scrollToTop: "Scroll to top"
  }
};