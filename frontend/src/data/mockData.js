// Base de datos simulada completa
export const mockDatabase = {
  // Configuración
  config: {
    studentAccessCode: "POSGRADO2025",
    siteName: "Posgrado UNMSM - Facultad de Educación",
    semester: "2025-II"
  },
  
  // Usuarios admin/colaboradores
  users: [
    {
      id: 1,
      username: "admin",
      password: "admin123", // En real será hash
      role: "admin",
      fullName: "Administrador Principal",
      email: "admin@unmsm.edu.pe",
      permissions: ["read", "write", "delete", "manage_users"]
    },
    {
      id: 2,
      username: "colaborador1",
      password: "colab123",
      role: "colaborador", 
      fullName: "María García",
      email: "mgarcia@unmsm.edu.pe",
      permissions: ["read", "write"]
    }
  ],
  
  // Contenido por secciones
  content: {
    inicio: {
      id: "inicio",
      title: "Bienvenidos",
      blocks: [
        {
          id: 1,
          type: "text",
          order: 1,
          content: {
            html: "<h2>Bienvenidos al Portal de Posgrado</h2><p>Información actualizada para el semestre 2025-I</p>"
          }
        },
        {
          id: 2,
          type: "image",
          order: 2,
          content: {
            url: "/images/facultad.jpg",
            alt: "Facultad de Educación",
            caption: "Campus de la Facultad"
          }
        }
      ],
      lastUpdated: "2025-01-20",
      status: "published"
    },
    
    tramites: {
      id: "tramites",
      title: "Trámites Académicos",
      blocks: [
        {
          id: 1,
          type: "text", 
          order: 1,
          content: {
            html: "<h3>Proceso de Matrícula 2025-I</h3>"
          }
        },
        {
          id: 2,
          type: "list",
          order: 2,
          content: {
            items: [
              "Verificar deuda pendiente",
              "Realizar pago de matrícula", 
              "Seleccionar cursos en el sistema",
              "Confirmar matrícula"
            ],
            listType: "ordered"
          }
        },
        {
          id: 3,
          type: "table",
          order: 3,
          content: {
            headers: ["Documento", "Original", "Copia Legalizada"],
            rows: [
              ["DNI", "✓", "✓"],
              ["Grado de Bachiller", "✓", "✓"],
              ["Certificado de Estudios", "-", "✓"]
            ]
          }
        }
      ],
      lastUpdated: "2025-01-18",
      status: "published"
    },
    
    tarifarios: {
      id: "tarifarios",
      title: "Tarifarios 2025",
      blocks: [
        {
          id: 1,
          type: "table",
          order: 1,
          content: {
            headers: ["Concepto", "Monto", "Modalidad"],
            rows: [
              ["Matrícula Maestría", "S/ 350.00", "Presencial"],
              ["Matrícula Doctorado", "S/ 400.00", "Presencial"],
              ["Derecho de Grado", "S/ 280.00", "Único pago"],
              ["Certificado de Estudios", "S/ 25.00", "Por semestre"]
            ]
          }
        }
      ],
      lastUpdated: "2025-01-15",
      status: "published"
    }
  },
  
  // Sessions activas (simuladas)
  sessions: []
}

// Helper functions
export const generateMockId = () => Date.now() + Math.random()

export const findUserByCredentials = (username, password) => {
  return mockDatabase.users.find(user => 
    user.username === username && user.password === password
  )
}

export const validateStudentCode = (code) => {
  return code === mockDatabase.config.studentAccessCode
}


// Datos mock para funcionalidades del sistema
export const systemFeatures = [
  {
    id: 1,
    icon: "📊",
    title: "Gestión de Expedientes",
    description: "Control completo de expedientes académicos, historial de calificaciones y seguimiento del progreso estudiantil.",
    category: "academico"
  },
  {
    id: 2,
    icon: "📅",
    title: "Planificación Académica",
    description: "Herramientas para programar cursos, asignar profesores y gestionar horarios de manera eficiente.",
    category: "planificacion"
  },
  {
    id: 3,
    icon: "💰",
    title: "Control Financiero",
    description: "Seguimiento de pagos, becas, y control financiero integral de estudiantes y programas.",
    category: "financiero"
  },
  {
    id: 4,
    icon: "📝",
    title: "Gestión de Tesis",
    description: "Seguimiento completo del proceso de tesis desde la propuesta hasta la defensa final.",
    category: "academico"
  },
  {
    id: 5,
    icon: "📈",
    title: "Reportes y Análisis",
    description: "Generación de reportes detallados y análisis estadísticos para la toma de decisiones.",
    category: "reportes"
  },
  {
    id: 6,
    icon: "🔐",
    title: "Seguridad y Permisos",
    description: "Sistema robusto de seguridad con roles y permisos personalizables para cada usuario.",
    category: "seguridad"
  }
]

// Datos mock para cronograma de admisión 2025-II (basado en info real UNMSM)
export const enrollmentProcess = [
  {
    id: 1,
    step: 1,
    title: "Inscripción y Pago",
    date: "15 Jul - 08 Ago",
    duration: "3 semanas",
    icon: "💳",
    status: "active",
    description: "Pago por derecho de inscripción a través de San Market UNMSM (BCP)",
    requirements: ["Pago de inscripción", "Registro en plataforma virtual"]
  },
  {
    id: 2,
    step: 2,
    title: "Envío de Expediente",
    date: "09 Ago - 15 Ago",
    duration: "1 semana",
    icon: "📋",
    status: "pending",
    description: "Envío de documentos completos al email de la Unidad de Posgrado",
    requirements: ["Certificado SUNEDU", "DNI", "Certificado de idioma", "Expediente completo"]
  },
  {
    id: 3,
    step: 3,
    title: "Examen de Aptitud",
    date: "20 Ago - 25 Ago",
    duration: "1 semana",
    icon: "📝",
    status: "pending",
    description: "Evaluación de conocimientos según programa (Maestría o Doctorado)",
    requirements: ["Código de postulante", "Presentarse en fecha asignada"]
  },
  {
    id: 4,
    step: 4,
    title: "Evaluación y Resultados",
    date: "28 Ago - 05 Sep",
    duration: "1 semana",
    icon: "🎓",
    status: "pending",
    description: "Evaluación de expediente y publicación de resultados de admisión",
    requirements: ["Completar todos los pasos anteriores"]
  }
]

// Datos mock específicos para proceso de matrícula (post-admisión)
export const matriculaProcess = [
  {
    id: 1,
    step: 1,
    title: "Pago de Matrícula",
    date: "10 Sep - 20 Sep",
    duration: "10 días",
    icon: "💰",
    status: "pending",
    description: "Pago en Banco Financiero - Dos recibos: UPG (S/.258) + EPG (S/.52)",
    amount: "S/. 310.00",
    accounts: [
      { name: "Unidad de Posgrado (UPG)", code: "172-010", amount: "S/. 258.00" },
      { name: "Escuela de Posgrado (EPG)", code: "207-010", amount: "S/. 52.00" }
    ]
  },
  {
    id: 2,
    step: 2,
    title: "Matrícula en Cursos",
    date: "21 Sep - 25 Sep",
    duration: "5 días",
    icon: "📚",
    status: "pending",
    description: "Selección de asignaturas a través del Sistema Único de Matrícula",
    requirements: ["Comprobante de pago de matrícula", "Asesoría académica"]
  },
  {
    id: 3,
    step: 3,
    title: "Confirmación de Matrícula",
    date: "26 Sep - 28 Sep",
    duration: "3 días",
    icon: "✅",
    status: "pending",
    description: "Validación final y emisión de constancia de matrícula",
    requirements: ["Cursos seleccionados", "Pagos completos"]
  },
  {
    id: 4,
    step: 4,
    title: "Inicio de Clases",
    date: "02 Oct",
    duration: "Inicio",
    icon: "🎓",
    status: "pending",
    description: "Comienzo del semestre académico 2025-II",
    requirements: ["Matrícula confirmada", "Acceso a aulas virtuales"]
  }
]

// Datos mock para testimonios de egresados
export const testimonials = [
  {
    id: 1,
    quote: "La maestría me dio las herramientas necesarias para liderar cambios significativos en mi institución. El enfoque práctico y la calidad de los profesores fueron excepcionales.",
    author: "María Rodríguez",
    position: "Directora Académica - Colegio San José",
    initials: "MR",
    program: "Maestría en Gestión Educativa",
    year: "2023"
  },
  {
    id: 2,
    quote: "El doctorado me permitió desarrollar investigación de alto impacto. Hoy soy referente en mi área gracias a la formación recibida y el apoyo constante del cuerpo docente.",
    author: "Dr. Juan López",
    position: "Investigador Senior - Universidad Nacional",
    initials: "JL",
    program: "Doctorado en Educación",
    year: "2022"
  },
  {
    id: 3,
    quote: "La modalidad virtual fue perfecta para mi situación. Pude estudiar mientras trabajaba, y la plataforma tecnológica facilitó todo el proceso de aprendizaje.",
    author: "Ana Sánchez",
    position: "Coordinadora Pedagógica - Ministerio de Educación",
    initials: "AS",
    program: "Maestría en Tecnología Educativa",
    year: "2024"
  }
]