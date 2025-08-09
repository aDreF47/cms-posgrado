import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Header from './Header';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';

const Layout = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <LoadingSpinner size="xl" message="Cargando portal..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet /> {/* Aquí se renderizan las páginas */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;