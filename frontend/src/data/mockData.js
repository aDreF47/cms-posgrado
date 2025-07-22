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