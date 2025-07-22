import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth.jsx'
import LoadingSpinner from '../layout/LoadingSpinner.jsx'

const AdminLogin = ({ onClose }) => {
  const { adminLogin, loading, error, clearError } = useAuth()
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.username.trim() || !formData.password.trim()) return

    const result = await adminLogin(formData.username, formData.password)
    if (result.success) {
      onClose()
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (error) clearError()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative slide-up">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">⚙️</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Panel Administrativo</h2>
          <p className="text-gray-600 mt-2">Ingresa tus credenciales</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Nombre de usuario"
              disabled={loading}
              autoFocus
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="input-field"
              placeholder="••••••••"
              disabled={loading}
            />
          </div>

          {/* Error message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-700 text-sm">⚠️ {error}</p>
            </div>
          )}

          {/* Demo info */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
            <div className="text-purple-800 text-sm space-y-1">
              <p><strong>💡 Para la demo:</strong></p>
              <p>👤 Admin: <code className="bg-purple-200 px-1 rounded">admin</code> / <code className="bg-purple-200 px-1 rounded">admin123</code></p>
              <p>👥 Colaborador: <code className="bg-purple-200 px-1 rounded">colaborador1</code> / <code className="bg-purple-200 px-1 rounded">colab123</code></p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary flex-1"
              disabled={loading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn-primary flex-1 flex items-center justify-center"
              disabled={loading || !formData.username.trim() || !formData.password.trim()}
            >
              {loading ? (
                <LoadingSpinner size="sm" />
              ) : (
                'Iniciar Sesión'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin