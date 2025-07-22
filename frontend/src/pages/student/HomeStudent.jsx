const HomeStudent = () => {
  return (
    <div className="pt-24 pb-8"> {/* Espaciado para header fixed */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#880E1F] mb-6">
            🏠 Bienvenido al Portal de Posgrado
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-semibold text-lg mb-2">Información Actualizada</h3>
              <p className="text-gray-600 text-sm">Encuentra toda la información académica actualizada para el semestre 2025-I</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold text-lg mb-2">Acceso Rápido</h3>
              <p className="text-gray-600 text-sm">Portal optimizado para dispositivos móviles y acceso desde cualquier lugar</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-semibold text-lg mb-2">Servicios Completos</h3>
              <p className="text-gray-600 text-sm">Trámites, tarifarios, información docente y mucho más</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStudent;