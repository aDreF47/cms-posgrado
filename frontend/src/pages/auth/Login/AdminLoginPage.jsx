import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const AdminLoginPage = () => {
  const { adminLogin, loading, error, clearError, isAuthenticated, userType } = useAuth();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(userType === 'admin' ? '/admin' : '/home');
    }
  }, [isAuthenticated, userType, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await adminLogin(formData.username, formData.password);
    if (result.success) {
      navigate('/admin');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) clearError();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#880E1F] to-red-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">⚙️</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Panel Administrativo</h1>
          <p className="text-gray-600">Ingresa tus credenciales</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Usuario</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#880E1F] focus:border-transparent outline-none transition"
              placeholder="Nombre de usuario"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#880E1F] focus:border-transparent outline-none transition"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700 text-sm font-medium">⚠️ {error}</p>
            </div>
          )}

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-sm">
            <p className="font-semibold text-purple-800 mb-2">💡 Credenciales demo:</p>
            <p className="text-purple-700">👤 <code className="bg-purple-200 px-1 rounded">admin</code> / <code className="bg-purple-200 px-1 rounded">admin123</code></p>
          </div>

          <button
            type="submit"
            className="w-full bg-[#880E1F] hover:bg-red-800 text-white font-semibold py-3 rounded-lg transition"
            disabled={loading}
          >
            {loading ? 'Verificando...' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={() => navigate('/login')}
            className="text-[#880E1F] hover:underline text-sm font-medium"
          >
            ← Volver al acceso estudiantes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;