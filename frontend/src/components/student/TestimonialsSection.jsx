import React from 'react';
import { testimonials } from '../../data/mockData';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-6">Lo que Dicen Nuestros Egresados</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Historias de éxito de quienes han transformado su carrera profesional
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg relative hover:shadow-xl transition-shadow duration-300">
              {/* Comilla decorativa */}
              <div className="text-6xl text-[#A41E22] absolute top-4 left-6 font-serif">"</div>
              
              {/* Testimonio */}
              <p className="text-gray-700 italic mb-6 pt-8 leading-relaxed">
                {testimonial.quote}
              </p>
              
              {/* Información del autor */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#A41E22] to-[#8A1A1D] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {testimonial.initials}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-xs text-[#A41E22] font-medium mt-1">
                    {testimonial.program} • {testimonial.year}
                  </p>
                </div>
              </div>
              
              {/* Estrellas decorativas */}
              <div className="absolute top-4 right-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Estadísticas de satisfacción */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#A41E22] mb-2">98%</div>
              <div className="text-gray-600">Satisfacción de Egresados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#A41E22] mb-2">500+</div>
              <div className="text-gray-600">Profesionales Titulados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#A41E22] mb-2">15+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;