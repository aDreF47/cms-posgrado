import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth.jsx'

const Header = ({ onStudentLogin, onAdminLogin }) => {
  const { isAuthenticated, userType, user, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogout = async () => {
    await logout()
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-gradient-to-r from-blue-900 to-purple-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-blue-900 font-bold text-xl">🎓</span>
            </div>
            <div>
              <h1 className="font-bold text-lg">Posgrado UNMSM</h1>
              <p className="text-xs text-blue-200">Facultad de Educación</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                {userType === 'student' && (
                  <>
                    <a href="/tramites" className="hover:text-blue-200 transition">Trámites</a>
                    <a href="/tarifarios" className="hover:text-blue-200 transition">Tarifarios</a>
                    <a href="/docentes" className="hover:text-blue-200 transition">Docentes</a>
                  </>
                )}
                
                {userType === 'admin' && (
                  <>
                    <a href="/admin" className="hover:text-blue-200 transition">Panel Admin</a>
                    <a href="/admin/content" className="hover:text-blue-200 transition">Contenido</a>
                    <a href="/admin/users" className="hover:text-blue-200 transition">Usuarios</a>
                  </>
                )}
                
                <div className="flex items-center space-x-3">
                  <span className="text-sm">
                    👤 {userType === 'admin' ? user?.fullName || user?.username : 'Estudiante'}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm transition"
                  >
                    Salir
                  </button>
                </div>
              </>
            ) : (
              <div className="flex space-x-3">
                <button
                  onClick={onStudentLogin}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
                >
                  👨‍🎓 Estudiantes
                </button>
                <button
                  onClick={onAdminLogin}
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded transition"
                >
                  ⚙️ Administración
                </button>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-800">
            {isAuthenticated ? (
              <>
                {userType === 'student' && (
                  <div className="space-y-2">
                    <a href="/tramites" className="block py-2 hover:text-blue-200">Trámites</a>
                    <a href="/tarifarios" className="block py-2 hover:text-blue-200">Tarifarios</a>
                    <a href="/docentes" className="block py-2 hover:text-blue-200">Docentes</a>
                  </div>
                )}
                
                {userType === 'admin' && (
                  <div className="space-y-2">
                    <a href="/admin" className="block py-2 hover:text-blue-200">Panel Admin</a>
                    <a href="/admin/content" className="block py-2 hover:text-blue-200">Contenido</a>
                    <a href="/admin/users" className="block py-2 hover:text-blue-200">Usuarios</a>
                  </div>
                )}
                
                <div className="pt-4 border-t border-blue-800 mt-4">
                  <p className="text-sm mb-2">
                    👤 {userType === 'admin' ? user?.fullName || user?.username : 'Estudiante'}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm w-full transition"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              </>
            ) : (
              <div className="space-y-3">
                <button
                  onClick={() => {
                    onStudentLogin()
                    setIsMenuOpen(false)
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
                >
                  👨‍🎓 Acceso Estudiantes
                </button>
                <button
                  onClick={() => {
                    onAdminLogin()
                    setIsMenuOpen(false)
                  }}
                  className="w-full bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded transition"
                >
                  ⚙️ Panel Administrativo
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header