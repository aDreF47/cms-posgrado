import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState(null); // 'student' | 'admin'
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simular verificación de sesión al iniciar
  useEffect(() => {
    checkExistingSession();
  }, []);

  const checkExistingSession = async () => {
    try {
      const session = localStorage.getItem('cms_session');
      if (session) {
        const sessionData = JSON.parse(session);
        if (new Date(sessionData.expiresAt) > new Date()) {
          setIsAuthenticated(true);
          setUserType(sessionData.userType);
          setUser(sessionData.user);
        } else {
          localStorage.removeItem('cms_session');
        }
      }
    } catch (error) {
      console.error('Session check failed:', error);
      localStorage.removeItem('cms_session');
    }
    setLoading(false);
  };

  const studentLogin = async (accessCode) => {
    try {
      setError(null);
      // Simular login estudiantil
      if (accessCode === 'POSGRADO2025') {
        const session = {
          userType: 'student',
          user: { type: 'student' },
          expiresAt: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString()
        };
        
        localStorage.setItem('cms_session', JSON.stringify(session));
        setIsAuthenticated(true);
        setUserType('student');
        setUser(session.user);
        return { success: true };
      } else {
        throw new Error('Código de acceso inválido');
      }
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    }
  };

  const adminLogin = async (username, password) => {
    try {
      setError(null);
      // Simular login admin
      const validCredentials = [
        { username: 'admin', password: 'admin123', role: 'admin' },
        { username: 'colaborador1', password: 'colab123', role: 'colaborador' }
      ];
      
      const user = validCredentials.find(u => u.username === username && u.password === password);
      
      if (user) {
        const session = {
          userType: 'admin',
          user: { username: user.username, role: user.role },
          expiresAt: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString()
        };
        
        localStorage.setItem('cms_session', JSON.stringify(session));
        setIsAuthenticated(true);
        setUserType('admin');
        setUser(session.user);
        return { success: true };
      } else {
        throw new Error('Credenciales inválidas');
      }
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    localStorage.removeItem('cms_session');
    setIsAuthenticated(false);
    setUserType(null);
    setUser(null);
    setError(null);
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      userType,
      user,
      loading,
      error,
      studentLogin,
      adminLogin,
      logout,
      clearError
    }}>
      {children}
    </AuthContext.Provider>
  );
};