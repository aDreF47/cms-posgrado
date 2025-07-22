import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // ← Usar tu AuthContext
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import universidadLogo from "../../assets/logo-upg.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Usar tu AuthContext
  const { isAuthenticated, userType, user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
    setMenuOpen(false);
  };

  // Si no está autenticado, no mostrar el header (ya que está en página de login)
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
      className="h-16 w-16 rounded-full object-cover bg-white p-1"
    />
    <span className="text-3xl font-bold ml-3">Posgrado</span>
  </Link>
</div>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          {/* Redes sociales */}
          <div className="flex gap-4 text-xl">
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

          {/* Secciones */}
          <nav className="hidden md:flex gap-6 items-center select-none font-bold">
            <Link to="/home" className="hover:text-gray-300 transition-colors">
              Inicio
            </Link>

            {/* Solo mostrar links de estudiante si es estudiante */}
            {userType === "student" && (
              <>
                <Link
                  to="/matricula"
                  className="hover:text-gray-300 transition-colors"
                >
                  Matrícula
                </Link>
                <Link
                  to="/tramites"
                  className="hover:text-gray-300 transition-colors"
                >
                  Trámites Académicos
                </Link>
              </>
            )}

            {/* Logo en el centro */}
            <div className="flex items-center gap-3 px-6 cursor-pointer">
              <Link
                to="/home"
                className="flex items-center gap-3 px-6 cursor-pointer hover:text-gray-300 transition-colors"
              >
                <img
                  src={universidadLogo}
                  alt="Logo"
                  className="h-16 w-16 rounded-full object-cover bg-white p-1"
                />
              </Link>
            </div>

            {userType === "student" && (
              <>
                <Link
                  to="/guias"
                  className="hover:text-gray-300 transition-colors"
                >
                  Guías de Grados
                </Link>
                <Link
                  to="/tarifario"
                  className="hover:text-gray-300 transition-colors"
                >
                  Tarifario
                </Link>
                <Link
                  to="/docentes"
                  className="hover:text-gray-300 transition-colors"
                >
                  Docentes
                </Link>
              </>
            )}
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
              onClick={() => setMenuOpen(!menuOpen)}
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
        <div className="p-6 flex flex-col gap-6 overflow-y-auto h-full">
          <Link
            to="/home"
            onClick={() => setMenuOpen(false)}
            className="flex justify-between items-center text-lg font-medium hover:text-gray-300 transition-colors"
          >
            Inicio <span className="text-lg">+</span>
          </Link>

          {userType === "student" && (
            <>
              <Link
                to="/matricula"
                onClick={() => setMenuOpen(false)}
                className="flex justify-between items-center text-lg font-medium hover:text-gray-300 transition-colors"
              >
                Matrícula <span className="text-lg">+</span>
              </Link>
              <Link
                to="/tramites"
                onClick={() => setMenuOpen(false)}
                className="flex justify-between items-center text-lg font-medium hover:text-gray-300 transition-colors"
              >
                Trámites Académicos <span className="text-lg">+</span>
              </Link>
              <Link
                to="/guias"
                onClick={() => setMenuOpen(false)}
                className="flex justify-between items-center text-lg font-medium hover:text-gray-300 transition-colors"
              >
                Guías de Grados <span className="text-lg">+</span>
              </Link>
              <Link
                to="/tarifario"
                onClick={() => setMenuOpen(false)}
                className="flex justify-between items-center text-lg font-medium hover:text-gray-300 transition-colors"
              >
                Tarifario <span className="text-lg">+</span>
              </Link>
              <Link
                to="/docentes"
                onClick={() => setMenuOpen(false)}
                className="flex justify-between items-center text-lg font-medium hover:text-gray-300 transition-colors"
              >
                Docentes <span className="text-lg">+</span>
              </Link>
            </>
          )}

          <div className="mt-auto">
            {/* <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 text-black w-full mb-4">
              <input 
                type="text" 
                placeholder="Buscar información..." 
                className="flex-1 outline-none text-sm" 
              />
            </div> */}

            {/* Logout en mobile */}
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm transition"
            >
              👤{" "}
              {userType === "admin" ? user?.username || "Admin" : "Estudiante"}{" "}
              - Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
