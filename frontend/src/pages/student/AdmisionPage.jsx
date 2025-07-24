import React, { useState } from 'react';
import { enrollmentProcess } from '../../data/mockData';

const AdmisionPage = () => {
  const [activeTab, setActiveTab] = useState('cronograma');

  // Información oficial de UNMSM 2025-II
  const programasDisponibles = [
    {
      id: 1,
      nombre: "Maestría Profesional en Didáctica de la comunicación e innovación",
      modalidad: "Semipresencial",
      duracion: "1 año (2 semestres)",
      vacantes: 50,
      requisitos: ["Grado de Bachiller en Educación o afines", "Certificado SUNEDU", "3 años de experiencia docente"]
    },
    {
      id: 2,
      nombre: "Maestría Profesional en didáctica en la matemática",
      modalidad: "Semipresencial", 
      duracion: "1 año (2 semestres)",
      vacantes: 40,
      requisitos: ["Grado de Bachiller en Matemática, Educación Matemática o afines", "Certificado SUNEDU", "3 años de experiencia docente"]
    },
    {
      id: 3,
      nombre: "Maestría en Educación con mención en Gestión de la Educación",
      modalidad: "Semipresencial y presencial",
      duracion: "2 años (4 semestres)",
      vacantes: 50,
      requisitos: ["Grado de Bachiller en Educación o afines", "Certificado SUNEDU", "2 años de experiencia en el sector educativo"]
    },
    {
      id: 4,
      nombre: "Maestría en Educación con mención en Docencia Universitaria",
      modalidad: "Semipresencial y presencial",
      duracion: "2 años (4 semestres)",
      vacantes: 45,
      requisitos: ["Grado de Bachiller en cualquier especialidad", "Certificado SUNEDU", "Experiencia en docencia universitaria"]
    },
    {
      id: 5,
      nombre: "Maestría en Educación con mención en Evaluación y Acreditación de la Calidad de la Educación",
      modalidad: "Semipresencial",
      duracion: "2 años (4 semestres)",
      vacantes: 30,
      requisitos: ["Grado de Bachiller en Educación o afines", "Certificado SUNEDU", "Experiencia en evaluación educativa"]
    },
    {
      id: 6,
      nombre: "Doctorado en Educación y Docencia Universitaria",
      modalidad: "Presencial",
      duracion: "3 años (6 semestres)",
      vacantes: 40,
      requisitos: ["Grado de Maestro en Educación o afines", "Certificado SUNEDU", "Proyecto de investigación"]
    }
  ];

  const documentosRequeridos = [
    {
      documento: "Solicitud de Inscripción",
      original: true,
      copia: false,
      detalle: "Formato oficial de la Unidad de Posgrado, debidamente llenado y firmado"
    },
    {
      documento: "Documento Nacional de Identidad (DNI)",
      original: false,
      copia: true,
      detalle: "Copia legalizada vigente"
    },
    {
      documento: "Grado de Bachiller",
      original: false,
      copia: true,
      detalle: "Copia legalizada del diploma de Bachiller"
    },
    {
      documento: "Certificado de Estudios de Pregrado",
      original: false,
      copia: true,
      detalle: "Certificado oficial de estudios universitarios completos"
    },
    {
      documento: "Constancia SUNEDU",
      original: false,
      copia: true,
      detalle: "Certificación de estudios superiores emitida por SUNEDU"
    },
    {
      documento: "Certificado de Idioma Extranjero",
      original: false,
      copia: true,
      detalle: "Nivel intermedio (Inglés, Francés, Italiano o Portugués) - Solo para Doctorado"
    },
    {
      documento: "Constancia de Trabajo",
      original: false,
      copia: true,
      detalle: "Certificado de experiencia laboral en el área educativa"
    },
    {
      documento: "Fotografías",
      original: true,
      copia: false,
      detalle: "4 fotografías tamaño carnet, fondo blanco, recientes"
    },
    {
      documento: "Comprobante de Pago",
      original: true,
      copia: false,
      detalle: "Voucher de pago por derecho de inscripción"
    }
  ];

  const costosInscripcion = {
    maestria: {
      inscripcion: "S/. 350.00",
      examenes: "S/. 200.00",
      total: "S/. 550.00"
    },
    doctorado: {
      inscripcion: "S/. 400.00", 
      examenes: "S/. 250.00",
      total: "S/. 650.00"
    }
  };

  const formasPago = [
    {
      metodo: "San Market UNMSM",
      descripcion: "Pago presencial en campus universitario",
      horario: "Lunes a Viernes: 8:00 AM - 4:00 PM"
    },
    {
      metodo: "Banco de Crédito del Perú (BCP)",
      descripcion: "Transferencia o depósito bancario",
      cuenta: "Cuenta Corriente: 194-1234567-0-12"
    },
    // {
    //   metodo: "Yape BCP",
    //   descripcion: "Pago móvil a través de aplicación Yape",
    //   numero: "965-229-338"
    // }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'active': return 'bg-[#A41E22]';
      case 'pending': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getStatusBorderColor = (status) => {
    switch (status) {
      case 'completed': return 'border-green-500';
      case 'active': return 'border-[#A41E22]';
      case 'pending': return 'border-gray-400';
      default: return 'border-gray-400';
    }
  };

  const renderCronograma = () => (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Cronograma de Admisión 2025-II</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Proceso de Admisión para programas de Maestría y Doctorado en Educación - UNMSM
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-28 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>
            <div className="grid grid-cols-4 gap-8 relative z-10">
              {enrollmentProcess.map((step) => (
                <div key={step.id} className="relative">
                  <div className={`bg-white rounded-xl p-6 border-2 ${getStatusBorderColor(step.status)} shadow-lg h-64 flex flex-col justify-between transition-all duration-300 hover:shadow-xl`}>
                    <div className="text-center">
                      <div className={`w-16 h-16 ${getStatusColor(step.status)} rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-lg`}>
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-[#A41E22] font-medium text-sm mb-2">{step.date}</p>
                      <p className="text-gray-500 text-xs mb-3">Duración: {step.duration}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 ${getStatusColor(step.status)} rounded-full border-4 border-white shadow-lg z-20`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          {enrollmentProcess.map((step) => (
            <div key={step.id} className="relative mb-12 last:mb-0">
              <div className="flex items-start">
                <div className={`relative z-10 w-16 h-16 ${getStatusColor(step.status)} rounded-full flex items-center justify-center text-white text-xl shadow-lg flex-shrink-0`}>
                  {step.icon}
                </div>
                <div className="ml-6 flex-1">
                  <div className={`bg-white rounded-xl p-6 border-2 ${getStatusBorderColor(step.status)} shadow-lg`}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-[#A41E22] font-medium text-sm mb-1">{step.date}</p>
                    <p className="text-gray-500 text-sm mb-3">Duración: {step.duration}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.description}</p>
                    {step.requirements && (
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Requisitos:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {step.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-[#A41E22] mr-2">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leyenda */}
      <div className="flex justify-center space-x-8 mt-12">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-green-600 font-medium">Completado</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-[#A41E22] rounded-full"></div>
          <span className="text-sm text-[#A41E22] font-medium">En proceso</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <span className="text-sm text-gray-400 font-medium">Pendiente</span>
        </div>
      </div>
    </div>
  );

  const renderRequisitos = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Requisitos de Postulación</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Requisitos específicos según el programa académico al que deseas postular
        </p>
      </div>

      {/* Programas Disponibles */}
      <div className="grid gap-6">
        {programasDisponibles.map((programa) => (
          <div key={programa.id} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{programa.nombre}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <span className="text-[#A41E22] mr-2">📚</span>
                    <span className="text-sm"><strong>Modalidad:</strong> {programa.modalidad}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-[#A41E22] mr-2">⏱️</span>
                    <span className="text-sm"><strong>Duración:</strong> {programa.duracion}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-[#A41E22] mr-2">👥</span>
                    <span className="text-sm"><strong>Vacantes:</strong> {programa.vacantes}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Requisitos específicos:</h4>
                  <ul className="space-y-1">
                    {programa.requisitos.map((requisito, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="text-[#A41E22] mr-2 mt-1">•</span>
                        {requisito}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Documentos Requeridos */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Documentos Requeridos</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <thead className="bg-[#A41E22] text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Documento</th>
                <th className="px-6 py-4 text-center font-semibold">Original</th>
                <th className="px-6 py-4 text-center font-semibold">Copia Legalizada</th>
                <th className="px-6 py-4 text-left font-semibold">Detalle</th>
              </tr>
            </thead>
            <tbody>
              {documentosRequeridos.map((doc, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                  <td className="px-6 py-4 font-medium text-gray-800">{doc.documento}</td>
                  <td className="px-6 py-4 text-center">
                    {doc.original ? (
                      <span className="text-green-600 text-xl">✓</span>
                    ) : (
                      <span className="text-gray-400 text-xl">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {doc.copia ? (
                      <span className="text-green-600 text-xl">✓</span>
                    ) : (
                      <span className="text-gray-400 text-xl">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{doc.detalle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderInscripcion = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Proceso de Inscripción</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Guía paso a paso para completar tu inscripción al proceso de admisión
        </p>
      </div>

      {/* Costos de Inscripción */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="text-2xl mr-3">🎓</span>
            Programas de Maestría
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Derecho de inscripción:</span>
              <span className="font-semibold text-[#A41E22]">{costosInscripcion.maestria.inscripcion}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Exámenes y evaluación:</span>
              <span className="font-semibold text-[#A41E22]">{costosInscripcion.maestria.examenes}</span>
            </div>
            <div className="flex justify-between items-center py-2 bg-gray-50 px-3 rounded">
              <span className="font-semibold text-gray-800">Total:</span>
              <span className="font-bold text-xl text-[#A41E22]">{costosInscripcion.maestria.total}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="text-2xl mr-3">👨‍🎓</span>
            Programa de Doctorado
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Derecho de inscripción:</span>
              <span className="font-semibold text-[#A41E22]">{costosInscripcion.doctorado.inscripcion}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Exámenes y evaluación:</span>
              <span className="font-semibold text-[#A41E22]">{costosInscripcion.doctorado.examenes}</span>
            </div>
            <div className="flex justify-between items-center py-2 bg-gray-50 px-3 rounded">
              <span className="font-semibold text-gray-800">Total:</span>
              <span className="font-bold text-xl text-[#A41E22]">{costosInscripcion.doctorado.total}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Formas de Pago */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Formas de Pago</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {formasPago.map((pago, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">{pago.metodo}</h4>
              <p className="text-gray-600 text-sm mb-3">{pago.descripcion}</p>
              {pago.horario && (
                <p className="text-sm text-[#A41E22] font-medium">
                  <span className="text-gray-600">Horario:</span> {pago.horario}
                </p>
              )}
              {pago.cuenta && (
                <p className="text-sm text-[#A41E22] font-medium">
                  <span className="text-gray-600">Cuenta:</span> {pago.cuenta}
                </p>
              )}
              {pago.numero && (
                <p className="text-sm text-[#A41E22] font-medium">
                  <span className="text-gray-600">Número:</span> {pago.numero}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Pasos del Proceso */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Pasos para la Inscripción</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              paso: 1,
              titulo: "Pago de Inscripción",
              descripcion: "Realizar el pago correspondiente según el programa elegido",
              icono: "💳"
            },
            {
              paso: 2,
              titulo: "Documentos",
              descripcion: "Reunir todos los documentos requeridos según el programa",
              icono: "📄"
            },
            {
              paso: 3,
              titulo: "Envío Virtual",
              descripcion: "Enviar expediente completo al email oficial de la Unidad",
              icono: "📧"
            },
            {
              paso: 4,
              titulo: "Confirmación",
              descripcion: "Recibir confirmación y código de postulante",
              icono: "✅"
            }
          ].map((paso, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#A41E22] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-lg">
                {paso.icono}
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Paso {paso.paso}: {paso.titulo}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">{paso.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderExamen = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Examen de Aptitud</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Información sobre la evaluación de conocimientos para ingreso a programas de posgrado
        </p>
      </div>

      {/* Tipos de Examen */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="text-2xl mr-3">📝</span>
            Examen para Maestría
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Áreas de Evaluación:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#A41E22] mr-2">•</span>
                  Conocimientos específicos del área de especialización
                </li>
                <li className="flex items-start">
                  <span className="text-[#A41E22] mr-2">•</span>
                  Metodología de la investigación
                </li>
                <li className="flex items-start">
                  <span className="text-[#A41E22] mr-2">•</span>
                  Comprensión lectora y redacción académica
                </li>
                <li className="flex items-start">
                  <span className="text-[#A41E22] mr-2">•</span>
                  Cultura general en educación
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Modalidad:</strong> Presencial<br/>
                <strong>Duración:</strong> 3 horas<br/>
                <strong>Puntaje mínimo:</strong> 14/20
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="text-2xl mr-3">🎓</span>
            Examen para Doctorado
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Áreas de Evaluación:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#A41E22] mr-2">•</span>
                  Epistemología y filosofía de la educación
                </li>
                <li className="flex items-start">
                  <span className="text-[#A41E22] mr-2">•</span>
                  Metodología de investigación científica
                </li>
                <li className="flex items-start">
                  <span className="text-[#A41E22] mr-2">•</span>
                  Idioma extranjero (comprensión lectora)
                </li>
                <li className="flex items-start">
                  <span className="text-[#A41E22] mr-2">•</span>
                  Conocimientos avanzados en educación
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Modalidad:</strong> Presencial<br/>
                <strong>Duración:</strong> 4 horas<br/>
                <strong>Puntaje mínimo:</strong> 15/20
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Temario General */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Temario General</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              area: "Fundamentos de la Educación",
              temas: [
                "Historia de la educación peruana",
                "Teorías pedagógicas contemporáneas", 
                "Psicología educativa",
                "Sociología de la educación"
              ]
            },
            {
              area: "Metodología de Investigación",
              temas: [
                "Paradigmas de investigación",
                "Métodos cuantitativos y cualitativos",
                "Diseño de proyectos de investigación",
                "Estadística aplicada a la educación"
              ]
            },
            {
              area: "Gestión Educativa",
              temas: [
                "Planificación estratégica",
                "Liderazgo pedagógico",
                "Evaluación institucional",
                "Calidad educativa"
              ]
            },
            {
              area: "Currículo y Didáctica",
              temas: [
                "Diseño curricular",
                "Estrategias de enseñanza",
                "Evaluación del aprendizaje",
                "Tecnología educativa"
              ]
            },
            {
              area: "Marco Legal Educativo",
              temas: [
                "Ley General de Educación",
                "Ley Universitaria",
                "Normativas de educación superior",
                "Derechos educativos"
              ]
            },
            {
              area: "Actualidad Educativa",
              temas: [
                "Reforma educativa peruana",
                "Educación post-pandemia",
                "Inclusión educativa",
                "Internacionalización"
              ]
            }
          ].map((seccion, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-[#A41E22] mb-3">{seccion.area}</h4>
              <ul className="space-y-2">
                {seccion.temas.map((tema, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="text-[#A41E22] mr-2 mt-1">•</span>
                    {tema}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Recomendaciones de Estudio */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Recomendaciones de Estudio</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <span className="text-xl mr-2">📚</span>
              Bibliografía Recomendada
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="border-l-4 border-[#A41E22] pl-3">
                <strong>Metodología de la Investigación:</strong><br/>
                Hernández, R., Fernández, C., & Baptista, P. (2014)
              </li>
              <li className="border-l-4 border-[#A41E22] pl-3">
                <strong>Fundamentos de Educación:</strong><br/>
                Ministerio de Educación (2020). Currículo Nacional
              </li>
              <li className="border-l-4 border-[#A41E22] pl-3">
                <strong>Gestión Educativa:</strong><br/>
                UNESCO (2019). Liderazgo Escolar en América Latina
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <span className="text-xl mr-2">💡</span>
              Consejos para el Examen
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-[#A41E22] mr-2 mt-1">•</span>
                Revisar la normativa educativa vigente
              </li>
              <li className="flex items-start">
                <span className="text-[#A41E22] mr-2 mt-1">•</span>
                Practicar redacción académica y ensayos
              </li>
              <li className="flex items-start">
                <span className="text-[#A41E22] mr-2 mt-1">•</span>
                Mantenerse actualizado en tendencias educativas
              </li>
              <li className="flex items-start">
                <span className="text-[#A41E22] mr-2 mt-1">•</span>
                Realizar simulacros de examen
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderResultados = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Resultados de Admisión</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Información sobre publicación de resultados y próximos pasos para admitidos
        </p>
      </div>

      {/* Fechas de Publicación */}
      <div className="bg-gradient-to-r from-[#A41E22] to-red-700 rounded-xl text-white p-8 text-center">
        <h3 className="text-2xl font-semibold mb-4">Publicación de Resultados</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Resultados Preliminares</h4>
            <p className="text-3xl font-bold mb-2">28 Agosto</p>
            <p className="text-sm opacity-90">Publicación en portal web y sede universitaria</p>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-2">Resultados Finales</h4>
            <p className="text-3xl font-bold mb-2">05 Septiembre</p>
            <p className="text-sm opacity-90">Tras evaluación de reconsideraciones</p>
          </div>
        </div>
      </div>

      {/* Proceso de Evaluación */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Evaluación de Expediente</h3>
          <p className="text-sm text-gray-600">Revisión de documentos y cumplimiento de requisitos</p>
          <p className="text-lg font-bold text-[#A41E22] mt-2">40%</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📝</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Examen de Conocimientos</h3>
          <p className="text-sm text-gray-600">Evaluación escrita de conocimientos específicos</p>
          <p className="text-lg font-bold text-[#A41E22] mt-2">60%</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🏆</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Puntaje Final</h3>
          <p className="text-sm text-gray-600">Suma ponderada de ambas evaluaciones</p>
          <p className="text-lg font-bold text-[#A41E22] mt-2">14/20 mín.</p>
        </div>
      </div>

      {/* Próximos Pasos para Admitidos */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Próximos Pasos para Admitidos</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <span className="text-xl mr-2">✅</span>
              Si Resultaste Admitido
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-[#A41E22] mr-2 mt-1">1.</span>
                <div>
                  <strong>Ratificación de matrícula</strong><br/>
                  Confirmar tu ingreso en fechas indicadas
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#A41E22] mr-2 mt-1">2.</span>
                <div>
                  <strong>Pago de matrícula</strong><br/>
                  Realizar pago correspondiente al primer ciclo
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#A41E22] mr-2 mt-1">3.</span>
                <div>
                  <strong>Inducción académica</strong><br/>
                  Participar en charlas de inducción
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#A41E22] mr-2 mt-1">4.</span>
                <div>
                  <strong>Inicio de clases</strong><br/>
                  2 de octubre de 2025
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <span className="text-xl mr-2">📋</span>
              Opciones si no Ingresaste
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="text-[#A41E22] mr-2 mt-1">1.</span>
                <div>
                  <strong>Reconsideración</strong><br/>
                  Solicitar revisión de evaluación (72 horas)
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#A41E22] mr-2 mt-1">2.</span>
                <div>
                  <strong>Próximo proceso</strong><br/>
                  Postular al siguiente proceso 2026-I
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#A41E22] mr-2 mt-1">3.</span>
                <div>
                  <strong>Retroalimentación</strong><br/>
                  Solicitar informe de desempeño
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#A41E22] mr-2 mt-1">4.</span>
                <div>
                  <strong>Preparación</strong><br/>
                  Reforzar áreas de mejora identificadas
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contacto para Consultas */}
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">¿Tienes Consultas?</h3>
        <p className="text-gray-600 mb-6">Contacta a la Unidad de Posgrado para resolver tus dudas</p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-[#A41E22]">📧</span>
            <span className="text-sm">posgrado.educacion@unmsm.edu.pe</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-[#A41E22]">📞</span>
            <span className="text-sm">(01) 619-7000 ext. 3021</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-[#A41E22]">💬</span>
            <span className="text-sm">WhatsApp: 965-229-338</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header de la página */}
      <div className="bg-gradient-to-r from-[#A41E22] to-red-700 text-white py-30">
        <div className="max-w-6xl mx-auto px- text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Admisión Posgrado 2025-II
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Facultad de Educación - Universidad Nacional Mayor de San Marcos
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="font-semibold">Inscripciones:</span> 15 Jul - 08 Ago
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="font-semibold">Examen:</span> 20 - 25 Agosto
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="font-semibold">Resultados:</span> 05 Septiembre
            </div>
          </div>
        </div>
      </div>

      {/* Navegación por pestañas */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'cronograma', label: 'Cronograma', icon: '📅' },
              { id: 'requisitos', label: 'Requisitos', icon: '📋' },
              { id: 'inscripcion', label: 'Inscripción', icon: '✍️' },
              { id: 'examen', label: 'Examen', icon: '📝' },
              { id: 'resultados', label: 'Resultados', icon: '🏆' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#A41E22] text-[#A41E22]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {activeTab === 'cronograma' && renderCronograma()}
        {activeTab === 'requisitos' && renderRequisitos()}
        {activeTab === 'inscripcion' && renderInscripcion()}
        {activeTab === 'examen' && renderExamen()}
        {activeTab === 'resultados' && renderResultados()}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#A41E22] to-red-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Postular?</h2>
          <p className="text-xl mb-8 opacity-90">
            Comienza tu proceso de admisión a los programas de posgrado de la UNMSM
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://posgradoeducacion.unmsm.edu.pe/admision', '_blank')}
              className="bg-white text-[#A41E22] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Iniciar Inscripción
            </button>
            <button 
              onClick={() => window.open('https://wa.me/51965229338?text=Hola,%20necesito%20información%20sobre%20admisión%20posgrado', '_blank')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#A41E22] transition-colors"
            >
              Consultar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmisionPage;