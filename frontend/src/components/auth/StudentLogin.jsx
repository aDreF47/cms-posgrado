import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth.jsx'
import LoadingSpinner from '../layout/LoadingSpinner.jsx'

const StudentLogin = ({ onClose }) => {
  const { studentLogin, loading, error, clearError } = useAuth()
  const [accessCode, setAccessCode] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!accessCode.trim()) return

    const result = await studentLogin(accessCode)
    if (result.success) {
      onClose()
    }
  }

  const handleInputChange = (e) => {
    setAccessCode(e.target.value)
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
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">👨‍🎓</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Acceso Estudiantes</h2>
          <p className="text-gray-600 mt-2">Ingresa tu código de acceso</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="accessCode" className="block text-sm font-medium text-gray-700 mb-2">
              Código de Acceso
            </label>
            <input
              type="text"
              id="accessCode"
              value={accessCode}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Ej: POSGRADO2025"
              disabled={loading}
              autoFocus
            />
          </div>

          {/* Error message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-700 text-sm">⚠️ {error}</p>
            </div>
          )}

          {/* Demo info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-blue-800 text-sm">
              💡 <strong>Para la demo:</strong> Usa el código <code className="bg-blue-200 px-1 rounded">POSGRADO2025</code>
            </p>
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
              disabled={loading || !accessCode.trim()}
            >
              {loading ? (
                <LoadingSpinner size="sm" />
              ) : (
                'Ingresar'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default StudentLogin