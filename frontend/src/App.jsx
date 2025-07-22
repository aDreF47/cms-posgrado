import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/layout/Header';

// Páginas básicas
const HomePage = () => (
  <div className="pt-24 pb-8">
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-[#880E1F]">🏠 Portal de Estudiantes</h1>
      <p className="mt-4">Bienvenido al portal de posgrado</p>
    </div>
  </div>
);

const LoginPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#880E1F]">
    <div className="bg-white p-8 rounded-lg">
      <h2>Login de Estudiantes</h2>
      <p>Aquí irá el formulario</p>
    </div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;