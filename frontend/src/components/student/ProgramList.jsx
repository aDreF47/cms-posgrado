import ProgramCard from './ProgramCard';
import { programasPosgrado } from './../../data/programas';

const ProgramList = ({ limit = null, showTitle = true }) => {
  const programsToShow = limit ? programasPosgrado.slice(0, limit) : programasPosgrado;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Programas de Posgrado
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre nuestros programas de maestría y doctorado diseñados 
              para impulsar tu desarrollo profesional en el campo educativo.
            </p>
            <div className="w-24 h-1 bg-[#A41E22] mx-auto mt-6 rounded-full"></div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsToShow.map((programa) => (
            <ProgramCard key={programa.id} programa={programa} />
          ))}
        </div>

        {/* Mostrar botón "Ver más" si hay límite */}
        {limit && programasPosgrado.length > limit && (
          <div className="text-center mt-12">
            <button className="bg-[#A41E22] hover:bg-[#8A1A1D] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              Ver Todos los Programas ({programasPosgrado.length})
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgramList;