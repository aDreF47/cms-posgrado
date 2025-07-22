import { useState, useEffect, useRef } from "react";

// Datos del carrusel con diferentes slides académicos
const heroSlides = [
  {
    id: 1,
    title: "Posgrado de",
    subtitle: "Educación",
    description:
      "La mayor felicidad de un docente es el reconocimiento que le brindan sus estudiantes y la huella que dejas en ellos.",
    backgroundImage:
      "https://elcomercio-diariocorreo-prod.web.arc-cdn.net/resizer/v2/GFHCCM5GE5CNRHIPQLK5EQ5PJE.jpg?auth=7f5cb4b5bd661025807b4deab4a9e88919d54b6b6a04fa2f6cf722818268dec2&width=1200&height=800&smart=true&quality=75",
    accent: "Educación",
    buttonText: "Descubre Más",
  },
  {
    id: 2,
    title: "Maestría en",
    subtitle: "Investigación",
    description:
      "Forma parte de la nueva generación de investigadores que transformarán el futuro de la educación superior.",
    backgroundImage:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    accent: "Investigación",
    buttonText: "Conoce Más",
  },
  {
    id: 3,
    title: "Doctorado en",
    subtitle: "Ciencias",
    description:
      "Alcanza la excelencia académica y contribuye al desarrollo científico de nuestro país y la región.",
    backgroundImage:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    accent: "Ciencias",
    buttonText: "Explora Más",
  },
  {
    id: 4,
    title: "Especialización en",
    subtitle: "Pedagogía",
    description:
      "Desarrolla competencias pedagógicas avanzadas para liderar procesos de innovación educativa.",
    backgroundImage:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    accent: "Pedagogía",
    buttonText: "Descubre Más",
  },
];

function AcademicHeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const intervalRef = useRef(null);

  // Auto-play del carrusel
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 20000); // Cambia cada 5 segundos
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  // Efecto parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <>
      {/* CSS personalizado para animaciones académicas */}
      <style jsx>{`
        @keyframes academicFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }

        @keyframes bookFlip {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(180deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        @keyframes graduationCap {
          0%,
          100% {
            transform: translateY(0px) rotate(-5deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(100px) translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px) translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmerText {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .academic-float {
          animation: academicFloat 6s ease-in-out infinite;
        }

        .book-flip {
          animation: bookFlip 8s linear infinite;
        }

        .graduation-cap {
          animation: graduationCap 4s ease-in-out infinite;
        }

        .slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }

        .slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
        }

        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .shimmer-text {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmerText 3s infinite;
        }

        .text-shadow-strong {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7),
            0 0 20px rgba(0, 0, 0, 0.5);
        }

        .backdrop-blur-strong {
          backdrop-filter: blur(12px) saturate(180%);
          background: rgba(0, 0, 0, 0.3);
        }

        .slide-transition {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      {/* Hero Section Principal */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Backgrounds con transición */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${slide.backgroundImage}')`,
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
        ))}

        {/* Elementos decorativos académicos flotantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Libros flotantes */}
          <div className="absolute top-20 left-10 text-white/10 academic-float">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </svg>
          </div>

          {/* Birrete graduación */}
          <div className="absolute top-40 right-20 text-white/10 graduation-cap">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
            </svg>
          </div>

          {/* Átomo */}
          <div className="absolute bottom-40 left-20 text-white/10 book-flip">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="2" />
              <path d="m20.2 8.63.03.04c.83 1.06.83 2.6 0 3.66-.83 1.06-2.18 1.06-3.01 0-.82-1.06-.82-2.6 0-3.66.84-1.06 2.19-1.06 3.01 0z" />
            </svg>
          </div>

          {/* Partículas flotantes */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full academic-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Lado izquierdo - Espacio para imagen/contenido visual */}
              <div className="hidden lg:block">
                {/* Aquí puedes agregar elementos visuales adicionales si deseas */}
              </div>

              {/* Lado derecho - Texto y contenido */}
              <div className="lg:text-left text-center select-none">
                {heroSlides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`transition-all duration-800 ${
                      index === currentSlide
                        ? "opacity-100 transform translate-x-0"
                        : "opacity-0 transform translate-x-10 absolute"
                    }`}
                  >
                    {/* Título principal */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6 text-shadow-strong">
                      <span className="inline-block slide-in-right">
                        {slide.title}
                      </span>
                      <br />
                      <span className="font-bold text-white inline-block slide-in-left">
                        {slide.subtitle}
                      </span>
                    </h1>

                    {/* Descripción */}
                    <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl leading-relaxed font-light fade-in-up text-shadow-strong">
                      {slide.description}
                    </p>

                    {/* Botón CTA */}
                    <div
                      className="fade-in-up "
                      style={{ animationDelay: "0.5s" }}
                    >
                      <button className="group relative inline-flex items-center gap-3 bg-[#A41E22] text-white px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-500 hover:bg-[#8A1A1D] hover:-translate-y-2 hover:scale-105 transform-gpu overflow-hidden group-hover:animate-pulse cursor-pointer">
                        {/* Efecto de onda al hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#A41E22] to-[#8A1A1D] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Texto del botón */}
                        <span className="relative z-10 transition-transform duration-300 ">
                          {slide.buttonText}
                        </span>

                        {/* Ícono flecha */}
                        <svg
                          className="relative z-10 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>

                        {/* Efecto ripple */}
                        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 group-hover:animate-ping bg-white transition-opacity duration-300" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Controles del carrusel */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center space-x-6">
            {/* Botón anterior */}
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <svg
                className="w-5 h-5"
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

            {/* Indicadores de puntos */}
            <div className="flex space-x-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>

            {/* Botón siguiente */}
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <svg
                className="w-5 h-5"
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

            {/* Botón play/pause */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              {isPlaying ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-1a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div
          className="absolute bottom-8 right-8 z-20 fade-in-up"
          style={{ animationDelay: "1s" }}
        >
          <div className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 ">
            <span className="text-sm mb-2 font-light tracking-wide select-none">
              Explorar
            </span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full relative overflow-hidden hover:border-white transition-colors duration-300">
              <div className="w-1 h-3 bg-white/70 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Barra de progreso */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <div className="h-1 bg-white/20">
            <div
              className="h-full bg-[#A41E22] transition-all duration-100 ease-linear"
              style={{
                width: `${((currentSlide + 1) / heroSlides.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AcademicHeroCarousel;
