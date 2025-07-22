import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../../context/AuthContext';

// Imágenes temporales - cambiar después por las reales
import universidadLogo from "../../../assets/universidad-logo.png";
import backgroundImage from "../../../assets/background.webp";

function StudentLoginPage() {
  const [accessCode, setAccessCode] = useState("");
  const { studentLogin, loading, error, isAuthenticated, userType, clearError } = useAuth(); // ← Agregar clearError
  const navigate = useNavigate();

  // Redireccionar si ya está autenticado
  useEffect(() => {
    if (isAuthenticated && userType === 'student') {
      navigate('/home');
    }
  }, [isAuthenticated, userType, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!accessCode.trim()) return;

    try {
      const result = await studentLogin(accessCode);
      if (result.success) {
        navigate("/home");
      }
    } catch (err) {
      // El error ya se maneja en el contexto
      console.error('Login error:', err);
    }
  };

  const handleInputChange = (e) => {
    setAccessCode(e.target.value);
    // Limpiar error cuando el usuario empiece a escribir
    if (error) {
      clearError();
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="backdrop-blur-lg bg-gray-100 bg-opacity-70 p-10 rounded-3xl shadow-xl w-full max-w-md">
        <div className="text-center mb-8">
          <img
            src={universidadLogo}
            alt="Universidad Logo"
            className="h-24 mx-auto mb-6 rounded-full border-4 border-blue-500"
            onError={(e) => {
              // Fallback si la imagen no carga
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div 
            className="h-24 w-24 mx-auto mb-6 rounded-full border-4 border-blue-500 bg-[#880E1F] items-center justify-center text-4xl"
            style={{ display: 'none' }}
          >
            🎓
          </div>
          
          <h2 className="text-3xl font-extrabold text-gray-800">
            Portal Informativo Posgrado Educación
          </h2>
          <p className="text-gray-600 mt-2">
            Ingrese el código de acceso proporcionado por la facultad
          </p>
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4 shadow-md flex items-center">
            <span className="mr-2">⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {/* Info de demo */}
        <div className=" rounded-lg p-3 mb-4">
          <p className="text-blue-800 text-sm">
            <strong>Código:</strong> <code className="bg-blue-200 px-2 py-1 rounded text-xs">POSGRADO2025</code>
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="accessCode" className="block text-gray-700 mb-2 text-sm font-medium">
              Código de Acceso
            </label>
            <input
              type="password"
              id="accessCode"
              value={accessCode}
              onChange={handleInputChange} // ← Usar la función corregida
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200"
              placeholder="Ingrese el código de acceso"
              disabled={loading}
              autoFocus
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading || !accessCode.trim()}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                <span>Verificando...</span>
              </div>
            ) : (
              'Acceder al Portal'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentLoginPage;