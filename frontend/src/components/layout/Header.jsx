import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import universidadLogo from "../../assets/logo-upg.webp";
import LogoutConfirmModal from "../modals/LogoutConfirmModal";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [socialMenuOpen, setSocialMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    admision: false,
    financiera: false,
    tramites: false,
    docentes: false
  });

  // Usar tu AuthContext
  const { isAuthenticated, userType, user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
        closeAllDropdowns();
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    const handleClickOutside = (event) => {
      // Solo cerrar dropdowns en desktop y si no está dentro del nav
      const isDesktop = window.innerWidth >= 768;
      const clickedInsideNav = event.target.closest('nav');
      const clickedInsideMobileMenu = event.target.closest('[data-mobile-menu]');
      
      if (isDesktop && !clickedInsideNav && !clickedInsideMobileMenu) {
        closeAllDropdowns();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = async () => {
    setShowLogoutModal(false);
    await logout();
    navigate("/login");
    setMenuOpen(false);
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  // Funciones para manejar dropdowns
  const toggleDropdown = (menu) => {
    setDropdownOpen(prev => ({
      ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
      [menu]: !prev[menu]
    }));
  };

  // Función específica para móvil que previene el cierre accidental
  const toggleMobileDropdown = (menu, event) => {
    event.stopPropagation();
    event.preventDefault();
    toggleDropdown(menu);
  };

  const closeAllDropdowns = () => {
    setDropdownOpen({
      admision: false,
      financiera: false,
      tramites: false,
      docentes: false
    });
  };

  // Si no está autenticado, no mostrar el header
  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 text-white transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-[#880E1F] shadow-lg backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex md:hidden justify-center items-center py-2 absolute left-0 right-0 mx-auto w-full pointer-events-none z-10">
          <Link
            to="/home"
            className="flex items-center gap-3 px-6 cursor-pointer hover:text-gray-300 transition-colors"
          >
            <img
              src={universidadLogo}
              alt="Logo"
              className="h-14 w-14 rounded-full object-cover bg-white p-1"
            />
            <span className="text-3xl font-bold ml-3">Posgrado</span>
          </Link>
        </div>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          {/* Redes sociales */}
          <div className="relative">
            {/* Desktop - mostrar todos */}
            <div className="hidden md:flex gap-4 text-xl">
              <a
                href="https://www.facebook.com/PosgradoEducacionUNMSM/?locale=es_LA"
                className="hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/PosgradoUNMSM"
                className="hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://wa.me/51965229338?text=Hola,%20necesito%20informacion."
                className="hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>

            {/* Mobile - dropdown */}
            <div className="md:hidden">
              <button
                onClick={() => setSocialMenuOpen(!socialMenuOpen)}
                className="flex items-center hover:text-gray-300 transition-colors p-2"
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    socialMenuOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {socialMenuOpen && (
                <div className="absolute top-full left-0 bg-[#880E1F] rounded-lg shadow-lg z-50">
                  <div className="flex flex-col p-2 gap-2 min-w-[140px]">
                    <a
                      href="https://www.facebook.com/PosgradoEducacionUNMSM/?locale=es_LA"
                      className="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setSocialMenuOpen(false)}
                    >
                      <FaFacebookF className="text-lg" />
                      <span className="text-sm">Facebook</span>
                    </a>
                    <a
                      href="https://x.com/PosgradoUNMSM"
                      className="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setSocialMenuOpen(false)}
                    >
                      <FaTwitter className="text-lg" />
                      <span className="text-sm">Twitter</span>
                    </a>
                    <a
                      href="https://wa.me/51965229338?text=Hola,%20necesito%20informacion."
                      className="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setSocialMenuOpen(false)}
                    >
                      <FaWhatsapp className="text-lg" />
                      <span className="text-sm">WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Secciones */}
          <nav className="hidden md:flex gap-4 items-center select-none font-bold relative">
            <Link to="/home" className="hover:text-gray-300 transition-colors">
              Inicio
            </Link>

            {/* Admisión Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('admision')}
                className="flex items-center gap-1 hover:text-gray-300 transition-colors"
              >
                Admisión
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen.admision ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen.admision && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 text-gray-800 font-normal">
                  <div className="py-2">
                    <Link to="/admision/cronograma" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                      Cronograma 2025-II
                    </Link>
                    <Link to="/admision/requisitos" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                      Requisitos de Postulación
                    </Link>
                    <Link to="/admision/inscripcion" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                      Proceso de Inscripción
                    </Link>
                    <Link to="/admision/examen" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                      Examen de Aptitud
                    </Link>
                    <Link to="/admision/resultados" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                      Resultados
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Información Financiera Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('financiera')}
                className="flex items-center gap-1 hover:text-gray-300 transition-colors"
              >
                Información Financiera
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen.financiera ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen.financiera && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 text-gray-800 font-normal">
                  <div className="py-2">
                    <Link to="/tarifarios/oficiales" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                      Tarifarios Oficiales
                    </Link>
                    <Link to="/tarifarios/pagos" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                      Formas de Pago
                    </Link>
                    <Link to="/tarifarios/becas" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                      Becas y Financiamiento
                    </Link>
                    <Link to="/tarifarios/calendario" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                      Calendario de Pagos
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Logo en el centro */}
            <div className="flex items-center gap-3 px-4 cursor-pointer">
              <Link
                to="/home"
                className="flex items-center gap-3 px-4 cursor-pointer hover:text-gray-300 transition-colors"
              >
                <img
                  src={universidadLogo}
                  alt="Logo"
                  className="h-16 w-16 rounded-full object-cover bg-white p-1"
                />
              </Link>
            </div>

            {/* Trámites Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('tramites')}
                className="flex items-center gap-1 hover:text-gray-300 transition-colors"
              >
                Trámites
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen.tramites ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen.tramites && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 text-gray-800 font-normal">
                  <div className="py-2">
                    <Link to="/tramites/matricula" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                      Proceso de Matrícula
                    </Link>
                    <Link to="/tramites/certificados" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                      Certificados y Constancias
                    </Link>
                    <Link to="/tramites/modificacion" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                      Modificación de Matrícula
                    </Link>
                    <Link to="/tramites/grado" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                      Trámites de Grado
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Plana Docente Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('docentes')}
                className="flex items-center gap-1 hover:text-gray-300 transition-colors"
              >
                Plana Docente
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen.docentes ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen.docentes && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 text-gray-800 font-normal">
                  <div className="py-2">
                    <Link to="/docentes/directorio" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                      Directorio de Profesores
                    </Link>
                    <Link to="/docentes/investigacion" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                      Líneas de Investigación
                    </Link>
                    <Link to="/docentes/perfiles" className="block px-4 py-2 hover:bg-gray-100 transition-colors">
                      Perfiles Académicos
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/contacto" className="hover:text-gray-300 transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Usuario logueado y logout */}
          <div className="flex items-center gap-4 text-sm">
            <div className="hidden xl:flex items-center gap-2">
              <span className="text-sm">
                👤{" "}
                {userType === "admin"
                  ? user?.username || "Admin"
                  : "Estudiante"}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-4 py-1.5 rounded-full shadow-md transition-all duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
                  />
                </svg>
                Cerrar Sesión
              </button>
            </div>
            {/* Botón hamburguesa en mobile */}
            <button
              className={`flex flex-col justify-center items-center w-10 h-10 transition-all duration-300 md:hidden ${
                menuOpen ? "gap-0" : "gap-1.5"
              }`}
              onClick={() => {
                setMenuOpen(!menuOpen);
                setSocialMenuOpen(false);
                closeAllDropdowns();
              }}
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                  menuOpen ? "rotate-45 translate-y-0.5" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-0.5" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil */}
      <div
        className={`md:hidden fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] text-white z-40 transition-all duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } ${
          isScrolled
            ? "bg-[#880E1F]"
            : "bg-[#880E1F] bg-opacity-95 backdrop-blur-md"
        }`}
      >
        <div className="p-6 flex flex-col gap-4 overflow-y-auto h-full" data-mobile-menu>
          <Link
            to="/home"
            onClick={() => setMenuOpen(false)}
            className="flex justify-between items-center text-lg font-medium hover:text-gray-300 transition-colors"
          >
            Inicio <span className="text-lg">🏠</span>
          </Link>

          {/* Admisión Mobile Submenu */}
          <div>
            <button
              onClick={(e) => toggleMobileDropdown('admision', e)}
              className="w-full flex justify-between items-center text-lg font-medium hover:text-gray-300 transition-colors"
            >
              Admisión 
              <svg className={`w-5 h-5 transition-transform ${dropdownOpen.admision ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen.admision && (
              <div className="mt-2 ml-4 space-y-2">
                <Link to="/admision/cronograma" onClick={() => setMenuOpen(false)} className="block text-base text-gray-300 hover:text-white transition-colors py-1">
                  📅 Cronograma 2025-II
                </Link>
                <Link to="/admision/requisitos" onClick={() => setMenuOpen(false)} className="block text-base text-gray-300 hover:text-white transition-colors py-1">
                  📋 Requisitos de Postulación
                </Link>
                <Link to="/admision/inscripcion" onClick={() => setMenuOpen(false)} className="block text-base text-gray-300 hover:text-white transition-colors py-1">
                  ✍️ Proceso de Inscripción
                </Link>
                <Link to="/admision/examen" onClick={() => setMenuOpen(false)} className="block text-base text-gray-300 hover:text-white transition-colors py-1">
                  📝 Examen de Aptitud
                </Link>
                <Link to="/admision/resultados" onClick={() => setMenuOpen(false)} className="block text-base text-gray-300 hover:text-white transition-colors py-1">
                  🏆 Resultados
                </Link>
              </div>
            )}
          </div>

          {/* Información Financiera Mobile Submenu */}
          <div>
            <button
              onClick={(e) => toggleMobileDropdown('financiera', e)}
              className="w-full flex justify-between items-center text-lg font-medium hover:text-gray-300 transition-colors"
            >
              Información Financiera
              <svg className={`w-5 h-5 transition-transform ${dropdownOpen.financiera ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen.financiera && (
              <div className="mt-2 ml-4 space-y-2">
                <Link to="/tarifarios/oficiales" onClick={() => setMenuOpen(false)} className="block text-base text-gray-300 hover:text-white transition-colors py-1">
                  💰 Tarifarios Oficiales
                </Link>
                <Link to="/tarifarios/pagos" onClick={() => setMenuOpen(false)} className="block text-base text-gray-300 hover:text-white transition-colors py-1">
                  💳 Formas de Pago
                </Link>
                <Link to="/tarifarios/becas" onClick={() => setMenuOpen(false)} className="block text-base text-gray-300 hover:text-white transition-colors py-1">
                  🎓 Becas y Financiamiento
                </Link>
                <Link to="/tarifarios/calendario" onClick={() => setMenuOpen(false)} className="block text-base text-gray-300 hover:text-white transition-colors py-1">
                  📅 Calendario de Pagos
                </Link>
              </div>
            )}
          </div>

          {/* Trámites Mobile Submenu */}
          <div>
            <button
              onClick={(e) => toggleMobileDropdown('tramites', e)}
              className="w-full flex justify-between items-center text-lg font-medium hover:text-gray-300 transition-colors"
            >
              Trámites
              <svg className={`w-5 h-5 transition-transform ${dropdownOpen.tramites ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen.tramites && (
              <div className="mt-2 ml-4 space-y-2">
                <Link to="/tramites/matricula" onClick={() => setMenuOpen(false)} className="block text-base text-gray-300 hover:text-white transition-colors py-1">
                  🎓 Proceso de Matrícula
                </Link>
                <Link to="/tramites/certificados" onClick={() => setMenuOpen(false)} className="block text-base text-gray-300 hover:text-white transition-colors py-1">
                  📜 Certificados y Constancias
                </Link>
                <Link to="/tramites/modificacion" onClick={() => setMenuOpen(false)} className="block text-base text-gray-300 hover:text-white transition-colors py-1">
                  ✏️ Modificación de Matrícula
                </Link>
                <Link to="/tramites/grado" onClick={() => setMenuOpen(false)} className="block text-base text-gray-300 hover:text-white transition-colors py-1">
                  🏆 Trámites de Grado
                </Link>
              </div>
            )}
          </div>

          {/* Plana Docente Mobile Submenu */}
          <div>
            <button
              onClick={(e) => toggleMobileDropdown('docentes', e)}
              className="w-full flex justify-between items-center text-lg font-medium hover:text-gray-300 transition-colors"
            >
              Plana Docente
              <svg className={`w-5 h-5 transition-transform ${dropdownOpen.docentes ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen.docentes && (
              <div className="mt-2 ml-4 space-y-2">
                <Link to="/docentes/directorio" onClick={() => setMenuOpen(false)} className="block text-base text-gray-300 hover:text-white transition-colors py-1">
                  👨‍🏫 Directorio de Profesores
                </Link>
                <Link to="/docentes/investigacion" onClick={() => setMenuOpen(false)} className="block text-base text-gray-300 hover:text-white transition-colors py-1">
                  🔬 Líneas de Investigación
                </Link>
                <Link to="/docentes/perfiles" onClick={() => setMenuOpen(false)} className="block text-base text-gray-300 hover:text-white transition-colors py-1">
                  📊 Perfiles Académicos
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contacto"
            onClick={() => setMenuOpen(false)}
            className="flex justify-between items-center text-lg font-medium hover:text-gray-300 transition-colors"
          >
            Contacto <span className="text-lg">📞</span>
          </Link>

          {/* Separador */}
          <div className="border-t border-white/20 my-4"></div>

          {/* Logout en mobile - después de Contacto */}
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">👤</span>
              <span>
                {userType === "admin" ? user?.username || "Admin" : "Estudiante"}
              </span>
            </div>
            <span className="text-sm">Cerrar Sesión</span>
          </button>
        </div>
      </div>
      
      <LogoutConfirmModal
        isOpen={showLogoutModal}
        onConfirm={confirmLogout}
        onCancel={cancelLogout}
      />
    </>
  );
}

export default Header;