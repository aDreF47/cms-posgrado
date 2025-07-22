import React, { useEffect, useState } from 'react';
import HeroSection from './../../components/student/HeroComponent';
import ProgramCarousel from '../../components/student/ProgramCarousel';
const HomeStudent = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <HeroSection/>
      {/* Sección de Programas */}
      <ProgramCarousel />

      {/* Sección de Funcionalidades del Sistema */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-6">Funcionalidades del Sistema</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Herramientas completas para la gestión integral de programas de posgrado
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📊",
                title: "Gestión de Expedientes",
                description: "Control completo de expedientes académicos, historial de calificaciones y seguimiento del progreso estudiantil."
              },
              {
                icon: "📅",
                title: "Planificación Académica",
                description: "Herramientas para programar cursos, asignar profesores y gestionar horarios de manera eficiente."
              },
              {
                icon: "💰",
                title: "Control Financiero",
                description: "Seguimiento de pagos, becas, y control financiero integral de estudiantes y programas."
              },
              {
                icon: "📝",
                title: "Gestión de Tesis",
                description: "Seguimiento completo del proceso de tesis desde la propuesta hasta la defensa final."
              },
              {
                icon: "📈",
                title: "Reportes y Análisis",
                description: "Generación de reportes detallados y análisis estadísticos para la toma de decisiones."
              },
              {
                icon: "🔐",
                title: "Seguridad y Permisos",
                description: "Sistema robusto de seguridad con roles y permisos personalizables para cada usuario."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl hover:border-[#A41E22] hover:-translate-y-1 transition-all duration-300 border-2 border-transparent"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#A41E22] to-[#8A1A1D] rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Proceso */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">Proceso de Admisión</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Pasos sencillos para formar parte de nuestros programas de posgrado
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#A41E22] transform -translate-x-1/2 hidden lg:block"></div>
            {[
              {
                title: "Registro en Línea",
                description: "Completa tu solicitud de admisión a través de nuestro portal web con toda la documentación requerida."
              },
              {
                title: "Evaluación Académica",
                description: "Nuestro comité académico revisa tu expediente y evalúa tu perfil según los criterios del programa."
              },
              {
                title: "Entrevista Personal",
                description: "Participa en una entrevista con directores de programa para conocer tus motivaciones y objetivos."
              },
              {
                title: "Aceptación e Inscripción",
                description: "Recibe tu carta de aceptación y completa el proceso de inscripción para comenzar tus estudios."
              }
            ].map((step, index) => (
              <div key={index} className="flex items-center mb-16 relative">
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:ml-auto'}`}>
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-white/90">{step.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#A41E22] rounded-full flex items-center justify-center text-white font-bold z-10 hidden lg:flex">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-800 mb-6">Lo que Dicen Nuestros Egresados</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Historias de éxito de quienes han transformado su carrera profesional
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "La maestría me dio las herramientas necesarias para liderar cambios significativos en mi institución. El enfoque práctico y la calidad de los profesores fueron excepcionales.",
                author: "María Rodríguez",
                position: "Directora Académica - Colegio San José",
                initials: "MR"
              },
              {
                quote: "El doctorado me permitió desarrollar investigación de alto impacto. Hoy soy referente en mi área gracias a la formación recibida y el apoyo constante del cuerpo docente.",
                author: "Dr. Juan López",
                position: "Investigador Senior - Universidad Nacional",
                initials: "JL"
              },
              {
                quote: "La modalidad virtual fue perfecta para mi situación. Pude estudiar mientras trabajaba, y la plataforma tecnológica facilitó todo el proceso de aprendizaje.",
                author: "Ana Sánchez",
                position: "Coordinadora Pedagógica - Ministerio de Educación",
                initials: "AS"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg relative">
                <div className="text-6xl text-[#A41E22] absolute top-4 left-6">"</div>
                <p className="text-gray-700 italic mb-6 pt-8">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#A41E22] to-[#8A1A1D] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección CTA */}
      <section className="py-20 bg-gradient-to-br from-[#A41E22] to-[#8A1A1D]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-white mb-6">¿Listo para Transformar tu Futuro?</h2>
          <p className="text-xl text-white/90 mb-12">
            Únete a nuestra comunidad académica y desarrolla las competencias necesarias 
            para liderar el cambio en el sector educativo.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#"
              className="inline-block bg-white text-[#A41E22] px-10 py-4 rounded-full font-semibold hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300 hover:-translate-y-1"
            >
              Solicitar Información
            </a>
            <a
              href="#"
              className="inline-block border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-[#A41E22] transition-all duration-300 hover:-translate-y-1"
            >
              Ver Programas
            </a>
          </div>
        </div>
      </section>

      {/* CSS Styles */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.2s forwards;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 1s ease-out 0.6s forwards;
        }
        
        .animate-slide-up-delay-2 {
          animation: slide-up 1s ease-out 1s forwards;
        }
        
        .animate-slide-up-delay-3 {
          animation: slide-up 1s ease-out 1.4s forwards;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </>
  );
};

export default HomeStudent;