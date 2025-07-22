import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const StudentLoginPage = () => {
  const { studentLogin, loading, error, clearError, isAuthenticated } = useAuth();
  const [accessCode, setAccessCode] = useState('');
  const navigate = useNavigate();

  // Redirigir si ya está autenticado
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!accessCode.trim()) return;

    const result = await studentLogin(accessCode);
    if (result.success) {
      navigate('/home');
    }
  };

  const handleInputChange = (e) => {
    setAccessCode(e.target.value);
    if (error) clearError();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#880E1F] to-red-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-8 shadow-2xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">🎓</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Portal Estudiante</h1>
          <p className="text-gray-600">Ingresa tu código de acceso</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="accessCode" className="block text-sm font-semibold text-gray-700 mb-2">
              Código de Acceso
            </label>
            <input
              type="text"
              id="accessCode"
              value={accessCode}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#880E1F] focus:border-transparent outline-none transition"
              placeholder="Ingresa tu código"
              disabled={loading}
              autoFocus
            />
          </div>

          {/* Error message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700 text-sm font-medium">⚠️ {error}</p>
            </div>
          )}

          {/* Demo info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              💡 <strong>Demo:</strong> Código <code className="bg-blue-200 px-2 py-1 rounded text-xs">POSGRADO2025</code>
            </p>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-[#880E1F] hover:bg-red-800 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 disabled:opacity-50"
            disabled={loading || !accessCode.trim()}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Verificando...
              </div>
            ) : (
              'Ingresar al Portal'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            ¿Eres administrador? 
            <button 
              onClick={() => navigate('/admin/login')}
              className="text-[#880E1F] hover:underline ml-1 font-medium"
            >
              Ingresa aquí
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentLoginPage;