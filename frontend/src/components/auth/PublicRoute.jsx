import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import LoadingSpinner from '../layout/LoadingSpinner';

const PublicRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // Solo mostrar loading si:
  // 1. Está cargando
  // 2. Y NO está en la página de login (para evitar doble loading)
  if (loading && location.pathname !== '/login') {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <LoadingSpinner size="lg" message="Verificando sesión..." />
      </div>
    );
  }

  // Si ya está autenticado, redirigir al home
  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  // Mostrar página pública (login)
  return <Outlet />;
};

export default PublicRoute;