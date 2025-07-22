import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Layout from './components/layout/Layout';

// Páginas de login (sin layout)
import StudentLoginPage from './pages/auth/Login/StudentLoginPage';
// import AdminLoginPage from './pages/auth/Login/AdminLoginPage';

// Páginas con layout
import HomeStudent from './pages/student/HomeStudent';
import MatriculaPage from './pages/student/MatriculaPage';
import TramitesPage from './pages/student/TramitesPage';
import GuiasPage from './pages/student/GuiasPage';
import TarifarioPage from './pages/student/TarifarioPage';
import DocentesPage from './pages/student/DocentesPage';
// import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* 🔓 Rutas públicas (SIN layout) */}
          <Route path="/login" element={<StudentLoginPage />} />
          {/* <Route path="/admin/login" element={<p1>hola admin</p1> } /> */}
          
          {/* 🔒 Rutas protegidas (CON layout) */}
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              {/* 🏠 Ruta principal - Home aparece aquí */}
              <Route path="/home" element={<HomeStudent />} />
              
              {/* 👨‍🎓 Rutas de estudiantes */}
              <Route path="/matricula" element={<MatriculaPage />} />
              <Route path="/tramites" element={<TramitesPage />} />
              <Route path="/guias" element={<GuiasPage />} />
              <Route path="/tarifario" element={<TarifarioPage />} />
              <Route path="/docentes" element={<DocentesPage />} /> 
              
              {/* ⚙️ Rutas de admin */}
              {/* <Route path="/admin" element={<AdminDashboard />} /> */}
              {/* <Route path="/admin/content" element={<AdminDashboard />} />
              <Route path="/admin/users" element={<AdminDashboard />} /> */}
            </Route>
          </Route>
          
          {/* 🔄 Redirecciones */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;