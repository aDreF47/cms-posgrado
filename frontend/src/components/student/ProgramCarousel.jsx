import { useState } from "react";
import programasPosgrado from "../../data/programas";
// Datos de programas

const ProgramCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % programasPosgrado.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + programasPosgrado.length) % programasPosgrado.length
    );
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index =
        (currentIndex + i + programasPosgrado.length) %
        programasPosgrado.length;
      cards.push({
        ...programasPosgrado[index],
        position: i,
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
            Descubre nuestros programas académicos diseñados para tu crecimiento
            profesional
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Cards Container - Fixed Center Focus */}
          <div className="flex items-center justify-center relative h-[500px] overflow-hidden">
            {programasPosgrado.map((programa, index) => {
              const offset = index - currentIndex;
              const isCenter = offset === 0;
              const absOffset = Math.abs(offset);

              return (
                <div
                  key={programa.id}
                  className={`absolute transition-all duration-700 ease-out ${
                    isCenter
                      ? "w-80 h-[450px] z-20 scale-100 opacity-100"
                      : absOffset === 1
                      ? "w-64 h-[380px] z-10 scale-90 opacity-70"
                      : "w-56 h-[320px] z-0 scale-75 opacity-30"
                  }`}
                  style={{
                    transform: `translateX(${offset * 300}px)`,
                    filter: isCenter
                      ? "blur(0px)"
                      : absOffset === 1
                      ? "blur(1px)"
                      : "blur(2px)",
                  }}
                >
                  <div
                    className={`bg-white rounded-xl shadow-lg h-full overflow-hidden border transition-all duration-300 ${
                      isCenter
                        ? "shadow-2xl border-gray-200"
                        : "shadow-md border-gray-100"
                    }`}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={programa.imagen}
                        alt={programa.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div
                        className="w-full h-full bg-gradient-to-br from-[#880E1F] to-red-800 items-center justify-center text-4xl text-white absolute inset-0"
                        style={{ display: "none" }}
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
                      <h3
                        className={`font-bold text-gray-800 mb-3 leading-tight ${
                          isCenter ? "text-lg" : "text-base"
                        }`}
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {programa.name}
                      </h3>

                      <p
                        className={`text-gray-600 mb-4 flex-1 leading-relaxed ${
                          isCenter ? "text-sm" : "text-xs"
                        }`}
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: isCenter ? 4 : 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {programa.description}
                      </p>

                      {/* Details */}
                      <div className="space-y-2 mb-4">
                        <div
                          className={`flex items-center text-gray-700 ${
                            isCenter ? "text-xs" : "text-xs"
                          }`}
                        >
                          <span className="mr-2">⏱️</span>
                          <span className="font-medium">
                            {programa.duration}
                          </span>
                        </div>
                        <div
                          className={`flex items-center text-gray-700 ${
                            isCenter ? "text-xs" : "text-xs"
                          }`}
                        >
                          <span className="mr-2">📍</span>
                          <span className="font-medium">
                            {programa.modalidad}
                          </span>
                        </div>
                      </div>

                      {/* Button */}
                      <button
                        className={`w-full bg-[#880E1F] text-white rounded-lg hover:bg-red-800 transition-colors font-medium ${
                          isCenter ? "py-3 text-sm" : "py-2 text-xs"
                        }`}
                      >
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-30 group"
          >
            <svg
              className="w-5 h-5 text-gray-700 group-hover:text-[#880E1F] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-30 group"
          >
            <svg
              className="w-5 h-5 text-gray-700 group-hover:text-[#880E1F] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
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
                  ? "bg-[#880E1F] w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Ver todos
        <div className="text-center mt-10">
          <button className="border border-[#880E1F] text-[#880E1F] hover:bg-[#880E1F] hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
            Ver Todos los Programas
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ProgramCarousel;
