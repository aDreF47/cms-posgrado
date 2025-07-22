import { useState } from 'react';

// Datos de programas
const programasPosgrado = [
  {
    "id": 1,
    "name": "Magíster en Didáctica de la comunicación e innovación",
    "description": "Este programa de maestría profesional está diseñado para capacitar a los docentes en la didáctica de la comunicación, incorporando innovaciones pedagógicas y tecnológicas para mejorar el proceso de enseñanza-aprendizaje.",
    "duration": "1 año (2 semestres)",
    "modalidad": "Semipresencial",
    "imagen": "https://52ideasbrillantes.com/wp-content/uploads/2024/02/Vence-todos-los-retos-de-un-posgrado-1140x760.png",
    "vacantes": 50,
    "icon": "💬"
  },
  {
    "id": 2,
    "name": "Maestría Profesional en didáctica en la matemática",
    "description": "Este programa de maestría profesional se centra en la didáctica de la matemática, proporcionando herramientas y metodologías para mejorar la enseñanza y el aprendizaje de esta disciplina.",
    "duration": "1 año (2 semestres)",
    "modalidad": "Semipresencial",
    "imagen": "https://portal.andina.pe/EDPFotografia3/thumbnail/2022/03/14/000853401w.jpg",
    "vacantes": 40,
    "icon": "📐"
  },
  {
    "id": 3,
    "name": "Maestria en Educación con mención en Gestión de la Educación",
    "description": "Este programa de maestría está diseñado para formar profesionales capaces de liderar y gestionar instituciones educativas con un enfoque en la mejora continua y la innovación pedagógica.",
    "duration": "2 años (4 semestres)",
    "modalidad": "Semipresencial y presencial",
    "imagen": "https://www.minedu.gob.pe/superiorpedagogica/wp-content/uploads/2019/05/nota_instrumentos2a.png",
    "vacantes": 50,
    "icon": "🎯"
  },
  {
    "id": 4,
    "name": "Maestría en Educación con mención en Docencia Universitaria",
    "description": "Este programa de investigación está orientado a desarrollar capacidades en evaluación y mejora de la docencia universitaria, promoviendo la innovación pedagógica en contextos académicos superiores.",
    "duration": "2 años (4 semestres)",
    "modalidad": "Semipresencial y presencial",
    "imagen": "https://posgradoeducacion.unmsm.edu.pe/_next/image?url=https%3A%2F%2Funmsm-web-static-files.s3.sa-east-1.amazonaws.com%2Ffac-educacion%2Fmaestria-docencia-universitaria-minihome.png&w=640&q=75",
    "vacantes": 45,
    "icon": "🎓"
  },
  {
    "id": 5,
    "name": "Maestría en Educación con mención en Evaluación y Acreditación de la Calidad de la Educación",
    "description": "Orientada a formar expertos en evaluación institucional y acreditación de la calidad educativa, con énfasis en normativa, estándares y procesos de mejora continua.",
    "duration": "2 años (4 semestres)",
    "modalidad": "Semipresencial",
    "imagen": "https://postgrado.une.edu.pe/img/img26.jpg",
    "vacantes": 30,
    "icon": "✅"
  },
  {
    "id": 6,
    "name": "Doctorado en Educación y Docencia Universitaria",
    "description": "Este programa de doctorado está diseñado para formar investigadores y académicos en el campo de la educación y la docencia universitaria, promoviendo la investigación aplicada y la innovación pedagógica.",
    "duration": "3 años (6 semestres)",
    "modalidad": "Presencial",
    "imagen": "https://www.semana.com/resizer/0ENqDgscxbCqE23H46tc8eMZh68=/arc-anglerfish-arc2-prod-semana/public/U4TKD3BYOFCY7EKZFL54XIE6QQ.jpg",
    "vacantes": 40,
    "icon": "🔬"
  }
];

const ProgramCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % programasPosgrado.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + programasPosgrado.length) % programasPosgrado.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + programasPosgrado.length) % programasPosgrado.length;
      cards.push({
        ...programasPosgrado[index],
        position: i
      });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Programas de Posgrado
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestros programas académicos diseñados para tu crecimiento profesional
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          
          {/* Cards Container */}
          <div className="flex items-center justify-center relative h-[500px]">
            {visibleCards.map((programa) => {
              const { position } = programa;
              const isCenter = position === 0;
              const isLeft = position === -1;
              const isRight = position === 1;

              return (
                <div
                  key={`${programa.id}-${position}`}
                  className={`absolute transition-all duration-500 ease-out ${
                    isCenter 
                      ? 'w-80 h-[450px] z-20 scale-100 opacity-100' 
                      : isLeft
                      ? 'w-64 h-[380px] z-10 scale-90 opacity-70 -translate-x-[280px]'
                      : 'w-64 h-[380px] z-10 scale-90 opacity-70 translate-x-[280px]'
                  }`}
                >
                  <div className={`bg-white rounded-xl shadow-lg h-full overflow-hidden border transition-all duration-300 ${
                    isCenter 
                      ? 'shadow-2xl border-gray-200' 
                      : 'shadow-md border-gray-100'
                  }`}>
                    
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={programa.imagen} 
                        alt={programa.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div 
                        className="w-full h-full bg-gradient-to-br from-[#880E1F] to-red-800 items-center justify-center text-4xl text-white absolute inset-0"
                        style={{ display: 'none' }}
                      >
                        {programa.icon}
                      </div>
                      
                      {/* Vacantes badge */}
                      <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full text-xs font-semibold text-[#880E1F]">
                        {programa.vacantes} vacantes
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 h-[calc(100%-192px)] flex flex-col">
                      <h3 className={`font-bold text-gray-800 mb-3 leading-tight ${
                        isCenter ? 'text-lg' : 'text-base'
                      }`} style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {programa.name}
                      </h3>
                      
                      <p className={`text-gray-600 mb-4 flex-1 leading-relaxed ${
                        isCenter ? 'text-sm' : 'text-xs'
                      }`} style={{
                        display: '-webkit-box',
                        WebkitLineClamp: isCenter ? 4 : 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {programa.description}
                      </p>
                      
                      {/* Details */}
                      <div className="space-y-2 mb-4">
                        <div className={`flex items-center text-gray-700 ${isCenter ? 'text-xs' : 'text-xs'}`}>
                          <span className="mr-2">⏱️</span>
                          <span className="font-medium">{programa.duration}</span>
                        </div>
                        <div className={`flex items-center text-gray-700 ${isCenter ? 'text-xs' : 'text-xs'}`}>
                          <span className="mr-2">📍</span>
                          <span className="font-medium">{programa.modalidad}</span>
                        </div>
                      </div>
                      
                      {/* Button */}
                      <button className={`w-full bg-[#880E1F] text-white rounded-lg hover:bg-red-800 transition-colors font-medium ${
                        isCenter ? 'py-3 text-sm' : 'py-2 text-xs'
                      }`}>
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Background cards hint */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Left background hint */}
            <div className="absolute -left-[360px] w-56 h-[320px] bg-gray-100 rounded-xl opacity-30 scale-85 z-0"></div>
            {/* Right background hint */}
            <div className="absolute -right-[360px] w-56 h-[320px] bg-gray-100 rounded-xl opacity-30 scale-85 z-0"></div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-30 group"
          >
            <svg className="w-5 h-5 text-gray-700 group-hover:text-[#880E1F] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-30 group"
          >
            <svg className="w-5 h-5 text-gray-700 group-hover:text-[#880E1F] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {programasPosgrado.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#880E1F] w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Ver todos */}
        <div className="text-center mt-10">
          <button className="border border-[#880E1F] text-[#880E1F] hover:bg-[#880E1F] hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
            Ver Todos los Programas
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramCarousel;