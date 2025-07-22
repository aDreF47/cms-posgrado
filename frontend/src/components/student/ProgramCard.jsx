const ProgramCard = ({ programa }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
      {/* Header con imagen */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={programa.imagen} 
          alt={programa.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            // Fallback si la imagen no carga
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div 
          className="w-full h-full bg-gradient-to-br from-[#A41E22] to-[#8A1A1D] items-center justify-center text-6xl text-white"
          style={{ display: 'none' }}
        >
          {programa.icon}
        </div>
        
        {/* Badge de vacantes */}
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-xs font-semibold text-[#A41E22]">
            {programa.vacantes} vacantes
          </span>
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#A41E22] transition-colors duration-300">
          {programa.name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
          {programa.description}
        </p>
        
        {/* Detalles */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-gray-700">
            <span className="mr-2">⏱️</span>
            <span><strong>Duración:</strong> {programa.duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <span className="mr-2">📍</span>
            <span><strong>Modalidad:</strong> {programa.modalidad}</span>
          </div>
        </div>
        
        {/* Botón CTA */}
        <button className="w-full bg-[#A41E22] text-white py-3 rounded-lg hover:bg-[#8A1A1D] hover:-translate-y-1 transition-all duration-300 font-semibold group-hover:shadow-lg">
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;