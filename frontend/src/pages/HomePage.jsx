const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 fade-in">
            🎓 Portal de Posgrado
            <br />
            <span className="text-blue-300">Facultad de Educación</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sistema de información académica para estudiantes y administradores 
            de posgrado de la Universidad Nacional Mayor de San Marcos.
          </p>
          
          <div className="text-lg mb-8">
            <p className="mb-2">🎯 <strong>Para Estudiantes:</strong> Accede con tu código de posgrado</p>
            <p>⚙️ <strong>Para Administradores:</strong> Gestiona contenido del portal</p>
          </div>
          
          {/* Los botones de login ya están en el Header */}
          <div className="mt-8">
            <p className="text-blue-200">
              👆 Usa los botones del menú superior para iniciar sesión
            </p>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            📋 Información Disponible
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 text-center hover:shadow-xl transition">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-2">Trámites</h3>
              <p className="text-gray-600">
                Procesos de matrícula, obtención de grados y certificados académicos
              </p>
            </div>
            
            <div className="card p-6 text-center hover:shadow-xl transition">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Tarifarios</h3>
              <p className="text-gray-600">
                Costos actualizados de matrículas, derechos y servicios académicos
              </p>
            </div>
            
            <div className="card p-6 text-center hover:shadow-xl transition">
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-semibold mb-2">Plana Docente</h3>
              <p className="text-gray-600">
                Información de profesores, especialidades y contacto académico
              </p>
            </div>
            
            <div className="card p-6 text-center hover:shadow-xl transition">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-2">Calendario</h3>
              <p className="text-gray-600">
                Fechas importantes, períodos académicos y cronograma de actividades
              </p>
            </div>
            
            <div className="card p-6 text-center hover:shadow-xl transition">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-2">Cómo sacar grado</h3>
              <p className="text-gray-600">
                Procedimientos detallados para obtención de grados académicos
              </p>
            </div>
            
            <div className="card p-6 text-center hover:shadow-xl transition">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold mb-2">Nosotros</h3>
              <p className="text-gray-600">
                Información institucional de la Facultad de Educación
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Demo Info */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            🚀 Demo del Sistema
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3">
                👨‍🎓 Para probar como Estudiante:
              </h4>
              <p className="text-blue-700 mb-2">
                Código de acceso: <code className="bg-blue-200 px-2 py-1 rounded">POSGRADO2025</code>
              </p>
              <p className="text-sm text-blue-600">
                Acceso de solo lectura a toda la información académica
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-3">
                ⚙️ Para probar como Administrador:
              </h4>
              <p className="text-purple-700 mb-1">
                Usuario: <code className="bg-purple-200 px-2 py-1 rounded">admin</code>
              </p>
              <p className="text-purple-700 mb-2">
                Contraseña: <code className="bg-purple-200 px-2 py-1 rounded">admin123</code>
              </p>
              <p className="text-sm text-purple-600">
                Panel completo de administración y edición de contenido
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage