const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Info institucional */}
          <div>
            <h3 className="font-bold text-lg mb-3">📍 Ubicación</h3>
            <p className="text-gray-300 text-sm">
              Universidad Nacional Mayor de San Marcos<br />
              Facultad de Educación - Posgrado<br />
              Lima, Perú
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-3">🔗 Enlaces</h3>
            <div className="space-y-2 text-sm">
              <a href="https://unmsm.edu.pe" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-blue-300 transition block">
                Página Principal UNMSM
              </a>
              <a href="https://posgradounmsm.edu.pe" target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-blue-300 transition block">
                Portal Posgrado
              </a>
              <a href="/calendario" className="text-gray-300 hover:text-blue-300 transition block">
                Calendario Académico
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-3">📧 Contacto</h3>
            <div className="text-gray-300 text-sm space-y-1">
              <p>📞 Central: (01) 619-7000</p>
              <p>✉️ posgrado.educacion@unmsm.edu.pe</p>
              <p className="text-xs pt-2 text-gray-400">
                Portal desarrollado para estudiantes de posgrado
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-6 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 UNMSM - Facultad de Educación. Portal de Posgrado - Semestre {new Date().getFullYear()}-I
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer