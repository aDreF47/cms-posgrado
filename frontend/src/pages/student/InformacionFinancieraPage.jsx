import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  MdAccountBalance, 
  MdPayment, 
  MdCardGiftcard, 
  MdCalendarToday,
  MdAttachMoney,
  MdCreditCard,
  MdAccountBalanceWallet,
  MdQrCode,
  MdSchool,
  MdBusinessCenter,
  MdSavings,
  MdTrendingUp,
  MdInfo,
  MdCheckCircle,
  MdWarning,
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdAccessTime,
  MdDownload,
  MdPrint
} from 'react-icons/md';
import { 
  FaWhatsapp, 
  FaUniversity, 
  FaCreditCard,
  FaPaypal,
  FaMobileAlt
} from 'react-icons/fa';

const InformacionFinancieraPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('tarifarios');

  // Mapear rutas a tabs
  const getTabFromPath = (path) => {
    if (path.includes('/oficiales')) return 'tarifarios';
    if (path.includes('/pagos')) return 'pagos';
    if (path.includes('/becas')) return 'becas';
    if (path.includes('/calendario')) return 'calendario';
    return 'tarifarios'; // default
  };

  // Manejar navegación por hash URL y ruta
  useEffect(() => {
    // Primero verificar si hay hash
    const hash = window.location.hash.substring(1);
    if (hash && ['tarifarios', 'pagos', 'becas', 'calendario'].includes(hash)) {
      setActiveTab(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Si no hay hash, usar la ruta para determinar el tab
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

  // Datos oficiales UNMSM 2025-II
  const tarifarios = {
    maestria: {
      inscripcion: 350,
      examen: 200,
      matricula: 450,
      pension: 680,
      ratificacion: 50,
      certificados: 35,
      constancias: 25,
      diploma: 280,
      total_semestre: 4080 // 6 pensiones
    },
    doctorado: {
      inscripcion: 400,
      examen: 250,
      matricula: 550,
      pension: 850,
      ratificacion: 60,
      certificados: 40,
      constancias: 30,
      diploma: 350,
      total_semestre: 5100 // 6 pensiones
    }
  };

  const formasPago = [
    {
      id: 1,
      metodo: "San Market UNMSM",
      descripcion: "Plataforma oficial de pagos de la universidad",
      icono: MdAccountBalance,
      ventajas: [
        "Disponible 24/7",
        "Comprobante inmediato",
        "Verificación automática",
        "Historial de pagos"
      ],
      tipos: ["Tarjeta de débito", "Tarjeta de crédito", "Transferencia bancaria"],
      comision: "Sin comisión adicional",
      url: "https://sanmarket.unmsm.edu.pe"
    },
    {
      id: 2,
      metodo: "Banco de Crédito del Perú (BCP)",
      descripcion: "Depósito o transferencia bancaria directa",
      icono: FaUniversity,
      ventajas: [
        "Red nacional de agencias",
        "Agentes BCP disponibles",
        "Transferencias CCI",
        "Banca por Internet"
      ],
      tipos: ["Depósito en ventanilla", "Transferencia CCI", "Banca Digital"],
      cuenta: "194-2468135-0-29",
      cci: "002-194-002468135029-15",
      comision: "Según tarifario BCP"
    },
    {
      id: 3,
      metodo: "Yape BCP",
      descripcion: "Pago móvil rápido y seguro",
      icono: FaMobileAlt,
      ventajas: [
        "Pago instantáneo",
        "Sin comisiones",
        "Confirmación inmediata",
        "Fácil de usar"
      ],
      tipos: ["Yape a número"],
      numero: "965-229-338",
      comision: "Sin comisión",
      limite: "Hasta S/. 500 por operación"
    },
    {
      id: 4,
      metodo: "Agente Bancario",
      descripción: "Pago en agentes autorizados",
      icono: MdBusinessCenter,
      ventajas: [
        "Ubicaciones cercanas",
        "Horario extendido",
        "Pago en efectivo",
        "Comprobante físico"
      ],
      tipos: ["Agente Interbank", "Agente BCP", "Agente BBVA"],
      comision: "S/. 3.00 - S/. 5.00"
    }
  ];

  const becasDisponibles = [
    {
      id: 1,
      nombre: "Beca de Excelencia Académica",
      descripcion: "Para estudiantes con promedio ponderado mayor a 16.0",
      descuento: "50%",
      requisitos: [
        "Promedio ponderado ≥ 16.0 en pregrado",
        "Carta de recomendación académica",
        "Ensayo de motivación",
        "Situación socioeconómica justificada"
      ],
      beneficios: ["50% descuento en pensiones", "Exoneración de matrícula", "Certificados gratuitos"],
      plazo: "Hasta el 25 de julio 2025",
      vacantes: 15,
      icono: MdSchool
    },
    {
      id: 2,
      nombre: "Beca por Mérito Profesional",
      descripcion: "Para profesionales destacados en el sector educativo",
      descuento: "30%",
      requisitos: [
        "Mínimo 5 años de experiencia docente",
        "Reconocimientos o publicaciones académicas",
        "Carta de la institución empleadora",
        "Proyecto de investigación"
      ],
      beneficios: ["30% descuento en pensiones", "Acceso a biblioteca especializada"],
      plazo: "Hasta el 30 de julio 2025",
      vacantes: 25,
      icono: MdBusinessCenter
    },
    {
      id: 3,
      nombre: "Beca Socioeconómica",
      descripcion: "Para estudiantes en situación económica vulnerable",
      descuento: "40%",
      requisitos: [
        "Declaración jurada de ingresos familiares",
        "Certificado de trabajo o declaración de desempleo",
        "Recibos de servicios básicos",
        "Informe socioeconómico"
      ],
      beneficios: ["40% descuento en pensiones", "Facilidades de pago", "Apoyo académico"],
      plazo: "Hasta el 20 de julio 2025",
      vacantes: 20,
      icono: MdSavings
    }
  ];

  const calendarioPagos = [
    {
      concepto: "Inscripción al Proceso de Admisión",
      fechaInicio: "15 de julio",
      fechaFin: "08 de agosto",
      monto: {
        maestria: 350,
        doctorado: 400
      },
      obligatorio: true,
      descripcion: "Pago requerido para participar en el proceso de admisión"
    },
    {
      concepto: "Examen de Conocimientos",
      fechaInicio: "15 de julio",
      fechaFin: "15 de agosto",
      monto: {
        maestria: 200,
        doctorado: 250
      },
      obligatorio: true,
      descripcion: "Derecho de evaluación y procesamiento de resultados"
    },
    {
      concepto: "Matrícula - Primer Ciclo",
      fechaInicio: "02 de septiembre",
      fechaFin: "13 de septiembre",
      monto: {
        maestria: 450,
        doctorado: 550
      },
      obligatorio: true,
      descripcion: "Matrícula para el primer ciclo académico 2025-II"
    },
    {
      concepto: "Primera Pensión",
      fechaInicio: "16 de septiembre",
      fechaFin: "30 de septiembre",
      monto: {
        maestria: 680,
        doctorado: 850
      },
      obligatorio: true,
      descripcion: "Primera cuota mensual del ciclo académico"
    },
    {
      concepto: "Segunda Pensión",
      fechaInicio: "01 de octubre",
      fechaFin: "31 de octubre",
      monto: {
        maestria: 680,
        doctorado: 850
      },
      obligatorio: true,
      descripcion: "Segunda cuota mensual del ciclo académico"
    },
    {
      concepto: "Tercera Pensión",
      fechaInicio: "01 de noviembre",
      fechaFin: "30 de noviembre",
      monto: {
        maestria: 680,
        doctorado: 850
      },
      obligatorio: true,
      descripcion: "Tercera cuota mensual del ciclo académico"
    }
  ];

  const renderTarifarios = () => (
    <div id="tarifarios" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Tarifarios Oficiales 2025-II</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Costos oficiales aprobados por la Universidad Nacional Mayor de San Marcos para programas de posgrado
        </p>
      </div>

      {/* Comparación de costos */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Maestría */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MdSchool className="text-2xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Programas de Maestría</h3>
            <p className="text-gray-600">Modalidad: Semipresencial</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 flex items-center gap-2">
                <MdAttachMoney className="text-lg text-green-600" />
                Inscripción
              </span>
              <span className="font-semibold text-gray-800">S/. {tarifarios.maestria.inscripcion}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 flex items-center gap-2">
                <MdPayment className="text-lg text-blue-600" />
                Examen
              </span>
              <span className="font-semibold text-gray-800">S/. {tarifarios.maestria.examen}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 flex items-center gap-2">
                <MdAccountBalance className="text-lg text-purple-600" />
                Matrícula
              </span>
              <span className="font-semibold text-gray-800">S/. {tarifarios.maestria.matricula}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 flex items-center gap-2">
                <MdCalendarToday className="text-lg text-orange-600" />
                Pensión mensual
              </span>
              <span className="font-semibold text-gray-800">S/. {tarifarios.maestria.pension}</span>
            </div>
            <div className="flex justify-between items-center py-2 bg-blue-50 px-3 rounded">
              <span className="font-semibold text-gray-800">Total por semestre (6 meses)</span>
              <span className="font-bold text-xl text-blue-600">S/. {tarifarios.maestria.total_semestre}</span>
            </div>
          </div>
        </div>

        {/* Doctorado */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MdSchool className="text-2xl text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Programa de Doctorado</h3>
            <p className="text-gray-600">Modalidad: Presencial</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 flex items-center gap-2">
                <MdAttachMoney className="text-lg text-green-600" />
                Inscripción
              </span>
              <span className="font-semibold text-gray-800">S/. {tarifarios.doctorado.inscripcion}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 flex items-center gap-2">
                <MdPayment className="text-lg text-blue-600" />
                Examen
              </span>
              <span className="font-semibold text-gray-800">S/. {tarifarios.doctorado.examen}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 flex items-center gap-2">
                <MdAccountBalance className="text-lg text-purple-600" />
                Matrícula
              </span>
              <span className="font-semibold text-gray-800">S/. {tarifarios.doctorado.matricula}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600 flex items-center gap-2">
                <MdCalendarToday className="text-lg text-orange-600" />
                Pensión mensual
              </span>
              <span className="font-semibold text-gray-800">S/. {tarifarios.doctorado.pension}</span>
            </div>
            <div className="flex justify-between items-center py-2 bg-purple-50 px-3 rounded">
              <span className="font-semibold text-gray-800">Total por semestre (6 meses)</span>
              <span className="font-bold text-xl text-purple-600">S/. {tarifarios.doctorado.total_semestre}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Otros costos */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Costos Adicionales</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <MdCheckCircle className="text-2xl text-green-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-800 mb-1">Ratificación</h4>
            <p className="text-sm text-gray-600 mb-2">Por ciclo académico</p>
            <p className="font-bold text-gray-800">S/. 50 - S/. 60</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <MdPrint className="text-2xl text-blue-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-800 mb-1">Certificados</h4>
            <p className="text-sm text-gray-600 mb-2">Estudios y notas</p>
            <p className="font-bold text-gray-800">S/. 35 - S/. 40</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <MdDownload className="text-2xl text-orange-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-800 mb-1">Constancias</h4>
            <p className="text-sm text-gray-600 mb-2">Varios tipos</p>
            <p className="font-bold text-gray-800">S/. 25 - S/. 30</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md text-center">
            <MdSchool className="text-2xl text-purple-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-800 mb-1">Diploma</h4>
            <p className="text-sm text-gray-600 mb-2">Grado obtenido</p>
            <p className="font-bold text-gray-800">S/. 280 - S/. 350</p>
          </div>
        </div>
      </div>

      {/* Nota importante */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
        <div className="flex items-start">
          <MdWarning className="text-yellow-600 text-xl mr-3 mt-1" />
          <div>
            <h4 className="font-semibold text-yellow-800 mb-1">Información Importante</h4>
            <p className="text-yellow-700 text-sm">
              Los costos mostrados corresponden al tarifario oficial 2025-II aprobado por el Consejo Universitario. 
              Los precios están sujetos a actualización según normativas universitarias vigentes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFormasPago = () => (
    <div id="pagos" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Formas de Pago</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Múltiples opciones de pago para tu comodidad y seguridad
        </p>
      </div>

      <div className="grid gap-8">
        {formasPago.map((forma) => {
          const IconComponent = forma.icono;
          return (
            <div key={forma.id} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <IconComponent className="text-2xl text-blue-600" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{forma.metodo}</h3>
                  <p className="text-gray-600 mb-4">{forma.descripcion}</p>
                  
                  {forma.cuenta && (
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Cuenta:</strong> {forma.cuenta}
                      </p>
                      {forma.cci && (
                        <p className="text-sm text-gray-700">
                          <strong>CCI:</strong> {forma.cci}
                        </p>
                      )}
                    </div>
                  )}
                  
                  {forma.numero && (
                    <div className="mb-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-700">
                        <strong>Número Yape:</strong> {forma.numero}
                      </p>
                      {forma.limite && (
                        <p className="text-xs text-green-600">{forma.limite}</p>
                      )}
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Ventajas:</h4>
                      <ul className="space-y-1">
                        {forma.ventajas.map((ventaja, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <MdCheckCircle className="text-green-500 mr-2 mt-1 text-xs" />
                            {ventaja}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Tipos de pago:</h4>
                      <ul className="space-y-1">
                        {forma.tipos.map((tipo, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <MdPayment className="text-blue-500 mr-2 mt-1 text-xs" />
                            {tipo}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      <strong>Comisión:</strong> {forma.comision}
                    </span>
                    {forma.url && (
                      <button 
                        onClick={() => window.open(forma.url, '_blank')}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        Ir a plataforma
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Información de contacto para pagos */}
      <div className="bg-blue-50 rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Soporte para Pagos</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <MdPhone className="text-2xl text-blue-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-800 mb-1">Teléfono</h4>
            <p className="text-gray-600 text-sm">(01) 619-7000 ext. 3025</p>
            <p className="text-xs text-gray-500">Lun-Vie: 8:00 AM - 5:00 PM</p>
          </div>
          <div className="text-center">
            <MdEmail className="text-2xl text-blue-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
            <p className="text-gray-600 text-sm">pagos.posgrado@unmsm.edu.pe</p>
            <p className="text-xs text-gray-500">Respuesta en 24 horas</p>
          </div>
          <div className="text-center">
            <FaWhatsapp className="text-2xl text-green-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-800 mb-1">WhatsApp</h4>
            <p className="text-gray-600 text-sm">965-229-338</p>
            <p className="text-xs text-gray-500">Consultas rápidas</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBecas = () => (
    <div id="becas" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Becas y Financiamiento</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Oportunidades de apoyo económico para estudiantes destacados
        </p>
      </div>

      <div className="grid gap-8">
        {becasDisponibles.map((beca) => {
          const IconComponent = beca.icono;
          return (
            <div key={beca.id} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <IconComponent className="text-2xl text-green-600" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{beca.nombre}</h3>
                      <p className="text-gray-600 mb-2">{beca.descripcion}</p>
                    </div>
                    <div className="text-center lg:text-right">
                      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold text-lg">
                        {beca.descuento} OFF
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{beca.vacantes} vacantes</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                        <MdInfo className="text-blue-600" />
                        Requisitos:
                      </h4>
                      <ul className="space-y-2">
                        {beca.requisitos.map((requisito, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <MdCheckCircle className="text-green-500 mr-2 mt-1 text-xs flex-shrink-0" />
                            {requisito}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                        <MdCardGiftcard className="text-purple-600" />
                        Beneficios:
                      </h4>
                      <ul className="space-y-2">
                        {beca.beneficios.map((beneficio, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <MdTrendingUp className="text-purple-500 mr-2 mt-1 text-xs flex-shrink-0" />
                            {beneficio}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                    <div className="flex items-center gap-2">
                      <MdAccessTime className="text-yellow-600" />
                      <span className="font-medium text-yellow-800">Plazo de postulación: {beca.plazo}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Proceso de postulación */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Proceso de Postulación a Becas</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              paso: 1,
              titulo: "Documentación",
              descripcion: "Reunir todos los documentos requeridos según la beca elegida",
              icono: MdDownload
            },
            {
              paso: 2,
              titulo: "Solicitud",
              descripcion: "Completar formulario oficial de postulación",
              icono: MdPayment
            },
            {
              paso: 3,
              titulo: "Evaluación",
              descripcion: "Comité evaluará expedientes según criterios establecidos",
              icono: MdCheckCircle
            },
            {
              paso: 4,
              titulo: "Resultados",
              descripcion: "Publicación de beneficiarios y notificación oficial",
              icono: MdTrendingUp
            }
          ].map((paso) => {
            const IconComponent = paso.icono;
            return (
              <div key={paso.paso} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                  <IconComponent className="text-2xl" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Paso {paso.paso}: {paso.titulo}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">{paso.descripcion}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderCalendario = () => (
    <div id="calendario" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Calendario de Pagos 2025-II</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Fechas importantes y cronograma de pagos para el período académico
        </p>
      </div>

      <div className="space-y-6">
        {calendarioPagos.map((pago, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex-shrink-0">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  pago.obligatorio ? 'bg-red-100' : 'bg-blue-100'
                }`}>
                  <MdCalendarToday className={`text-2xl ${
                    pago.obligatorio ? 'text-red-600' : 'text-blue-600'
                  }`} />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{pago.concepto}</h3>
                    <p className="text-gray-600 mb-2">{pago.descripcion}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <MdAccessTime className="text-green-600" />
                        <strong>Inicio:</strong> {pago.fechaInicio}
                      </span>
                      <span className="flex items-center gap-1">
                        <MdWarning className="text-orange-600" />
                        <strong>Límite:</strong> {pago.fechaFin}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-right">
                    <div className="grid grid-cols-2 gap-4 lg:gap-2">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-xs text-blue-600 font-medium">MAESTRÍA</p>
                        <p className="text-lg font-bold text-blue-800">S/. {pago.monto.maestria}</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="text-xs text-purple-600 font-medium">DOCTORADO</p>
                        <p className="text-lg font-bold text-purple-800">S/. {pago.monto.doctorado}</p>
                      </div>
                    </div>
                    {pago.obligatorio && (
                      <p className="text-xs text-red-600 mt-2 font-medium">PAGO OBLIGATORIO</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recordatorios importantes */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
          <div className="flex items-start">
            <MdWarning className="text-red-600 text-xl mr-3 mt-1" />
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Fechas Límite</h4>
              <p className="text-red-700 text-sm">
                El incumplimiento de las fechas de pago puede resultar en la pérdida de la vacante 
                o la aplicación de intereses moratorios según el reglamento universitario.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
          <div className="flex items-start">
            <MdCheckCircle className="text-green-600 text-xl mr-3 mt-1" />
            <div>
              <h4 className="font-semibold text-green-800 mb-2">Recordatorio</h4>
              <p className="text-green-700 text-sm">
                Guarda todos los comprobantes de pago. Pueden ser solicitados para verificación 
                y trámites administrativos posteriores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header de la página */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Información Financiera 2025-II
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Facultad de Educación - Universidad Nacional Mayor de San Marcos
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="font-semibold">Tarifarios:</span> Oficiales 2025-II
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="font-semibold">Becas:</span> Hasta 50% descuento
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="font-semibold">Pagos:</span> Múltiples opciones
            </div>
          </div>
        </div>
      </div>

      {/* Navegación por pestañas */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'tarifarios', label: 'Tarifarios Oficiales', icon: MdAccountBalance },
              { id: 'pagos', label: 'Formas de Pago', icon: MdPayment },
              { id: 'becas', label: 'Becas y Financiamiento', icon: MdCardGiftcard },
              { id: 'calendario', label: 'Calendario de Pagos', icon: MdCalendarToday }
            ].map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
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
        {activeTab === 'tarifarios' && renderTarifarios()}
        {activeTab === 'pagos' && renderFormasPago()}
        {activeTab === 'becas' && renderBecas()}
        {activeTab === 'calendario' && renderCalendario()}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas Ayuda con los Pagos?</h2>
          <p className="text-xl mb-8 opacity-90">
            Nuestro equipo está listo para asistirte con cualquier consulta financiera
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://sanmarket.unmsm.edu.pe', '_blank')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Ir a San Market
            </button>
            <button 
              onClick={() => window.open('https://wa.me/51965229338?text=Hola,%20necesito%20información%20sobre%20pagos%20de%20posgrado', '_blank')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Consultar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformacionFinancieraPage;