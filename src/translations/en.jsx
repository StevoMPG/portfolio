export const en = {
    navbar: {
      home: "Home",
      technologies: "Technologies",
      projects: "Projects",
      about: "About",
      contact: "Contact"
    },
    home: {
      title: "Steven Pereira",
      subtitle: "IT Technologist",
      description: "Full-Stack developer passionate about creating clean, scalable, and high-performance web applications. My approach combines efficient code with exceptional user experience, ensuring that each project not only meets but exceeds expectations."
    },
    technologies: {
      title: "Technologies"
    },
    about: {
      title: "About me",
      description: "Junior Software Architect passionate with experience in creating scalable applications and innovative solutions that solve complex business problems.",
      toolsTitle: "🛠️ Tools",
      methodologiesTitle: "📋 Methodologies",
      otherSkillsTitle: "🌟 Other Skills",
      educationTitle: "🏫 Academic Information",
      experienceTitle: "💼 Work Experience",
      education: [
        {
          degree: "IT Technologist",
          institution: "UTEC",
          period: "(2021-2024)",
          description: "Development of internal system and microservices. Software architecture design for new projects."
        }
      ],
      experience: [
        {
          company: "Universal",
          position: "Junior Software Architect",
          period: "January 2025 - Present",
          description: "Software architecture and interoperability design for new projects across the SEMM group (Cosem, MP, Mautone). Improvement of deployment processes and microservices development. Implementation of CI/CD and DevOps. Specific developments for Mautone."
        },
        {
          company: "Sanatorio Mautone",
          position: "Programmer Analyst",
          period: "February 2023 - January 2025",
          description: "Development and maintenance of internal system, change requests, microservices. Software architecture design for new projects."
        },
        {
          company: "Fundación Telefonica",
          position: "Support Analyst",
          period: "June 2019 - February 2023",
          description: "End-user support and system maintenance. Implementation of improvements to existing infrastructure."
        }
      ],
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
      methodologiesSkills: [
        "Agile",
        "Scrum",
        "DevOps",
        "CI/CD",
        "Microservices",
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
    projects: {
      title: "Projects",
      projects: [
        {
          id: 1,
          title: "WMS - WIS Company",
          description: "Multi-tenant web portal designed to meet WIS's needs in the warehouse management field. This portal provides access to a Warehouse Management System (WMS) that allows organizations to optimize and control their logistics operations efficiently.",
          technologies: ["React", "Axios", "ExpressJS", "Google Maps API", "PostgreSQL", "JWT", "CSS"],
          link: "",
          linkText: "Private project."
        },
        {
          id: 2,
          title: "Entrenamos.uy",
          description: "This project was implemented as a distributed system. There is a central server that stores all the platform data and a web server that deploys the service from a web application. Communication between the central server and the web server is through web services (SOAP). Additionally, the central server contains a graphical interface made in Swing to perform administration activities. It also aims to apply object-oriented concepts and various technologies.",
          technologies: ["JAVA", "Maven", "JPA", "HTML", "JSP", "CSS", "JavaScript", "MySQL", "SOAP", "Swing"],
          link: "https://github.com/StevoMPG/PAPLIC_LAB_FINAL",
          linkText: "View Project →"
        }
      ]
    },
    contact: {
      title: "Contact",
      formFields: [
        {
          id: "name",
          type: "text",
          placeholder: "Name...",
          required: true
        },
        {
          id: "email",
          type: "email",
          placeholder: "example@gmail.com",
          required: true
        },
        {
          id: "message",
          type: "textarea",
          placeholder: "Your message...",
          required: true,
          rows: 5
        }
      ],
      submitButton: {
        text: "Send message"
      },
      successMessage: "Message sent!",
      errorMessage: "Oops! Something went wrong! Please try again."
    }
  };