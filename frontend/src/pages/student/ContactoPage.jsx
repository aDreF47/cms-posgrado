import React, { useState } from 'react';
import { 
  MdEmail, 
  MdPhone, 
  MdLocationOn, 
  MdAccessTime,
  MdPerson,
  MdSchool,
  MdSend,
  MdInfo,
  MdQuestionAnswer,
  MdDownload,
  MdDirections,
  MdSchedule,
  MdClose
} from 'react-icons/md';
import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactoPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  // Estados para el modal
  const [showSendModal, setShowSendModal] = useState(false);
  const [formDataToSend, setFormDataToSend] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validaciones
    if (!formData.nombre || !formData.email || !formData.asunto || !formData.mensaje) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    // Guardar datos y mostrar modal
    setFormDataToSend(formData);
    setShowSendModal(true);
  };

  const enviarPorEmail = () => {
    if (!formDataToSend) return;
    
    const emailSubject = `Consulta Web - ${formDataToSend.asunto} - ${formDataToSend.nombre}`;
    const emailBody = `
CONSULTA DESDE SITIO WEB OFICIAL
===============================

👤 Nombre: ${formDataToSend.nombre}
📧 Email: ${formDataToSend.email}
📱 Teléfono: ${formDataToSend.telefono || 'No proporcionado'}
📋 Asunto: ${formDataToSend.asunto}

💬 CONSULTA:
${formDataToSend.mensaje}

📅 Enviado: ${new Date().toLocaleString('es-PE')}
    `.trim();

    const mailtoLink = `mailto:upg.educacion@unmsm.edu.pe?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    cerrarModalYLimpiar();
  };

  const enviarPorWhatsApp = () => {
    if (!formDataToSend) return;
    
    const mensaje = `🎓 *CONSULTA POSGRADO EDUCACIÓN*

👤 *Nombre:* ${formDataToSend.nombre}
📧 *Email:* ${formDataToSend.email}
📱 *Teléfono:* ${formDataToSend.telefono || 'No proporcionado'}
📋 *Asunto:* ${formDataToSend.asunto}

💬 *Consulta:*
${formDataToSend.mensaje}

📅 *Fecha:* ${new Date().toLocaleString('es-PE')}`;

    const whatsappLink = `https://wa.me/51924400900?text=${encodeURIComponent(mensaje)}`;
    
    // Intentar abrir en nueva ventana
    const ventana = window.open(whatsappLink, '_blank');
    
    // Si no se abre, usar location.href como fallback
    if (!ventana) {
      window.location.href = whatsappLink;
    }
    
    cerrarModalYLimpiar();
  };

  const cerrarModalYLimpiar = () => {
    setShowSendModal(false);
    setFormDataToSend(null);
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    });
  };

  const contactInfo = [
    {
      icon: MdEmail,
      title: 'Correo Electrónico',
      primary: 'upg.educacion@unmsm.edu.pe',
      secondary: 'admisionupg.fe@unmsm.edu.pe',
      description: 'Para consultas generales y admisión',
      color: 'bg-blue-500'
    },
    {
      icon: MdPhone,
      title: 'Teléfonos',
      primary: '(01) 619-7000 Anexo 2624',
      secondary: 'WhatsApp: 924-400-900',
      description: 'Atención telefónica y WhatsApp',
      color: 'bg-green-500'
    },
    {
      icon: MdLocationOn,
      title: 'Dirección',
      primary: 'Av. Carlos Germán Amezaga #375',
      secondary: 'Cercado de Lima, Ciudad Universitaria',
      description: 'Facultad de Educación - UNMSM',
      color: 'bg-orange-500'
    },
    {
      icon: MdAccessTime,
      title: 'Horario de Atención',
      primary: 'Lunes a Viernes',
      secondary: '8:00 AM - 1:00 PM | 2:00 PM - 3:45 PM',
      description: 'Atención presencial y virtual',
      color: 'bg-purple-500'
    }
  ];

  const autoridades = [
    {
      nombre: 'Dr. Damián Raúl Islas Mondragón',
      cargo: 'Decano de la Facultad de Educación',
      email: 'decano.educacion@unmsm.edu.pe',
      telefono: '619-7000 Anexo 3021',
      horario: 'Lunes a Viernes: 9:00 AM - 1:00 PM',
      icon: MdSchool
    },
    {
      nombre: 'Dr. Miguel Inga Arias',
      cargo: 'Director de la Unidad de Posgrado',
      email: 'postgrado.educacion@unmsm.edu.pe',
      telefono: '619-7000 Anexo 3025',
      horario: 'Lunes a Viernes: 8:00 AM - 12:00 PM',
      icon: MdPerson
    }
  ];

  const quickActions = [
    {
      title: 'Consultar Admisión',
      description: 'Información sobre procesos de admisión 2025-II',
      icon: MdInfo,
      action: 'https://wa.me/51924400900?text=Hola,%20necesito%20información%20sobre%20admisión',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      title: 'Agendar Cita',
      description: 'Solicitar reunión con coordinadores',
      icon: MdSchedule,
      action: 'mailto:upg.educacion@unmsm.edu.pe?subject=Solicitud%20de%20Cita',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      title: 'Descargar Guías',
      description: 'Documentos y formularios oficiales',
      icon: MdDownload,
      action: '#',
      color: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: 'Ubicación',
      description: 'Cómo llegar a la facultad',
      icon: MdDirections,
      action: 'https://maps.google.com/?q=Facultad+Educacion+UNMSM',
      color: 'bg-orange-600 hover:bg-orange-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#880E1F] via-[#6B0F1A] to-[#4A0C11] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-30">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contacto</h1>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Estamos aquí para apoyarte en tu camino hacia la excelencia académica. 
              Contacta con la Unidad de Posgrado de la Facultad de Educación.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                📧 Respuesta en 24 horas
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                📞 Atención inmediata
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                🎓 Asesoría especializada
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Información de Contacto Principal */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 group">
                <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                <p className="text-gray-800 font-semibold mb-1">{info.primary}</p>
                <p className="text-gray-600 mb-3">{info.secondary}</p>
                <p className="text-sm text-gray-500">{info.description}</p>
              </div>
            );
          })}
        </div>

        {/* Acciones Rápidas */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Acciones Rápidas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Selecciona la opción que mejor se adapte a tu consulta
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <a
                  key={index}
                  href={action.action}
                  target={action.action.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className={`${action.color} text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg`}
                >
                  <div className="text-center">
                    <IconComponent className="text-3xl mb-4 mx-auto" />
                    <h3 className="font-bold text-lg mb-2">{action.title}</h3>
                    <p className="text-sm opacity-90">{action.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Formulario de Contacto y Autoridades */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Formulario */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Envíanos tu Consulta</h2>
              <p className="text-gray-600">Completa el formulario y te responderemos pronto</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto *
                </label>
                <select
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="admision">Proceso de Admisión</option>
                  <option value="matricula">Matrícula y Trámites</option>
                  <option value="academico">Información Académica</option>
                  <option value="financiero">Información Financiera</option>
                  <option value="becas">Becas y Financiamiento</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-vertical"
                  placeholder="Describe tu consulta detalladamente..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#880E1F] to-[#6B0F1A] text-white py-4 px-6 rounded-lg font-semibold hover:from-[#6B0F1A] hover:to-[#4A0C11] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
              >
                <MdSend className="text-lg" />
                Enviar Consulta
              </button>
            </form>
          </div>

          {/* Autoridades */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Autoridades</h2>
              <p className="text-gray-600">Contacta directamente con nuestras autoridades</p>
            </div>
            
            {autoridades.map((autoridad, index) => {
              const IconComponent = autoridad.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#880E1F] to-[#6B0F1A] rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-2xl text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">{autoridad.nombre}</h3>
                      <p className="text-[#880E1F] font-medium mb-3">{autoridad.cargo}</p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <MdEmail className="text-blue-600" />
                          <span className="text-gray-700">{autoridad.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MdPhone className="text-green-600" />
                          <span className="text-gray-700">{autoridad.telefono}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MdAccessTime className="text-orange-600" />
                          <span className="text-gray-700">{autoridad.horario}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex gap-2">
                        <a
                          href={`mailto:${autoridad.email}`}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                        >
                          Enviar Email
                        </a>
                        <a
                          href={`tel:+51${autoridad.telefono.replace(/\D/g, '')}`}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                        >
                          Llamar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="bg-gradient-to-r from-[#880E1F] to-[#6B0F1A] rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Síguenos en Redes Sociales</h2>
          <p className="text-xl mb-8 opacity-90">
            Mantente informado sobre noticias, eventos y oportunidades académicas
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.facebook.com/PosgradoEducacionUNMSM/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-4 rounded-xl transition-all duration-300 group"
            >
              <FaFacebookF className="text-2xl group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="font-semibold">Facebook</p>
                <p className="text-sm opacity-75">2,462 seguidores</p>
              </div>
            </a>
            
            <a
              href="https://x.com/PosgradoUNMSM"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-4 rounded-xl transition-all duration-300 group"
            >
              <FaTwitter className="text-2xl group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="font-semibold">Twitter</p>
                <p className="text-sm opacity-75">Noticias oficiales</p>
              </div>
            </a>
            
            <a
              href="https://www.instagram.com/posgrado.unmsm/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-4 rounded-xl transition-all duration-300 group"
            >
              <FaInstagram className="text-2xl group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="font-semibold">Instagram</p>
                <p className="text-sm opacity-75">Vida universitaria</p>
              </div>
            </a>
            
            <a
              href="https://wa.me/51924400900?text=Hola,%20necesito%20información%20sobre%20el%20posgrado"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-600 hover:bg-green-500 px-6 py-4 rounded-xl transition-all duration-300 group"
            >
              <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <p className="font-semibold">WhatsApp</p>
                <p className="text-sm opacity-75">Chat directo</p>
              </div>
            </a>
          </div>
        </div>

        {/* Información Adicional */}
        <div className="mt-16 bg-gray-100 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">💡 Consejos para tu Consulta</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">📝 Sé Específico</h4>
                <p className="text-sm text-gray-600">
                  Incluye detalles relevantes sobre tu consulta para una respuesta más precisa.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">⏱️ Tiempo de Respuesta</h4>
                <p className="text-sm text-gray-600">
                  Respondemos en 24-48 horas. Para urgencias, usa WhatsApp o llama directamente.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">📁 Adjunta Documentos</h4>
                <p className="text-sm text-gray-600">
                  Si tienes documentos relevantes, menciónalos en tu mensaje o envíalos por email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de opciones de envío */}
      {showSendModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
            {/* Botón cerrar */}
            <button
              onClick={() => setShowSendModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <MdClose className="text-xl text-gray-600" />
            </button>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">¿Cómo deseas enviar tu consulta?</h3>
              <p className="text-gray-600">Elige la opción que prefieras</p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={enviarPorEmail}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl transition-colors flex items-center gap-3 shadow-lg"
              >
                <MdEmail className="text-2xl" />
                <div className="text-left">
                  <p className="font-semibold">Enviar por Email</p>
                  <p className="text-sm opacity-90">Se abrirá tu cliente de correo</p>
                </div>
              </button>
              
              <button
                onClick={enviarPorWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl transition-colors flex items-center gap-3 shadow-lg"
              >
                <FaWhatsapp className="text-2xl" />
                <div className="text-left">
                  <p className="font-semibold">Enviar por WhatsApp</p>
                  <p className="text-sm opacity-90">Mensaje directo al equipo</p>
                </div>
              </button>
              
              <button
                onClick={() => setShowSendModal(false)}
                className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 p-3 rounded-xl transition-colors font-medium"
              >
                Cancelar
              </button>
            </div>

            {/* Información adicional */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                📱 <strong>WhatsApp:</strong> 924-400-900<br />
                📧 <strong>Email:</strong> upg.educacion@unmsm.edu.pe
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactoPage;