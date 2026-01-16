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

  // Home
  home: {
    title: "Steven Pereira",
    subtitle: "Technology Software Engineer",
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
    description: "Software Engineer with experience building scalable applications and innovative solutions that address complex business challenges.",
    toolsTitle: "🛠️ Tools & Frameworks",
    methodologiesTitle: "📋 Methodologies & Practices",
    otherSkillsTitle: "🌟 Additional Skills",
    educationTitle: "Academic Information",
    experienceTitle: "Work Experience",
    currentJob: "Current",
    dragToExplore: "Drag to explore",
    swipeToSee: "Swipe to see more",
    
    education: [
      {
        degree: "IT Technologist",
        institution: "UTEC",
        period: "2021-2024",
        description: "The Technologist Degree in Information Technology equips professionals with the skills necessary for the development, implementation, maintenance, and management of computer systems. This includes knowledge in programming, databases, networks, and software engineering. The program emphasizes practical experience and problem-solving skills, preparing graduates for a dynamic and evolving field."
      }
    ],
    
    experience: [
      {
        company: "Universal",
        position: "Jr. Software Architect",
        period: "January 2025 - Present",
        description: "• Enhanced deployment processes implementing CI/CD pipelines with Jenkins, Docker, and Groovy scripting. • Deployed KrakenD API Gateway to streamline microservices orchestration and improve system performance. • Architected software solutions and established interoperability standards for new SEMM group initiatives (Cosem, MP, Mautone). • Conducted high and low-level effort estimations for new features, assessing impact across all integrated systems. • Delivered targeted development modules for Mautone including POS systems, KPI dashboards, and custom business logic."
      },
      {
        company: "Sanatorio Mautone",
        position: "Programmer Analyst",
        period: "February 2023 - January 2025",
        description: "• Led end-to-end implementation of a payment expansion project serving 50,000+ members through external payment networks (Abitab, RedPagos, Mobile Apps/Kiosks), enabling transactions for medical tests, consultations, and pharmacy services via REST and SOAP integrations. • Contributed to the SEMM interoperability initiative with COSEM and MP, optimizing cross-organization service delivery. • Delivered ERP enhancements across Accounting, Treasury, Invoicing, KPI Management, Electronic Billing (DGI compliance), and POS integration with FISERV. • Designed and deployed the KPI Management module from scratch, now a critical tool for executive decision-making."
      },
      {
        company: "Fundación Telefónica Movistar",
        position: "Support Analyst",
        period: "July 2019 - February 2023",
        description: "• Delivered technical support for Uruguay's educational platform users, handling incident management and task coordination through the ticketing system. • Coordinated the rollout and configuration of new courses ensuring seamless platform integration. • Performed QA testing and bug triage, contributing to platform stability and user experience improvements. • Built data analysis reports using PowerBI and Excel to support strategic planning and operational decisions."
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

  // Settings
  settings: {
    theme: "Theme",
    language: "Language"
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