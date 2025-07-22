import { useAuth } from '../../context/AuthContext';

const LogoutButton = ({ isAdmin }) => {
  const { logout, isAuthenticated, userType } = useAuth();

  if (!isAuthenticated) return null;

  const handleLogout = async () => {
    await logout();
    window.location.href = '/login';
  };

  return (
    <button 
      onClick={handleLogout}
      className="text-white hover:text-gray-300 transition-colors text-sm"
    >
      {userType === 'admin' ? '⚙️ Salir Admin' : '👤 Salir'}
    </button>
  );
};

export default LogoutButton;