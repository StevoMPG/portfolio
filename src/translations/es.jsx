export const es = {
    navbar: {
      home: "Inicio",
      technologies: "Tecnologías",
      projects: "Proyectos",
      about: "Sobre mi",
      contact: "Contacto"
    },
    home: {
      title: "Steven Pereira",
      subtitle: "Tecnólogo en Informática",
      description: "Desarrollador Full-Stack apasionado por crear aplicaciones web limpias, escalables y de alto rendimiento. Mi enfoque combina código eficiente con una experiencia de usuario excepcional, asegurando que cada proyecto no solo cumpla, sino que supere las expectativas."
    },
    technologies: {
      title: "Tecnologías"
    },
    about: {
      title: "Sobre mi",
      description: "Arquitecto de software Jr apasionado con experiencia en la creación de aplicaciones escalables y soluciones innovadoras que resuelven problemas complejos de negocio.",
      toolsTitle: "🛠️ Herramientas",
      methodologiesTitle: "📋 Metodologías",
      otherSkillsTitle: "🌟 Otras Habilidades",
      educationTitle: "🏫 Información Académica",
      experienceTitle: "💼 Experiencia Laboral",
      education: [
        {
          degree: "Tecnólogo en Informática",
          institution: "UTEC",
          period: "(2021-2024)",
          description: "Desarrollo de sistema interno y microservicios. Diseño de arquitectura de software para nuevos proyectos."
        }
      ],
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
      ]
    },
    projects: {
      title: "Proyectos",
      projects: [
        {
          id: 1,
          title: "WMS - Empresa WIS",
          description: "Portal web de tipo multitenancy diseñado para satisfacer las necesidades de WIS en el ámbito de la gestión de almacenes. Este portal brinda acceso a un Sistema de Gestión de Almacenes (WMS) que permite a las organizaciones optimizar y controlar sus operaciones logísticas de manera eficiente.",
          technologies: ["React", "Axios", "ExpressJS", "Google Maps API", "PostgreSQL", "JWT", "CSS"],
          link: "",
          linkText: "Proyecto privado."
        },
        {
          id: 2,
          title: "Entrenamos.uy",
          description: "Este proyecto se implementó como un sistema distribuido. Existe un servidor central el cual almacena todos los datos de la plataforma y un servidor web el cual despliega el servicio desde una aplicación web. La comunicación entre el servidor central y el servidor web es a través de web services (SOAP). Adicionalmente, el servidor central contiene una interfaz gráfica hecha en Swing para realizar actividades de administración. También tiene como idea el aplicar conceptos de la orientación a objetos y diversas tecnologías.",
          technologies: ["JAVA", "Maven", "JPA", "HTML", "JSP", "CSS", "JavaScript", "MySQL", "SOAP", "Swing"],
          link: "https://github.com/StevoMPG/PAPLIC_LAB_FINAL",
          linkText: "Ver Proyecto →"
        }
      ]
    },
    contact: {
      title: "Contacto",
      formFields: [
        {
          id: "name",
          type: "text",
          placeholder: "Nombre...",
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
        text: "Enviar mensaje"
      },
      successMessage: "Mensaje enviado!",
      errorMessage: "Oops! Algo salió mal! Por favor, intente de nuevo."
    }
  };