import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  MdSchool, 
  MdDescription, 
  MdEdit, 
  MdEmojiEvents,
  MdCheckCircle,
  MdSchedule,
  MdAttachMoney,
  MdDownload,
  MdUpload,
  MdPerson,
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdWarning,
  MdInfo,
  MdFolder,
  MdFilePresent,
  MdAssignment,
  MdGrade,
  MdVerifiedUser,
  MdWorkOutline,
  MdEventNote,
  MdRefresh,
  MdCancel,
  MdSend,
  MdPrint,
  MdCloudDownload,
  MdBusinessCenter,
  MdAccountBalance,
  MdDateRange,
  MdAccessTime,
  MdNotificationImportant
} from 'react-icons/md';
import { 
  FaFileAlt, 
  FaStamp,
  FaUniversity,
  FaGraduationCap,
  FaWhatsapp,
  FaClock,
  FaCalendarAlt
} from 'react-icons/fa';

const TramitesPage = () => {
  console.log('TramitesPage - Componente renderizándose');
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('matricula');
  console.log('TramitesPage - Ubicación actual:', location.pathname);

  // Mapear rutas a tabs
  const getTabFromPath = (path) => {
    if (path.includes('/matricula')) return 'matricula';
    if (path.includes('/certificados')) return 'certificados';
    if (path.includes('/modificacion')) return 'modificacion';
    if (path.includes('/grado')) return 'grado';
    return 'matricula'; // default
  };

  // Manejar navegación por hash URL y ruta
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && ['matricula', 'certificados', 'modificacion', 'grado'].includes(hash)) {
      setActiveTab(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const tabFromPath = getTabFromPath(location.pathname);
      setActiveTab(tabFromPath);
      setTimeout(() => {
        const element = document.getElementById(tabFromPath);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.pathname]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.history.pushState(null, '', `#${tabId}`);
    setTimeout(() => {
      const element = document.getElementById(tabId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Datos de matrícula 2025-II
  const procesosMatricula = [
    {
      tipo: "Primera Matrícula",
      descripcion: "Para estudiantes nuevos admitidos",
      fechas: "02 - 13 de Septiembre 2025",
      modalidad: "Virtual y Presencial",
      requisitos: [
        "Constancia de ingreso (admitidos)",
        "DNI vigente (original y copia)",
        "Recibo de pago de matrícula",
        "Foto digital fondo blanco",
        "Certificado médico (opcional)"
      ],
      pasos: [
        "Verificar constancia de admisión",
        "Realizar pago de matrícula",
        "Completar formulario en línea",
        "Subir documentos requeridos",
        "Confirmar matrícula presencialmente"
      ],
      costo: { maestria: 450, doctorado: 550 },
      contacto: "matricula.posgrado@unmsm.edu.pe"
    },
    {
      tipo: "Matrícula Regular",
      descripcion: "Para estudiantes continuadores",
      fechas: "16 - 27 de Septiembre 2025",
      modalidad: "Virtual",
      requisitos: [
        "Estar al día en pagos anteriores",
        "No tener observaciones académicas",
        "Recibo de pago actualizado",
        "Ficha de matrícula completa"
      ],
      pasos: [
        "Ingresar al sistema académico",
        "Verificar historial académico",
        "Seleccionar cursos disponibles",
        "Generar ficha de matrícula",
        "Confirmar y enviar matrícula"
      ],
      costo: { maestria: 450, doctorado: 550 },
      contacto: "sistemas.posgrado@unmsm.edu.pe"
    },
    {
      tipo: "Matrícula Extemporánea",
      descripcion: "Después del plazo regular",
      fechas: "30 Sep - 04 Oct 2025",
      modalidad: "Presencial únicamente",
      requisitos: [
        "Solicitud con justificación",
        "Pago de multa correspondiente",
        "Todos los documentos básicos",
        "Carta dirigida al coordinador"
      ],
      pasos: [
        "Presentar solicitud justificada",
        "Pago de matrícula + multa",
        "Revisión por coordinación",
        "Aprobación del trámite",
        "Matrícula efectiva"
      ],
      costo: { maestria: 500, doctorado: 600 },
      contacto: "coordinacion.posgrado@unmsm.edu.pe"
    }
  ];

  // Certificados y constancias
  const certificadosDisponibles = [
    {
      id: 1,
      nombre: "Certificado de Estudios Completo",
      descripcion: "Certificado oficial con todas las notas del programa",
      tiempo_entrega: "5 días hábiles",
      costo: 35,
      requisitos: [
        "Solicitud dirigida al Decano",
        "Recibo de pago",
        "DNI (copia simple)",
        "No tener deudas pendientes"
      ],
      icono: MdVerifiedUser,
      proceso: "Virtual y físico",
      vigencia: "Permanente"
    },
    {
      id: 2,
      nombre: "Certificado de Estudios Parcial",
      descripcion: "Por ciclos académicos específicos",
      tiempo_entrega: "3 días hábiles",
      costo: 25,
      requisitos: [
        "Especificar ciclos requeridos",
        "Recibo de pago",
        "DNI (copia simple)",
        "Solicitud simple"
      ],
      icono: MdFilePresent,
      proceso: "Virtual",
      vigencia: "Permanente"
    },
    {
      id: 3,
      nombre: "Constancia de Estudios",
      descripcion: "Documento que acredita condición de estudiante",
      tiempo_entrega: "2 días hábiles",
      costo: 15,
      requisitos: [
        "Estar matriculado en el semestre actual",
        "Recibo de pago",
        "DNI (copia simple)"
      ],
      icono: MdAssignment,
      proceso: "Virtual",
      vigencia: "6 meses"
    },
    {
      id: 4,
      nombre: "Constancia de Egresado",
      descripcion: "Para graduados que completaron el programa",
      tiempo_entrega: "3 días hábiles",
      costo: 20,
      requisitos: [
        "Haber completado todos los cursos",
        "No tener deudas académicas",
        "Recibo de pago",
        "DNI (copia simple)"
      ],
      icono: MdGrade,
      proceso: "Presencial",
      vigencia: "Permanente"
    },
    {
      id: 5,
      nombre: "Constancia de No Adeudo",
      descripcion: "Certificado de estar al día en pagos",
      tiempo_entrega: "1 día hábil",
      costo: 10,
      requisitos: [
        "Verificación de pagos al día",
        "Recibo de pago del trámite",
        "DNI (copia simple)"
      ],
      icono: MdVerifiedUser,
      proceso: "Virtual",
      vigencia: "3 meses"
    },
    {
      id: 6,
      nombre: "Duplicado de Diploma",
      descripcion: "Copia certificada del diploma original",
      tiempo_entrega: "15 días hábiles",
      costo: 150,
      requisitos: [
        "Denuncia policial (si fue extraviado)",
        "Publicación en diario (si fue extraviado)",
        "Recibo de pago",
        "DNI (copia legalizada)",
        "Declaración jurada"
      ],
      icono: MdEmojiEvents,
      proceso: "Presencial",
      vigencia: "Permanente"
    }
  ];

  // Modificaciones de matrícula
  const tiposModificacion = [
    {
      tipo: "Adición de Cursos",
      descripcion: "Agregar asignaturas al plan de estudios actual",
      plazo: "Hasta 15 días después del inicio de clases",
      costo: 25,
      requisitos: [
        "Disponibilidad de vacantes",
        "Cumplir prerequisitos",
        "Pago de modificación",
        "Autorización del coordinador"
      ],
      proceso: [
        "Verificar disponibilidad",
        "Solicitar autorización",
        "Realizar pago",
        "Actualizar matrícula"
      ],
      icono: MdWorkOutline
    },
    {
      tipo: "Retiro de Cursos",
      descripcion: "Retirar asignaturas sin afectar record académico",
      plazo: "Hasta 30 días después del inicio de clases",
      costo: 20,
      requisitos: [
        "No estar en último ciclo",
        "Mantener carga mínima",
        "Justificación válida",
        "Pago de modificación"
      ],
      proceso: [
        "Presentar justificación",
        "Verificar carga académica",
        "Realizar pago",
        "Confirmar retiro"
      ],
      icono: MdCancel
    },
    {
      tipo: "Cambio de Horario",
      descripcion: "Modificar horarios de clases matriculadas",
      plazo: "Primera semana de clases únicamente",
      costo: 15,
      requisitos: [
        "Disponibilidad en nuevo horario",
        "No tener conflictos",
        "Pago de modificación",
        "Solicitud simple"
      ],
      proceso: [
        "Verificar compatibilidad",
        "Confirmar disponibilidad",
        "Realizar pago",
        "Actualizar horario"
      ],
      icono: MdSchedule
    },
    {
      tipo: "Rectificación de Datos",
      descripcion: "Corregir información personal en matrícula",
      plazo: "Todo el semestre",
      costo: 30,
      requisitos: [
        "Documentos sustentatorios",
        "DNI actualizado",
        "Pago de rectificación",
        "Solicitud formal"
      ],
      proceso: [
        "Presentar documentos",
        "Verificar información",
        "Realizar pago",
        "Actualizar sistema"
      ],
      icono: MdEdit
    }
  ];

  // Trámites de grado
  const tramitesGrado = [
    {
      grado: "Maestro",
      modalidad: "Tesis",
      duracion: "6-12 meses",
      costo_total: 850,
      fases: [
        {
          fase: "Proyecto de Tesis",
          descripcion: "Presentación y aprobación del proyecto",
          tiempo: "2-3 meses",
          costo: 150,
          requisitos: [
            "Haber completado todos los cursos",
            "Promedio mínimo 14.0",
            "Proyecto viable y original",
            "Asesor designado oficial"
          ]
        },
        {
          fase: "Desarrollo de Tesis",
          descripcion: "Investigación y redacción de tesis",
          tiempo: "4-8 meses",
          costo: 200,
          requisitos: [
            "Proyecto aprobado",
            "Seguimiento con asesor",
            "Avances mensuales",
            "Recursos de investigación"
          ]
        },
        {
          fase: "Sustentación",
          descripcion: "Defensa pública de la tesis",
          tiempo: "1 mes",
          costo: 350,
          requisitos: [
            "Tesis completa y revisada",
            "Dictamen favorable de jurados",
            "Documentos en regla",
            "Pago de sustentación"
          ]
        },
        {
          fase: "Obtención del Grado",
          descripcion: "Trámites finales para el grado",
          tiempo: "2-4 semanas",
          costo: 150,
          requisitos: [
            "Sustentación aprobada",
            "Empastado de tesis (3 ejemplares)",
            "Pago de derechos de grado",
            "No tener deudas pendientes"
          ]
        }
      ]
    },
    {
      grado: "Doctor",
      modalidad: "Tesis Doctoral",
      duracion: "12-24 meses",
      costo_total: 1200,
      fases: [
        {
          fase: "Proyecto Doctoral",
          descripcion: "Proyecto de investigación doctoral",
          tiempo: "3-4 meses",
          costo: 200,
          requisitos: [
            "Grado de Maestro afín",
            "Promedio mínimo 15.0",
            "Proyecto de alto nivel",
            "Asesor con grado de Doctor"
          ]
        },
        {
          fase: "Examen de Candidatura",
          descripcion: "Evaluación de conocimientos avanzados",
          tiempo: "1 mes",
          costo: 300,
          requisitos: [
            "Proyecto aprobado",
            "Dominio de idioma extranjero",
            "Conocimientos en metodología",
            "Preparación especializada"
          ]
        },
        {
          fase: "Desarrollo de Tesis",
          descripcion: "Investigación doctoral original",
          tiempo: "8-18 meses",
          costo: 400,
          requisitos: [
            "Candidatura aprobada",
            "Plan de investigación",
            "Recursos especializados",
            "Supervisión continua"
          ]
        },
        {
          fase: "Sustentación Doctoral",
          descripcion: "Defensa pública de tesis doctoral",
          tiempo: "1-2 meses",
          costo: 300,
          requisitos: [
            "Tesis doctoral completa",
            "Artículos científicos publicados",
            "Jurado especializado",
            "Defensa pública"
          ]
        }
      ]
    }
  ];

  const renderMatricula = () => (
    <div id="matricula" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Proceso de Matrícula 2025-II</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Información completa sobre los procesos de matrícula para estudiantes de posgrado
        </p>
      </div>

      {/* Timeline de matrícula */}
      <div className="space-y-8">
        {procesosMatricula.map((proceso, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* Header del proceso */}
              <div className="lg:w-1/3">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white mb-4">
                    <MdSchool className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{proceso.tipo}</h3>
                  <p className="text-gray-600 mb-4">{proceso.descripcion}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <MdDateRange className="text-blue-600" />
                      <span className="font-medium text-gray-700">{proceso.fechas}</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <MdBusinessCenter className="text-green-600" />
                      <span className="text-gray-600">{proceso.modalidad}</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <MdEmail className="text-purple-600" />
                      <span className="text-gray-600 text-xs">{proceso.contacto}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenido del proceso */}
              <div className="lg:w-2/3 space-y-6">
                
                {/* Costos */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <MdAttachMoney className="text-green-600" />
                    Costos de Matrícula
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Maestría</p>
                      <p className="text-xl font-bold text-green-700">S/. {proceso.costo.maestria}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Doctorado</p>
                      <p className="text-xl font-bold text-green-700">S/. {proceso.costo.doctorado}</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Requisitos */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <MdCheckCircle className="text-blue-600" />
                      Requisitos
                    </h4>
                    <ul className="space-y-2">
                      {proceso.requisitos.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <MdInfo className="text-blue-500 mt-1 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pasos */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <MdEventNote className="text-purple-600" />
                      Proceso
                    </h4>
                    <ol className="space-y-2">
                      {proceso.pasos.map((paso, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="flex-shrink-0 w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold">
                            {idx + 1}
                          </span>
                          {paso}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Información importante */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
        <div className="flex items-start gap-3">
          <MdWarning className="text-yellow-600 text-xl mt-1" />
          <div>
            <h4 className="font-semibold text-yellow-800 mb-2">Información Importante</h4>
            <ul className="text-yellow-700 text-sm space-y-1">
              <li>• La matrícula extemporánea incluye una multa adicional del 20%</li>
              <li>• Los estudiantes deben estar al día en sus pagos para poder matricularse</li>
              <li>• El sistema de matrícula virtual estará disponible las 24 horas durante el período</li>
              <li>• Para consultas urgentes, contactar al WhatsApp: 965-229-338</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCertificados = () => (
    <div id="certificados" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Certificados y Constancias</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Solicita tus documentos oficiales de manera rápida y segura
        </p>
      </div>

      {/* Grid de certificados */}
      <div className="grid lg:grid-cols-2 gap-6">
        {certificadosDisponibles.map((cert) => {
          const IconComponent = cert.icono;
          return (
            <div key={cert.id} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
              
              {/* Header del certificado */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-colors">
                    <IconComponent className="text-2xl text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{cert.nombre}</h3>
                  <p className="text-gray-600 text-sm">{cert.descripcion}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-600">S/. {cert.costo}</p>
                  <p className="text-xs text-gray-500">{cert.vigencia}</p>
                </div>
              </div>

              {/* Información del certificado */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MdAccessTime className="text-orange-500" />
                    <span className="text-gray-600">{cert.tiempo_entrega}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdBusinessCenter className="text-purple-500" />
                    <span className="text-gray-600">{cert.proceso}</span>
                  </div>
                </div>

                {/* Requisitos */}
                <div>
                  <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                    <MdFolder className="text-blue-600" />
                    Requisitos:
                  </h4>
                  <ul className="space-y-1">
                    {cert.requisitos.map((req, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                        <MdCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" style={{fontSize: '10px'}} />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón de acción */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center gap-2">
                  <MdSend className="text-lg" />
                  Solicitar Documento
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Proceso general */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Proceso General de Solicitud</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              paso: 1,
              titulo: "Solicitud",
              descripcion: "Llena el formulario oficial con tus datos",
              icono: MdDescription,
              color: "blue"
            },
            {
              paso: 2,
              titulo: "Pago",
              descripcion: "Realiza el pago según el tipo de documento",
              icono: MdAttachMoney,
              color: "green"
            },
            {
              paso: 3,
              titulo: "Procesamiento",
              descripcion: "Verificación y elaboración del documento",
              icono: MdRefresh,
              color: "orange"
            },
            {
              paso: 4,
              titulo: "Entrega",
              descripcion: "Recoge tu documento o recíbelo digitalmente",
              icono: MdDownload,
              color: "purple"
            }
          ].map((proceso) => {
            const IconComponent = proceso.icono;
            const colorClasses = {
              blue: "bg-blue-100 text-blue-600",
              green: "bg-green-100 text-green-600", 
              orange: "bg-orange-100 text-orange-600",
              purple: "bg-purple-100 text-purple-600"
            };
            
            return (
              <div key={proceso.paso} className="text-center">
                <div className={`w-16 h-16 ${colorClasses[proceso.color]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="text-2xl" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {proceso.paso}. {proceso.titulo}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">{proceso.descripcion}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderModificacion = () => (
    <div id="modificacion" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Modificación de Matrícula</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Realiza cambios en tu matrícula según tus necesidades académicas
        </p>
      </div>

      {/* Tipos de modificación */}
      <div className="grid gap-6">
        {tiposModificacion.map((mod, index) => {
          const IconComponent = mod.icono;
          return (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                
                {/* Icono y info básica */}
                <div className="md:w-1/3">
                  <div className="text-center md:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl mb-4">
                      <IconComponent className="text-2xl text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{mod.tipo}</h3>
                    <p className="text-gray-600 mb-4">{mod.descripcion}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
                        <MdAccessTime className="text-red-500" />
                        <span className="font-medium text-gray-700">{mod.plazo}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
                        <MdAttachMoney className="text-green-500" />
                        <span className="font-bold text-green-700">S/. {mod.costo}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Requisitos y proceso */}
                <div className="md:w-2/3">
                  <div className="grid md:grid-cols-2 gap-6">
                    
                    {/* Requisitos */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <MdInfo className="text-blue-600" />
                        Requisitos
                      </h4>
                      <ul className="space-y-2">
                        {mod.requisitos.map((req, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <MdCheckCircle className="text-green-500 mt-1 flex-shrink-0 text-xs" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Proceso */}
                    <div className="bg-blue-50 rounded-xl p-4">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <MdEventNote className="text-indigo-600" />
                        Proceso
                      </h4>
                      <ol className="space-y-2">
                        {mod.proceso.map((paso, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="flex-shrink-0 w-5 h-5 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xs font-bold">
                              {idx + 1}
                            </span>
                            {paso}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* Botón de acción */}
                  <div className="mt-4">
                    <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2">
                      <MdEdit className="text-lg" />
                      Solicitar {mod.tipo}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Información adicional */}
      <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-xl">
        <div className="flex items-start gap-3">
          <MdNotificationImportant className="text-orange-600 text-xl mt-1" />
          <div>
            <h4 className="font-semibold text-orange-800 mb-2">Recordatorios Importantes</h4>
            <ul className="text-orange-700 text-sm space-y-1">
              <li>• Las modificaciones tienen plazos estrictos que no pueden ser extendidos</li>
              <li>• Algunos cambios pueden afectar tu plan de estudios y fecha de graduación</li>
              <li>• Consulta con tu coordinador académico antes de realizar modificaciones</li>
              <li>• Los reembolsos por retiro de cursos tienen condiciones específicas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTramitesGrado = () => (
    <div id="grado" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Trámites de Grado</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Guía completa para obtener tu grado de Maestro o Doctor
        </p>
      </div>

      {/* Opciones de grado */}
      <div className="space-y-12">
        {tramitesGrado.map((grado, index) => (
          <div key={index} className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            
            {/* Header del grado */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full text-white mb-4">
                <FaGraduationCap className="text-3xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Grado de {grado.grado}</h3>
              <p className="text-gray-600 mb-4">Modalidad: {grado.modalidad}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Duración</p>
                  <p className="font-bold text-purple-600">{grado.duracion}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Costo Total</p>
                  <p className="font-bold text-green-600">S/. {grado.costo_total}</p>
                </div>
                <div className="text-center col-span-2 md:col-span-1">
                  <p className="text-sm text-gray-600">Modalidad</p>
                  <p className="font-bold text-blue-600">{grado.modalidad}</p>
                </div>
              </div>
            </div>

            {/* Fases del proceso */}
            <div className="space-y-6">
              {grado.fases.map((fase, faseIndex) => (
                <div key={faseIndex} className="relative">
                  
                  {/* Línea conectora (excepto la última) */}
                  {faseIndex < grado.fases.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-16 bg-gray-300 z-0"></div>
                  )}
                  
                  <div className="flex gap-6 relative z-10">
                    
                    {/* Número de fase */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                        <span className="text-lg font-bold text-purple-600">{faseIndex + 1}</span>
                      </div>
                    </div>

                    {/* Contenido de la fase */}
                    <div className="flex-1 bg-gray-50 rounded-xl p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-800 mb-2">{fase.fase}</h4>
                          <p className="text-gray-600 mb-3">{fase.descripcion}</p>
                        </div>
                        <div className="text-center lg:text-right">
                          <div className="inline-flex items-center gap-4">
                            <div>
                              <p className="text-sm text-gray-600">Tiempo</p>
                              <p className="font-bold text-blue-600">{fase.tiempo}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-600">Costo</p>
                              <p className="font-bold text-green-600">S/. {fase.costo}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Requisitos de la fase */}
                      <div>
                        <h5 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                          <MdAssignment className="text-blue-600" />
                          Requisitos de esta fase:
                        </h5>
                        <div className="grid md:grid-cols-2 gap-2">
                          {fase.requisitos.map((req, reqIndex) => (
                            <div key={reqIndex} className="flex items-start gap-2 text-sm text-gray-600">
                              <MdCheckCircle className="text-green-500 mt-1 flex-shrink-0 text-xs" />
                              {req}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botón de inicio */}
            <div className="text-center mt-8">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-3 mx-auto">
                <MdEmojiEvents className="text-xl" />
                Iniciar Trámite de {grado.grado}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Asesoría académica */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Asesoría Académica</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <MdPerson className="text-3xl text-green-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Asesor Académico</h4>
            <p className="text-gray-600 text-sm">Dr. María González Ruiz</p>
            <p className="text-gray-500 text-xs">Coordinadora de Grados</p>
          </div>
          <div className="text-center">
            <MdEmail className="text-3xl text-blue-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
            <p className="text-gray-600 text-sm">grados.posgrado@unmsm.edu.pe</p>
            <p className="text-gray-500 text-xs">Respuesta en 24 horas</p>
          </div>
          <div className="text-center">
            <FaWhatsapp className="text-3xl text-green-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">WhatsApp</h4>
            <p className="text-gray-600 text-sm">965-229-338</p>
            <p className="text-gray-500 text-xs">Lun-Vie: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header de la página */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Trámites Académicos 2025-II
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Facultad de Educación - Universidad Nacional Mayor de San Marcos
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="font-semibold">Matrícula:</span> Sep 02-13
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="font-semibold">Certificados:</span> Todo el año
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="font-semibold">Grados:</span> Proceso continuo
            </div>
          </div>
        </div>
      </div>

      {/* Navegación por pestañas */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'matricula', label: 'Proceso de Matrícula', icon: MdSchool },
              { id: 'certificados', label: 'Certificados y Constancias', icon: MdDescription },
              { id: 'modificacion', label: 'Modificación de Matrícula', icon: MdEdit },
              { id: 'grado', label: 'Trámites de Grado', icon: MdEmojiEvents }
            ].map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <IconComponent className="text-lg" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {activeTab === 'matricula' && renderMatricula()}
        {activeTab === 'certificados' && renderCertificados()}
        {activeTab === 'modificacion' && renderModificacion()}
        {activeTab === 'grado' && renderTramitesGrado()}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas Ayuda con tus Trámites?</h2>
          <p className="text-xl mb-8 opacity-90">
            Nuestro equipo administrativo está disponible para asistirte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('mailto:tramites.posgrado@unmsm.edu.pe?subject=Consulta sobre trámites', '_blank')}
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Enviar Email
            </button>
            <button 
              onClick={() => window.open('https://wa.me/51965229338?text=Hola,%20necesito%20información%20sobre%20trámites%20de%20posgrado', '_blank')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Consultar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TramitesPage;